var system;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  system = new ParticleSystem();
}

function draw() {
    background(0);
    system.addParticle(); 
    system.run();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight); 
}

// A simple Particle class
var Particle = function(position) {
  this.x = random(0, width); 
  this.y = -20;
  this.lifespan = this.y; 
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
    this.y += 1;
    this.lifespan += 1;
};

// Method to display
Particle.prototype.display = function() {
    var s = random(0.5, 3);
    
    fill(255, 0, 0);
    beginShape();
      vertex(this.x * s, this.y * s);
      bezierVertex(this.x+30, this.y+40, this.x+20, this.y+55, this.x, this.y+60);
      bezierVertex(this.x-30, this.y+60, this.x+10, this.y+5, this.x, this.y);
    endShape(); 
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan > height) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function() {
  this.particles = [];
  this.time = 0;
};

ParticleSystem.prototype.addParticle = function() {
  this.time += 1; 
  
  if (this.time > random(10, 200)){
  this.particles.push(new Particle());
  this.time = 0; 
  }
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};