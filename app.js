// 変更テスト
var http = require( 'http' );
var express = require( 'express' );

var app = express();
var server = http.createServer( app );


app.use( express.static( __dirname ) );

app.get( '/', function ( request, response ) {
  response.redirect( '../index.html' );
});

server.listen( 3000 );