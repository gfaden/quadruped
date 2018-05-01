/*
 *		 Freednove Quadrupod Remote Control
 *
 * Brief:	This application controls the Freenove Qaudrupod Robot
 *		via WiFi. The User Interface is based on x3dom:
 *		https://www.x3dom.org, and extends the Interactive 3D 
 *		Transformations example in the tutorials.
 *              The UI is accessed via the URL http://localhost:4200.
 *
 *		After connecting to the robot's WiFi SSID, "Freenove
 *		Quadrupod Robot", the application may be started
 *		on MacOS or Linux via:
 *
 *			% node quad.js
 *
 *              After installation, the application can also be run
 *              on iOS by importing the parent directory into Touch Code Pro:
 *		https://itunes.apple.com/us/app/touch-code-pro/id989524904?mt=8
 *
 *              See README.md for more information.
 *
 * Author:	Glenn Faden
 * Date:	05/01/2018
 * Copyright:   Glenn Faden
 * License:	MIT
 */

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var net = require('net');

var crawlBuffer = new Buffer([128, 72, 129]);
var moveBuffer = new Buffer([128, 100, 64, 64, 64, 129]);
var rotateBuffer = new Buffer([128, 102, 64, 64, 128]);
var crawling = false;
var rotating = false;
var browser;

var robot = net.connect({
    host: '192.168.4.1',
    port: 65535
}, connected);

function connected() {
    // Activate
    console.log('robot connected');
    robotWrite(72, false);
}

robot.on('data', function(data) {
    if (data[1] === 23) {
        rotating = false;
        // crawling sequence completed
        if (crawling) {
            // repeat until deactivated
            robot.write(crawlBuffer);
        }
    }
});

robot.on('end', function() {
    console.log('robot disconnected');
});

robot.on('error', function(err) {
    console.log('robot offline' + err);
});


function robotWrite(command, state) {
    crawling = state;
    if (browser !== undefined)
        browser.emit('disable', crawling);
    crawlBuffer[1] = command;
    robot.write(crawlBuffer);
 }

app.use(express.static(__dirname + '/node_modules'));
app.get('/', function(req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(client) {
    console.log('Client connected...');
    browser = client;

    client.on('join', function(data) {
        console.log(data);
    });

    client.on('Activate', function(data) {
        moveBuffer = new Buffer([128, 100, 64, 64, 64, 129]);
        rotateBuffer = new Buffer([128, 102, 64, 64, 128]);
        robotWrite(72, false);
    });

    client.on('Deactivate', function(data) {
        robotWrite(74, false);
    });

    client.on('Forward', function(data) {
        robotWrite(64, true);
    });

    client.on('Backward', function(data) {
        robotWrite(66, true);
    });

    client.on('Left', function(data) {
        robotWrite(68, true);
    });

    client.on('Right', function(data) {
        robotWrite(70, true);
    });

    client.on('Rotate X', function(data) {
        rotateBuffer[2] = 64 + data;
        rotating = true;
        robot.write(rotateBuffer);
    });

    client.on('Rotate Y', function(data) {
        rotateBuffer[3] = 64 + data;
        rotating = true;
        robot.write(rotateBuffer);
    });
    client.on('Move X', function(data) {
        moveBuffer[2] = 64 + data;
        rotating = true;
        robot.write(moveBuffer);
    });

    client.on('Move Y', function(data) {
        moveBuffer[3] = 64 + data;
        rotating = true;
        robot.write(moveBuffer);
    });
    client.on('Move Z', function(data) {
        moveBuffer[4] = 64 + data;
        rotating = true;
        robot.write(moveBuffer);
    });
});

server.listen(4200);
