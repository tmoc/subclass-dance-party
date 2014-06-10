describe("movingDancer", function() {

  var movingDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    movingDancer = new MovingDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(movingDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(movingDancer, "step");
      expect(movingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(movingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(movingDancer.step.callCount).to.be.equal(2);
    });
  });

  describe("location", function () {
    it("should report its current location", function () {
      movingDancer.setPosition(100, 100);
      expect(movingDancer.top).to.be.a('number');
      expect(movingDancer.left).to.be.a('number');
    });
    it("should move from its current location and return", function () {
      expect(movingDancer.top).to.equal(10);
      expect(movingDancer.left).to.equal(20);
      movingDancer.step();
      expect(movingDancer.top).not.to.equal(10);
      expect(movingDancer.left).not.to.equal(20);
      movingDancer.step();
      expect(movingDancer.top).to.equal(10);
      expect(movingDancer.left).to.equal(20);
    });

    describe("line up", function () {
      it("should move to the left when line up triggered", function () {
        expect(movingDancer.left).not.to.equal(100);
        movingDancer.lineUp();
        expect(movingDancer.left).to.equal(100);
      });
    });
  });


});
