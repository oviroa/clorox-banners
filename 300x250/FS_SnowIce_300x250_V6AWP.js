(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"FS_SnowIce_Spritesheet_v1.png", id:"FS_SnowIce_Spritesheet_v1"}
	]
};



// symbols:



(lib.FS_SnowIce_Spritesheet_v1 = function() {
	this.initialize(img.FS_SnowIce_Spritesheet_v1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1000);


(lib.whitemask = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A59TAQQn0ewn1QMApuAAAUAUbAjLgUbAGjQqxDvqaAAQqcAAqHjvg");
	this.shape.setTransform(158.2,141.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-4,332.5,291.2);


(lib.txt_thebestforyourcat = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4787AD").s().p("AHlA7IAAgSIAHABIAGgBIAEgEIADgHIgahAIAYAAIAMAkIABAIIAAAAIACgHIALglIAXAAIgaBFQgFAOgHAFQgIAGgLAAIgKgBgAPnAdQgEgCAAgGQAAgFAEgDQADgDAGAAQAGAAADADQADADAAAFQAAAGgDACQgEAEgFAAQgGAAgDgEgAinAdQgEgCAAgGQAAgFAEgDQADgDAGAAQAGAAADADQADADAAAFQAAAGgDACQgEAEgFAAQgGAAgDgEgANlAaQgFgFAAgLQAAgKAHgDQAIgFAOgBIALAAIAAgBQAAgIgIAAQgHAAgMAEIgGgOQALgHASAAQANABAHAGQAHAGAAAMIAAApIgQAAIgEgJIgBAAQgFAGgEACQgFACgIAAQgJAAgGgGgAN3AKQAAAGAHAAQAEAAADgCQADgEAAgDIAAgGIgFAAQgMABAAAIgAMpAYQgJgJAAgPQAAgQAJgJQAJgKARAAQAMAAAKAGIgHAQIgHgDIgIgBQgFABgDAEQgDAEAAAIQAAAOALAAQAKAAAKgGIAAASQgJAGgNAAQgQAAgIgIgAKCAaQgGgGAAgMIAAgqIAXAAIAAAjQAAAGACADQACAEAEAAQAGAAACgFQADgEAAgKIAAgdIAXAAIAABBIgSAAIgCgIIgCAAQgDAFgFACQgFACgHAAQgLAAgGgGgAI2AXQgJgKAAgNQAAgQAJgJQAJgKAQAAQAJAAAIAEQAHAFAFAIQAEAHAAALQAAAOgJAJQgJAJgQAAQgPAAgJgJgAJHgNQgCAEAAAJQAAAGACAEQACAFAGAAQAFAAACgFQACgEAAgGQAAgJgCgEQgCgEgGAAQgFAAgCAEgAFKAXQgJgKAAgNQAAgQAJgJQAJgKAQAAQAJAAAIAEQAHAFAFAIQAEAHAAALQAAAOgJAJQgJAJgQAAQgPAAgJgJgAFbgNQgCAEAAAJQAAAGACAEQACAFAGAAQAFAAACgFQACgEAAgGQAAgJgCgEQgCgEgGAAQgFAAgCAEgADFAaQgFgFAAgMIAAgZIgIAAIAAgJIAKgIIAGgNIAPAAIAAAMIAQAAIAAASIgQAAIAAAYQAAAGAGAAQAFAAAGgCIAAAQIgJAEIgJAAQgMAAgFgGgAB0AaQgFgFAAgLQAAgKAHgDQAHgFAOgBIALAAIAAgBQAAgIgIAAQgHAAgLAEIgHgOQAMgHASAAQAMABAHAGQAHAGAAAMIAAApIgQAAIgEgJIAAAAQgFAGgFACQgFACgHAAQgKAAgFgGgACGAKQAAAGAGAAQAFAAADgCQADgEAAgDIAAgGIgGAAQgLABAAAIgAAuAYQgJgJAAgPQAAgQAJgJQAIgKAQAAQAPAAAIAJQAIAHAAAPIAAAIIgpAAQABAFAEADQADAEAHAAIALgBIALgEIAAAQQgFADgGABIgOABQgQAAgKgIgABRgIQgBgFgCgDQgDgDgEAAQgEAAgDACQgDADAAAGIAUAAIAAAAgAhdAUQgLgLAAgTQAAgVAMgMQAMgLAVAAQAIAAAHABIANAEIgIASQgJgEgLAAQgKAAgGAHQgFAGAAANQAAAKAFAGQAFAGAJAAIAKgBIAAgMIgQAAIAAgRIAlAAIAAAsQgPAFgSAAQgUAAgKgMgAjdAgIgLgEIAAgSIAMAEIALACQAHgBAAgDQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAIgMgGQgJgDgEgDQgDgEAAgIQAAgJAHgFQAHgGANAAQAHABAFABIAMAEIgGAPIgJgDIgJgCQgFAAAAACQAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAIALAGIAKAFQAEADABABQACAFAAAEQAAAMgHAEQgIAGgNAAIgNAAgAkWAaQgFgFAAgMIAAgZIgIAAIAAgJIAKgIIAGgNIAPAAIAAAMIAQAAIAAASIgQAAIAAAYQAAAGAGAAQAFAAAGgCIAAAQIgJAEIgJAAQgMAAgFgGgAlnAaQgFgFAAgLQAAgKAHgDQAHgFAOgBIALAAIAAgBQAAgIgIAAQgHAAgLAEIgHgOQAMgHASAAQAMABAHAGQAHAGAAAMIAAApIgQAAIgEgJIAAAAQgFAGgFACQgFACgHAAQgKAAgFgGgAlVAKQAAAGAGAAQAFAAADgCQADgEAAgDIAAgGIgGAAQgLABAAAIgAmkAYQgIgJAAgPQAAgQAJgJQAJgKARAAQALAAAKAGIgGAQIgIgDIgHgBQgGABgDAEQgDAEAAAIQAAAOAMAAQAKAAAJgGIAAASQgJAGgMAAQgQAAgJgIgApGAXQgJgKAAgNQAAgQAJgJQAIgKAQAAQAKAAAHAEQAIAFAEAIQAEAHAAALQAAAOgJAJQgIAJgQAAQgPAAgJgJgAo2gNQgCAEAAAJQAAAGACAEQADAFAFAAQAFAAADgFQACgEAAgGQAAgJgCgEQgDgEgFAAQgFAAgDAEgArMAaQgFgFAAgMIAAgZIgIAAIAAgJIALgIIAFgNIAPAAIAAAMIARAAIAAASIgRAAIAAAYQAAAGAHAAQAEAAAHgCIAAAQIgJAEIgKAAQgLAAgGgGgAsdAaQgFgFAAgLQAAgKAHgDQAIgFAOgBIALAAIAAgBQAAgIgIAAQgHAAgMAEIgGgOQALgHASAAQANABAHAGQAHAGAAAMIAAApIgQAAIgEgJIgBAAQgFAGgEACQgFACgIAAQgJAAgGgGgAsLAKQAAAGAHAAQAEAAADgCQADgEAAgDIAAgGIgFAAQgMABAAAIgAtiAYQgJgJAAgPQAAgQAIgJQAJgKAQAAQAPAAAIAJQAIAHAAAPIAAAIIgpAAQAAAFAEADQAEAEAGAAIAMgBIALgEIAAAQQgGADgGABIgNABQgRAAgJgIgAtAgIQAAgFgDgDQgCgDgFAAQgEAAgCACQgDADgBAGIAUAAIAAAAgAvwAUQgLgLAAgTQAAgVAMgMQAMgLAVAAQAIAAAIABIAMAEIgHASQgJgEgMAAQgKAAgFAHQgGAGAAANQAAAKAFAGQAFAGAKAAIAJgBIAAgMIgPAAIAAgRIAlAAIAAAsQgPAFgSAAQgUAAgLgMgAOuAfIAAhBIARAAIAEALIABAAQADgFAFgEQAFgDAFAAIAGABIABAAIgCAWIgIgBQgHAAgEAEQgDADAAAGIAAAfgALMAfIAAhBIARAAIAEALIABAAQADgFAFgEQAFgDAFAAIAGABIABAAIgCAWIgIgBQgHAAgEAEQgDADAAAGIAAAfgAGQAfIAAhBIARAAIAEALIABAAQADgFAFgEQAFgDAFAAIAGABIABAAIgCAWIgIgBQgHAAgEAEQgDADAAAGIAAAfgAEWAfIAAgvIgJAAIAAgLIAKgGIAAgBQAAgNAFgGQAFgGAMAAIAJABIAJADIgFAOIgIgBQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgBAGIAAABIAOAAIAAASIgOAAIAAAvgAgOAfIAAhBIAPAAIAEALIABAAQADgFAFgEQAFgDAFAAIAGABIABAAIgCAWIgIgBQgHAAgEAEQgDADAAAGIAAAfgAoAAfIAAhBIARAAIADALIABAAQADgFAFgEQAGgDAFAAIAFABIACAAIgCAWIgIgBQgIAAgDAEQgDADAAAGIAAAfgAp6AfIAAgvIgJAAIAAgLIAJgGIAAgBQAAgNAGgGQAFgGAMAAIAIABIAKADIgFAOIgIgBQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAIgBAGIAAABIAOAAIAAASIgOAAIAAAvgAugAfIAAhBIARAAIADALIABAAQADgFAFgEQAGgDAFAAIAFABIACAAIgCAWIgIgBQgIAAgDAEQgDADAAAGIAAAfg");
	this.shape.setTransform(155.4,11.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.6,0,314,91.2);


(lib.txt_dontspinyourwheels = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4787AD").s().p("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");
	this.shape.setTransform(123.9,29.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,5.6,247.1,61.1);


(lib.txt_3 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#565A5C").s().p("AgPAbQgHgFgEgHQgEgHAAgIQAAgHAEgHQAFgHAGgFQAIgEAHAAQAHAAAIAEQAHAFAFAHQAEAHAAAHQAAAIgEAHQgFAHgGAFQgIAEgIAAQgHAAgIgEgAgMgWQgHAEgDAGQgEAGABAGQgBAHAEAGQADAGAHAEQAGAEAGAAQAGAAAHgEQAGgEAEgGQADgGAAgHQAAgGgDgGQgEgGgGgEQgGgDgHAAQgGAAgGADgAAIASIgIgPIgEAAIAAAPIgGAAIAAgjIAKAAQAGAAADADQADADAAAFQAAADgCADQgCAAgDACIALAQgAgEAAIAEAAQACAAACgBQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBAAQgCgCgCAAIgEAAg");
	this.shape.setTransform(141.6,50.3);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4686AD").s().p("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");
	this.shape_1.setTransform(95.3,24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#565A5C").s().p("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");
	this.shape_2.setTransform(95.9,78.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,191.1,134.5);


(lib.tire = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(10.6,1,1).p("AjRldQABDnB4C6QBsCsC+Bu");
	this.shape.setTransform(165,552.9);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0EFF1").s().p("AiPIqIgZgGIgXgKIgMgDIgNgHIgagJIgtgaQhDgpgvgwQininAAjtQAAjnCniqQB5h5CtgkQChggCdA9IAGADIAKAEQCaBDBcCNQBgCQAACqQAADtimCnQinCmjsAAQhRAAg+gQg");
	this.shape_1.setTransform(242.3,509.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A3A3A").s().p("AguC2IgUgGIgcgOQgVgMgQgRQg4g3AAhOQAAhMA3g4QAogoA4gLQA1gLAzAUIADABIACABQAzAWAfAuQAgAvABA5QAABNg3A3Qg4A3hNABQgWAAgYgGg");
	this.shape_2.setTransform(242.5,510,6.4,6.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(122,389.5,241,241.2);


(lib.snowwhite = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah8BDQg7gGgFgYQgFgYA0gaQA1gcBOgQQBNgPA7AGQA7AGAEAYQAFAYg0AaQg0AchPAPQg3AMgvAAQgRAAgQgCg");
	this.shape.setTransform(433,35.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQA2QgygQgegbQgfgZAIgXQAGgWApgFQAogFAxAQQAyAQAeAbQAfAZgIAWQgGAXgpAFIgUABQggAAglgMg");
	this.shape_1.setTransform(194,28.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgmBAO3QxZgdi/g8Qh2gmiNn0Qg3jDgmjDQgki+gChbQgBgzAMgwQAMguAXgpQCWlSFphLQEQg6G9BbIBxAZQBcAdB3goIBkgmQA8gXAqgJQAYgGApACIBBAEQBGAECVA+QCFA3BUgJQA8gKAdgJQEehVFRBBQBaASB4AjQBaAaAMgCQELg5CFgOQDUgVC9AmIBZgYQC4guCJADQCwACCXBPQA2AbBSgLQA6gIBTgdQA5gOAqgFQA0gGAvAEQAsADAjAEQAjAEAtAHQA0AKA3ANQAmAMApACQAiADArgFQBhgLC5g0QCmgkByAxQAxAPBAAZQAjAWAiANQAiAMAjAFQAcAMAdgFQAbgEAQgQQEDicD4A/QDzA+CgD7QANAaAoAPQAZAIAzAJIBsAhQBFAWB0BpQBqBhAuBHQBqBejlELQgcAggrB8QgaBJg3CuQhsFKhCAKQjSAhxTAYQw5AY0WACIj5AAQzkAAtugXg");
	this.shape_2.setTransform(408,113.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,0,982.8,210.7);


(lib.snowdrifts = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0F3FD").s().p("AEyLGQkXgxjwjRQjKiuiekMQiBjahIjjQg/jJAThFQAOg3B4BBQBTAuDKCTQEJDCBeA/QDRCOCNA5QChBACTCUQCSCVAsCMQAxCchsBHQhMAyiQAAQhgAAh/gWg");
	this.shape.setTransform(787.5,110.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CEE8F9").s().p("ADURoQnOgGmPgRQmNgRg8gRQKSn7BWm8QBFllk0kzQjejemdi6Qh8g5ieg7QiWg5gLgFQKWA3LeEZQIhDRGeECQCIBUDDCkQDwDJCmDBQDPDyAvC2QA4Dai1ByQhgA8tLAAQizAAjUgDg");
	this.shape_1.setTransform(1147,115);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CEE8F9").s().p("AhZRpQ0OgEv1gNQwegOg7gQQP4j5M7mDQKrlAHyl+QGRk3C+kVQBQhyAUhOQAUhKgngTQKdA4IRC+QF2CHGGDyQCfBjD0C5QFFD2DlDfQEnEhBQDKQBhD1jlBjUgBuAAwgmFAAAIt7gBg");
	this.shape_2.setTransform(635.2,114.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CEE8F9").s().p("AkTRpQshgEqAgOQqVgOg7gQQR7n1Hzm7QGVlmglk2QgbjlkIi8QhYg+hxg5IiHg/QDkAHIRDNQDDBLC6BUQCmBKBDAmQDIByD5DmIDBC0QBrBjBOA5QDOCcC8ANQDkAREPiyQEtjDBIBqQA8BWhmETQhYDsibD7QiYD2hMAjQhsAy3lAAIowgCg");
	this.shape_3.setTransform(342,114.9);

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7FCFF").s().p("EhrGARWIAAzdQBIiLE6jBQEkizGPijQGTimFVhPQF2hWCuAxQFHBNExCOQBtAyCNBLIDmB9QEQCQDSBAQEgBXFcAFQEuAEErh/QDGhUEijCQFAjXBvg3QDph1DFATQI5BNFaBTQDkA2C2BJQC0BIBEAQQCVAjEcAIQCvAFCshJQBjgqC8h2QCzhxBkgmQChg+CgAXQICBMIHCbQEsBaIgC7QHqCgGJBJQISBhJtAAQA4FjkVIcQiLEOiWDGg");
	this.shape_4.setTransform(685.6,111.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1371.2,228.1);


(lib.snowdot = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglAmQgQgPgBgXQABgWAQgPQAQgRAVABQAWgBARARQAPAPAAAWQAAAXgPAPQgRAQgWABQgVgBgQgQg");
	this.shape.setTransform(5.5,5.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11,11);


(lib.snowblue = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah8BDQg7gGgFgYQgFgYA0gaQA1gcBOgQQBNgPA7AGQA7AGAEAYQAFAYg0AaQg0AchPAPQg3AMgvAAQgRAAgQgCg");
	this.shape.setTransform(433,35.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQA2QgygQgegbQgfgZAIgXQAGgWApgFQAogFAxAQQAyAQAeAbQAfAZgIAWQgGAXgpAFIgUABQggAAglgMg");
	this.shape_1.setTransform(194,28.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B7D9F0").s().p("EgmBAO3QxZgdi/g8Qh2gmiNn0Qg3jDgmjDQgki+gChbQgBgzAMgwQAMguAXgpQCWlSFphLQEQg6G9BbIBxAZQBcAdB3goIBkgmQA8gXAqgJQAYgGApACIBBAEQBGAECVA+QCFA3BUgJQA8gKAdgJQEehVFRBBQBaASB4AjQBaAaAMgCQELg5CFgOQDUgVC9AmIBZgYQC4guCJADQCwACCXBPQA2AbBSgLQA6gIBTgdQA5gOAqgFQA0gGAvAEQAsADAjAEQAjAEAtAHQA0AKA3ANQAmAMApACQAiADArgFQBhgLC5g0QCmgkByAxQAxAPBAAZQAjAWAiANQAiAMAjAFQAcAMAdgFQAbgEAQgQQEDicD4A/QDzA+CgD7QANAaAoAPQAZAIAzAJIBsAhQBFAWB0BpQBqBhAuBHQBqBejlELQgcAggrB8QgaBJg3CuQhsFKhCAKQjSAhxTAYQw5AY0WACIj5AAQzkAAtugXg");
	this.shape_2.setTransform(408,113.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,0,982.8,210.7);


(lib.road = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939CA3").s().p("A91KJIAA0RMA7qAAAIAAURg");
	this.shape.setTransform(191,65);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,382,130);


(lib.logo = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkmEMIAAoXIJNAAIAAIXg");
	mask.setTransform(169.6,26.8);

	// Layer 1
	this.instance = new lib.FS_SnowIce_Spritesheet_v1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(140,0,59.2,53.6);


(lib.littersmaller = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al6CPIAAkeIL1AAIAAEeg");
	mask.setTransform(135.4,68.2);

	// Layer 1
	this.instance = new lib.FS_SnowIce_Spritesheet_v1();
	this.instance.setTransform(0,0,0.3,0.3);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(97.4,53.8,76,28.8);


(lib.ice = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkPBzQhggkAAg8QAAg8Btg1QBxg3CRAAQCXABBvAuQByAwgIA/QgHBDhoAmQhlAjimABQilgBhggig");
	this.shape.setTransform(36.9,77);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjWBLQhLgfAAgsQAAgrBLgfQBTgiCMgBQCDABBOAiQBHAfABArQABAthGAeQhOAjiGgBQiMABhTgjg");
	this.shape_1.setTransform(477.8,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AGgJdI1cgBQq9AAk/iXQkaiGgIkJQgEiMBVh7QBSh4CdhZQFGi6H4AAIHAABQFpABD7gCQGzgEC+BGQBMAdAzAsQAeAbAsA6QAsA7AfAbQA0AvBNAeQDDBNG7AGQEKADC7ByQCuBnAZCQQAZCVibBmQiwB0lkAHQhiACnwAAIpQgBg");
	this.shape_2.setTransform(319.5,60.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,546.3,121.2);


(lib.hero = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EALeA1GMAAAgkQIUuAAMAAAAkQg");
	mask.setTransform(206,339.9);

	// Layer 1
	this.instance = new lib.FS_SnowIce_Spritesheet_v1();
	this.instance.setTransform(276.1,451.2,0.5,0.5);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(279.5,451.2,132.6,228.5);


(lib.dot = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAKIAAgTIAVAAIAAATg");
	this.shape.setTransform(-22.9,12.4,2.081,2.211);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAMIAAgXIAZAAIAAAXg");
	this.shape_1.setTransform(2.2,-20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAOIAAgbIAfAAIAAAbg");
	this.shape_2.setTransform(4.8,2.9,1,1,-53);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.3,-21.5,32.3,36.4);


(lib.cta = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACYAcQgMgMAAgQQAAgHAEgHQADgHAFgGQAMgLARAAQARAAAMALQAFAGADAHQADAHAAAHQAAAIgDAHQgDAHgFAGQgMALgRAAQgRAAgMgLgACsgWQgEACgDAEQgHAHAAAJQAAAKAHAHQADADAEACQAEACAFAAQAKAAAGgHQAHgHAAgKQAAgJgHgHQgGgHgKAAQgFAAgEABgAE7AmIAAhLIA4AAIAAAQIgnAAIAAAPIAiAAIAAANIgiAAIAAAQIAnAAIAAAPgAEZAmIgRgYIgLAAIAAAYIgRAAIAAhLIAcAAQAKAAAGACQAHABADADQAIAGAAAOQAAAJgEAEQgDAGgIADIATAbgAD9AAIAMAAIAHAAIAFgCQADgDABgGIgBgFIgDgEQgDgCgJAAIgMAAgABuAmIAAguIgVAoIgLAAIgVgoIAAAuIgRAAIAAhLIAYAAIATApIAUgpIAYAAIAABLgAgWAmIglguIAAAuIgRAAIAAhLIAQAAIAmAwIAAgwIARAAIAABLgAhuAmIgRgYIgMAAIAAAYIgRAAIAAhLIAdAAQAJAAAHACQAHABADADQAIAGAAAOQAAAJgEAEQgDAGgIADIAUAbgAiLAAIANAAIAHAAIAFgCQAEgDgBgGIgBgFIgCgEQgEgCgHAAIgOAAgAi3AmIgHgQIgfAAIgIAQIgSAAIAhhLIARAAIAhBLgAjEAHIgJgVIgKAVIATAAgAk1AmIAAhLIA4AAIAAAQIgnAAIAAAPIAjAAIAAANIgjAAIAAAQIAoAAIAAAPgAlzAmIAAhLIARAAIAAA8IAiAAIAAAPg");
	this.shape.setTransform(51.9,11.5);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4986AD").s().p("AnZB5QgzABgkglQgjgjAAgyQAAgxAjgkQAkgjAzgBIOzAAQAyABAkAjQAkAkAAAxQAAAzgkAiQgjAlgzgBg");
	this.shape_1.setTransform(51.2,12.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.5,0,119.3,44.9);


(lib.bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5F0FF").s().p("EhMxA/kMAAAh/IMCZjAAAMAAAB/Ig");
	this.shape.setTransform(491.4,406.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,982.9,813.8);


(lib.snowsprayANIM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.snowdot();
	this.instance.setTransform(7,11.5,1,1,0,0,0,5.5,5.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({x:104,y:-63.5},11).to({_off:true},1).wait(4));

	// Layer 3
	this.instance_1 = new lib.snowdot();
	this.instance_1.setTransform(10,10.5,1.1,1.1,0,0,0,5.5,5.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({x:103,y:-78.5},12).to({_off:true},1).wait(7));

	// Layer 2
	this.instance_2 = new lib.snowdot();
	this.instance_2.setTransform(6,8.5,1.3,1.3,0,0,0,5.5,5.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({x:101,y:-48.5},12).to({_off:true},1).wait(10));

	// Layer 1
	this.instance_3 = new lib.snowdot();
	this.instance_3.setTransform(5.5,5.5,1,1,0,0,0,5.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:127.5,y:-74.5},13).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11,11);


(lib.snowdriftALL = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.snowdrifts();
	this.instance.setTransform(-302.9,98.7,0.525,0.717,0,0,0,685.7,114.1);

	this.instance_1 = new lib.snowdrifts();
	this.instance_1.setTransform(360.3,98.7,0.525,0.717,0,0,0,685.7,114.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-663.2,16.8,1383.6,163.6);


(lib.snow = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.snowblue();
	this.instance.setTransform(-360.1,113.3,0.932,1,0,0,180,486.5,105.4);

	this.instance_1 = new lib.snowblue();
	this.instance_1.setTransform(311.7,113.3,0.932,1,0,0,180,486.5,105.4);

	// Layer 1
	this.instance_2 = new lib.snowwhite();
	this.instance_2.setTransform(-140.5,79.6,1.019,1.019,0,0,0,488.9,93.8);

	this.instance_3 = new lib.snowwhite();
	this.instance_3.setTransform(580.7,79.6,1.019,1.019,0,0,0,488.9,93.8);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-671.7,0,1590.9,218.6);


(lib.roadfull = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ice();
	this.instance.setTransform(308.3,65.3,0.403,0.448,0,0,180,273.2,60.6);

	this.instance_1 = new lib.ice();
	this.instance_1.setTransform(677.3,65.3,0.637,0.637,0,0,0,273.1,60.6);

	// Layer 1
	this.instance_2 = new lib.road();
	this.instance_2.setTransform(-156,65,6.159,1,0,0,0,191.2,65);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1333.6,0,2352.6,130);


(lib.litter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnyDPIAAmeIPmAAIAAGeg");
	var mask_graphics_2 = new cjs.Graphics().p("AnzDPIAAmeIPnAAIAAGeg");
	var mask_graphics_4 = new cjs.Graphics().p("AnzDPIAAmeIPmAAIAAGeg");
	var mask_graphics_6 = new cjs.Graphics().p("AnzDPIAAmeIPmAAIAAGeg");
	var mask_graphics_8 = new cjs.Graphics().p("AnzDPIAAmeIPmAAIAAGeg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-31.8,y:4.4}).wait(2).to({graphics:mask_graphics_2,x:-23.8,y:4.4}).wait(2).to({graphics:mask_graphics_4,x:-15.8,y:4.4}).wait(2).to({graphics:mask_graphics_6,x:-7.8,y:4.4}).wait(2).to({graphics:mask_graphics_8,x:8.2,y:4.4}).wait(2).to({graphics:null,x:0,y:0}).wait(2));

	// Layer 1
	this.instance = new lib.littersmaller();
	this.instance.setTransform(75.6,95,1,1,0,0,180,90,150);

	this.instance_1 = new lib.littersmaller();
	this.instance_1.setTransform(-2.8,91.8,1,1,0,0,0,90,150);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.8,-16.4,100,41.6);


(lib.carmovnigtireANIM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.instance = new lib.tire();
	this.instance.setTransform(376.7,263.7,0.168,0.168,0,0,0,241.9,509.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:510,rotation:360},20).wait(1));

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2.1).p("AgVChIAeAAIDuAAIHvAAQAYAAAHgXQAHgXgTgOIjrikQijhhi+AAIi+AAIi9AAQg3ABg1AKQgmAHgkALQhiAehWA5Ii9CSQgSAPAIAWQAHAWAYAAIByAAIEeAAg");
	this.shape.setTransform(268.6,206.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#11658D").ss(2.1).p("AAAFjIAAmLIAAgLIAAkv");
	this.shape_1.setTransform(269.6,227.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7DBDC").s().p("ABMChIAAgLIAAALIggAAIALgLIAVAAIA0AAIAAhJIDmjjQBpASBgAyIj1DzgAouChIE4k2IAGgGQAugFAlAAIATAAIC7AAIgKAKIgTAAIAAASIkkElgAj2iVQA1gKA3gBQg3ABg1AKg");
	this.shape_2.setTransform(261.9,206.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(21));

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#46B3DC").s().p("Ag0CXIAAktIBqAAIAAEtg");
	this.shape_3.setTransform(269.4,206.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(21));

	// Isolation Mode
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B2B6BD").s().p("AgZAAIAzAAIAAAAg");
	this.shape_4.setTransform(168.9,270);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#11658D").ss(2.1).p("AGJDIImHAAQgTAAgQgNQgPgNgEgVQgMhCgqg0Qgqgyg9gbIgHgCQg1gVg3ACQgYABgRgQQgRgRAAgYIAAha");
	this.shape_5.setTransform(230.2,243);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#11658D").ss(2.1).p("AF5jcIAAF2QAAAYgQAQQgRARgYAAIrDAA");
	this.shape_6.setTransform(308.4,241.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4E5D68").s().p("AhOAwQgWgBgCgPQgCgOARgQIAcgTQAYgSAHgGQAGgFAJgBIAqAAQAeAAAWAWQAWAVAAAdIAAAXg");
	this.shape_7.setTransform(200.9,217.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4E5D68").s().p("AguAwIAAhCQAAgMAKgIQAJgIAOgBIAAAAQAPAAANAKQANAJAEAPIAPA9g");
	this.shape_8.setTransform(263.5,217.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AVDBgQgQAAgNgJQgNgKgEgPQgdh2hzgkQgBAAgBgBQAAAAAAAAQAAgBAAAAQABAAABgBIAKgBQAzABAhAKQA3AQAnArQAnAqABBQIgJABIgdgBgA1og4QAAgMACgKICfAAQAPAAAHAOQAHAOgJAMIgkAvQgYAhgoASQgbAMg2AMg");
	this.shape_9.setTransform(279.5,236.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#11658D").s().p("AQPBUIA+AAIAAAiQAAAagSASQgSATgaAAgAkniMQgIAAgGgGQgFgFAAgJQAAgIAFgGQAGgGAIAAIBzAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAgAw4iMQgJAAgFgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIByAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAg");
	this.shape_10.setTransform(308.7,248.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(21));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4E5D68").s().p("AhQAfIAdg8ICDA8g");
	this.shape_11.setTransform(335.7,218.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4E5D68").s().p("AgoAzIAohZQAEgIAIgDQAIgCAIADQAIAEADAIQAEAIgEAIIgiBHg");
	this.shape_12.setTransform(328.2,216.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#709098").s().p("ArkAbQgWAAgIgUQgJgSAOgPIX7AAQAOAPgIASQgIAUgWAAg");
	this.shape_13.setTransform(268.6,220.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#99B0B5").s().p("ArkChQgYAAgHgWQgIgWASgPIC9iSQBWg5BigeQBigdBmAAIFpAAQC+AACjBhIDrCkQATAOgHAXQgHAXgYAAg");
	this.shape_14.setTransform(268.6,206.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(21));

	// Layer 5
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#46B3DC").s().p("AzYC+QgTAAgRgIIgPgIIgNgLIgMgOIgPgxICCAAQAWgBAAgVQAAgXgWAAIiCAAIAAg/QA+gSApgYQAzgeAiguIAug/MAiCAAAQCJAABFBmQAtBEAAA+IAACSIhZAAQABgGAAg+QAAhCgkg3Qgkgzg7gaIgDgCIgDAAQg8gYg/ANQhBAMgvAvQggAfgQAoQgQApABAsIABBAI1CAAIAAhEQAAhCglg3Qgkgzg7gaIgDgCIgDAAQhNgkhRASQhJAPgzAzQgdAcgLAmQgLAjgBA6IAAA9IAZABIg3AAIgNAAIi7AAIgCAAgAnrgRQAAATAVAAISQAAQAWAAAAgTQAAgXgWAAIyQAAQgVAAAAAXg");
	this.shape_15.setTransform(274.2,251);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#71D0F4").s().p("ATmGrIAAiSQAAhAgthEQhFhmiJAAMgiCAAAIguA/QgiAugyAeQgqAYg+ASIAAi+QAAgxAkgkQAkglAzAAIEGgcIEOizQBjhCBzgiQBygjB4AAIFGAAQDdAADABwIFMDFIGuBAQBlAVA6BHQA4BEAABgIAAB0QAAAtgfAfQggAggsAAgA1mGRQgHgHgEgHIALAOIAOALQgHgFgHgGgA2BFSIAAgDIAAgqICDAAQAVAAAAAXQAAAVgVABgAojDwQgWAAAAgVQAAgXAWAAISQAAQAVAAAAAXQAAAVgVAAg");
	this.shape_16.setTransform(282,227.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(21));

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3795B8").s().p("AyCCVIAAkqMAkFAAAIAAEqg");
	this.shape_17.setTransform(288,255);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(140.9,184.5,282.1,99.6);


(lib.car = function() {
	this.initialize();

	// Layer 10
	this.instance = new lib.tire();
	this.instance.setTransform(376.7,263.7,0.168,0.168,0,0,0,241.9,509.8);

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2.1).p("AgVChIAeAAIDuAAIHvAAQAYAAAHgXQAHgXgTgOIjrikQijhhi+AAIi+AAIi9AAQg3ABg1AKQgmAHgkALQhiAehWA5Ii9CSQgSAPAIAWQAHAWAYAAIByAAIEeAAg");
	this.shape.setTransform(268.6,206.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#11658D").ss(2.1).p("AAAFjIAAmLIAAgLIAAkv");
	this.shape_1.setTransform(269.6,227.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7DBDC").s().p("ABMChIAAgLIAAALIggAAIALgLIAVAAIA0AAIAAhJIDmjjQBpASBgAyIj1DzgAouChIE4k2IAGgGQAugFAlAAIATAAIC7AAIgKAKIgTAAIAAASIkkElgAj2iVQA1gKA3gBQg3ABg1AKg");
	this.shape_2.setTransform(261.9,206.7);

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#46B3DC").s().p("Ag0CXIAAktIBqAAIAAEtg");
	this.shape_3.setTransform(269.4,206.7);

	// Isolation Mode
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B2B6BD").s().p("AgZAAIAzAAIAAAAg");
	this.shape_4.setTransform(168.9,270);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#11658D").ss(2.1).p("AGJDIImHAAQgTAAgQgNQgPgNgEgVQgMhCgqg0Qgqgyg9gbIgHgCQg1gVg3ACQgYABgRgQQgRgRAAgYIAAha");
	this.shape_5.setTransform(230.2,243);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#11658D").ss(2.1).p("AF5jcIAAF2QAAAYgQAQQgRARgYAAIrDAA");
	this.shape_6.setTransform(308.4,241.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4E5D68").s().p("AhOAwQgWgBgCgPQgCgOARgQIAcgTQAYgSAHgGQAGgFAJgBIAqAAQAeAAAWAWQAWAVAAAdIAAAXg");
	this.shape_7.setTransform(200.9,217.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4E5D68").s().p("AguAwIAAhCQAAgMAKgIQAJgIAOgBIAAAAQAPAAANAKQANAJAEAPIAPA9g");
	this.shape_8.setTransform(263.5,217.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AVDBgQgQAAgNgJQgNgKgEgPQgdh2hzgkQgBAAgBgBQAAAAAAAAQAAgBAAAAQABAAABgBIAKgBQAzABAhAKQA3AQAnArQAnAqABBQIgJABIgdgBgA1og4QAAgMACgKICfAAQAPAAAHAOQAHAOgJAMIgkAvQgYAhgoASQgbAMg2AMg");
	this.shape_9.setTransform(279.5,236.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#11658D").s().p("AQPBUIA+AAIAAAiQAAAagSASQgSATgaAAgAkniMQgIAAgGgGQgFgFAAgJQAAgIAFgGQAGgGAIAAIBzAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAgAw4iMQgJAAgFgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIByAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAg");
	this.shape_10.setTransform(308.7,248.3);

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4E5D68").s().p("AhQAfIAdg8ICDA8g");
	this.shape_11.setTransform(335.7,218.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4E5D68").s().p("AgoAzIAohZQAEgIAIgDQAIgCAIADQAIAEADAIQAEAIgEAIIgiBHg");
	this.shape_12.setTransform(328.2,216.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#709098").s().p("ArkAbQgWAAgIgUQgJgSAOgPIX7AAQAOAPgIASQgIAUgWAAg");
	this.shape_13.setTransform(268.6,220.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#99B0B5").s().p("ArkChQgYAAgHgWQgIgWASgPIC9iSQBWg5BigeQBigdBmAAIFpAAQC+AACjBhIDrCkQATAOgHAXQgHAXgYAAg");
	this.shape_14.setTransform(268.6,206.7);

	// Layer 5
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#46B3DC").s().p("AzYC+QgTAAgRgIIgPgIIgNgLIgMgOIgPgxICCAAQAWgBAAgVQAAgXgWAAIiCAAIAAg/QA+gSApgYQAzgeAiguIAug/MAiCAAAQCJAABFBmQAtBEAAA+IAACSIhZAAQABgGAAg+QAAhCgkg3Qgkgzg7gaIgDgCIgDAAQg8gYg/ANQhBAMgvAvQggAfgQAoQgQApABAsIABBAI1CAAIAAhEQAAhCglg3Qgkgzg7gaIgDgCIgDAAQhNgkhRASQhJAPgzAzQgdAcgLAmQgLAjgBA6IAAA9IAZABIg3AAIgNAAIi7AAIgCAAgAnrgRQAAATAVAAISQAAQAWAAAAgTQAAgXgWAAIyQAAQgVAAAAAXg");
	this.shape_15.setTransform(274.2,251);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#71D0F4").s().p("ATmGrIAAiSQAAhAgthEQhFhmiJAAMgiCAAAIguA/QgiAugyAeQgqAYg+ASIAAi+QAAgxAkgkQAkglAzAAIEGgcIEOizQBjhCBzgiQBygjB4AAIFGAAQDdAADABwIFMDFIGuBAQBlAVA6BHQA4BEAABgIAAB0QAAAtgfAfQggAggsAAgA1mGRQgHgHgEgHIALAOIAOALQgHgFgHgGgA2BFSIAAgDIAAgqICDAAQAVAAAAAXQAAAVgVABgAojDwQgWAAAAgVQAAgXAWAAISQAAQAVAAAAAXQAAAVgVAAg");
	this.shape_16.setTransform(282,227.2);

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3795B8").s().p("AyCCVIAAkqMAkFAAAIAAEqg");
	this.shape_17.setTransform(288,255);

	this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(140.9,184.5,282.1,99.6);


(lib.CAMERAanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.snow();
	this.instance.setTransform(34.7,363.9,1.344,1.344,0,0,0,459.6,109.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180).to({x:372.2},20,cjs.Ease.get(-1)).to({x:777.1},41,cjs.Ease.get(1)).wait(4).to({scaleX:1.38,scaleY:1.38,y:363.5},0).to({scaleX:1.74,scaleY:1.74,y:381.3},11).wait(10));

	// Layer 9
	this.instance_1 = new lib.snowsprayANIM("synched",0,false);
	this.instance_1.setTransform(225,170.5,0.8,0.8,0,0,0,5.5,5.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},0).to({_off:true},28).wait(10).to({_off:false},0).wait(201));

	// Layer 8
	this.instance_2 = new lib.snowsprayANIM("synched",0,false);
	this.instance_2.setTransform(222.5,164.5,1,1,0,0,0,5.5,5.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({_off:true},30).wait(8).to({_off:false},0).wait(203));

	// tire
	this.instance_3 = new lib.tire();
	this.instance_3.setTransform(162,152.1,0.5,0.5,0,0,0,242,510);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({rotation:-1080},25,cjs.Ease.get(1)).wait(12).to({rotation:-2160},22,cjs.Ease.get(1)).wait(97).to({rotation:-2520},16,cjs.Ease.get(-1)).to({rotation:-3240,x:-575.8},28,cjs.Ease.get(-1)).wait(42));

	// car
	this.instance_4 = new lib.car();
	this.instance_4.setTransform(-65.3,55.2,2.788,2.788,0,0,180,278.4,229.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({x:-71.8},8,cjs.Ease.get(-1)).to({x:-65.3},17,cjs.Ease.get(1)).wait(12).to({x:-71.3},6,cjs.Ease.get(-1)).to({x:-65.3},16,cjs.Ease.get(1)).to({_off:true},97).wait(86));

	// car
	this.instance_5 = new lib.carmovnigtireANIM();
	this.instance_5.setTransform(-76.9,68.2,2.788,2.788,0,0,180,281.9,234.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(180).to({_off:false},0).wait(16).to({x:-810.1},28,cjs.Ease.get(-1)).to({_off:true},1).wait(41));

	// litter
	this.instance_6 = new lib.litter("synched",0,false);
	this.instance_6.setTransform(25.1,187.2,2.6,2.6,0,0,0,3.5,3.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(121).to({_off:false},0).wait(59).to({startPosition:11},0).to({x:411.4},18,cjs.Ease.get(-1)).to({_off:true},1).wait(67));

	// Layer 3
	this.instance_7 = new lib.roadfull();
	this.instance_7.setTransform(7.7,191,1,1,0,0,0,509.5,65);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(180).to({x:495.2},20,cjs.Ease.get(-1)).to({x:1080.1},41,cjs.Ease.get(1)).wait(4).to({y:199.8},0).to({y:338.8},11).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1835.4,-70.4,2487.6,581.2);


(lib.blizzardpart = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.dot();
	this.instance.setTransform(90.4,81.6,1,1,0,0,0,4,4);

	this.instance_1 = new lib.dot();
	this.instance_1.setTransform(37.6,142.4,1,1,0,0,0,4,4);

	this.instance_2 = new lib.dot();
	this.instance_2.setTransform(40,169.6,1,1,0,0,0,4,4);

	this.instance_3 = new lib.dot();
	this.instance_3.setTransform(-49.6,135.2,1,1,0,0,0,4,4);

	this.instance_4 = new lib.dot();
	this.instance_4.setTransform(-39.2,187.2,1,1,0,0,0,4,4);

	this.instance_5 = new lib.dot();
	this.instance_5.setTransform(248.8,90.4,1,1,0,0,0,4,4);

	this.instance_6 = new lib.dot();
	this.instance_6.setTransform(263.2,68.8,1,1,0,0,0,4,4);

	this.instance_7 = new lib.dot();
	this.instance_7.setTransform(230.4,64,1,1,0,0,0,4,4);

	this.instance_8 = new lib.dot();
	this.instance_8.setTransform(176.8,48.8,1,1,0,0,0,4,4);

	this.instance_9 = new lib.dot();
	this.instance_9.setTransform(145.6,75.2,1,1,0,0,0,4,4);

	this.instance_10 = new lib.dot();
	this.instance_10.setTransform(247.2,35.2,1,1,0,0,0,4,4);

	this.instance_11 = new lib.dot();
	this.instance_11.setTransform(129.6,43.2,1,1,0,0,0,4,4);

	this.instance_12 = new lib.dot();
	this.instance_12.setTransform(175.2,4,1,1,0,0,0,4,4);

	this.instance_13 = new lib.dot();
	this.instance_13.setTransform(71.2,28,1,1,0,0,0,4,4);

	this.instance_14 = new lib.dot();
	this.instance_14.setTransform(44.8,90.4,1,1,0,0,0,4,4);

	this.instance_15 = new lib.dot();
	this.instance_15.setTransform(4,122.4,1,1,0,0,0,4,4);

	this.instance_16 = new lib.dot();
	this.instance_16.setTransform(8,89.6,1,1,0,0,0,4,4);

	this.instance_17 = new lib.dot();
	this.instance_17.setTransform(190.4,116.8,1,1,0,0,0,4,4);

	this.instance_18 = new lib.dot();
	this.instance_18.setTransform(203.2,95.2,1,1,0,0,0,4,4);

	this.instance_19 = new lib.dot();
	this.instance_19.setTransform(115.2,104,1,1,0,0,0,4,4);

	this.instance_20 = new lib.dot();
	this.instance_20.setTransform(84.8,176);

	this.instance_21 = new lib.dot();
	this.instance_21.setTransform(92.8,154.4,1,1,0,0,0,4,4);

	this.instance_22 = new lib.dot();
	this.instance_22.setTransform(51.2,137.6,1,1,0,0,0,4,4);

	this.instance_23 = new lib.dot();
	this.instance_23.setTransform(51.2,210.4,1,1,0,0,0,4,4);

	this.instance_24 = new lib.dot();
	this.instance_24.setTransform(42.4,225.6,1,1,0,0,0,4,4);

	this.instance_25 = new lib.dot();
	this.instance_25.setTransform(163.2,166.4,1,1,0,0,0,4,4);

	this.instance_26 = new lib.dot();
	this.instance_26.setTransform(281.6,123.2,1,1,0,0,0,4,4);

	this.instance_27 = new lib.dot();
	this.instance_27.setTransform(207.2,132,1,1,0,0,0,4,4);

	this.instance_28 = new lib.dot();
	this.instance_28.setTransform(133.6,127.2,1,1,0,0,0,4,4);

	this.instance_29 = new lib.dot();
	this.instance_29.setTransform(102.4,162.4,1,1,0,0,0,4,4);

	this.instance_30 = new lib.dot();
	this.instance_30.setTransform(104,216,1,1,0,0,0,4,4);

	this.instance_31 = new lib.dot();
	this.instance_31.setTransform(124,182.4,1,1,0,0,0,4,4);

	this.addChild(this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78.9,-21.5,363.5,258);


(lib.blizzardANIM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.blizzardpart();
	this.instance.setTransform(-105.6,-95.6,1,1,0,0,180,142.8,114.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:36.2,skewY:216.2,x:446.5,y:383.2},32,cjs.Ease.get(-0.35)).wait(26));

	// Layer 2
	this.instance_1 = new lib.blizzardpart();
	this.instance_1.setTransform(-101.8,-25.1,1,1,0,0,0,142.8,114.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({rotation:165.2,x:310.8,y:414.6},24,cjs.Ease.get(-0.24)).to({_off:true},2).wait(28));

	// Layer 1
	this.instance_2 = new lib.blizzardpart();
	this.instance_2.setTransform(22.8,-63.6,1,1,0,0,0,142.8,114.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:114.9,scaleX:1,scaleY:1,rotation:66.2,x:265.9,y:309},16,cjs.Ease.get(-0.17)).to({regY:114.8,scaleX:1,scaleY:1,rotation:95.4,x:373.4,y:473.6},6).to({_off:true},1).wait(35));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("APLXTQmcgUmchxQmYhwiXkZQg+hzgdigQgUhxgJi9QgNkCgFg1QgPitgoh+QhllGk+irQlIiylOAAQj5gBkuBpQhQAcifA/QiRA6hIAYQjpBMiRgxQAChRgIihQgEhgANghQARgpBBgUQAzgPCigVIHGhGQFzg4ETgbQNXhSEaCoQEmCwAxEhQAUB0gQCZQgJBbgiC+QgiC6gJBdQgPCcAUB2QAyEnEnC5QE/DHGcgaQChgKDOgvQBhgWEMhHQDlg9CFgZQDEglCeADQGDAGElD+QBsBLAaApQAaAoglAiQgZAWhjA0QiABBhOAyQjVg3kpAOQhrAFioAQIknAdQkMAZjiAAQhfAAhXgFg");
	mask.setTransform(227.1,149.6);

	// Layer 5
	this.instance_3 = new lib.whitemask();
	this.instance_3.setTransform(-230.8,-86,1,1,0,0,0,133.6,133.6);
	this.instance_3.alpha = 0.25;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({x:-234.9,y:-84.7},0).to({x:550.6,y:254.6,alpha:0.422},26).to({_off:true},1).wait(25));

	// Layer 1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AGlVLQjningmkTQgPhuAMiSQAHhXAai0QAbizAHhZQAMiSgQhwQgnkZjniwQj6i9lCAZQh+AJiiAsQhMAVjSBEQizA6hoAYQiaAjh7gCQkvgHjmjxQhUhHgVgnQgUgmAdghQATgVBOgxQBkg+A9gwQCnA1DpgNQBUgFCDgQIDngcQEqggDoANQFCATFDBsQE/BrB2ELQAxBtAWCYQAQBsAHC0QAKDzAEAzQANCnAeB3QBPE3D5CiQECCpEFAAQDEABDshkQA+gaB9g9QByg3A4gWQC2hIByAuQgBBNAFCZQAEBbgKAgQgOAngyATQgpAOh+AUIlkBDQkjA1jXAaQjcAZirAAQlfAAiUhrg");
	mask_1.setTransform(227,146.3);

	// Layer 5
	this.instance_4 = new lib.whitemask();
	this.instance_4.setTransform(-230.8,-86,1,1,0,0,0,133.6,133.6);
	this.instance_4.alpha = 0.25;

	this.instance_4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({x:-234.9,y:-84.7},0).to({x:550.6,y:254.6},25).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.3,-231.9,411.9,299.4);


// stage content:



(lib.FS_SnowIce_300x250_V6AWP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (window.devicePixelRatio > 1) {
		
		    var canvasWidth = canvas.width;
		    var canvasHeight = canvas.height;
		
		    canvas.width = canvasWidth * window.devicePixelRatio;
		    canvas.height = canvasHeight * window.devicePixelRatio;
		    canvas.style.width = canvasWidth+"px";
		    canvas.style.height = canvasHeight+"px";
		
			//console.log(window.devicePixelRatio);
			stage.scaleX=stage.scaleY=window.devicePixelRatio;
		}
		
		//smooth it out a little
		this.hero.cache(0,0,900,900);
	}
	this.frame_402 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(402).call(this.frame_402).wait(1));

	// 1px
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("AwPu+MAgfAAAIAAd9MggfAAAg");
	this.shape.setTransform(150,125,1.442,1.302);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(403));

	// Layer 28
	this.instance = new lib.logo();
	this.instance.setTransform(32.8,221.6,0.8,0.8,0,0,0,170,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(333).to({alpha:0},5).to({_off:true},1).wait(64));

	// hero
	this.hero = new lib.hero();
	this.hero.setTransform(418.1,269,0.5,0.5,0,0,0,337.9,600.5);

	this.timeline.addTween(cjs.Tween.get(this.hero).to({_off:true},1).wait(157).to({_off:false,x:333.1,y:131},0).to({x:268,y:171.3},17,cjs.Ease.get(1)).wait(30).to({regY:600.6,rotation:-89.7,x:278},18,cjs.Ease.get(1)).wait(15).to({regY:600.5,rotation:-6.7,x:345.5},18,cjs.Ease.get(1)).to({_off:true},1).wait(146));

	// cta
	this.instance_1 = new lib.cta();
	this.instance_1.setTransform(86.5,162.4,1,1,0,0,0,51.1,12.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(372).to({_off:false},0).to({alpha:1},7).wait(24));

	// Layer 30
	this.instance_2 = new lib.txt_thebestforyourcat();
	this.instance_2.setTransform(81.5,270.5,1.1,1.1,0,0,0,92.5,45.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(340).to({_off:false},0).to({alpha:1},9).wait(54));

	// txt
	this.instance_3 = new lib.txt_3();
	this.instance_3.setTransform(115.1,53.1,1,1,0,0,0,124,27.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(333).to({_off:false},0).to({alpha:1},7).wait(63));

	// blizzard
	this.instance_4 = new lib.blizzardANIM("synched",0,false);
	this.instance_4.setTransform(-25.6,-12.8,1,1,0,0,0,4,4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(355).to({_off:false},0).to({_off:true},33).wait(15));

	// Layer 16
	this.instance_5 = new lib.txt_dontspinyourwheels();
	this.instance_5.setTransform(166.2,48.9,1,1,0,0,0,140.1,40.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(94).to({_off:false},0).to({alpha:1},7).wait(75).to({alpha:0},7).to({_off:true},1).wait(219));

	// CAMERA
	this.instance_6 = new lib.CAMERAanim("synched",0,false);
	this.instance_6.setTransform(164.1,73.1,1,1,0,0,0,181.7,95.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(68).to({startPosition:71},0).to({scaleX:0.38,scaleY:0.38,x:232.1,y:151.9},30,cjs.Ease.get(1)).wait(43).to({mode:"single",startPosition:114},0).wait(82).to({mode:"synched",startPosition:119,loop:false},0).wait(37).to({startPosition:179},0).wait(143));

	// hero
	this.instance_7 = new lib.hero();
	this.instance_7.setTransform(180.1,-179,1,1,0,0,0,300,500);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(325).to({_off:false},0).to({y:59},16,cjs.Ease.get(-1)).wait(62));

	// bg2
	this.instance_8 = new lib.bg();
	this.instance_8.setTransform(145.1,125.1,0.4,0.4,0,0,0,491.4,406.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(325).to({_off:false},0).to({alpha:0.441},16).wait(62));

	// drift
	this.instance_9 = new lib.snowdriftALL();
	this.instance_9.setTransform(301.6,76,1.3,1.3,0,0,0,360.1,81.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(68).to({regX:360.2,scaleX:1,scaleY:1,x:271.5,y:125.6},30,cjs.Ease.get(1)).wait(162).to({x:381.5},33,cjs.Ease.get(-1)).to({x:521.3},26,cjs.Ease.get(1)).wait(6).to({x:521.5},0).to({y:165.6},16,cjs.Ease.get(1)).wait(62));

	// bg
	this.instance_10 = new lib.bg();
	this.instance_10.setTransform(149.8,124.2,0.318,0.319,0,0,0,491.4,406.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(403));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1703,31.9,2622.9,693.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;