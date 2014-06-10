var ImageDancer = function(top, left, timeBetweenSteps, imagePath){
  Dancer.call(this,top, left, timeBetweenSteps);
  this.$node = $('<span class="imageDancer"><img  src="' + imagePath +'"></span>');
  this.setPosition(top, left);
};

ImageDancer.prototype = Object.create(Dancer.prototype);
ImageDancer.prototype.contructor = ImageDancer;
