/* U.S AM-PM Clock & Date - HH:MM:SS AM\PM
 *  (C) Michael C. (michael@elusivestudiogames.com)
 *  Free use under MIT 
 */
var clock = document.getElementById('clock');
var date = document.getElementById('date');

function watch() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var day = d.getDate();
    
    
    var dh = h;
    var hd = 'AM';
    

    if(h == 0) {
        dh = 12;
    } else if(h == 12) {
        hd = 'PM';
    } else if(h > 12) {
        dh = h - 12;
        hd = 'PM';
    }

    dh = (dh < 10) ? "0"+dh : dh;
    m = (m < 10) ? "0"+m : m;
    s = (s < 10) ? "0"+s : s;
    
    
    var monthName;
    
    switch(month) {
        case 1:
            monthName = 'January';
        break;
        
        case 2:
            monthName = 'February';
        break;
        
        case 3:
            monthName = 'March';
        break;
        
        case 4:
            monthName = 'April';
        break;
        
        case 5:
            monthName = 'May';
        break;
        
        case 6:
            monthName = 'June';
        break;
        
        case 7:
            monthName = 'July';
        break;
        
        case 8:
            monthName = 'August';
        break;
        
        case 9:
            monthName = 'September';
        break;
        
        case 10:
            monthName = 'October';
        break;
        
        case 11:
            monthName = 'November';
        break;
        
        case 12:
            monthName = 'December';
        break;
    }
      
    var suffixes = [
        'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
        'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
        'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
        'st'
        ];
        
    var suffix = suffixes[day-1];

    clock.textContent = dh + ":" + m + ":" + s + ' ' + hd;
    date.innerHTML = monthName + ' ' + day + '<sup>' + suffix + '</sup>, ' + year;
}

setInterval(watch, 1000);		    
