let allfrm = [];

function pre_data() {
  let application = JSON.parse(localStorage.getItem("STUDENT_FORMLIST"));
  if (application == null) {
    allfrm = [];
  } else {
    allfrm = application;
  }
}
pre_data();

function loginAlert(even) {
  even.preventDefault();
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let stu_num = document.getElementById("stu_num").value;
  let dob = document.getElementById("dob").value;
  let documnt = document.getElementById("document").value;
  let par_name = document.getElementById("par_name").value;
  let par_email = document.getElementById("par_email").value;
  let par_num = document.getElementById("par_num").value;
  let address = document.getElementById("address").value; 

  const isEmailAlreadyExist = emailValid(email);

  console.log(isEmailAlreadyExist);

  if (isEmailAlreadyExist) {
    alert("Email already exist");
  } else {
        let form = {
     "First_Name": firstname,
      "Last_name": lastname,
      "Email": email,
      "Stu_num": stu_num,
      "DOB": dob,
      "Documnt": documnt,
      "Par_name": par_name,
      "Par_email": par_email,
      "Par_num": par_num,
      "address": address,
      "status":"Enrolled",
    };
    console.log(form);
    allfrm.push(form);
    console.log(allfrm);
    localStorage.setItem("STUDENT_FORMLIST", JSON.stringify(allfrm));
    alert("Successfully Registored and Please check your registered email (spam/promotions folder as well) for updates from us.");
  }
}
function emailValid(current_email) {
  
  let isUsed = false;
  
  for (let i of allfrm) {
    const gmail = i.Email;
    if (current_email == gmail) {
      isUsed = true;
      break;
    }
  }
  return isUsed;
}
