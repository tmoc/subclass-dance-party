describe("colorDancer", function() {

  var colorDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    colorDancer = new ColorDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(colorDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(colorDancer, "step");
      expect(colorDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(colorDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(colorDancer.step.callCount).to.be.equal(2);
    });
  });

  describe("color", function () {
    it("should alternate its class to change color", function () {
      colorDancer.step();
      expect(colorDancer.$node.hasClass('dancer')).to.equal(true);
      colorDancer.step();
      expect(colorDancer.$node.hasClass('dancer')).to.equal(false);
      expect(colorDancer.$node.hasClass('blueDancer')).to.equal(true);
      colorDancer.step();
      expect(colorDancer.$node.hasClass('blueDancer')).to.equal(false);
      expect(colorDancer.$node.hasClass('dancer')).to.equal(true);
    });
  });
});
