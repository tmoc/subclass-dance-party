$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var imagePath = $(this).data('dancer-img-path');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      imagePath,
      dancers
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('#background').on('change', function(){
    var selection = $(this).val();
    if(selection === 'ceiling'){
      $(document.body).css('background-image','url(images/ceiling.jpg)');
      dancers.forEach(function(dancer){
        dancer.flip();
      });
    } else if (selection === 'desert'){
      $(document.body).css('background-image','url(images/desert.jpg)');
      dancers.forEach(function(dancer){
        dancer.flip();
      });
    }
  });

  $('#line-up').on('click', function (e) {
    e.preventDefault();
    dancers.forEach(function (dancer) {
      dancer.lineUp();
    });
  });
});

