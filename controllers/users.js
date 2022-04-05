let Services = require('../services/users').Services
let ControllersClients = require('../controllers/clients').Controllers
let services = new Services()

class Controllers extends ControllersClients {
    constructor(nom , prenom){
        super()
        this.services = services
    }
    myFindAdmin() {
        let services = this.services
        console.log(services.findAdmin())
    }
}
module.exports = {Controllers}