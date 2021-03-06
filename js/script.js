
function numberGenerator(min, max) {

  let localMin = min;
  let localMax = max - min + 1;
  return Math.floor(Math.random() * (localMax - localMin)) + localMin;
} // END OF FUNCTION numberGenerator

// -------------------------------------------------------------------

// TODO NOW: modificare il seguente codice per far apparire al click del bottone una box rossa nel caso in cui si riceva un true come risposta dal server (API), verde altrimenti

function addClickListener1() { // FUN-----------

  const btn = $("#pressBTN1");
  btn.click(boxGenerator1);
} // END OF FUNCTION addClickListener1

function boxGenerator1() { // FUN--------------
  $.ajax({

    url: "https://flynn.boolean.careers/exercises/api/random/boolean", // Because this gives back a boolean value (true or false) I can generate two kinds of responses in generateBox1
    method: "GET",
    success: function(data) {
      const res = data.response;
      generateBox1(res); // This gives back true or false. So we can pass the res = type to function generateBox1 it will gi
      },
      error: function() {
        console.log("error");
      }
  });
} // END OF FUNCTION boxGenerator1

function generateBox1(type) { // FUN------------

  const target = $("#target1");
  if (type) {
    target.append('<div class="box1 bg-silver"></div>');
  } else {
    target.append('<div class="box1 bg-gold"></div>');
  }
} // END OF FUNCTION generateBox1


// -----------------------------------------------------------------------------

// TODO NOW: modificare l'esercizio in modo da generare box sempre dello stesso colore ma riportanti la cifra scaricata dalla seguente API

function addClickListener2() { // FUN------------

  const btn = $("#pressBTN2");
  btn.click(boxGenerator2);
} // END OF FUNCTION addClickListener2

function boxGenerator2() { // FUN------------
  $.ajax({

    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function(data) {
      const res = data.response;
      generateBox2(res);
    },
    error: function() {
      console.log("error");
    }
  });
} // END OF FUNCTION boxGenerator2

function generateBox2(value) { // FUN------------

  const target = $("#target2");
  target.append('<div class="box2 bg-lime">' + value + '</div>');
} // END OF FUNCTION generateBox2

// -----------------------------------------------------------------------------

// GOAL: Attraverso l'apposita API di Boolean generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

function emailGenerator() { // FUN------------
  $.ajax({

    url: "https://flynn.boolean.careers/exercises/api/random/mail",
    success: function(data) {

      const email = data.response;
      console.log(email);
      displayEmail(email);
    },
    error: function() {
      console.log("error");
    }
  });
} // END OF FUNCTION emailGenerator

function multiplyFuntion() { // FUN------------

  for (let i = 0; i < 9; i++) {

    emailGenerator();
  }

}

function displayEmail(email) { // FUN------------

  let singleEmail = $("#emails");
  singleEmail.append(' <li class=""> '+ email +'</li> ');
}


// -----------------------------------------------------------------------------





// -----------------------------------------------------------------------------
function init() { // FUN------------

  addClickListener1();
  addClickListener2();
  emailGenerator();
  multiplyFuntion();
} // END OF FUNCTION init

document.addEventListener("DOMContentLoaded", init);
