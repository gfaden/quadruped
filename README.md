
# Freenove Quadrupod Robot Remote Control

This application controls the Freenove Qaudrupod Robot.
http://www.freenove.com
The User Interface is based on x3dom:
https://www.x3dom.org, and extends the Interactive 3D 
Transformations example in the tutorials.

This application is an alternative to the remote control
options that are included in the robot kit. It is unique
in the following ways:

  o It runs on any any PC or any iOS device
  o It provides a 3D simulation which matches
    the robot's actual movements. 

## Installation on MacOS or Linux

  `cd ~`
  `git clone https://github.com/gfaden/quadrupod`
  `cd quadrupod`

  or select the green Download button on this website
  and unzip the contents. Move or rename the download
  directory from quadrupod-local to ~/quadrupod.

  `npm install express`
  `npm install jquery`
  `npm install socket.io@1.7.4 --save`
  `npm install x3dom`

## Running on MacOS or Linux

Power on the quadrupod robot and join the WiFI SSID:
  `Freenove Quadrupod Robot`

Run the following to start the Web Server:
  `node quad.js`

On your browser, enter the following URL:
  http://localhost:4200

Use the red/green/blue cylinders to `Move` the robot in place.
Use the red/blue rings to `Rotate` the robot in place.
Use the grey USB button on the robot to `Reset` the robot.

The yellow buttons control the robot's crawling functions. While
the robot is crawling the `Move` and `Rotate` controls are disabled.
These controls are re-enabled by pressing the `Deactivate` button
or the `Reset` button on the robot.

## Installation on ios (iPhone/iPad)

After installation, the application can also be run
on iOS. First get `Touch Code Pro` from App Store.

https://itunes.apple.com/us/app/touch-code-pro/id989524904?mt=8

Then the quadrupod directory must be copied to the iOS device.

In left-hand panel click `+`
select `Add FTP/SFTP/SVN`
enter local directory name (.e.g. quadrupod)
Modify conf.keys file:
  line 3:  type sftp
  line 4:  path sftp://<IP address of your computer>//<path to quadrupod directory>
  line 5:  user <username>
  line 6:  passwd xxxxxx

Tap on `S` in circle icon to right of the directory entry.
Select `Update` and wait for the spinning arrow to finish.
Tap on directory name to show its contents.

## Running on iPad or iPhone

Switch to the iOS `Settings` app and and join the WiFI SSID:
  `Freenove Quadrupod Robot`

Switch back to `Touch Code Pro`

Tap on `quad.js`
Tap on the 'play' icon to the right of the globe. It should become a square icon.
Tap on the globe
Enter the URL: localhost:4200

If you don't see the app immediately, tap on `Done`, and then tap on the globe again.

Use the red/green/blue cylinders to `Move` robot in place
Use the red/blue rings to `Rotate` robot in place
Use the USB button on the robot to reset the position.

Use one finger to change the viewing angle
Use two fingers to move, rotate or zoom the view

Use the yellow buttons for roaming.

## Author

   Glenn Faden
   gtfaden@gmail.com

## License

(The MIT License)

Copyright (c) 2014 Guillermo Rauch &lt;guillermo@learnboost.com&gt;

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
