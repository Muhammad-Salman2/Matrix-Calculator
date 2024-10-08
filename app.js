


let num1 = document.getElementById("input1")//.value;
let num2 = document.getElementById("input2")//.value;
let inputsDiv1 = document.getElementById("inputdiv1");
let inputsDiv2 = document.getElementById("inputdiv2");
let resultDiv = document.getElementById("resultDiv");





// if (inputsDiv1 === inputsDiv2) {

//   if (inputsDiv1 > "1", inputsDiv1 < 13) {

//     if (inputsDiv2 > "1", inputsDiv2 < 13) {
//       CreateMatrices()
//     } else { alert("please Enter a value greater then 1 and less then 13") }
//   } else { alert("please Enter a value greater then 1 and less then 13") }
// } else { alert("Please enter same numbers") }



function CreateMatrices() {

  num1 = parseInt(num1.value)
  num2 = parseInt(num2.value)

  inputsDiv1.innerHTML = "";
  inputsDiv2.innerHTML = "";

  for (let i = 0; i < num1; i++) {
    for (let j = 0; j < num2; j++) {
      inputsDiv1.innerHTML += ` <input type="number" id="inputbox1-${i}${j}" value="0"  class="type1">`;
      inputsDiv2.innerHTML += ` <input type="number" id="inputbox2-${i}${j}" value="0" class="type1"> `;

    }

    inputsDiv1.innerHTML += "<br />"
    inputsDiv2.innerHTML += "<br />"
  }
}



function Addition() {
  resultDiv.innerHTML = "";

  for (let i = 0; i < num1; i++) {
    for (let j = 0; j < num2; j++) {
      let value1 = document.getElementById(`inputbox1-${i}${j}`).value
      let value2 = document.getElementById(`inputbox2-${i}${j}`).value
      // console.log(value1)
      let add = parseInt(value1) + parseInt(value2);
      console.log(add)

      resultDiv.innerHTML += `<form><input type="number" id="inputbox1-${add}${add}" class="AdditionInp" value="${add}"></form>`;


      // console.log(res);

    }
    resultDiv.innerHTML += "</br >"
  }


}
resultDiv.innerHTML = "";


function Subtraction() {
  for (let i = 0; i < num1; i++) {
    for (let j = 0; j < num2; j++) {
      let value1 = document.getElementById(`inputbox1-${i}${j}`).value
      let value2 = document.getElementById(`inputbox2-${i}${j}`).value
      // console.log(value1)
      let add = parseInt(value1) - parseInt(value2);
      console.log(add)

      resultDiv.innerHTML = `<form><input type="number" id="inputbox1-${add}${add}" class="SubtractionInp" value="${add}"></form>`;


      // console.log(res);

    }
    resultDiv.innerHTML += "<br />"
  }


}
resultDiv.innerHTML = "";

function Multiplication() {
  for (let i = 0; i < num1; i++) {
    for (let j = 0; j < num2; j++) {
      let value1 = document.getElementById(`inputbox1-${i}${j}`).value
      let value2 = document.getElementById(`inputbox2-${i}${j}`).value
      // console.log(value1)
      let add = parseInt(value1) * parseInt(value2);
      console.log(add)

      resultDiv.innerHTML = `<form><input type="number" id="inputbox1-${add}${add}" class="MultiplicationInp" value="${add}"></form>`;


      // console.log(res);

    }
    resultDiv.innerHTML += "<br />"
  }


}
resultDiv.innerHTML = "";

function Divide() {
  for (let i = 0; i < num1; i++) {
    for (let j = 0; j < num2; j++) {
      let value1 = document.getElementById(`inputbox1-${i}${j}`).value
      let value2 = document.getElementById(`inputbox2-${i}${j}`).value
      // console.log(value1)
      let add = parseInt(value1) % parseInt(value2);
      console.log(add)

      resultDiv.innerHTML = `<form><input type="number" id="inputbox1-${add}${add}" class="DivideInp" value="${add}"></form>`;


      // console.log(res);

    }
    resultDiv.innerHTML += "<br />"
  }


}

resultDiv.innerHTML = "";




