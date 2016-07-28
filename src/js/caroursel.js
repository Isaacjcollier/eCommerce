/**
 * Adam M. Brouhard
 * Description: Functions and Methods for Coursel Feature
 * 
 */

$(document).ready(function () {

  var change_img_time = 4000,
    transition_speed = 0;

  var listItems = $('.slider').children('div'),
    dotItems = $('#dots').children('li'),
    listLen = listItems.length,
    current,
    changeTimeout;

    console.log(dotItems.length);
    console.log(listItems);

  function moveTo(newIndex) {

    var i = newIndex;

    if (newIndex === 'prev') {
      i = (current > 0) ? (current - 1) : (listLen - 1);
    }

    if (newIndex === 'next') {
      i = (current < listLen - 1) ? (current + 1) : 0;
    }

    dotItems.removeClass('active');
    dotItems.eq(i).addClass('active');

    listItems.hide();
    listItems.eq(i).show();

    // listItems.fadeOut(transition_speed);
    // listItems.eq(i).fadeIn(transition_speed);


    current = i;

    //resets time interval if user clicks on slider dot; then begin automated slider
    clearTimeout(changeTimeout);
    changeTimeout = setTimeout(function () { moveTo('next'); }, change_img_time);
  };

  // Event handlers
  $("#dots li").click(function () {
    var i = $('#dots li').index(this);
    moveTo(i);
  });

  $("#prev").click(function () {
    moveTo('prev');
  });

  $("#next").click(function () {
    moveTo('next');
  });

  //initialize slider on load
  moveTo('next');

});