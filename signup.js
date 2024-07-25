document
  .querySelector('button[type="submit"]')
  .addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Login button clicked!");
  });
function btn() {
  let selectButton = document.getElementById("button");
  selectButton.addEventListener("click", function () {
    alert("Your account has been created successfully😁");
    console.log("Your account has been created successfully😁");
  });
}
