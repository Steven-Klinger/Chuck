'use strict';

process.env.DEBUG = 'actions-on-google:*';
const App = require('actions-on-google').DialogflowApp;
const functions = require('firebase-functions');


// a. the action name from the make_name Dialogflow intent
const NAME_ACTION = 'annuaire';
// b. the parameters that are parsed from the make_name intent
const UTILISATEUR_ARGUMENT = 'utilisateur';

exports.annuaire = functions.https.onRequest((request, response) => {
  const app = new App({request, response});
  console.log('Request headers: ' + JSON.stringify(request.headers));
  console.log('Request body: ' + JSON.stringify(request.body));

// c. Retourne le numéro associé au nom
  function annuaire (app) {
    let utilisateur = app.getArgument(UTILISATEUR_ARGUMENT);
    let numero = 'Aucun numéro attribué';
    switch (utilisateur) {
      case 'Charles Boyle':
        numero = '0646741254';
      case 'Amy Santiago':
        numero = '0124585465';
      case 'Jake Peralta':
        numero = '0999999999';
      case 'Terry Jeffords':
        numero = '0845451254';

      case 'Gina Linetti':
        numero = '0456521254';
    }
    let responseToUser = {
      speech: 'Le numéro de' + utilisateur + " est : " + numero,
      text: 'Le numéro de' + utilisateur + " est : " + numero
    };
    app.tell('EH BAH NON');
  }
  // d. build an action map, which maps intent names to functions
  let actionMap = new Map();
  actionMap.set(app.StandardIntents.TEXT, annuaire);

app.handleRequest(actionMap);
});