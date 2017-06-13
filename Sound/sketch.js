
var mic
var amp

function setup() {
	createCanvas(400, 400);
	mic = new p5.AudioIn();
	amp = new p5.Amplitude();
	mic.start();

	
}

function draw() {
	background(0);
	var vol = mic.getLevel();

	ellipse(200, 200, vol * 400, vol * 400);

}

// helper function to toggle sound
