var images = new Array(2);
var patchsize_mult = .8;

function preload() {
    //images[0] = new Walker(loadImage('img/Osaka.jpg'), .04, .02);
    //images[1] = new Walker(loadImage('img/purplecoat.png'), .04, .02);
    images[0] = new Walker(loadImage('img/soph.jpg'), .04, .02, 0, 0);
    images[1] = new Walker(loadImage('img/zine2.JPG'), .04, .02, 0, 0);
}

function setup() {
    frameRate(18);
    var cnv = createCanvas(window.innerWidth, window.innerHeight);
    cnv.parent("canvas-container");
    //image(images[0].im, 0, 0, width, height);
    //melt();
    //melt();
}

function draw() {
    for (var i = 0; i < 200; i++) {
        for (var im of images) {
            im.update();
            im.draw();
        }
    }
    melt();
}

function image_spot(img, x, y, w, h) {
    image(img, x * width, y * height, w * width, h * height, img.width * x, img.height * y, img.width * w, img.height * h);
}



class Walker {
    constructor(image, size, stride, x, y) {
        this.im = image;
        this.w = size;
        this.h = size;
        this.x = x;
        this.y = y;
        this.stride = stride;
    }
    
    update() {
        this.x = constrain(this.x + random(-1, 1)*this.stride, 0, 1);
        this.y = constrain(this.y + random(-1, 1)*this.stride, 0, 1);
    }
    
    draw() {
        image_spot(this.im, this.x, this.y, this.w, this.h);
    }
}

function melt() {
    //loadPixels();
    var density = 100;
    noStroke();
    for (var i = 0; i < density; i++) {
        for (var j = 0; j < density; j++) {
            var i2 = round(i*width/density);
            var j2 = round(j*height/density);
            fill(get(i2, max(0, j2-round(height/density))));
            rect(i2 - width/density + random(-width / density, width / density), j2 + random(-height / density, height / density), width/20, 1);
        }
    }
    //updatePixels();
}