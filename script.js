const form = document.getElementById("ageForm");
const h1 = document.getElementById("showAge");
const restBtn = document.getElementById("reset-btn")
const userName = document.getElementById("username");
const email = document.getElementById("email");
const regemail =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
let regExName = /[a-z]{3}/;
form.addEventListener("submit", async function validate(event) {
  event.preventDefault();
  let valid = true;
  if (!regExName.test(userName.value)) {
    alert("must have a name");
    userName.focus();
    valid = false;
    return;
  }
  if (!regemail.test(email.value)) {
    alert("must have a email");
    email.focus();
    valid = false;
    return;
  }
  if (!valid) {
    return;
  }
  try {
    let res = await fetch(`https://api.agify.io?name=${userName.value}`);
    console.log(res);
    let displayAge = await res.json();
    console.log(displayAge)
    h1.textContent = `Your Age is ${displayAge.age}`;
    if(!res.ok){
      h1.textContent= "something went wrong please try again"
   }
  } catch (error) {
    alert("No internet");
  }
});
restBtn.addEventListener("click", function() {
  h1.innerText = ""; 
  userName.value = ""
  email.value = ""

})

// fetch(`https://api.agify.io?name=${userName.value}`).then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log("error",error)
// })

