var ans = 0,
    cnt = 0,
    sc = "",
    rst = 0,
    lastOp = "";
var d = "",
    o = "",
    u = "",
    op1 = "",
    op2 = "",
    op = uop = 0;
//----------------ac func(clear all)---------------------//
function ac() {
  op1 = op2 = "";op = 0;o = "";
  ans = 0;cnt = 0;sc = "";rst = 1;
}
//----------------ce func(clear last)---------------------//
function ce() {
  op1 = op2 = "";op--;
}

//--------------calculate fn-------------------------------//
function calculate() {
  console.log(op1 + "..." + op2 + "...calculate");
  op1 = +op1;op2 = +op2;
  switch (o) {
    case "×":
      ans = op1 * op2;break;
    case "−":
      ans = op1 - op2;break;
    case "+":
      ans = op1 + op2;break;
    case "÷":
      ans = op1 / op2;break;
    case "mod":
      ans = op1 % op2;break;
    default:
      ans = op1;
  }
  var an_s = ans + "";
  if (an_s.indexOf(".") > -1) ans = +ans.toFixed(10);
  console.log("ans at calculate: " + ans);
}
//------------------------------------------------------//
function update() {
  console.log(d + " up");
  if (o === "=") {
    //fresh input clear screen,unset eq
    ac();op1 = d;
    if (d === ".") {
      $("#sc1, #sc2").text(op1);sc = op1;
    } else {
      $("#sc1, #sc2").text(+op1);sc = +op1;
    }
    console.log(op1 + "--=== op1");
  } else if (o !== "") {
    //opr chaining  
    op2 += "" + d;
    if (d === ".") {
      $("#sc1").text(op2);$("#sc2").append(d);sc += d;
    } else if (rst === 1) {
      rst = 0;$("#sc1").text(+op2);$("#sc2").append(+d);sc += +d;
    } else {
      $("#sc1").text(+op2);
      $("#sc2").append(+d);sc += +d;
    }
    //sc +=""+op2;
    console.log(op1 + "--op1--" + op2 + "--op2--");
  } else {
    //start afresh -- and append to existing
    op1 += "" + d;
    if (d === ".") {
      $("#sc1").text(op1);$("#sc2").append(d);sc += d;
    } else if (rst === 1) {
      console.log("rst set");rst = 0;$("#sc1").text(+op1);$("#sc2").text(+op1);sc = +op1;
    } else {
      $("#sc1").text(+op1);$("#sc2").append(+d);sc += +d;
    }
    console.log("opr1: " + op1);
    //sc += ""+op1;
  }
  console.log("screen: " + sc);
}
//----------Jquery doc ready start-------------------------//
$(document).ready(function () {
  $("#sc2, #sc1").text("");sc = "";
  //----------------power on/off--ac---------------------//
  /* $('#of').on("click",function(){
     var k = $('#sc1').text();
     if(k==""){ac();$("#sc2, #sc1").text("0");sc = "0";}
     else {ac();$("#sc2, #sc1").text("");sc=""}
   });*/
  //---------------AC------------------------------------//
  $('#ac').on("click", function () {
    ac();rst = 1;sc = "0";console.log(rst + "rrrr");
    $("#sc1,#sc2").text("0");
  });
  //----------------------CE-------------------------------//
  $('#ce').on("click", function () {
    if (o === "") {
      $("#sc1, #sc2").text("0");op1 = "";sc = "";
    } else if (o === "=") {
      ac();op1 = "";op2 = "";sc = "";$("#sc1, #sc2").text("0");
    } else {
      op2 = "";
      sc = sc.substring(0, sc.lastIndexOf(o) + 1);
      $("#sc1").text("0");
      $("#sc2").text(sc);
      console.log(sc);
    }
    rst = 1;
  });

  //-------------------ans key-----------------------------//
  $('#an').on("click", function () {
    d = $('#an').text();
    $('#sc2').append(d);
    $('#sc1').text(d);console.log(o);sc += d;
    o !== "" ? op2 = ans : op1 = ans;
  });

  //---------------key press digits----------------------//
  $('#sv').on("click", function () {
    d = $('#sv').text();
    update();
  });
  $('#et').on("click", function () {
    d = $('#et').text();
    update();
  });
  $('#ni').on("click", function () {
    d = $('#ni').text();
    update();
  });
  $('#fo').on("click", function () {
    d = $('#fo').text();
    update();
  });
  $('#fi').on("click", function () {
    d = $('#fi').text();
    update();
  });
  $('#sx').on("click", function () {
    d = $('#sx').text();
    update();
  });
  $('#vn').on("click", function () {
    d = $('#vn').text();
    update();
  });
  $('#to').on("click", function () {
    d = $('#to').text();
    update();
  });
  $('#re').on("click", function () {
    d = $('#re').text();
    update();
  });
  $('#ro').on("click", function () {
    d = $('#ro').text();
    update();
  });
  $('#dt').on("click", function () {
    d = $('#dt').text();cnt++;
    if (cnt === 1) update();
  });
  //----------------key press operators------------------//
  $('#dv').on("click", function () {
    op++;cnt = 0;
    if (o === "=") {
      $("#sc2").text(op1);sc = op1;
    } else if (op === 2) {
      //seeing opr 2nd time..time to calculate so far
      calculate();
      ce();
      op1 = ans;
      //sc = op1;
    }
    o = $('#dv').text();lastOp = o;
    $('#sc2').append("/");sc += o;
    $('#sc1').text("/");
  });
  $('#ml').on("click", function () {
    op++;cnt = 0;
    if (o === "=") {
      $("#sc2").text(op1);sc = op1;
    } else if (op === 2) {
      //seeing opr 2nd time..time to calculate so far
      calculate();
      ce();
      op1 = ans;
      //sc = op1;
    }

    o = $('#ml').text();lastOp = o;
    $('#sc2').append(o);sc += o;
    $('#sc1').text(o);
  });
  $('#sb').on("click", function () {
    op++;cnt = 0;
    if (o === "=") {
      $("#sc2").text(op1);sc = op1;
    } else if (op === 2) {
      //seeing opr 2nd time..time to calculate so far
      calculate();
      ce();
      op1 = ans;
      //sc = op1;
    }
    o = $('#sb').text();lastOp = o;
    $('#sc2').append(o);sc += o;
    $('#sc1').text(o);
  });
  $('#pl').on("click", function () {
    op++;cnt = 0;
    if (o === "=") {
      $("#sc2").text(op1);sc = op1;
    } else if (op === 2) {
      //seeing opr 2nd time..time to calculate so far
      calculate();
      ce();
      op1 = ans;
    }
    o = $('#pl').text();lastOp = o;
    $('#sc2').append(o);sc += o;
    $('#sc1').text(o);
  });
  $('#md').on("click", function () {
    op++;cnt = 0;
    if (o === "=") {
      $("#sc2").text(op1);sc = op1;
    } else if (op === 2) {
      //seeing opr 2nd time..time to calculate so far
      calculate();
      ce();
      op1 = ans;
      // sc = op1;
    }
    o = $('#md').text();lastOp = o;
    $('#sc2').append(o);sc += o;
    $('#sc1').text(o);
    console.log("o is" + o);
  });
  //-------------------unary fns--------------------------//
  $('#rt').on("click", function () {
    if (o === "=") {
      o = "";$("#sc1").text("" + Math.sqrt(+ans));
      $("#sc2").text("sqrt(" + ans + ")");sc = Math.sqrt(+ans);op1 = sc;
    } else if (o === "") {
      $("#sc1").text("" + Math.sqrt(+op1));
      $("#sc2").text("sqrt(" + op1 + ")");sc = Math.sqrt(+op1);op1 = sc;
    } else {
      var rt = sc.substring(sc.lastIndexOf(o) + 1);
      op2 = Math.sqrt(+rt);
      $("#sc1").text("" + op2);
      sc = sc.substring(0, sc.lastIndexOf(o) + 1);
      $("#sc2").text("" + sc + "sqrt(" + rt + ")");
      sc = sc + "" + op2;
    }
  });
  $('#sq').on("click", function () {
    if (o === "=") {
      o = "";$("#sc1").text(ans * ans);
      $("#sc2").text("sqr(" + ans + ")");sc = ans * ans;op1 = sc;
    } else if (o === "") {
      $("#sc1").text("" + op1 * op1);
      $("#sc2").text("sqr(" + op1 + ")");sc = op1 * op1;op1 = sc;
    } else {
      var sq = sc.substring(sc.lastIndexOf(o) + 1);
      op2 = sq * sq;
      $("#sc1").text("" + op2);
      sc = sc.substring(0, sc.lastIndexOf(o) + 1);
      $("#sc2").text("" + sc + "sqr(" + sq + ")");
      sc = sc + "" + op2;
    }
  });
  $('#iv').on("click", function () {
    if (o === "=") {
      o = "";$("#sc1").text(1 / ans);
      $("#sc2").text("inv(" + ans + ")");sc = 1 / ans;op1 = sc;
    } else if (o === "") {
      $("#sc1").text("" + 1 / op1);
      $("#sc2").text("inv(" + op1 + ")");sc = 1 / op1;op1 = sc;
    } else {
      var iv = sc.substring(sc.lastIndexOf(o) + 1);
      op2 = 1 / iv;
      $("#sc1").text("" + op2);
      sc = sc.substring(0, sc.lastIndexOf(o) + 1);
      $("#sc2").text("" + sc + "inv(" + iv + ")");
      sc = sc + "" + op2;
    }
  });
  $('#lg').on("click", function () {
    if (o === "=") {
      o = "";$("#sc1").text("" + Math.log10(+ans));
      $("#sc2").text("log(" + ans + ")");sc = Math.log10(+ans);op1 = sc;
    } else if (o === "") {
      $("#sc1").text("" + Math.log10(+op1));
      $("#sc2").text("log(" + op1 + ")");sc = Math.log10(+op1);op1 = sc;
    } else {
      var rt = sc.substring(sc.lastIndexOf(o) + 1);
      op2 = Math.log10(+rt);
      $("#sc1").text("" + op2);
      sc = sc.substring(0, sc.lastIndexOf(o) + 1);
      $("#sc2").text("" + sc + "log(" + rt + ")");
      sc = sc + "" + op2;
    }
  });
  $('#pm').on("click", function () {
    if (o === "=") {
      o = "";$("#sc1").text(-ans);
      $("#sc2").text("neg(" + ans + ")");sc = -ans;op1 = sc;
    } else if (o === "") {
      $("#sc1").text("" + -op1);
      $("#sc2").text("neg(" + op1 + ")");sc = -op1;op1 = sc;
    } else {
      var ng = sc.substring(sc.lastIndexOf(o) + 1);
      op2 = -ng;
      $("#sc1").text("" + op2);
      sc = sc.substring(0, sc.lastIndexOf(o) + 1);
      $("#sc2").text("" + sc + "neg(" + ng + ")");
      sc = sc + "" + op2;
    }
  });

  //-------------------key press- equals operator-----------//
  $('#eq').on("click", function () {
    calculate();
    console.log("ans" + ans + "op1 " + op1 + " op2 " + op2 + " o " + o);
    o = $('#eq').text();
    $('#sc2').append(o + " " + ans);sc += o + " " + ans;
    $('#sc1').text(ans);
    ce();
    op1 = ans;
  });
  //----------------------end------------------------------//
});