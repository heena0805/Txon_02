function insert(num) {
    let exp = document.getElementById("display").innerText;
    if (exp == 0)
      document.getElementById("display").innerHTML = num;
    else
      document.getElementById("display").innerHTML += num;

 
  }

  function equal() {
    let exp = document.getElementById("display").innerText;

    if (exp) {
      document.getElementById("display").innerHTML = eval(exp);
    }
  }

  function backspace() {
    var exp = document.getElementById("display").innerText;
    if (exp.length == 1) {
      document.getElementById("display").innerHTML = 0;
    }

    // document.write(exp)
    else {
      exp = exp.substring(0, exp.length - 1);
      document.getElementById("display").innerHTML = exp;
    }
  }

  function Clear() {
    document.getElementById("display").innerHTML = 0;
  }
