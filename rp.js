
const uc = document.getElementById("uc");
const lc = document.getElementById("lc");
const dg = document.getElementById("dg");
const sc = document.getElementById("sc");
function gen() {
  let x = document.getElementById("len");
  let y = "";

  if (uc.checked) y += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lc.checked) y += "abcdefghijklmnopqrstuvwxyz";
  if (dg.checked) y += "0123456789";
  if (sc.checked) y += "!@#$%^&*()_+[]{}|;:',.<>?";
//   console.log(y);
  if (y === "") {
    war.textContent = "Please select at least one option.";
    return;
  }

  let pass = ""
  for (let i = 1; i <= x; i++) {
    pass = pass + y[Math.floor(Math.random() * y.length)];
  }
  console.log(pass);
  document.getElementById("outputa").textContent = `${pass}`;
}
