let Services = require('../services/clients').Services
let services = new Services()

class Controllers {
    constructor(nom , prenom){
        this.services = services
    }
    myFindByAll(){
        let services = this.services
        console.log( services.findAll())
    } 
    myAdd(data){
        let services = this.services
        console.log( services.add(data))
    }
    myFindById(id){
        let services = this.services
        console.log( services.findbyId(id))
    }
    myFindByNom(nom){
        let services = this.services
        console.log( services.findbyNom(nom))
    }   
}
module.exports = {Controllers}