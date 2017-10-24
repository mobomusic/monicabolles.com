---
layout: post
title:  "3D Sound Panner"
date:   2016-05-05 13:18:00
categories: controllers
img: /media/160505_3D_Sound_Panner.jpg
about: A controller that allows you to pan sound in a 3D space.   
---

I built a controller for being able to move sound around in 3-Dimensional space.  To begin I ordered an LED compatible button pad, a breakout PCB for the button pad, and a 6 Degrees of Freedom IMU from Sparkfun.  These parts would allow me to build a matrixed button controller pad.  

The first step, once I had picked up the parts, was to solder RGB LEDs into the PCB breakout board along with a diode for each LED.  Once this was done the next step was to solder wires onto all of the columns and rows that controlled the switch functionality and LED functionality of the PCB board.  This came to 16 wires in total.  

I had to choose one color for the LEDs, because if I wanted the full RGB color scheme and I wouldn’t have had enough IOs on SparkFun’s RedBoard to control the full range of colors.  For future implementation I would like to design my own board with enough IO’s to get the full color matrix.  I soldered all of the wires to blue, which on these LEDs was actually green.  This is where I learned that not all LED’s are built in a standard way.   

After I had the board all wired up I plugged it into SparkFun’s RedBoard and uploaded some code that would turn on and off the LED every time the button was toggled.  After some troubleshooting I finally had my button board working properly.  

The next step was to test my IMU to make sure that was working.  This was simple enough as all I needed to do was upload some code to the Arduino that would give back the Euler angles of the IMU and this produced a stable output that would give back x, y, and z values.  I then initially tried to implement the IMU code into the code for the button pad to hopefully have everything controlled off of one board.  This caused some erratic behavior and I decided for this version of my project to just use two separate boards.  I ended up using the RedBoard and the Pro Micro.  

The final thing I did for building the physical controller was to laser cut a Plexiglas box to encase the controller.  To do this I downloaded a template from makerbox that matched the dimensions of the board and opened it in Illustrator.  I then found 2-Dimensional plans for previously built bezels that would encase the buttons.  I copied these plans and cleaned them up.  I placed them on the top of the box to create my own top that I could screw on and attach to the PCB board.  

On the software side I used Max MSP to accept the Serial Data being output from the buttons and the IMU.  I found a project that Jakob Andersen had put together for processing binaural audio in Max and I was able to hook my controller to the virtual sound positioning system he had built.  I altered this to be able to accept sixteen different sources from an ADC input and then placed each of them on a visualized node grid so you could see the horizontal movement of the sound in space.  I also built a way to visualize which button was on and off on the controller.  


