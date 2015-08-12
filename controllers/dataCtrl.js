var Mozscape = require('mozscape').Mozscape;

var moz = new Mozscape('mozscape-737c88c173', '398b11d709d84e88e47be269f348f0c5');


module.exports = {
  getMetrics: function(req, res) {

    console.log("I got to the controller", req.query);
    moz.urlMetrics(req.query.url, ['title', 'url', 'links', 'external_links', 'mozRank', 'subdomain_mozRank', 'page_authority', 'domain_authority'], function(err, response) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(response);
      }

      console.log("This is the res", response);
    });
  }
}