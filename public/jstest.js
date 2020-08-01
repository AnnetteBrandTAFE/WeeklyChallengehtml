
var q = ["Which horse won the Melbourne Cup in 2002?<br /><br />", "What was Sir Donald Bradman’s batting average?<br /><br />", 
"In what city did the Commonwealth Parliament first sit?<br /><br />", "How many countries are larger than Australia?<br /><br />", 
"Who designed the Sydney Opera House?<br /><br />", "Name Australia’s western-most point?<br /><br />",
 "How many ships were in the First Fleet?<br /><br />", "What year did Cyclone Tracy hit Darwin?<br /><br />", 
 "What Australian movie includes the phrase “Tell him he’s dreaming”? <br /><br />", "Who invented the bionic ear? <br /><br />"];
var a1 = ["<button class=buttons002 onclick=q1c()>Media Puzzle</button>",
          "<button class=buttons002 onclick=q2c()>99.94</button>",
          "<button class=buttons002 onclick=q3c()>Melbourne</button>",
          "<button class=buttons002 onclick=q4i()>8</button>",
          "<button class=buttons002 onclick=q5i()>Frank Lloyd Wright</button>",
          "<button class=buttons002 onclick=q6i()>Cape Bryon</button>",
          "<button class=buttons002 onclick=q7i()>8</button>",
          "<button class=buttons002 onclick=q8i()>1972</button>",
          "<button class=buttons002 onclick=q9i()>Muriel's Wedding</button>",
          "<button class=buttons002 onclick=q10i()>Graeme Turner</button>"];

var a2 = ["<button class=buttons002 onclick=q1i()>Ethereal</button>",
          "<button class=buttons002 onclick=q2i()>98.94</button>",
          "<button class=buttons002 onclick=q3i()>Sydney</button>",
          "<button class=buttons002 onclick=q4c()>6</button>",
          "<button class=buttons002 onclick=q5c()>Joern Utzon</button>",
          "<button class=buttons002 onclick=q6c()>Steep Point</button>",
          "<button class=buttons002 onclick=q7i()>12</button>",
          "<button class=buttons002 onclick=q8i()>1973</button>",
          "<button class=buttons002 onclick=q9i()>The Dish</button>",
          "<button class=buttons002 onclick=q10i()>Gregory Craven</button>"];

var a3 = ["<button class=buttons002 onclick=q1i()>Brew</button>",
          "<button class=buttons002 onclick=q2i()>97.94</button>",
          "<button class=buttons002 onclick=q3i()>Canberra</button>",
          "<button class=buttons002 onclick=q4i()>7</button>",
          "<button class=buttons002 onclick=q5i()>Norman Foster</button>",
          "<button class=buttons002 onclick=q6i()>Cape York Peninsula</button>",
          "<button class=buttons002 onclick=q7c()>11</button>",
          "<button class=buttons002 onclick=q8c()>1974</button>",
          "<button class=buttons002 onclick=q9i()>Chopper</button>",
          "<button class=buttons002 onclick=q10i()>Gustav Nossal</button>"];

var a4 = ["<button class=buttons002 onclick=q1i()>Makybe Diva</button>",
          "<button class=buttons002 onclick=q2i()>96.94</button>",
          "<button class=buttons002 onclick=q3i()>Hobart</button>",
          "<button class=buttons002 onclick=q4i()>9</button>",
          "<button class=buttons002 onclick=q5i()>Le Corbusier</button>",
          "<button class=buttons002 onclick=q6i()>Lake Eyre</button>",
          "<button class=buttons002 onclick=q7i()>10</button>",
          "<button class=buttons002 onclick=q8i()>1975</button>",
          "<button class=buttons002 onclick=q9c()>The Castle</button>",
          "<button class=buttons002 onclick=q10c()>Graeme Clark</button>"];

var c = ["Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct"];
var i = ["Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect"];

var n = 0;
n++;
var s = 0;
s++;

function begin001() {
    disappear001.innerHTML = "";
    message001.innerHTML = "";
    question001.innerHTML = q[0];
    option001.innerHTML = a1[0];
    option002.innerHTML = a2[0];
    option003.innerHTML = a3[0];
    option004.innerHTML = a4[0];
    number001.innerHTML = n++;
}

function q1c() {
    answer001.innerHTML = "<div id=green001>" + c[0] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
    score001.innerHTML = s++;
}

function q1i() {
    answer001.innerHTML = "<div id=red001>" + i[0] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
}

function new002() {
    question001.innerHTML = q[1];
    option001.innerHTML = a1[1];
    option002.innerHTML = a2[1];
    option003.innerHTML = a3[1];
    option004.innerHTML = a4[1];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q2c() {
    answer001.innerHTML = "<div id=green001>" + c[1] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
    score001.innerHTML = s++;
}

function q2i() {
    answer001.innerHTML = "<div id=red001>" + i[1] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
}

function new003() {
    question001.innerHTML = q[2];
    option001.innerHTML = a1[2];
    option002.innerHTML = a2[2];
    option003.innerHTML = a3[2];
    option004.innerHTML = a4[2];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q3c() {
    answer001.innerHTML = "<div id=green001>" + c[2] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
    score001.innerHTML = s++;
}

function q3i() {
    answer001.innerHTML = "<div id=red001>" + i[2] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
}

function new004() {
    question001.innerHTML = q[3];
    option001.innerHTML = a1[3];
    option002.innerHTML = a2[3];
    option003.innerHTML = a3[3];
    option004.innerHTML = a4[3];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q4c() {
    answer001.innerHTML = "<div id=green001>" + c[3] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
    score001.innerHTML = s++;
}

function q4i() {
    answer001.innerHTML = "<div id=red001>" + i[3] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
}

function new005() {
    question001.innerHTML = q[4];
    option001.innerHTML = a1[4];
    option002.innerHTML = a2[4];
    option003.innerHTML = a3[4];
    option004.innerHTML = a4[4];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q5c() {
    answer001.innerHTML = "<div id=green001>" + c[4] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new006()>Next</button>";
    score001.innerHTML = s++;
}

function q5i() {
    answer001.innerHTML = "<div id=red001>" + i[4] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new006()>Next</button>";
}

function new006() {
    question001.innerHTML = q[5];
    option001.innerHTML = a1[5];
    option002.innerHTML = a2[5];
    option003.innerHTML = a3[5];
    option004.innerHTML = a4[5];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q6c() {
    answer001.innerHTML = "<div id=green001>" + c[5] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new007()>Next</button>";
    score001.innerHTML = s++;
}

function q6i() {
    answer001.innerHTML = "<div id=red001>" + i[5] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new007()>Next</button>";
}

function new007() {
    question001.innerHTML = q[6];
    option001.innerHTML = a1[6];
    option002.innerHTML = a2[6];
    option003.innerHTML = a3[6];
    option004.innerHTML = a4[6];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q7c() {
    answer001.innerHTML = "<div id=green001>" + c[6] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new008()>Next</button>";
    score001.innerHTML = s++;
}

function q7i() {
    answer001.innerHTML = "<div id=red001>" + i[6] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new008()>Next</button>";
}

function new008() {
    question001.innerHTML = q[7];
    option001.innerHTML = a1[7];
    option002.innerHTML = a2[7];
    option003.innerHTML = a3[7];
    option004.innerHTML = a4[7];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q8c() {
    answer001.innerHTML = "<div id=green001>" + c[7] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new009()>Next</button>";
    score001.innerHTML = s++;
}

function q8i() {
    answer001.innerHTML = "<div id=red001>" + i[7] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new009()>Next</button>";
}

function new009() {
    question001.innerHTML = q[8];
    option001.innerHTML = a1[8];
    option002.innerHTML = a2[8];
    option003.innerHTML = a3[8];
    option004.innerHTML = a4[8];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q9c() {
    answer001.innerHTML = "<div id=green001>" + c[8] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new010()>Next</button>";
    score001.innerHTML = s++;
}

function q9i() {
    answer001.innerHTML = "<div id=red001>" + i[8] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new010()>Next</button>";
}

function new010() {
    question001.innerHTML = q[9];
    option001.innerHTML = a1[9];
    option002.innerHTML = a2[9];
    option003.innerHTML = a3[9];
    option004.innerHTML = a4[9];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q10c() {
    answer001.innerHTML = "<div id=green001>" + c[9] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
    score001.innerHTML = s++;
}

function q10i() {
    answer001.innerHTML = "<div id=red001>" + i[9] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
}

function end001() {
    message001.innerHTML = "End of Quiz.";
    question001.innerHTML = "";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<div id=text001>" + "<button class=buttons001 onclick=repeat001()>Repeat</button>" + "</div>";
    answer001.innerHTML = "";
}

function repeat001() {
    location.reload();
}