/*determine a leap year function*/
function leapYear(){
  var y = parseInt(document.getElementById("calculate").value);
  if (y%400 === 0){
    document.getElementById("result").innerHTML = "Year is a leap year!";
  }else if(y%4 === 0 && y%100 !== 0){
      document.getElementById("result").innerHTML = "Year is a leap year!";
      }else {
        document.getElementById("result").innerHTML = "Year is not a leap year!";
      }
};
/*Catholic Easter calculation (for 1900–2099)*/
function catholicEaster(){
  var g = parseInt(document.getElementById("ceYear").value);
  var a = g%19;
  var b = g%4;
  var c = g%7;
  var m = 24;
  var n = 5;
  var d = ((19 * a) + m) %  30;
  var e = ((2*b) + (4*c) + (6*d) + n) % 7;
  if ((d + e) <10){
    var calcDay = e+d+22;
    var dateOfCe = new Date (g,2,(calcDay));  
    document.getElementById("cEtext").innerHTML = dateOfCe;
  }else if ((d + e) >=10){
    var calcDay1 = e+d-9;
    var dateOfCe1 = new Date (g,3,(calcDay1));
    document.getElementById("cEtext").innerHTML = dateOfCe1;
    }else if (calcDay1 === 26){
      calcDay1 = 19;
      var dateOfCe1 = new Date (g,3,(calcDay1));
    document.getElementById("cEtext").innerHTML = dateOfCe1;
    }else if (calcDay1 === 25 && d === 28 && e === 6 && a>10){
      calcDay1 = 18;
      var dateOfCe1 = new Date (g,3,(calcDay1));
    document.getElementById("cEtext").innerHTML = dateOfCe1;
    }
 };
/*Orthodox Easter calculation (for 1900–2099)*/
function orthodoxEaster(){
  var g = parseInt(document.getElementById("oeYear").value);
  var a = g%19;
  var b = g%4;
  var c = g%7;
  var m = 15;
  var n = 6;
  var d = ((19 * a) + m) %  30;
  var e = ((2*b) + (4*c) + (6*d) + n) % 7;
  if ((d + e) <10){
    var calcDay = e+d+22;
    var dateOfCe = new Date (g,2,(calcDay));  
    document.getElementById("oEtext").innerHTML = dateOfCe;
  }else if ((d + e) >=10){
    var calcDay1 = e+d-9;
    var dateOfCe1 = new Date (g,3,(calcDay1));
    document.getElementById("oEtext").innerHTML = dateOfCe1;
    }else if (calcDay1 === 26){
      calcDay1 = 19;
      var dateOfCe1 = new Date (g,3,(calcDay1));
    document.getElementById("oEtext").innerHTML = dateOfCe1;
    }else if (calcDay1 === 25 && d === 28 && e === 6 && a>10){
      calcDay1 = 18;
      var dateOfCe1 = new Date (g,3,(calcDay1));
    document.getElementById("oEtext").innerHTML = dateOfCe1;
    }
 };
