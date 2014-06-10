var ColorDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this,top, left, timeBetweenSteps);
};

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.contructor = ColorDancer;


ColorDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  if(this.$node.hasClass('dancer')){
    this.$node.removeClass('dancer').addClass('blueDancer');
  } else {
    this.$node.removeClass('blueDancer').addClass('dancer');
  }
};
