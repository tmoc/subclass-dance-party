var CarltonDancer = function(top, left, timeBetweenSteps, imagePath, otherDancers){
  imagePath = 'images/carlton.gif';
  ImageDancer.call(this, top, left, timeBetweenSteps, imagePath);
  this._top = top;
  this._left = left;
  this.pushOtherDancers(otherDancers);
};

CarltonDancer.prototype = Object.create(ImageDancer.prototype);
CarltonDancer.prototype.contructor = CarltonDancer;

CarltonDancer.prototype.pushOtherDancers = function (dancers) {
  var distance = 500;
  var isWithinRadius = function (otherDancer, radius) {
    // using pythagorean theorem
    // determine a
    var a = (this._top + 250) - otherDancer.$node.position().top;
    // determine b
    var b = (this._left + 175) - otherDancer.$node.position().left;
    // calculate the square root of the sum of squares
    var distance = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    // return true if this value is less than or equal to radius
    return distance <= radius;
  };

  dancers.forEach(function (dancer) {
    var myTop = this._top + 250;
    var myLeft = this._left + 175;

    var dancerTop = dancer.$node.position().top;
    var dancerLeft = dancer.$node.position().left;

    if (isWithinRadius.call(this, dancer, distance)) {
      if (dancerTop <= myTop) {
        dancerTop = myTop - distance;
      } else {
        dancerTop = myTop + distance;
      }
      if (dancerLeft <= myLeft) {
        dancerLeft = myLeft - distance;
      } else {
        dancerLeft = myLeft + distance;
      }
      dancer.setPosition(dancerTop, dancerLeft);
    }
  }.bind(this));
};
