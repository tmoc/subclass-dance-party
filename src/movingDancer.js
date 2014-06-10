var MovingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this,top, left, timeBetweenSteps);
  this._initTop = top;
  this._initLeft = left;
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.contructor = MovingDancer;


MovingDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  var top;
  var left;
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if (this.top !== this._initTop || this.left !== this._initLeft) {
    top = this._initTop;
    left = this._initLeft;
  } else {
    top = this._initTop + 10;
    left = this._initLeft + 10;
  }
  this.setPosition(top, left);
};

MovingDancer.prototype.setPosition = function (top, left) {
  this.top = top;
  this.left = left;
  Dancer.prototype.setPosition.call(this, top, left);
};
