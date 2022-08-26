function onPageLode() {
  let admins = [
    {
      mail: "chitra.muthukumaran@freshworks.com",
      password: "CM1019",
    },
    {
      mail: "shanmuga.anandaraman@freshworks.com",
      password: "SA0580",
    },
    {
      mail: "prasannabharati.ram@freshworks.com",
      password: "PR1457",
    },
  ];
  localStorage.setItem("ADMIN_LIST", JSON.stringify(admins));
}
onPageLode();
function login(even) {  // get mail and password from the user
  even.preventDefault();
  let mail = document.getElementById("input_mail").value;
  let password = document.getElementById("input_password").value;
  // console.log(mail, password);
  const adminExist = userCheck(mail, password);
  // console.log(adminExist);
  if (adminExist) {
    window.location.href = "./../pages/admin.html";
  } else {
    let alertLine = `<p style="color: red;"> Mail id and password does not match </p>`;
    document.getElementById("alert").innerHTML = alertLine;
  }
}
function userCheck(email, password) {    // check the get mail and password correct or not
  // console.log(email, password);
  let adminlist = JSON.parse(localStorage.getItem("ADMIN_LIST"));
  let adminhere = false;
  for (let admin of adminlist) {
    // console.log(admin.password, admin.mail);
    if (email == admin.mail && password == admin.password) {
      adminhere = true;
      break;
    }
  }
  return adminhere;
}

function show_pass() {                         // showing password in html page
  let checkBox = document.getElementById("show_password");
  if (checkBox.checked) {
    document.getElementById("input_password").type = "text";
  } else {
    document.getElementById("input_password").type = "password";
  }
}
