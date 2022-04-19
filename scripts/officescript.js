window.onload = () => {
    StartStop();
  }
  
  //объявляем переменные
  var base = 60;
  var clocktimer, dateObj, dh, dm, ds, ms;
  var readout = '';
  var h = 1,
    m = 1,
    tm = 1,
    s = 0,
    ts = 0,
    ms = 0,
    init = 0;
  
  //функция для очистки поля
  function ClearСlock() {
    clearTimeout(clocktimer);
    h = 1;
    m = 1;
    tm = 1;
    s = 0;
    ts = 0;
    ms = 0;
    init = 0;
    readout = '00:00:00';
    document.MyForm.stopwatch.value = readout;
  }
  
  //функция для старта секундомера
  function StartTIME() {
    var cdateObj = new Date();
    var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
    if (t > 999) {
      s++;
    }
    if (s >= (m * base)) {
      ts = 0;
      m++;
    } else {
      ts = parseInt((ms / 100) + s);
      if (ts >= base) {
        ts = ts - ((m - 1) * base);
      }
    }
    if (m > (h * base)) {
      tm = 1;
      h++;
    } else {
      tm = parseInt((ms / 100) + m);
      if (tm >= base) {
        tm = tm - ((h - 1) * base);
      }
    }
    ms = Math.round(t / 10);
    if (ms > 99) {
      ms = 0;
    }
    if (ms == 0) {
      ms = '00';
    }
    if (ms > 0 && ms <= 9) {
      ms = '0' + ms;
    }
    if (ts > 0) {
      ds = ts;
      if (ts < 10) {
        ds = '0' + ts;
      }
    } else {
      ds = '00';
    }
    dm = tm - 1;
    if (dm > 0) {
      if (dm < 10) {
        dm = '0' + dm;
      }
    } else {
      dm = '00';
    }
    dh = h - 1;
    if (dh > 0) {
      if (dh < 10) {
        dh = '0' + dh;
      }
    } else {
      dh = '00';
    }
    readout = dh + ':' + dm + ':' + ds;
    document.MyForm.stopwatch.value = readout;
    clocktimer = setTimeout("StartTIME()", 1);
  }
  
  //Функция запуска и остановки
  function StartStop() {
    if (init == 0) {
      ClearСlock();
      dateObj = new Date();
      StartTIME();
      init = 1;
    } else {
      clearTimeout(clocktimer);
      init = 0;
    }
  }


var el_up = document.getElementById("GFG_UP");

var list = [
    {"№":"1", "Name":"Lesbek Rakhat", "Date":"19.04.2022","In":"13:35:46","Out":"18:30:45","Duration":"5 hours","Worked out":"5 hours","Remaining":"3 hours","Overwork":"0 hours"},
    {"№":"2", "Name":"Lesbek Rakhat", "Date":"19.04.2022","In":"13:35:46","Out":"18:30:45","Duration":"5 hours","Worked out":"5 hours","Remaining":"3 hours","Overwork":"0 hours"},
    {"№":"3", "Name":"Lesbek Rakhat", "Date":"19.04.2022","In":"13:35:46","Out":"18:30:45","Duration":"5 hours","Worked out":"5 hours","Remaining":"3 hours","Overwork":"0 hours"},
]; 
el_up.innerHTML = "Click on the button to create the "
+ "table from the JSON data.<br><br>"
+ JSON.stringify(list[0]) + "<br>"
+ JSON.stringify(list[1]) + "<br>"
+ JSON.stringify(list[2]);  

function GFG_FUN() {
    var cols = [];
     
    for (var i = 0; i < list.length; i++) {
        for (var k in list[i]) {
            if (cols.indexOf(k) === -1) {
                 
                // Push all keys to the array
                cols.push(k);
            }
        }
    }
    // Create a table element
    var table = document.createElement("table");
             
    // Create table row tr element of a table
    var tr = table.insertRow(-1);
     
    for (var i = 0; i < cols.length; i++) {
         
        // Create the table header th element
        var theader = document.createElement("th");
        theader.innerHTML = cols[i];
         
        // Append columnName to the table row
        tr.appendChild(theader);
    }
     
    // Adding the data to the table
    for (var i = 0; i < list.length; i++) {
         
        // Create a new row
        trow = table.insertRow(-1);
        for (var j = 0; j < cols.length; j++) {
            var cell = trow.insertCell(-1);
              // Inserting the cell at particular place
              cell.innerHTML = list[i][cols[j]];
            }
        }
         // Add the newly created table containing json data
         var el = document.getElementById("table");
         el.innerHTML = "";
         el.appendChild(table);
     }   