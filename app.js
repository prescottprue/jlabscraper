/*
 * This requires: restler
 * To install, type 'npm install restler'
 * Tested with node.js v0.6.14
 * Kimono APIs link (you must me signed in): http://www.kimonolabs.com/apis

 */

var util = require('util');
var restclient = require('restler');
var request = require('request');
var parseString = require('xml2js').parseString;
var cheerio = require('cheerio');

var main = 'http://education.jlab.org/solquiz/index.html';
request(main, function(err, response, body){
  //var data = JSON.parse(body);
  //console.log(body);
  $ = cheerio.load(body);
  //var string = $('.choicetitle').text();
  //console.log(string);
  $('[value|="math8"]').each(function(i, text){
    $(this).attr('checked', 'true');
    console.log($(this).attr('checked'));
    
  });
  $('[href*="javascript:void(validate_form())"]').submit();
  //$ = cheerio.load(body);
  //var title = $(.choicetitle)
  //console.log(title);
  /*
  $('#pghd').each(function(){
    alert($(this).text());
    console.log($(this).text());
  });
*/
});



var problem = 'http://education.jlab.org/solquiz/question.html?13168317';
request(problem, function(err, response, body){
  //var data = JSON.parse(body);
  //console.log(body);
  $ = cheerio.load(body);
  //console.log($('#pghd'));
  /*
  $('#pghd').each(function(){
    alert($(this).text());
    console.log($(this).text());
  });
*/
});
/*
------------------------------Not Being Used---------------------------------

//Code for using rest client with google planes API

//Config
var fxml_url = 'http://flightxml.flightaware.com/json/FlightXML2/';
var username = 'YOUR_USERNAME';
var apiKey = 'YOUR_APIKEY';

//Flights at airport: KAUS
restclient.get(fxml_url + 'MetarEx', {
    username: username,
    password: apiKey,
    query: {airport: 'KAUS', howMany: 1}
}).on('success', function(result, response) {
    // util.puts(util.inspect(result, true, null));
    var entry = result.MetarExResult.metar[0];
    util.puts('The temperature at ' + entry.airport + ' is ' + entry.temp_air + 'C');
});
//List origin and aircraft type from KIAH
restclient.get(fxml_url + 'Enroute', {
    username: username,
    password: apiKey,
    query: {airport: 'KIAH', howMany: 10, filter: '', offset: 0}
}).on('success', function(result, response) {
    util.puts('Aircraft en route to KIAH:');
    //util.puts(util.inspect(result, true, null));
    var flights = result.EnrouteResult.enroute;
    for (i in flights) {
      var flight = flights[i];
      //util.puts(util.inspect(flight));
      util.puts(flight.ident + ' (' + flight.aircrafttype + ')\t' + 
          flight.originName + ' (' + flight.origin + ')');
    }
});
------------------------------Not Being Used---------------------------------
*/