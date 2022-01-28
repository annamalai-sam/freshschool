function onPageLoad() {   // get all student list from local storage  and show in a html page
  let allForms = getData();
  let htmlResultBox = "";
  for (let [index, user] of allForms.entries()) {
    htmlResultBox += `<table class="table"> <tr> <th> Name </th>
                <td> ${user.firstName}  ${user.lastName} </td> </tr>
                <tr> <th> Date Of Birth </th> <td> ${user.birthDate} </td> </tr>
                <tr> <th> Father's Name </th> <td> ${user.parentName} </td> </tr>
                <tr> <th> Email </th> <td> ${user.mail} </td> </tr>
                <form>
                <tr> <th> <label for="checkBox_${index}"> Result </label> </th> 
                <td>              
                <select id="checkBox_${index}" data-index="${index}" onchange="update(event)">
                <option selected disable> ${user.status} </option>
                <option>Selected</option>
                <option>Waiting list</option>
                <option>Not selected</option>
                </select>
                </form> <span id="mail_${index}">  </span>
                </td> </tr> </table>`;
  }
  document.getElementById("main_table").innerHTML = htmlResultBox;
  // console.log(htmlResultBox);
}
onPageLoad();
function update(even) {       // update the result to the student 
  let allForms = getData();
  let result = even.target.value;
  let index = even.target.dataset.index;
  // console.log(index);
  // console.log(result);
  allForms[index].status = result;
  // console.log(student);
  // console.log(student.status = result);
  let send = `<button  data-addstauts="${result}" data-index="${index}" onclick="sendMail(event)" class="btn">Send mail</button>`;
  document.getElementById(`mail_${index}`).innerHTML = send;
  localStorage.setItem("STUDENT_FORMLIST", JSON.stringify(allForms));
}
function sendMail(even) {           // sending result result mail to the students 
  let index = even.target.dataset.index;
  let allForms = getData();
  let student = allForms[index];
  let result = even.target.dataset.addstauts;
  // console.log(result);
  // console.log(student.mail);
  let contant = `${student.firstName + " " + student.lastName} you will be ${result}  for Freshschool in this year`;

  const emailBody = {
    to_email: student.mail, // replace it with the receiver's email address
    to_name: student.firstName + student.lastName, // replace it with the receiver's name
    message: contant,
  };
  // console.log(emailBody);
  sendEmailNotification(emailBody);
}

function sendEmailNotification(body) {    // sending result result mail to the students
  emailjs.send("service_1fhzihk", "template_lu9b6ct", body).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      // TODO: to do after Email is sent SUCCESSFULLY  //
    },
    function (error) {
      console.log("FAILED...", error);
      // TODO: to do if sending Email was UNSUCCESSFUL  //
    }
  );
  console.log(body);
}

function getData() {    // get all student list from local storage 
  let studentList = JSON.parse(localStorage.getItem("STUDENT_FORMLIST"));
  if (studentList == null) {
    studentList = [];
  }
  return studentList;
}


// for (const [i, v] of ['a', 'b', 'c'].entries()) {
//   console.log(i, v)
// }
