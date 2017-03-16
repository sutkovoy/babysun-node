jQuery(document).ready(function($){
  //you can now use $ as your jQuery object.
  var eventTime = 1495443600; // Timestamp - Mon May 22 2017 12:00:00
  var currentTime = Math.floor(Date.now() / 1000) ;
  var diffTime = eventTime - currentTime;
  var duration = moment.duration(diffTime*1000, 'milliseconds');
  var interval = 1000;
  
  setInterval(function(){
    duration = moment.duration(duration - interval, 'milliseconds');
    $('.countdown').text(duration.months() + monthsText(duration.months()) + duration.days() + daysText(duration.days()) + duration.hours() + hoursText(duration.hours()));
  }, interval);
  
  function monthsText(months) {
    if(!months) return ' місяців ';
    if(months === 2) return ' місяця ';
    if(months === 1) return ' місяць ';
  }
  
  function daysText(days) {
    if(!days) return ' днів ';
    if(days === 1 ) return ' день ';
    if(days === 2 ) return ' дня ';
    if(days === 3 ) return ' дня ';
    if(days === 4 ) return ' дня ';
    if(days === 5 ) return ' днів ';
    if(days === 6 ) return ' днів ';
    if(days === 7 ) return ' днів ';
    if(days === 8 ) return ' днів ';
    if(days === 9 ) return ' днів ';
    if(days === 10 ) return ' днів ';
    if(days === 11 ) return ' днів ';
    if(days === 12) return ' днів ';
    if(days === 13 ) return ' днів ';
    if(days === 14 ) return ' днів ';
    if(days === 15 ) return ' днів ';
    if(days === 16 ) return ' днів ';
    if(days === 17 ) return ' днів ';
    if(days === 18 ) return ' днів ';
    if(days === 19 ) return ' днів ';
    if(days === 20 ) return ' днів ';
    if(days === 21 ) return ' день ';
    if(days === 22 ) return ' дня';
    if(days === 23 ) return ' дня ';
    if(days === 24 ) return ' дня ';
    if(days === 25 ) return ' днів ';
    if(days === 26 ) return ' днів ';
    if(days === 27 ) return ' днів ';
    if(days === 28 ) return ' днів ';
    if(days === 29 ) return ' днів ';
    if(days === 30 ) return ' днів ';
    if(days === 31 ) return ' день ';
  }
  
  function hoursText(hours) {
    if(!hours) return ' часов ';
    if(hours === 1) return ' час ';
    if(hours === 2 || hours === 3 || hours === 4) return ' часа ';
    if(hours > 4) return ' часов ';
  }
  
  function minText(min) {
    if(!min || min > 51) return ' хвилин ';
    if(min === 1) return ' хвилина ';
    if(min === 21) return ' хвилина ';
    if(min === 31) return ' хвилина ';
    if(min === 41) return ' хвилина ';
    if(min === 51) return ' хвилина ';
    if(min > 1 && min < 51) return ' хвилин ';
    
  }
  
});