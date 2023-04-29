// --------------------------AnsforQuestion1------------------------------
// var userInput1=+prompt("Qno:1 :Enter any Number",)

function Answer1() {
  let userInput1 = +prompt("Qno:1 :Enter any Number");
  if (isNaN(userInput1)) {
    document.getElementById("ans1").innerHTML = "";
    document.getElementById("ans1Error").innerHTML =
      "Value should be a number.";
  } else {
    console.log(typeof userInput1);
    document.getElementById("ans1Error").innerHTML = "";
    let userStoreValue1 =
      "The Value of a is :" +
      userInput1 +
      "<br><br>" +
      "----------------------------------" +
      "<br><br>";
    let preIncrement =
      "The Value of ++a is : " +
      ++userInput1 +
      "<br>" +
      "Now the value of a is : " +
      userInput1;

    let posTincrement =
      "The Value of a++ is : " +
      userInput1++ +
      "<br>" +
      "Now the value of a is : " +
      userInput1;

    let preDecerement =
      "The Value of --a is : " +
      --userInput1 +
      "<br>" +
      "Now the value of a is : " +
      userInput1;

    let postDecrement =
      "The Value of a-- is : " +
      userInput1-- +
      "<br>" +
      "Now the value of a is : " +
      userInput1;

    document.getElementById("ans1").innerHTML =
      "<h3>Result : </h3><br>" +
      userStoreValue1 +
      preIncrement +
      "<br><br>" +
      posTincrement +
      "<br><br>" +
      preDecerement +
      "<br><br>" +
      postDecrement;
  }
}

function ClearAns1() {
  document.getElementById("ans1").innerHTML = "";
  document.getElementById("ans1Error").innerHTML = "";
}

// --------------------------AnsforQuestion2------------------------------

function Answer2() {
  let userInput2 = +prompt("Enter a number for a");
  let userInput3 = +prompt("Enter a number for b");
  console.log(isNaN(userInput2));
  console.log(isNaN(userInput3));
  if (isNaN(userInput2) === true || isNaN(userInput3) === true) {
    document.getElementById("ans2").innerHTML = "";
    document.getElementById("ans2Error").innerHTML =
      "Value should be a number.";
  } else {
    document.getElementById("ans2Error").innerHTML = "";
    let userValueA = "The value of a = " + userInput2;
    // console.log("ssssssssss", userValueA);
    let useValueB = "The Value of b = " + userInput3;
    let preDecerement = "The Value of --a = " + --userInput2;
    console.log(preDecerement);
    let preDecerementAB =
      "The Value of (--a) - (--b) = " + (--userInput2 - --userInput3);
    let decrementIncrement =
      "The Value of (--a) - (--b) + (++b) = " +
      (--userInput2 - --userInput3 + ++userInput3);
    let prePostDecrementIncrement =
      "The Value of (--a) - (--b) + (++b) + (b--) = " +
      (--userInput2 - --userInput3 + ++userInput3 + userInput3--);
    let currentA = "The Value of a now = " + userInput2;
    let currentB = "The value of b now = " + userInput3;
    let result =
      "Result is " +
      (--userInput2 - --userInput3 + ++userInput3 + userInput3--);
    document.getElementById("ans2").innerHTML =
      "<h3>Result : </h3><br>" +
      "<br>" +
      userValueA +
      "<br><br>" +
      useValueB +
      "<br><br>" +
      preDecerement +
      "<br><br>" +
      preDecerementAB +
      "<br><br>" +
      decrementIncrement +
      "<br><br>" +
      prePostDecrementIncrement +
      "<br><br>" +
      currentA +
      "<br>" +
      currentB +
      "<br><br>" +
      result;
  }
}

function ClearAns2() {
  document.getElementById("ans2").innerHTML = "";
  document.getElementById("ans2Error").innerHTML = "";
}

// --------------------------AnsforQuestion3------------------------------

function Answer3() {
  let userInput4 = +prompt("Enter Number to see its Table", 5);
  if (isNaN(userInput4)) {
    document.getElementById("ans3").innerHTML = "";
    document.getElementById("ans3Error").innerHTML =
      "Value should be a number.";
  } else {
    document.getElementById("ans3Error").innerHTML = "";
    var table = "";
    for (var index = 1; index <= 10; index++) {
      table +=
        userInput4 + "  x  " + index + "  =  " + userInput4 * index + "<br>";
    }
    document.getElementById("ans3").innerHTML = table;
  }
}

function ClearAns3() {
  document.getElementById("ans3").innerHTML = "";
  document.getElementById("ans3Error").innerHTML = "";
}

// --------------------------AnsforQuestion3------------------------------

function Answer4() {
  let userInput5 = prompt("Enter Your Name");
  if (isNaN(userInput5)) {
    document.getElementById("ans4Error").innerHTML = "";
    document.getElementById("ans4").innerHTML =
      "Hello " +
      `<span style="color:purple"> ${userInput5} </span>`;
  } else {
    document.getElementById("ans4").innerHTML = "";
    document.getElementById("ans4Error").innerHTML = "Value should be a Letter";
  }
}

function ClearAns4() {
  document.getElementById("ans4").innerHTML = "";
  document.getElementById("ans4Error").innerHTML = "";
}
