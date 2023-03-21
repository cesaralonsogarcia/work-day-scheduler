var currentDay = $('#currentDay');
var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour13 = $('#hour-13');
var hour14 = $('#hour-14');
var hour15 = $('#hour-15');
var hour16 = $('#hour-16');
var hour17 = $('#hour-17');
var saveBtn = $('.saveBtn');
var textHour9 = $('#hour-9 > textarea');

var today = dayjs().format('dddd, MMM DD');
var today24hr = dayjs().format('H');
var description;
var selectedHour;

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveBtn.click(function() {
    description = $(this).siblings('.description').val();
    selectedHour = $(this).parent().attr('id');
    if (selectedHour === 'hour-9') {
      localStorage.setItem('hour9', description);
    } else if (selectedHour === 'hour-10') {
      localStorage.setItem('hour10', description);
    } else if (selectedHour === 'hour-11') {
      localStorage.setItem('hour11', description);
    } else if (selectedHour === 'hour-12') {
      localStorage.setItem('hour12', description);
    } else if (selectedHour === 'hour-13') {
      localStorage.setItem('hour13', description);
    } else if (selectedHour === 'hour-14') {
      localStorage.setItem('hour14', description);
    } else if (selectedHour === 'hour-15') {
      localStorage.setItem('hour15', description);
    } else if (selectedHour === 'hour-16') {
      localStorage.setItem('hour16', description);
    } else if (selectedHour === 'hour-17') {
      localStorage.setItem('hour17', description);
    }
  });

  // Code to apply the past, present, or future class to each time by comparing it to the current hour. 
  if (today24hr === '00' || today24hr === '01' || today24hr === '02' ||
  today24hr === '03' || today24hr === '04' || today24hr === '05' ||
  today24hr === '06' || today24hr === '07' || today24hr === '08') {
    hour9.removeClass('present future');
    hour9.addClass('future');
    hour10.removeClass('past present');
    hour10.addClass('future');
    hour11.removeClass('past present');
    hour11.addClass('future');
    hour12.removeClass('past present');
    hour12.addClass('future');
    hour13.removeClass('past present');
    hour13.addClass('future');
    hour14.removeClass('past present');
    hour14.addClass('future');
    hour15.removeClass('past present');
    hour15.addClass('future');
    hour16.removeClass('past present');
    hour16.addClass('future');
    hour17.removeClass('past present');
    hour17.addClass('future');
  } else if (today24hr === '09') {
    hour9.removeClass('past future');
    hour9.addClass('present');
    hour10.removeClass('past present');
    hour10.addClass('future');
    hour11.removeClass('past present');
    hour11.addClass('future');
    hour12.removeClass('past present');
    hour12.addClass('future');
    hour13.removeClass('past present');
    hour13.addClass('future');
    hour14.removeClass('past present');
    hour14.addClass('future');
    hour15.removeClass('past present');
    hour15.addClass('future');
    hour16.removeClass('past present');
    hour16.addClass('future');
    hour17.removeClass('past present');
    hour17.addClass('future');
  } else if (today24hr === '10') {
    hour9.removeClass('present future');
    hour9.addClass('past');
    hour10.removeClass('past future');
    hour10.addClass('present');
    hour11.removeClass('past present');
    hour11.addClass('future');
    hour12.removeClass('past present');
    hour12.addClass('future');
    hour13.removeClass('past present');
    hour13.addClass('future');
    hour14.removeClass('past present');
    hour14.addClass('future');
    hour15.removeClass('past present');
    hour15.addClass('future');
    hour16.removeClass('past present');
    hour16.addClass('future');
    hour17.removeClass('past present');
    hour17.addClass('future');
  } else if (today24hr === '11') {
    hour9.removeClass('present future');
    hour9.addClass('past');
    hour10.removeClass('present future');
    hour10.addClass('past');
    hour11.removeClass('past future');
    hour11.addClass('present');
    hour12.removeClass('past present');
    hour12.addClass('future');
    hour13.removeClass('past present');
    hour13.addClass('future');
    hour14.removeClass('past present');
    hour14.addClass('future');
    hour15.removeClass('past present');
    hour15.addClass('future');
    hour16.removeClass('past present');
    hour16.addClass('future');
    hour17.removeClass('past present');
    hour17.addClass('future');
  } else if (today24hr === '12') {
    hour9.removeClass('present future');
    hour9.addClass('past');
    hour10.removeClass('present future');
    hour10.addClass('past');
    hour11.removeClass('present future');
    hour11.addClass('past');
    hour12.removeClass('past future');
    hour12.addClass('present');
    hour13.removeClass('past present');
    hour13.addClass('future');
    hour14.removeClass('past present');
    hour14.addClass('future');
    hour15.removeClass('past present');
    hour15.addClass('future');
    hour16.removeClass('past present');
    hour16.addClass('future');
    hour17.removeClass('past present');
    hour17.addClass('future');
  } else if (today24hr === '13') {
    hour9.removeClass('present future');
    hour9.addClass('past');
    hour10.removeClass('present future');
    hour10.addClass('past');
    hour11.removeClass('present future');
    hour11.addClass('past');
    hour12.removeClass('present future');
    hour12.addClass('past');
    hour13.removeClass('past future');
    hour13.addClass('present');
    hour14.removeClass('past present');
    hour14.addClass('future');
    hour15.removeClass('past present');
    hour15.addClass('future');
    hour16.removeClass('past present');
    hour16.addClass('future');
    hour17.removeClass('past present');
    hour17.addClass('future');
  } else if (today24hr === '14') {
    hour9.removeClass('present future');
    hour9.addClass('past');
    hour10.removeClass('present future');
    hour10.addClass('past');
    hour11.removeClass('present future');
    hour11.addClass('past');
    hour12.removeClass('present future');
    hour12.addClass('past');
    hour13.removeClass('present future');
    hour13.addClass('past');
    hour14.removeClass('past future');
    hour14.addClass('present');
    hour15.removeClass('past present');
    hour15.addClass('future');
    hour16.removeClass('past present');
    hour16.addClass('future');
    hour17.removeClass('past present');
    hour17.addClass('future');
  } else if (today24hr === '15') {
    hour9.removeClass('present future');
    hour9.addClass('past');
    hour10.removeClass('present future');
    hour10.addClass('past');
    hour11.removeClass('present future');
    hour11.addClass('past');
    hour12.removeClass('present future');
    hour12.addClass('past');
    hour13.removeClass('present future');
    hour13.addClass('past');
    hour14.removeClass('present future');
    hour14.addClass('past');
    hour15.removeClass('past future');
    hour15.addClass('present');
    hour16.removeClass('past present');
    hour16.addClass('future');
    hour17.removeClass('past present');
    hour17.addClass('future');
  } else if (today24hr === '16') {
    hour9.removeClass('present future');
    hour9.addClass('past');
    hour10.removeClass('present future');
    hour10.addClass('past');
    hour11.removeClass('present future');
    hour11.addClass('past');
    hour12.removeClass('present future');
    hour12.addClass('past');
    hour13.removeClass('present future');
    hour13.addClass('past');
    hour14.removeClass('present future');
    hour14.addClass('past');
    hour15.removeClass('present future');
    hour15.addClass('past');
    hour16.removeClass('past future');
    hour16.addClass('present');
    hour17.removeClass('past present');
    hour17.addClass('future');
  } else if (today24hr === '17') {
    hour9.removeClass('present future');
    hour9.addClass('past');
    hour10.removeClass('present future');
    hour10.addClass('past');
    hour11.removeClass('present future');
    hour11.addClass('past');
    hour12.removeClass('present future');
    hour12.addClass('past');
    hour13.removeClass('present future');
    hour13.addClass('past');
    hour14.removeClass('present future');
    hour14.addClass('past');
    hour15.removeClass('present future');
    hour15.addClass('past');
    hour16.removeClass('present future');
    hour16.addClass('past');
    hour17.removeClass('past future');
    hour17.addClass('present');
  } else {
    hour9.removeClass('present future');
    hour9.addClass('past');
    hour10.removeClass('present future');
    hour10.addClass('past');
    hour11.removeClass('present future');
    hour11.addClass('past');
    hour12.removeClass('present future');
    hour12.addClass('past');
    hour13.removeClass('present future');
    hour13.addClass('past');
    hour14.removeClass('present future');
    hour14.addClass('past');
    hour15.removeClass('present future');
    hour15.addClass('past');
    hour16.removeClass('present future');
    hour16.addClass('past');
    hour17.removeClass('present future');
    hour17.addClass('past');
  }
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // Code to display the current date in the header of the page.
  if (today.search('01') >= 12 || today.search('21') >= 12 || today.search('31') >= 12){
    currentDay.text(today + 'st');
  } else if (today.search('02') >= 12 || today.search('22') >= 12){
    currentDay.text(today + 'nd');
  } else if (today.search('03') >= 12 || today.search('23') >= 12){
    currentDay.text(today + 'rd');
  } else {
    currentDay.text(today + 'th');
  }
});
