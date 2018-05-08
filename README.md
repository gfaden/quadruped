
# Freenove quadruped Robot Remote Control

This application controls the Freenove Qaudrupod Robot.
http://www.freenove.com
The User Interface is based on x3dom:
https://www.x3dom.org, and extends the Interactive 3D 
Transformations example in the tutorials.

This application is an alternative to the remote control
options that are included in the robot kit. It is unique
in the following ways:

  o It runs on any any PC or any iOS device

  o It provides a 3D simulation which corresponds to
    the robot's actual movements.

  o It talks.

  o The simulation is fun even if you don't have the robot.

## Upgrading the Arduino Freenove Quadruped Robot software

This 3D Remote Control application can display a synchronized
representation of the robot's crawling and turning movements.
The feature depends on a modification of the Freenove Qadruped Robot
software. The modified version is backward compatible and is 
available at https://github.com/gfaden/Freenove_Quadruped_Robot_Kit/tree/master/Arduino/Libraries


## Installation on MacOS or Linux

  `cd ~`
  <br>
  `git clone https://github.com/gfaden/quadruped`
  <br>
  `cd quadruped`
  <br>

  or select the green Download button on this website
  and unzip the contents. Move or rename the download
  directory from quadruped-local to ~/quadruped.

  `npm install express`
  <br>
  `npm install jquery`
  <br>
  `npm install socket.io@1.7.4 --save`
  <br>
  `npm install x3dom`

## Running on MacOS or Linux

Power on the quadruped robot and join the WiFI SSID:
  `Freenove quadruped Robot`

Run the following to start the Web Server:

  `node quad.js`

On your browser, enter the following URL:
  http://localhost:4200

Use the red/green/blue cylinders to `Move` the robot in place.
Use the red/blue rings to `Rotate` the robot in place.
Use the image of the USB button on the robot image to `Reset` the robot position.

The yellow buttons control the robot's crawling functions. While
the robot is crawling the `Move` and `Rotate` controls are disabled.
These controls are re-enabled by pressing the `Deactivate` button
or the `Reset` button on the robot.

## Installation on iOS (iPhone/iPad)

After installation, the application can also be run
on iOS. First get `Touch Code Pro` from App Store.

https://itunes.apple.com/us/app/touch-code-pro/id989524904?mt=8

Then the quadruped directory must be copied to the iOS device.

In left-hand panel click `+`

Select `Add FTP/SFTP/SVN`

Enter local directory name (.e.g. quadruped)

Modify thr `conf.keys` file:

  line 3:  type sftp

  line 4:  path sftp:\/\/\<IP address of your computer\>\/\/\<path to quadruped directory\>

  line 5:  user <username>

  line 6:  passwd xxxxxx


Tap on the `S` circle icon to the right of the directory entry.

Select `Update` and wait for the spinning arrow to complete.

Tap on the directory name to verify its contents.

## Running on iPad or iPhone

Power on the robot, then switch to the iOS `Settings` app and join the WiFI SSID:
  `Freenove quadruped Robot`

Switch back to `Touch Code Pro`

Tap on `quad.js`

Tap on the 'play' icon to the right of the globe. It should become a square icon.

Tap on the globe.

Enter the URL: localhost:4200

If you don't see the app immediately, tap on `Done`, and then tap on the globe again.

Use the red/green/blue cylinders to `Move` thr robot in place

Use the red/blue rings to `Rotate` the robot in place

Use the image of the USB button on the robot image to reset the position.

Use one finger to change the viewing angle.

Use two fingers to move, rotate or zoom the view.

Use the yellow buttons for roaming.

## License

(The MIT License)

Copyright (c) 2018 Glenn Faden &lt;gtfaden@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
