$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
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
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');// gives us string name 'makeBlinkyDancer'

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName]; // searches window with the string and gives us the actual function
    //var dancerMakerFunction = dancerMakerFunctionName;

    // make a dancer with a random position
    //new 'makeBlinkyDancer'; new makeBlinkyDance = function()
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  //colorful dancer
  $('.addColorfulDancerButton').on('click', function(event) {

    var dataDancerName = $(this).data('dancer-name');// currently returning 'colorfulDancer';

    var dataDancerNameFunction = window[dataDancerName]; // searches window with the string and gives us the actual function

    var colorDancer = new dataDancerNameFunction(

      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(colorDancer.$node);
    window.dancers.push(colorDancer);
  });
  //make rocket dancer
  $('.addRocketDancerButton').on('click', function(event) {

    var dataRocketName = $(this).data('rocket-name');// currently returning 'colorfulDancer';

    var dataRocketNameFunction = window[dataRocketName]; // searches window with the string and gives us the actual function

    var rocketDancer = new dataRocketNameFunction(

      Math.random() * 900, //top below 900
      Math.random(), //left 0
      Math.random() * 20
    );
    $('body').append(rocketDancer.$node);
    window.dancers.push(rocketDancer);
  });
  //make rocket dancer stop moving on mouse hover
  $('body').on('mouseenter', '.rocketDancer', function(event) {
    var instancesArray = window['dancers']; //array of all the dancer instances
    var acess = ($('.dancer').index(this));
    instancesArray[acess].dancing = false;
  });

  $('body').on('mouseleave', '.rocketDancer', function(event) {
    var instancesArray = window['dancers'];//array of all the dancer instances

    var acess = ($('.dancer').index(this));
    instancesArray[acess].dancing = true;
    instancesArray[acess].step();
  });

  //Line up Button function
  //<a href="#" class="lineUp" data-line-up="lineUp">Line Up</a>   </div>
  $('.lineUp').on('click', function(event) {

    //iterate through array of instances
    window.dancers.forEach(function(dancer) {
      //call instance.lineUp();

      dancer.lineUp();
    });
  });


});

