(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"McClain_haiku_atlas_1", frames: [[0,0,1056,246]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["McClain_haiku_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.redHouse = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// chimey
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(3,1,1).p("Al2n9ILtAAIAAP7IrtAAg");
	this.shape.setTransform(178.5,-181.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660000").s().p("Al2H+IAAv7ILtAAIAAP7g");
	this.shape_1.setTransform(178.5,-181.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bushes
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0)").ss(3,1,1).p("EAp3ACpQB8AGBeAXQCAAhAAAsQAAAsh9AgEAtTABkQAAAQgLAKQgLALgPAAQgQAAgLgLQgKgKAAgQQAAgQAKgLQALgKAQAAQAPAAALAKQALALAAAQgEAwcACCQAAAMgIAHQgIAJgMAAQgLAAgIgJQgIgHAAgMQAAgMAIgHQAIgIALAAQAMAAAIAIQAIAHAAAMgEA0CAD1QAAASgNAMQgMANgSAAQgRAAgNgNQgMgMAAgSQAAgRAMgNQANgMARAAQASAAAMAMQANANAAARgEA1wACHQAAAJgHAHQgGAHgKAAQgJAAgHgHQgGgHAAgJQAAgJAGgHQAHgGAJAAQAKAAAGAGQAHAHAAAJgEAp3ACpQgEgRAAgTQAAhuCZhNQCahODaAAQDZAACaBOQCaBNAABuQAABuiaBNQiaBOjZAAQiqAAiCgvQgCAAgBAAQh/Agi0AAQi0AAiAggQh/ggAAgsQAAgsB/ghQCAgfC0AAQAuAAArACgEAnWAEUQAAANgKAJQgJAKgNAAQgNAAgJgKQgJgJAAgNQAAgNAJgKQAJgJANAAQANAAAJAJQAKAKAAANgAgnABQAAALgIAIQgIAIgLAAQgMAAgIgIQgIgIAAgLQAAgLAIgIQAIgIAMAAQALAAAIAIQAIAIAAALgAhkFfQhiAviDAAQiXAAhrg+Qhrg+AAhXQAAhXBrg+QBrg8CXAAQAWAAAWABQAshABhg0QCzhgD/AAQD/AAC0BgQBQAsAtAzAlGCAQAAABAAABQAAAIgGAFQgGAGgIAAQgIAAgGgGQgFgFAAgIQAAgIAFgGQABgBABgBQAGgDAGAAQAIAAAGAFQAFAFABAHQALAFAMAFQBcAlA+AeQAKgHALAAQAOAAAKAKQAKAKAAAOQAAAAAAABQgBANgJAKQgKAKgOAAQgOAAgKgKQgJgKAAgOQAAgOAJgKQACgCABgBAheDpQBiA3ggAUQg5AkgPAHAE2gwQAAAPgLALQgLALgQAAQgPAAgLgLQgLgLAAgPQAAgQALgLQALgLAPAAQAQAAALALQALALAAAQgAEEBVQAAAJgHAHQgGAHgKAAQgJAAgHgHQgGgHAAgJQAAgJAGgHQAHgGAJAAQAKAAAGAGQAHAHAAAJgAKpgIQAAAWgRASQgRAQgYAAQgYAAgRgQQgRgSAAgWQAAgYARgSQARgRAYAAQAYAAARARQARASAAAYgAKeCHQAAANgKAKQgJAKgOAAQgNAAgKgKQgJgKAAgNQAAgNAJgKQAKgJANAAQAOAAAJAJQAKAKAAANgAQaDDQAAAWgQAPQgPAQgWAAQgVAAgQgQQgPgPAAgWQAAgWAPgPQAQgPAVAAQAWAAAPAPQAQAPAAAWgAtMjZQAbAMAaASQBwBLAABpQAABphwBLQgaASgbANALsE9QgLAGgMAGQi0Bhj/AAQh0AAhlgUAI/HxQhQAchiAAQieAAhwhLQgfgVgXgXQhcgThRgkAkdgVQB7AIjsAIQjYAGEABxEg6MgIMQAVAHATAJEg5kgBVQgTAJgVAH");
	this.shape_2.setTransform(-123.475,166.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AOfC8QgJgJAAgNQAAgNAJgKQAJgJAOAAQANAAAIAJQAKAKAAANQAAANgKAJQgIAJgNAAQgOAAgJgJgAa4ClQgMgNAAgRQAAgSAMgMQANgNASAAQARAAANANQAMAMAAASQAAARgMANQgNAMgRAAQgSAAgNgMgA6ZCRQgJgJAAgOQAAgOAJgKIAEgDQAJgHALAAQAOAAAKAKQAKAKAAAOIAAABQAAANgKAJQgKAKgOAAQgNAAgLgKgApAB6QgPgQAAgVQAAgWAPgPQAQgQAVAAQAWAAAPAQQAQAPAAAWQAAAVgQAQQgPAPgWAAQgVAAgQgPgAuZAwQgKgKAAgNQAAgOAKgJQAJgJANAAQAOAAAKAJQAJAJAAAOQAAANgJAKQgKAJgOAAQgNAAgJgJgAdIApQgGgHAAgJQAAgKAGgGQAHgHAKAAQAJAAAHAHQAGAGAAAKQAAAJgGAHQgHAGgJAAQgKAAgHgGgAXsAnQgIgIAAgLQAAgMAIgIQAIgHAMAAQALAAAIAHQAIAIAAAMQAAALgIAIQgIAIgLAAQgMAAgIgIgA9pAhQgFgFAAgIQAAgIAFgGIACgCQAGgEAHAAQAHAAAGAGQAFAFABAHIAAACQAAAIgGAFQgGAGgHAAQgIAAgHgGgAUSAQQgKgLAAgOQAAgQAKgLQAMgKAPAAQAQAAAKAKQALALAAAQQAAAOgLALQgKALgQAAQgPAAgMgLgA0igIQgHgHAAgJQAAgKAHgGQAGgHAKAAQAJAAAGAHQAHAGAAAKQAAAJgHAHQgGAGgJAAQgKAAgGgGgAu6hOQgRgRAAgYQAAgYARgRQARgRAYAAQAYAAARARQARARAAAYQAAAYgRARQgRARgYAAQgYAAgRgRgA5WhZQgJgIABgMQgBgLAJgIQAHgIAMAAQALAAAIAIQAJAIAAALQAAAMgJAIQgIAIgLAAQgMAAgHgIgA0KiEQgLgLAAgQQAAgPALgLQALgLAQAAQAPAAALALQALALAAAPQAAAQgLALQgLALgPAAQgQAAgLgLg");
	this.shape_3.setTransform(30.2,177.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336633").s().p("ArSD/QgZgQgTgTIgXANQi0Bhj/AAQh0AAhlgUQhdgThRgkQAPgHA5gjQAIgGAAgHQAAgWhKgpIAAgBQAAgOgKgKQgKgKgOAAQgLAAgJAHIgEADQgJAKAAAOQAAAOAJAKQALAJANABQAOgBAKgJQAKgKAAgNQBKApAAAWQAAAHgIAGQg5AjgPAHQhiAuiCAAQiYAAhrg9Qhrg+AAhXQAAhXBrg9QBrg+CYABQAVAAAWABQAtg/Bgg0QC0hhD/AAQD/AAC0BhQBQAqAtA0QBdgrB3AAQCfAABwBLQBwBLAABpQAABqhwBLQhwBLifAAQieAAhwhLgAoqA+QgPAPAAAWQAAAVAPAQQAQAQAVAAQAWAAAPgQQAQgQAAgVQAAgWgQgPQgPgQgWAAQgVAAgQAQgA8xAgIAXAKQBdAlA+AeQg+gehdglIgXgKQgBgHgFgFQgGgGgHABQgHAAgGADQiKg8AAgeQAAgaBigDQCbgGAAgFQAAgCgqgDQAqADAAACQAAAFibAGQhiADAAAaQAAAeCKA8IgCACQgFAGAAAIQAAAIAFAFQAHAHAIAAQAHAAAGgHQAGgFAAgIIAAgCIAAAAgAuDAQQgKAKAAANQAAAOAKAJQAJAKANAAQAOAAAKgKQAJgJAAgOQAAgNgJgKQgKgJgOAAQgNAAgJAJgA0MgaQgHAHAAAJQAAAKAHAFQAGAGAKAAQAJAAAGgGQAHgFAAgKQAAgJgHgHQgGgGgJgBQgKABgGAGgAukiRQgRAQAAAYQAAAZARARQARARAYAAQAYAAARgRQARgRAAgZQAAgYgRgQQgRgSgYABQgYgBgRASgA5AhyQgJAIABALQgBAMAJAIQAHAIAMAAQALAAAIgIQAJgIAAgMQAAgLgJgIQgIgIgLAAQgMAAgHAIgAz0irQgLALAAAQQAAAPALALQALALAQAAQAPAAALgLQALgLAAgPQAAgQgLgLQgLgLgPAAQgQAAgLALgAVpD+QB9gfAAgsQAAgsiAghQhegXh8gGQgEgSAAgSQAAhuCahNQCZhNDaAAQDZAACaBNQCaBNAABuQAABuiaBNQiaBNjZAAQipABiDgwgAbOB3QgMANAAARQAAARAMANQANAMASAAQARAAANgMQAMgNAAgRQAAgRgMgNQgNgMgRAAQgSAAgNAMgAdeAXQgGAGAAAKQAAAJAGAHQAHAGAKABQAJgBAHgGQAGgHAAgJQAAgKgGgGQgHgGgJAAQgKAAgHAGgAYCAPQgIAHAAAMQAAALAIAJQAIAHAMABQALgBAIgHQAIgJAAgLQAAgMgIgHQgIgIgLAAQgMAAgIAIgAUogWQgKAMAAAOQAAAPAKALQAMALAPAAQAQAAAKgLQALgLAAgPQAAgOgLgMQgKgKgQAAQgPAAgMAKgAMAD/QiAggAAgsQAAgsCAghQB/gfC0AAQAvAAAqACQB8AGBeAXQCAAhAAAsQAAAsh9AfIgDABQh/Agi0AAQi0AAh/gggAO1CdQgJAKAAANQAAANAJAJQAJAKAOgBQANABAIgKQAKgJAAgNQAAgNgKgKQgIgIgNgBQgOABgJAIgA5JCJIAAAAgA9RASIAAAAg");
	this.shape_4.setTransform(28,176.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// door
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0)").ss(3,1,1).p("AM0MMQgKgTAAgYQAAgXAKgTAszrZQAGgMALgLQAbgbAmAAQAnAAAbAbQAbAbAAAnQAAAmgbAbQgbAbgnAAQgmAAgbgbQgLgKgGgN");
	this.shape_5.setTransform(40,128.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3,1,1).p("AmUsaIMpAAIAAY1IspAAg");
	this.shape_6.setTransform(37.5,117.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhABBQgbgbAAgmQAAgmAbgbQAbgbAlAAQAmAAAbAbQAbAbAAAmQAAAmgbAbQgbAcgmAAQglAAgbgcg");
	this.shape_7.setTransform(16.25,116.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663300").s().p("AmUMbIAA41IMpAAIAAY1gAkVhNQgbAbAAAnQAAAlAbAbQAbAbAnAAQAmAAAbgbQAbgbAAglQAAgngbgbQgbgbgmAAQgnAAgbAbg");
	this.shape_8.setTransform(37.5,117.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// windows
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(3,1,1).p("AIwn4IH5AAIH5AAIAAH4IAAH5In5AAIn5AAIAAn5gA4hn4IH5AAIH5AAIAAH4IAAH5In5AAIn5AAIAAn5g");
	this.shape_9.setTransform(36,39.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(9,1,1).p("AIwAAIH5AAIAAH5AQpAAIH5AAAQpn4IAAH4AwoAAIH5AAAwoAAIAAH5A4hAAIH5AAAwon4IAAH4");
	this.shape_10.setTransform(36,39.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AQpH5IAAn5In5AAIH5AAIAAH5In5AAIAAn5IAAn4IH5AAIH5AAIAAH4In5AAIAAn4IAAH4IH5AAIAAH5gAwoH5IAAn5IH5AAIAAH5gAwoH5In5AAIAAn5IAAn4IH5AAIH5AAIAAH4In5AAIAAn4IAAH4In5AAIH5AAIAAH5gAYiAAgAQpAAg");
	this.shape_11.setTransform(36,39.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// house
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(102,102,102,0)").ss(1,1,1).p("A9ni5IksAAQnWgNHWuVUAgIgcsAjNAcsQJ7K4p7DqIjSAAMAAAAirMg7XAAAgAdwi5Mg7XAAA");
	this.shape_12.setTransform(43.6444,-6.3793);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#660000").s().p("AdwOcMg7XAAAIksAAQnWgNHWuUUAgIgcsAjNAcsQJ7K3p7Dqg");
	this.shape_13.setTransform(43.6444,-117.3543);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC0000").s().p("A9rRWMAAAgirMA7XAAAMAAAAirg");
	this.shape_14.setTransform(44.025,86.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.redHouse, new cjs.Rectangle(-497.4,-234.4,785.2,455.20000000000005), null);


(lib.happyMom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hat
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,51,102,0)").ss(8,1,1).p("AAHCZQgEAAgDAAQg+AAgtgtQgtgtAAg/QAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAAAIgBAI");
	this.shape.setTransform(-8.25,-225.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF3366").ss(8,1,1).p("AmoGJIDTDdAiLmRIGhFBAg/plIDQCgAlhDFIFAGhAkjAVIIZJRAj2hnIJ4LNAjHjrIJwI0");
	this.shape_1.setTransform(6.375,-126.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AA0qHIBSDlICFF0ICTGaIBlEcIiMAAIiMAAIkXAAIi0AAIkiAAIBPjcIBGjFIA/ivIAth8IAviEIA7inIBMjTIAZhF");
	this.shape_2.setTransform(7.5,-129.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6699").s().p("AF3McIp4rNIJ4LNIiMAAIoZpQIIZJQIkXAAIlBmhIFBGhIi0AAIjTjcIDTDcIkiAAIBPjcIBGjFIA/ivIAth9IAviDIA7inIBMjTIAZhFQgfgLgZgZQgtgtAAg/IABgPQAFg1AngoQArgqA6gCIAGAAQA/AAAtAsQAsAtABA/QgBA/gsAtQgaAZgfAMIBSDkICEFzICUGbIBlEcgAGeIAIpwo0gAEKBlImhlAgACGkOIjRigg");
	this.shape_3.setTransform(7.5,-144.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(12));

	// mouth
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("ABzAAQAAgggigXQghgYgwAAQgvAAgiAYQghAXAAAgQAAAhAhAYQAiAXAvAAQAwAAAhgXQAigYAAghg");
	this.shape_4.setTransform(-5.5,88.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1).p("AiPg+IE1AAQhZDgjyiUIAAhW");
	this.shape_5.setTransform(-3.575,86.3271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},6).wait(6));

	// hairInfront
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0)").ss(3,1,1).p("AEghtQAIgLALgLQBAg/BbAAQBaAABAA/QBBBBAABaQAAASgDASAj4iCQAVgzAqgqQBUhUB1AAQB2AABTBUQAzAzAUA/AEIB3QgTAggcAcQhTBUh2AAQh1AAhUhUQgHgHgHgIQgSAlggAfQhLBMhrAAQgUAAgTgDAJGDPQg1AkhDAAQhbAAhAhBQgbgbgQggQgVgrAAg0QAAhMAtg5AqogSQARg/AygyQBMhMBqAAQBrAABLBMQABAAAAABAjHCkQhFhPAAhrQAAg6AUgy");
	this.shape_6.setTransform(-2.0625,-45.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AMXIgQghgRgbgcQhIhHAAhmQAAhOArg9QgNABgOAAQhYAAg/g+Qg+g+AAhXQAAgRACgQQg0AkhEAAQhaAAhBhBQgbgbgPggQgWgrAAg0QAAhMAtg6QAJgLAKgKQBBhABaAAQBbAABABAQBABAAABbQAAASgCASQAyghBAAAQBYAAA+A+QA+A/AABYQAAA8geAwQAXgEAYAAQBmAABHBIQBIBIAABlIAAAFQgBBihHBGQhHBIhmAAQg+AAgzgbgAwqDAQhShTAAh0QAAh1BShTQBThSB1AAQAkAAAhAHQARg/AygyQBLhLBrAAQBqAABMBLIABABQAVgzAqgqQBThTB2AAQB1AABUBTQAyAzAUA/QgtA6AABMQAAA0AWArQgTAggcAcQhUBUh1AAQh2AAhThUIgOgPQhGhPAAhrQAAg7AVgyQgVAyAAA7QAABrBGBPQgTAlgfAfQhMBLhqAAQgUAAgTgDQgOBWhBBBQhTBTh1AAQh1AAhThTgAk8hjIAAAAgACTiQIAAAAg");
	this.shape_7.setTransform(9.675,-18.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(12));

	// nose
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3,1,1).p("AhKkSIAADcICVCVIh3C0");
	this.shape_8.setTransform(7.5,36.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(12));

	// eyes
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,0,0)").ss(3,1,1).p("AE2jKQAFAAAFAAQBSAAA6A5QA6A6AABSQAABRg6A6Qg6A6hSAAQgFAAgFAAAFpA3QAAAhgYAXQgXAXggAAQghAAgXgXQgXgXAAghQAAggAXgXQAXgXAhAAQAgAAAXAXQAYAXAAAggAmZi+QAFgBAFAAQBSAAA5A6QA6A6AABRQAABSg6A6Qg5A6hSAAQgFAAgFAAAlnBDQAAAhgXAXQgXAXghAAQggAAgYgXQgXgXAAghQAAggAXgYQAYgWAgAAQAhAAAXAWQAXAYAAAgg");
	this.shape_9.setTransform(7.25,19.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#663300").s().p("AmfA+QgXgXAAghQAAgfAXgYQAYgXAgAAQAhAAAWAXQAYAYAAAfQAAAhgYAXQgWAXghAAQggAAgYgXgAEwAyQgXgYAAgfQAAghAXgXQAYgXAgAAQAhAAAXAXQAXAXAAAhQAAAfgXAYQgXAXghAAQggAAgYgXg");
	this.shape_10.setTransform(-0.6,25.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlnDMQhSAAg6g7Qg6g5AAhSQAAhRA6g6QA6g5BSgBIAKABQBMADA2A2QA5A6AABRQAABSg5A5Qg2A3hMAEIgKAAgAmyALQgXAYABAgQgBAhAXAXQAYAXAgAAQAhAAAXgXQAYgXgBghQABgggYgYQgXgWghAAQggAAgYAWgAFoDAQhSgBg6g6Qg6g5AAhRQAAhSA6g6QA6g6BSABIAKAAQBMADA2A2QA5A6AABSQAABRg5A5Qg2A3hMAEIgKAAgAEdAAQgXAWABAhQgBAgAXAYQAYAXAgAAQAhAAAXgXQAYgYgBggQABghgYgWQgXgXghAAQggAAgYAXg");
	this.shape_11.setTransform(1.25,19.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(12));

	// ears
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0)").ss(3,1,1).p("AOBBSQAggHAYgYQAigiAAguQAAgwgigiQgigigvABQgwAAghAhQgaAZgGAiAOBBSQAAgBAAgBQAAgbgTgTQgTgTgbAAQgbAAgTATQgDADgCADQgOARAAAXQAAAbATATQATATAbAAQAbAAATgTQASgSABgagAL3gGQAFAZARAVAuABSQgggHgYgYQgigiAAguQAAgwAigiQAigiAvABQAwAAAhAhQAaAZAGAiAr2gGQgDALgEAKQADAAADAAQAhAAgqAIQgBACgBACQgEAGgFAGQAAABgBAAQAOARAAAXQAAAbgTATQgTATgbAAQgbAAgTgTQgSgSgBgaQAAgBAAgBQAAgbBYgTQAUgEASgDQAGgCAGgBAr2AiQgSADgDACAr9APQgBAEgCAE");
	this.shape_12.setTransform(-0.325,23.1746);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#996600").s().p("AMSB+QgTgTAAgbQAAgXAOgRQgRgVgFgZIAAguQAGgiAagZQAhghAwAAQAvgBAiAiQAiAiAAAwQAAAugiAiQgYAYggAHIAAgCQAAgbgTgTQgTgTgbAAQgbAAgTATIgFAGIAFgGQATgTAbAAQAbAAATATQATATAAAbIAAACQgBAagSASQgTATgbAAQgbAAgTgTgAttB+QgSgSgBgaIAAgCQAAgbBYgTIAmgHIgJAMIgBABQAOARAAAXQAAAbgTATQgTATgbAAQgbAAgTgTgAu4AzQgigiAAguQAAgwAigiQAigiAvABQAwAAAhAhQAaAZAGAiIAAAuQgDALgEAKIAGAAQAhAAgqAIIADgIIgDAIIgCAEIAMgDIAAAKQgSADgDACIAJgMIgmAHQhYATAAAbIAAACQgggHgYgYg");
	this.shape_13.setTransform(-0.325,23.1746);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(12));

	// head
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(0,0,0,0)").ss(3,1,1).p("AMHAlQAACRgBAVQgCBGgOAsQgaBXiGCHQgkAkheBoQhLBRguAoQiIB3itAAQi1AAh9hTQg0gihCg/QgFgFh8h8QhphpgVgXQg7g/gfgzQhJh0AAi5QAAgygHiRQgFh1AEhCQANjGB6h6QEfkfGVAAQGWAAEfEfQBDBDAZBRQAUBCgGBbQgDAlgTCIQgRByAABMg");
	this.shape_14.setTransform(-1.515,34.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#996600").s().p("AkMNEQg0gjhCg+IiBiCQhphogVgXQg7g+gfg0QhJh1AAi4QAAgygHiRQgFh1AEhCQANjGB6h6QEfkeGVAAQGWAAEfEeQBDBDAZBRQAUBDgGBaQgDAmgTCHQgRByAABNQAACPgBAWQgCBGgOAtQgaBWiGCGQgkAkheBpQhLBSguAoQiIB1itABQi1AAh9hTg");
	this.shape_15.setTransform(-1.515,34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(12));

	// hairBehind
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0)").ss(3,1,1).p("Ab0DvQAACogMBaQgOBognBNQgmBLhQBSQhABCiQB7QjiDAmVAsQiVAQjZAAQj6gCh7AAQk5AAlag7QjLgjmXhWQk8g+h5jyQhci5AAluQAApzIJm8QIJm7LhAAQLhAAIKG7QIJG8AAJzg");
	this.shape_16.setTransform(6.1,10.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AATT6Qk5AAlag8QjLgimXhWQk8g/h4jyQhdi4AAluQAApyIJm8QIKm8LgAAQLhAAIJG8QIKG8AAJyQAACogMBaQgPBogmBNQgnBLhPBSQhABDiQB5QjiDBmVArQiVARjZAAQj6gDh7ABg");
	this.shape_17.setTransform(6.1,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.4,-244.7,359,384.5);


(lib.cloudOne = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,51,102,0)").ss(8,1,1).p("AhLilQAVg/BCgyQBhhHCIAAQCJAABgBHQBhBIAABmQAABlhhBHQgHAGgHAFQALAMAAAOQAAAwiIAhQhoAaiJAGQgUAvhFAjQg1AchBAMQg1AKg9AAQg9AAg1gKQhCgMg1gcQhggxAAhGQAAhABOguQgHgEgHgEQhWguAAhCQAAhDBWgvQBXguB6AAQB3AABVAsgAgbAiQg5g8AAhOQAAggAJgdAgkApQAPAFAOAHQgLgJgJgKQgEADgFAEgAnaBHQAJgFAJgFQBggyCJAAQBqAABRAeAgHA1QAIAEAIAEQAmATAXAXQAjAjAAArQAAATgHASAHQBPQhcA9h/AAQhiAAhNgl");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AlRFUQhBgNg2gbQhggxAAhGQAAhABPgvIgPgHQhWguAAhCQAAhCBWgwQBXguB6AAQB3AABVAsQgJAdAAAgQAABOA5A7Qg5g7AAhOQAAggAJgdQAVg/BCgxQBghICJAAQCIAABhBIQBhBIAABlQAABlhhBHIgPAKQAMANAAAOQAAAviJAiQhoAaiJAGQAIgSAAgTQAAgrgkgjQBOAlBiAAQB/AABbg+QhbA+h/AAQhiAAhOglQgWgXgngUIgOgIIAOAIQAnAUAWAXQAkAjAAArQAAATgIASQgTAvhGAjQgzAbhCANQg1AKg9AAQg9AAg1gKgAnIA8IgRAKIARgKQBggxCJAAQBqAABRAeQhRgehqAAQiJAAhgAxgAgGA0QgLgIgKgLIgJAIIAeALIAAAAgABhDaIAAAAgABFBnIAAAAgAgGA0IAAAAgAgkApIAJgIQAKALALAIIgegLgAgkApIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloudOne, new cjs.Rectangle(-61.5,-39,123,78), null);


(lib.cloud3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,51,102,0)").ss(8,1,1).p("ADcjbQAHAAAIAAQCPAABlAdQAqAMAZAOAkpi9QAJg6BCgrQBOgxBuAAQBtAABOAxQAwAgATAnAAMgCQAHgTAMgRQAbgqAxgiQBvhOCcAAQBeAABOAcQAyATAsAfQBuBOAABuQAABuhuBOQhuBOicAAQicAAhvhOQg8grgbg0QiCA1izAAQi/AAiHg8QiGg8AAhVQAAhUCGg8QCEg7C6gBAAfgmQgVgFgSgGQhlgdAAgpQAAgqBlgdQBfgcCFgBAAMgCQgWACgYAAQhuAAhOgxQhNgyAAhGQAAgKACgKAAUCnQgWgrAAgyQAAgoAOgk");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("ABrEGQg9grgag0QgWgsAAgxQAAgoAOgkQAHgSAMgSQAbgpAxgjQBuhOCcAAQBfAABNAcQhNgchfAAQicAAhuBOQgxAjgbApIgngLQhlgcAAgqQAAgpBlgeQBegbCGgCIAPAAQCPAABlAdQAqAMAYAOQAzATAsAfQBuBOAABuQAABuhuBOQhvBOicAAQicAAhuhOgApnCgQiGg8AAhVQAAhUCGg8QCEg7C6gBQgCAKAAAKQAABHBOAxQBNAxBuAAQAYAAAWgCQgOAkAAAoQAAAxAWAsQiCA1izAAQi+AAiIg8gAjdgxQhOgxAAhHQAAgKACgKQAJg6BDgrQBNgxBuAAQBtAABNAxQAxAgATAnQiGACheAbQhlAeAAApQAAAqBlAcIAnALQgMASgHASQgWACgYAAQhuAAhNgxgAAfgmIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud3, new cjs.Rectangle(-79,-38,158,76), null);


(lib.Cloud2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,51,102,0)").ss(8,1,1).p("AgVieQAXhBBYgxQB4hDCqAAQCqAAB4BDQB4BDAABgQAABfh4BDQg/AjhNARQAeAdAAAjQAABHh+AyQh+AyixAAQixAAh+gyQhxgtgLg+QgBgEAAgDQg8gNgxgcQhfg2AAhNQAAgGABgGQAHhEBXgyQBgg2CHAAQBVAABFAWQAoAMAjAUQBgA2AABMQAAAlgWAfQgYAigyAdQheA2iHAAQhCAAg4gNAkoC3Qg/AHhLAAQiTAAhogdQhogdAAgqQAAgpBogeQBQgVBpgGAISBpQhFAPhRAAQiQAAhsgw");
	this.shape.setTransform(-0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AisEiQhxgugLg9IgBgHQA4AMBCAAQCHAABeg2QAygcAYgiQgYAigyAcQheA2iHAAQhCAAg4gMIABAHQg/AHhLAAQiTAAhogeQhogdAAgpQAAgqBogdQBQgVBpgFIgBALQAABMBfA2QAxAdA8ANQg8gNgxgdQhfg2AAhMIABgLQAHhFBXgyQBgg2CHAAQBVABBFAVQAoANAjATQBgA3AABLQAAAlgWAfQBsAwCQAAQBRAABFgPQAeAdAAAiQAABHh+AzQh+AyixAAQixAAh+gygAkpCwIAAAAgACABIQAWgfAAglQAAhLhgg3QgjgTgogNQAXhABYgyQB4hDCqAAQCqAAB4BDQB4BEAABfQAABfh4BCQg/AkhNARQhFAPhRAAQiQAAhsgwgACABIIAAAAg");
	this.shape_1.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cloud2, new cjs.Rectangle(-83,-38,166,76), null);


(lib.circlebutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3366").ss(8,1,1).p("AGnAAQAACvh8B8Qh8B8ivAAQiuAAh8h8Qh8h8AAivQAAiuB8h8QB8h8CuAAQCvAAB8B8QB8B8AACug");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6699").s().p("AkqErQh7h8AAivQAAiuB7h8QB8h7CuAAQCvAAB8B7QB7B8AACuQAACvh7B8Qh8B7ivAAQiuAAh8h7g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EA6297").ss(8,1,1).p("AGVAAQAACoh3B2Qh2B3ioAAQinAAh3h3Qh2h2AAioQAAinB2h3QB3h2CnAAQCoAAB2B2QB3B3AACng");
	this.shape_2.setTransform(-1.6,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E94363").s().p("AkdEeQh3h2AAioQAAimB3h3QB3h3CmAAQCoAAB2B3QB3B3AACmQAACoh3B2Qh2B3ioAAQimAAh3h3g");
	this.shape_3.setTransform(-1.6,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#EA6297").ss(8,1,1).p("AHDAAQAACoiEB2QiEB3i7AAQi5AAiFh3QiEh2AAioQAAinCEh3QCFh2C5AAQC7AACEB2QCEB3AACng");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E94363").s().p("Ak+EeQiEh3AAinQAAinCEh2QCFh3C5AAQC7AACEB3QCEB2AACnQAACniEB3QiEB3i7AAQi5AAiFh3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-46.2,98.1,92.5);


(lib.bdayCake = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flame
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("ACiBeQgQgFgGgHQgHgIgBgPQgBgKAEgHQACgFAKgJQAKgIACgGIAEgNQADgHAGgBQAGAAADAHQACAFgBAGQgEARgKAJQgJAHgDAEQgHAIAEAIQACAFAPAFQAFABAEAEQAEAEgBAFQgBAGgHABIgDAAIgJgBgAiuBVQgFgGAGgIIALgLQAIgJABgMQACgMgGgKQgEgIgKgIIgRgNQgFgFgFgGIgDAIQgHAPgCAHQgEANACAMQADAOAJAHIAJAHQAEAFAAAEQgBAIgIABQgHABgGgEQgTgLgEgdQgDgXAIgUIAKgXQAFgKACgJQgDgLAAgMQABgMAIgCQAFAAADAEQAEAAACACQAEADgBAKIgCARQAEALAGAIQAFAFAKAIIAPAMQATAQgCAdQgBAagVASQgHAGgGAAQgEAAgDgDgAAKBVQgSgDgKgEQgPgHgFgNQgHgSAOgVQAIgLASgUQAKgQADgTIADgLQAEgGAGAAQAIACAAAMQAAAPgJARQgJAUgRATIgKAMQgFAIACAHQACALAQADQAPABAIACQAIACACAFQABAEgCAEQgCADgEACIgHABIgIgBgADAA4QgDgEABgFQACgGAEgEIAIgGQAFgEACgEQACgEAAgKIgBgoQAAgJACgEQADgHAIABQADABACADQADAEAAAIIAAAFIAAApQAAAMgCAGQgDAKgRAMQgHAGgGAAQgDAAgDgCgAArAfQgFgCgBgIIACgLIAGgRQADgIAAgEQAAgEgDgKQgEgNgHgdQgDgOAHgEQADgCAFABQAEACACAEQAEAEABAMQABAPAGAQIAFATQABAIgDAKIgGARQgDAKgDADQgDAGgFAAIgEgBg");
	this.shape.setTransform(1.7071,-99.1905);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AA9CAQgIAAgPgEIgagGQgOgDgHgGQgMgEgLgQQgNgTgDgMQgIgeAVgsIAPgfQALgZAIgbQAFgWALgFQAFgCAHABQAGABAEAFIADAEIAAAAQAGAFAHASQAIAXAVAnQAPAfAGARQAJAbgCAeQgCATgEAKQgIARgNAFQgIAEgLAAIgDAAgAAIhBIgDALQgDASgKARQgTATgHAMQgPAVAHASQAFANAQAHQAJAEASADQAMABAEgCQADgBACgEQADgEgCgDQgCgFgHgCQgIgCgQgBQgQgDgCgMQgBgHAEgHIALgNQAQgRAKgVQAIgRAAgPQAAgNgIgBIAAAAQgFAAgEAGgAAihlQgGAFADANQAGAeAEAMQAEALAAAEQAAAEgDAIIgGAQIgDAMQABAIAFACQAIACAFgHQACgDADgLIAGgQQADgLAAgHIgGgUQgFgQgCgOQgBgMgDgFQgDgEgEgBIgDgBIgFABgAi2B6IgBAAQgEACgGABQgMABgKgGQgIgFgLgKQgLgKgEgKQgEgJAAgVQAAgWAEgLQABgFAGgLQAGgJABgGQACgGACgLQgGgHAAgLQAAgRAJgdQAEgMAGgFQAGgFAKACQAJACAFAHQADAFAEARQAGATAZAfIAVAcQAKALAFAJQAJATgBAiQAAARgFAKQgFAIgPAJQgQAJgJACIgIABQgKAAgIgGgAjAgUIARAOQALAHAEAIQAFAKgBANQgCAMgIAIIgLALQgFAJAFAGQAHAHANgLQAUgSACgaQABgcgTgRIgPgMQgKgHgEgGQgHgHgDgMIACgRQABgJgEgEQgDgCgDABQgDgFgGABQgHABgBANQAAAMACALQgBAIgFAKIgLAYQgHAUADAWQADAdATALQAHAEAGAAQAJgCABgHQAAgFgFgEIgJgHQgJgIgCgNQgCgMADgNQADgIAGgOIAEgIQAEAGAFAEgACiB3IgGACQgLACgMgKQgNgLgFgUQgEgOABgWQAAgNADgIQAEgKALgLIAQgPIALgSQAGgJACgIIAFgNQADgIAEgDQAHgFAIABIAAgBQAGgGAJAAIgBAAIAHACQAFABADAEIABACQACADABAHIACAIQgCgDgEgBQgHgBgDAIQgCAEAAAJIABAoQAAAKgCAEQgCAEgFAEIgJAGQgEAEgBAFQgCAGAEADQAGAGANgJQAQgNADgJQADgGAAgNIgBgoQAEAQAJAaQAMAkAAAVQAAAKgEAOQgEAQgKAIQgFAEgIACIgQADQgRAFgJAAQgMAAgHgGgACpgOQgHAAgDAIIgDAMQgDAGgJAJQgKAIgDAGQgDAHABAKQABAOAGAIQAGAHAQAFQAIACAEgBQAHgBACgGQABgEgEgEQgEgEgGgCQgOgEgDgGQgEgHAHgIQAEgFAIgHQALgJADgQQACgGgCgGQgDgGgFAAIgBAAg");
	this.shape_1.setTransform(2.051,-98.4256);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// cake
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(102,102,102,0)").ss(1,1,1).p("ABEmjIAAm5IBGAAIAAGXADfm9IAAmaIBGAAIAAGeAG8lrIABAAAEGlrIABAAABSlrIABAAAJwlrIABAAABYNdIgLAAAHDNdIgNAAAENNdIgMAAAJ3NdIgNAAAK6kbIAAP9AiIm9IAAmfIBLAAIAAGiAnJlrIABAAAq5lhQAFABAFABAqvkWQARAEANALAhhlrIABAAAkVlrIABAAAnENdIgKAAAkQNdIgKAAAhbNdIgLAAAoPLmIAAwA");
	this.shape_2.setTransform(-5.45,-2.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3399").s().p("AAYKaQgOgPgHgSQgEgNAAgQQAAAQgFANQgHASgOAPQgaAagmAAQgmAAgagaQgOgPgHgSQgFgNAAgQQAAAQgFANQgHASgOAPQgaAagmAAQgmAAgagaQgOgPgHgSQgFgNAAgQQAAAQgFANQgHASgOAPQgaAagmAAQgmAAgagaQgOgPgHgSQgFgNAAgQQAAAQgFANQgHASgOAPQgaAagmAAQgmAAgagaQgagaAAgmQAAglAagbQAagaAmAAQAKAAAKACQAZAFATATQAaAaAAAlQAAglAagaQAagaAmAAQAmAAAaAaQAaAaAAAlQAAglAagaQAagaAmAAQAmAAAaAaQAaAaAAAlQAAglAagaQAagaAmAAQAmAAAaAaQAaAaAAAlQAAglAZgaQAagaAmAAQAmAAAaAaQAZAaABAjQAAglAbgbQATgUAagFQAJgCAKAAQAlAAAbAbQAaAaABAkQAAglAagaQAbgaAlAAQAmAAAaAaQAZAaABAlQABgkAagaQAUgUAagFQAJgCAJAAQAmAAAaAbQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbQgOgNgHgRQgGgPAAgRQAAARgHAPQgHAQgMANQgaAagmAAQglAAgbgaQgNgNgGgQQgHgPAAgRQAAARgHAPQgGARgOANQgbAbglAAQggAAgXgTIgJgIQgOgNgHgRQgGgOAAgRQAAARgFAOQgHASgOAPQgaAagmAAQgmAAgagagAAYoWQgYgXgBgiIAAgFIAAAFQgCAigYAXQgaAbgmAAQgmAAgagbQgYgXgCgiIAAgFIAAAFQgCAigYAXQgaAbgmAAQgmAAgagbQgYgXgCgiIAAgFIAAAFQgCAigYAXQgaAbgmAAQgmAAgagbQgYgXgCgiIAAgFIAAAFQgCAigYAXQgTATgZAGQgKACgKAAQgmAAgagbQgagaAAglQAAgmAagaQAagaAmAAQAmAAAaAaQAaAaAAAlQAAglAagaQAagaAmAAQAmAAAaAaQAaAaAAAlQAAglAagaQAagaAmAAQAdAAAVAPIAOALQAaAaAAAlQAAglAagaIAKgIQAXgSAfAAQAmAAAaAaQAGAHAGAHQAOAWAAAbQAAglAZgaQANgNARgHQAPgGATAAQAdAAAVAPIAOALQAZAZABAkQAAgmAbgbIAEgDQASgRAXgEQAJgCAKAAQAlAAAbAaQAaAaABAlQAAglAagaQAbgaAlAAQAmAAAaAaQAZAaABAlQABglAagaQAbgaAlAAQAmAAAaAaQAbAbAAAmQAAAlgbAbQgaAbgmAAQgJAAgJgCQgagFgUgUQgYgXgCggIgBgIIAAAIQgEAfgWAWQgaAbgmAAQglAAgbgbQgXgWgCgfIgBgIIAAAIQgDAggYAXQgbAbglAAQggAAgXgTIgJgIQgYgXgCggIgBgGIAAAGQgCAigYAXQgaAbgmAAQgmAAgagbg");
	this.shape_3.setTransform(3,19.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF99CC").s().p("AIVJlQAGgQAAgRQABARAGAQgAFhJlQAGgQAAgRQABARAGAQgACsJlQAGgPgBgRQABARAGAPgAgHJlQAFgOAAgQQABAQAEAOgAi7JlQAFgOAAgQQABAQAFAOgAlvJlQAFgOAAgQQABAQAFAOgAojJlQAFgOAAgQQABAQAFAOgAgcIFQgagagmAAQglAAgbAaQgZAbgBAkQAAgkgagbQgagagmAAQglAAgbAaQgZAbgBAkQAAgkgagbQgagagmAAQglAAgbAaQgZAbgBAkQAAgkgagbQgTgSgZgFIAAwAQAZgFATgUQAYgXACghIABAAQACAhAXAXQAbAbAlAAQAmAAAagbQAYgXACghIABAAQACAhAXAXQAbAbAlAAQAmAAAagbQAYgXACghIABAAQACAhAXAXQAbAbAlAAQAmAAAagbQAYgXACghIABAAQABAhAYAXQAaAbAlAAQAmAAAagbQAYgXACghIABAAQADAfAXAXIAJAIQAYATAfAAQAmAAAagbQAYgXADgfIABAAQADAeAWAXQAbAaAlAAQAmAAAagaQAXgXADgeIABAAQADAfAXAXQAUAUAaAFIAAP9QgaAFgUAUQgaAagBAlQAAgmgagZQgagagmAAQglAAgbAaQgZAZgBAmQgBglgagaQgagbgmABQgKgBgJACQgZAGgUATQgaAbgBAlQAAgjgagaQgagagmAAQglAAgaAaQgZAbgBAkQAAgkgagbg");
	this.shape_4.setTransform(3.05,21.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF66").s().p("AC4D5IAAgHIABAHgAAED5IAAgGIABAGgAivD5IAAgGIABAGgAgJDBIAAm4IBFAAIAAGWQgQAGgNANQgaAagBAlQAAgbgNgVgAjJCyIgNgLIAAmeIBLAAIAAGhIgKAIQgZAagBAlQAAglgagagACeCyIgNgLIAAmaIBGAAIAAGeIgEAEQgaAagBAmQAAgjgagag");
	this.shape_5.setTransform(2.35,-64.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bdayCake, new cjs.Rectangle(-76.2,-111.2,151.4,200.3), null);


(lib.clouds = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cloud_one
	this.instance = new lib.cloudOne();
	this.instance.setTransform(-116.95,16.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:2.8},0).wait(1).to({y:-10.45},0).wait(1).to({y:-23.7},0).wait(1).to({y:-36.95},0).wait(1).to({x:-121.7,y:-29.45},0).wait(1).to({x:-126.45,y:-21.95},0).wait(1).to({x:-131.2,y:-14.45},0).wait(1).to({x:-135.95,y:-6.95},0).wait(1).to({x:-128.6167,y:-25.2833},0).wait(1).to({x:-121.2833,y:-43.6167},0).wait(1).to({x:-113.95,y:-61.95},0).wait(1).to({x:-115.8071,y:-54.6643},0).wait(1).to({x:-117.6643,y:-47.3786},0).wait(1).to({x:-119.5214,y:-40.0929},0).wait(1).to({x:-121.3786,y:-32.8071},0).wait(1).to({x:-123.2357,y:-25.5214},0).wait(1).to({x:-125.0929,y:-18.2357},0).wait(1).to({x:-126.95,y:-10.95},0).wait(1).to({y:-21.95},0).wait(1).to({y:-32.95},0).wait(1).to({y:-43.95},0).wait(1).to({y:-54.95},0).wait(1).to({y:-65.95},0).wait(1));

	// cloud_two
	this.instance_1 = new lib.Cloud2();
	this.instance_1.setTransform(50.05,17.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:1.05},0).wait(1).to({y:-14.95},0).wait(1).to({y:-30.95},0).wait(1).to({y:-46.95},0).wait(1).to({x:55.05,y:-36.7},0).wait(1).to({x:60.05,y:-26.45},0).wait(1).to({x:65.05,y:-16.2},0).wait(1).to({x:70.05,y:-5.95},0).wait(1).to({y:-38.2833},0).wait(1).to({y:-70.6167},0).wait(1).to({y:-102.95},0).wait(1).to({y:-87.8071},0).wait(1).to({y:-72.6643},0).wait(1).to({y:-57.5214},0).wait(1).to({y:-42.3786},0).wait(1).to({y:-27.2357},0).wait(1).to({y:-12.0929},0).wait(1).to({y:3.05},0).wait(1).to({y:-9.35},0).wait(1).to({y:-21.75},0).wait(1).to({y:-34.15},0).wait(1).to({y:-46.55},0).wait(1).to({y:-58.95},0).wait(1));

	// cloud_three
	this.instance_2 = new lib.cloud3();
	this.instance_2.setTransform(-46.95,89.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:77.8},0).wait(1).to({y:66.55},0).wait(1).to({y:55.3},0).wait(1).to({y:44.05},0).wait(1).to({y:51.3},0).wait(1).to({y:58.55},0).wait(1).to({y:65.8},0).wait(1).to({y:73.05},0).wait(1).to({x:-38.95,y:48.7167},0).wait(1).to({x:-30.95,y:24.3833},0).wait(1).to({x:-22.95,y:0.05},0).wait(1).to({y:10.1929},0).wait(1).to({y:20.3357},0).wait(1).to({y:30.4786},0).wait(1).to({y:40.6214},0).wait(1).to({y:50.7643},0).wait(1).to({y:60.9071},0).wait(1).to({y:71.05},0).wait(1).to({x:-25.95,y:58.65},0).wait(1).to({x:-28.95,y:46.25},0).wait(1).to({x:-31.95,y:33.85},0).wait(1).to({x:-34.95,y:21.45},0).wait(1).to({x:-37.95,y:9.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.4,-140.9,350.4,268);


// stage content:
(lib.McClain_haiku = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {haiku:0,artwork:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var root = this;
		stage.enableMouseOver();
		
		this.toFrame02_btn.addEventListener("click",toFrame02);
		
		function toFrame02(){
			console.log("will go to frame 2");
			root.gotoAndStop("artwork"); 
		}
		
		var root = this;
		stage.enableMouseOver();
		
		this.line01_txt.addEventListener("click",changeLine01);
		
		function changeLine01(){
			console.log("will change line 1");
			root.line01_txt.text = line01;
		}
		
		var line01 = "I baked My Mom's Cake";
		
		
		this.line02_txt.addEventListener("click",changeLine02);
		
		function changeLine02(){
			console.log("will change line 2");
			root.line02_txt.text = line02;
		}
		
		var line02 = "We ate it in the red house";
		
		
		this.line03_txt.addEventListener("click",changeLine03);
		
		function changeLine03(){
			console.log("will change line 3");
			root.line03_txt.text = line03;
		}
		
		var line03 = "Happy Birthday Mom";
	}
	this.frame_1 = function() {
		this.stop();
		var root = this
		stage.enableMouseOver();
		
		this.toFrame01_btn.addEventListener("click", toFrame01);
		
		function toFrame01(){
			console.log("will go to frame 1");
			root.gotoAndStop("haiku")
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// buttons
	this.toFrame02_btn = new lib.circlebutton();
	this.toFrame02_btn.name = "toFrame02_btn";
	this.toFrame02_btn.setTransform(475.9,519.85);
	new cjs.ButtonHelper(this.toFrame02_btn, 0, 1, 2, false, new lib.circlebutton(), 3);

	this.toFrame01_btn = new lib.circlebutton();
	this.toFrame01_btn.name = "toFrame01_btn";
	this.toFrame01_btn.setTransform(405.9,130);
	new cjs.ButtonHelper(this.toFrame01_btn, 0, 1, 2, false, new lib.circlebutton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.toFrame02_btn}]}).to({state:[{t:this.toFrame01_btn}]},1).wait(1));

	// cake
	this.instance = new lib.bdayCake();
	this.instance.setTransform(362.25,441.7,1,1,0,0,0,-0.2,-11.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// mother
	this.instance_1 = new lib.happyMom();
	this.instance_1.setTransform(192,308.05,1,1,0,0,0,6.1,-52.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// house
	this.instance_2 = new lib.clouds();
	this.instance_2.setTransform(857.75,78.85,0.3809,0.5775,0,0,0,-22.7,52.1);

	this.instance_3 = new lib.redHouse();
	this.instance_3.setTransform(568.15,345.85,1,1,0,0,0,-105.1,-6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	// text
	this.line03_txt = new cjs.Text("Line three", "45px 'Gujarati Sangam MN'");
	this.line03_txt.name = "line03_txt";
	this.line03_txt.textAlign = "center";
	this.line03_txt.lineHeight = 65;
	this.line03_txt.lineWidth = 788;
	this.line03_txt.parent = this;
	this.line03_txt.setTransform(477.85,328.65);

	this.line02_txt = new cjs.Text("Line two", "45px 'Gujarati Sangam MN'");
	this.line02_txt.name = "line02_txt";
	this.line02_txt.textAlign = "center";
	this.line02_txt.lineHeight = 65;
	this.line02_txt.lineWidth = 788;
	this.line02_txt.parent = this;
	this.line02_txt.setTransform(473.85,243.7);

	this.line01_txt = new cjs.Text("Line one", "45px 'Gujarati Sangam MN'");
	this.line01_txt.name = "line01_txt";
	this.line01_txt.textAlign = "center";
	this.line01_txt.lineHeight = 65;
	this.line01_txt.lineWidth = 784;
	this.line01_txt.parent = this;
	this.line01_txt.setTransform(471.85,159.45);

	this.instance_4 = new lib.CachedBmp_2();
	this.instance_4.setTransform(237.95,34.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.line01_txt},{t:this.line02_txt},{t:this.line03_txt}]}).to({state:[]},1).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,102,102,0)").ss(1,1,1).p("EhPBg1uMCeDAAAMAAABrdMieDAAAg");
	this.shape.setTransform(475.875,321.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF1FEB","#D49657"],[0.035,0.737],-505.8,0,505.9,0).s().p("EhPBA1vMAAAhrdMCeDAAAMAAABrdg");
	this.shape_1.setTransform(475.875,321.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,51,102,0)").ss(8,1,1).p("EhXxAdhMAAAhXxMC6LAAAMAAAB0hMi6LAAAIAAmQEhXxAdhMCxbAAAIAAWgMixbAAAIqoAAIAA2gg");
	this.shape_2.setTransform(505.875,352.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006600").s().p("EhTZALQIqoAAIAA2fIKoAAMCxbAAAIAAWfg");
	this.shape_3.setTransform(477.875,613.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#1886C4","#D4FBA5"],[0.035,0.737],-595.8,0,595.8,0).s().p("EhdFA6RIAAmQMCxbAAAIAA2gMixbAAAMAAAhXxMC6LAAAMAAAB0hg");
	this.shape_4.setTransform(539.85,352.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(352.1,296.1,787.6,433.69999999999993);
// library properties:
lib.properties = {
	id: '41045293887048D5B03DE84BBCA39B83',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/McClain_haiku_atlas_1.png?1677618718233", id:"McClain_haiku_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['41045293887048D5B03DE84BBCA39B83'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;