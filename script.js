function calculate() {
  var pSize = document.getElementById("pSize").value;
  var cuts = document.getElementById("cuts").value;
  var thrds = document.getElementById("thrds").value;
  var grv = document.getElementById("grv").value;
  var schedule = document.getElementById("scheudle").value;

  //Calculate time for STD pipe
  if (pSize == "0.5" || pSize == 1 && schedule == "STD") {
    var cutTime = 2;
    var thrdTime = 5;
    var grvTime = 5
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == "1.5" || pSize == 2 && schedule == "STD") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == "2.5" || pSize == 3 && schedule == "STD") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == 4 || pSize == 5 && schedule == "STD") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == 6 && schedule == "STD") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == 8 && schedule == "STD") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == 10 && schedule == "STD") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == 12 && schedule == "STD") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == 14 && schedule == "STD") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }

  //Calculate time for XH pipe
  if (pSize == "0.5" || pSize == 1 && schedule == "XH") {
    var cutTime = 2;
    var thrdTime = 5;
    var grvTime = 5
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == "1.5" || pSize == 2 && schedule == "XH") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == "2.5" || pSize == 3 && schedule == "XH") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == 4 || pSize == 5 && schedule == "XH") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == 6 && schedule == "XH") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == 8 && schedule == "XH") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == 10 && schedule == "XH") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == 12 && schedule == "XH") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
  if (pSize == 14 && schedule == "XH") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)
    alert("Estimated time: " + totalTime )
  }
}
