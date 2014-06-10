var FadingDancer = function(top, left, timeBetweenSteps, imagePath){
  ImageDancer.call(this,top, left, timeBetweenSteps, imagePath);
  this.$node.mouseover(function (e){
    $(this).fadeOut('slow');
  }).mouseout(function(e){
    $(this).fadeIn('slow');
  });
};

FadingDancer.prototype = Object.create(Dancer.prototype);
FadingDancer.prototype.contructor = ImageDancer;
