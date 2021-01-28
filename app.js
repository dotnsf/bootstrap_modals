//. app.js

var express = require( 'express' ),
    ejs = require( 'ejs' ),
    app = express();

app.use( express.Router() );

app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

app.get( '/page1', async function( req, res ){
  res.render( 'page1', {} );
});

app.get( '/page2', async function( req, res ){
  res.render( 'page2', {} );
});


var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );

