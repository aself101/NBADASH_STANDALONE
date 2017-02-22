/*
  All Routes
*/
const path = require("path");
const { boxscores, player, standings, tankathon,
  boxscoresInfo, team, news } = require('./controllers/nba_controller');

module.exports = (app) => {

  /* GETS */
  /*app.get('/', function(req, res) {
    res.sendFile('index.html');
  })*/
  app.get('/boxscores', boxscores);
  app.get('/boxscoresInfo', boxscoresInfo);
  app.get('/player', player);
  app.get('/team', team);
  app.get('/standings', standings);
  app.get('/tankathon', tankathon);
  app.get('/news', news);
  /* POSTS */


  /* UPDATES */

  /* DELETES */

}




































/* END */
