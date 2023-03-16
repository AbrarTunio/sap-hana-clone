let uname = document.querySelector("#uname");
let pass = document.querySelector("#pass");
let btn = document.querySelector("#btn");
let form = document.querySelector("form");

let logins = ["time", "secret"];
let fail = [];

btn.addEventListener("click", (e) => {
  if (uname.value != logins[0]) {
    fail.push("wrong uname");
    console.log(fail);
    e.preventDefault();
  }

  if (pass.value != logins[1]) {
    fail.push("wrong pass");
    e.preventDefault();
    console.log(fail);
  }
  if (fail.length > 0) {
    e.preventDefault();
    uname.classList.add("error");
    pass.classList.add("error");
    setTimeout(
      () => {
        uname.value = "";
        pass.value = "";
        uname.classList.remove("error");
        pass.classList.remove("error");
        uname.setAttribute("placeholder", "try : time");
        pass.setAttribute("placeholder", "try : secret");
      },

      3000
    );
    fail.length = 0;
  }
});
