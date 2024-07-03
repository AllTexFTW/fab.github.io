function calculate() {
  var pSize = document.getElementById("pSize").value;
  var cuts = document.getElementById("cuts").value;
  var thrds = document.getElementById("thrds").value;
  var grv = document.getElementById("grv").value;

  if (pSize == 1/2 || pSize == 1) {
    var cutTime = 2;
    var thrdTime = 5;
    var grvTime = 5
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == "1.5" || pSize == 2) {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == "2.5" || pSize == 3) {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == 4 || pSize == 5) {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == 6) {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == 8) {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == 10) {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == 12) {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == 14) {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
}
