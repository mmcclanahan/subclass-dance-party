//img will be a rocketShip
//dance style moves circle
var rocketDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.top = top;
  // this.left = left;
  this.$node = $('<img src="https://i.gifer.com/Vp3M.gif" class="rocketDancer dancer" width="180" height="180" frameBorder="0"></img>');
  //this.$node.on('mouseenter', function(event) { console.log(this.dancing); } );
};
rocketDancer.prototype = Object.create(makeDancer.prototype);
rocketDancer.prototype.constructor = rocketDancer;

rocketDancer.prototype.step = function() {
  if (this.dancing) {
    makeDancer.prototype.step.call(this);
    //what we want it to do each step
    var styleSettings = {
      top: this.top,
      left: this.left,
    };
    this.$node.css(styleSettings);
    this.top -= 0.5;
    this.left += 1;
  }
};
