var song;
var button;
var amp;

function setup() {
  createCanvas(400, 400);
  
  song = loadSound("musicbox.mp3", loaded)
  
  amp = new p5.Amplitude();
  
  
 
  button = createButton("play");
  button.mousePressed(togglePlaying);
  //button.size(200, 200);
 // button.position(0,0);
  
   song.setVolume(0.3);

}
  
 function loaded(){
    }
   
/*
  function togglePlaying(){
  song.play();
  song.setVolume(0.3);
 } 
*/

 function togglePlaying(){
   if(!song.isPlaying()){
     song.play();
      button.html("pause")
   }
   else {
     song.pause();
     //song.stop(); 
     button.html("play")
   }
 } 



function draw() 
{
  background(220);
  
  var vol = amp.getLevel();
  var diam = map(vol, 0, 1, 100, 400);
  
  fill('white')
  noStroke();
  //ellipse(width/2, height/2, 150, 150);
  ellipse(width/2, height/2, diam, diam);
 // song.pan(sliderPan.value());
 // song.rate(sliderRate.value());
  
  
}