let clients = require('../bd/clients').clients

class Services {
    constructor() {
        this.bd = clients
    }
    findAll() {
        let mydb = this.bd
        return  [...mydb] 
    }
    add(data) {
        let mydb = this.bd
        return  [...mydb , data] 
    }
    findbyId(id) {
        let mydb = this.bd
        for(let cible of mydb){
            if(cible.id == id){
                return cible
            }
        }   
    }
    findbyNom(nom) {
        let mydb = this.bd
        for(let cible of mydb){
            if(cible.nom == nom){
                return cible
            }
        }   
    }
}
module.exports = {Services}