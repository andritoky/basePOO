let ControllersClients = require('./controllers/clients').Controllers
let ControllersUsers = require('./controllers/users').Controllers
let clients = new ControllersClients()
let users = new ControllersUsers()

// clients.myFindById(1);
// users.myFindById(2);
// clients.myFindByAll();
// users.myFindByAll();

// users.myFindAdmin();
clients.myFindByNom("client 1");
users.myFindByNom("user 2");

clients.myAdd({
    id : 2,
    nom: "Lantonaina",
    pays: "Madagascar"
});

users.myAdd({
    id : 2,
    nom: "Lantonaina",
    admin: true
});