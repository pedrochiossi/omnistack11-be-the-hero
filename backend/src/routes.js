const express = require('express');
const OngController = require('./controllers/ong.controller');
const IncidentController = require('./controllers/incident.controller');
const ProfileController = require('./controllers/profile.controller');
const SessionController = require('./controllers/session.controlller');



const routes = express.Router();

routes.get('/ongs',OngController.index);
routes.get('/incidents', IncidentController.index);
routes.get('/profile',ProfileController.index);

routes.post('/sessions', SessionController.create);
routes.post('/ongs', OngController.create );
routes.post('/incidents', IncidentController.create);

module.exports = routes;