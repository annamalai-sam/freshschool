function getData() {  //get student list from local storage
  let studentList = JSON.parse(localStorage.getItem("STUDENT_FORMLIST"));
  if (studentList == null) {
    studentList = [];
  }
  return studentList;
}


function loginAlert(even) {  //get mail from user
  even.preventDefault();
  let email = document.getElementById("email").value;
  const isEmailAlreadyExist = emailValid(email); // check user mail is already exist or not 
  // console.log(isEmailAlreadyExist);

  if (isEmailAlreadyExist) {            // if is exist alert 
    alert("Email already exist");
  } else {                           // else  get value from user and store in local storage
    let newForm = {
      "firstName": document.getElementById("firstname").value,
      "lastName": document.getElementById("lastname").value,
      "mail": email,
      "contactNumber": document.getElementById("contact_number").value,
      "birthDate": document.getElementById("dob").value,
      "Document": document.getElementById("document").value,
      "parentName": document.getElementById("parent_name").value,
      "parentMail": document.getElementById("parent_email").value,
      "parentContantNumber": document.getElementById("parent_contact_number").value,
      "address": document.getElementById("address").value,
      "status": "Enrolled",
    };
    // console.log(newForm);
    let formList = getData();
    formList.push(newForm);
    // console.log(formList);
    localStorage.setItem("STUDENT_FORMLIST", JSON.stringify(formList));
    alert("Successfully Registored and Please check your registered email (spam/promotions folder as well) for updates from us.");
  }
}
function emailValid(current_email) {    // check mail from user
  let isUsed = false;
  let formList = getData();
  for (let form of formList) {
    if (current_email == form.mail) {
      isUsed = true;
      break;
    }
  }
  return isUsed;
}



