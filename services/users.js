let users = require('../bd/users').users
let SercicesClients = require('../services/clients').Services

class Services  extends SercicesClients {
    constructor() {
        super()
        this.bd = users
    }
    findAdmin(){
        let mydb = this.bd
        for(let cible of mydb){
            if(cible.admin == true) {
                return  cible
            }
        }
    }
}
module.exports = {Services}