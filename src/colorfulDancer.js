var colorfulDancer = function(top, left, timeBetweenColors) {
  makeDancer.call(this, top, left, timeBetweenColors);
  this.$node = $('<span class ="dancer colorfulDancer"></span>');
};
colorfulDancer.prototype = Object.create(makeDancer.prototype);
colorfulDancer.prototype.constructor = colorfulDancer;

colorfulDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var colors = {
    color: 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')',
    top: this.top,
    left: this.left
  };
  this.$node.css(colors);
};
