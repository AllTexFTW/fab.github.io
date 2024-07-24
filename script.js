function calculate() {
  var pSize = document.getElementById("pSize").value;
  var cuts = document.getElementById("cuts").value;
  var thrds = document.getElementById("thrds").value;
  var grv = document.getElementById("grv").value;
  var schedule = document.getElementById("scheudle").value;
  var buffer = 45;

  //Calculate time for STD pipe
  if (pSize == "0.5" || pSize == 1 || pSize == "0.75" && schedule == "STD") {
    var cutTime = 1;
    var thrdTime = 3;
    var grvTime = 5
    var totalTime = ((cutTime * cuts + thrdTime * thrds + grvTime * grv) + buffer)
    alert("Estimated time: " + totalTime + " minutes" )
  }
  if (pSize == "1.5" || pSize == 2 || pSize == "1.25" || pSize == "2.5" && schedule == "STD") {
    var cutTime = 1;
    var thrdTime = 4;
    var grvTime = 1;
    var totalTime = ((cutTime * cuts + thrdTime * thrds + grvTime * grv) + buffer)
    alert("Estimated time: " + totalTime + " minutes" )
  }
  if (pSize == 3 || pSize == 4 && schedule == "STD") {
    var cutTime = 2;
    var thrdTime = 6;
    var grvTime = 5;
    var totalTime = ((cutTime * cuts + thrdTime * thrds + grvTime * grv) + buffer)
    alert("Estimated time: " + totalTime + " minutes" )
  }
  if (pSize == 5 || pSize == 6 && schedule == "STD") {
    var cutTime = 5;
    var thrdTime = 6;
    var grvTime = 6;
    var totalTime = ((cutTime * cuts + thrdTime * thrds + grvTime * grv) + buffer)
    alert("Estimated time: " + totalTime + " minutes" )
  }
  if (pSize == 8 || pSize == 10 && schedule == "STD") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 15;
    var totalTime = ((cutTime * cuts + thrdTime * thrds + grvTime * grv) + buffer)
    alert("Estimated time: " + totalTime + " minutes" )
  }
  if (pSize == 12 && schedule == "STD") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 30;
    var totalTime = ((cutTime * cuts + thrdTime * thrds + grvTime * grv) + buffer)
    alert("Estimated time: " + totalTime + " minutes" )
  }
  if (pSize == 14 && schedule == "STD") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = ((cutTime * cuts + thrdTime * thrds + grvTime * grv) + buffer)
    alert("Estimated time: " + totalTime + " minutes" )
  }

  //Calculate time for XH pipe
  if (pSize == "0.5" || pSize == 1 || pSize == "0.75" && schedule == "STD") {
    var cutTime = 1;
    var thrdTime = 3;
    var grvTime = 5
    var totalTime = ((cutTime * cuts + thrdTime * thrds + grvTime * grv) + buffer)
    alert("Estimated time: " + totalTime + " minutes" )
  }
  if (pSize == "1.5" || pSize == 2 || pSize == "1.25" || pSize == "2.5" && schedule == "STD") {
    var cutTime = 1;
    var thrdTime = 4;
    var grvTime = 1;
    var totalTime = ((cutTime * cuts + thrdTime * thrds + grvTime * grv) + buffer)
    alert("Estimated time: " + totalTime + " minutes" )
  }
  if (pSize == 3 || pSize == 4 && schedule == "STD") {
    var cutTime = 2;
    var thrdTime = 6;
    var grvTime = 5;
    var totalTime = ((cutTime * cuts + thrdTime * thrds + grvTime * grv) + buffer)
    alert("Estimated time: " + totalTime + " minutes" )
  }
  if (pSize == 5 || pSize == 6 && schedule == "STD") {
    var cutTime = 5;
    var thrdTime = 6;
    var grvTime = 6;
    var totalTime = ((cutTime * cuts + thrdTime * thrds + grvTime * grv) + buffer)
    alert("Estimated time: " + totalTime + " minutes" )
  }
  if (pSize == 8 || pSize == 10 && schedule == "STD") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 15;
    var totalTime = ((cutTime * cuts + thrdTime * thrds + grvTime * grv) + buffer)
    alert("Estimated time: " + totalTime + " minutes" )
  }
  if (pSize == 12 && schedule == "STD") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 30;
    var totalTime = ((cutTime * cuts + thrdTime * thrds + grvTime * grv) + buffer)
    alert("Estimated time: " + totalTime + " minutes" )
  }
  if (pSize == 14 && schedule == "STD") {
    var cutTime = 5;
    var thrdTime = 7;
    var grvTime = 10;
    var totalTime = ((cutTime * cuts + thrdTime * thrds + grvTime * grv) + buffer)
    alert("Estimated time: " + totalTime + " minutes" )
  }
}
