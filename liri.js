var request = require("request");

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var action = process.argv[2];

var dst = "https://api.twitter.com/1.1/statuses/user_timeline.json?name=NelsonChandraRR"

var spotify = new Spotify({
    id: "075c0b6758fb4d5d92b09b07b8735322",
    secret: "d1d64d6e15934c38bb17c9b2d0918613"
});

switch (action) {
    case "my-tweets":
        // request(twitterUrl+""+keys., function(error, response, body) {
        // 	  console.log(body);
        // });
        break;

    case "spotify-this-song":
    	var song =""
    	for (i=3; i<process.argv.length; i++){
    		song+=process.argv[i];
    		if (i<(process.argv.length)-1){
    			song+=" ";
    		}
    	}

        spotify.search({
            type: 'track',
            query: song,
        }, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            var artists= ""
            for (i=0; i<data.tracks.items[0].artists.length; i++){
				artists+= data.tracks.items[0].artists[i].name
            }
            console.log("Artists: "+artists);
            console.log("Song: "+data.tracks.items[0].name);
            console.log("Link: "+data.tracks.items[0].href);
            console.log("Album: "+data.tracks.items[0].album.name);
        });
        break;

    case "movie-this":
        break;

    case "do-what-it-says":
        break;


}