let allForms = JSON.parse(localStorage.getItem("STUDENT_FORMLIST"));
let fullName = "";
for (let i = 0; i < allForms.length; i++) {
  let user = allForms[i];
  let Name = ` <table class="table"> <tr> <th> Name </th>
                <td> ${user.First_Name}  ${user.Last_name} </td> </tr>
                <tr> <th> Date Of Birth </th> <td> ${user.DOB} </td> </tr>
                <tr> <th> Father's Name </th> <td> ${user.Par_name} </td> </tr>
                <tr> <th> Email </th> <td> ${user.Email} </td> </tr>
                <form>
                <tr> <th> <label for="checkBox_${i}"> Result </label> </th> 
                <td>              
                <select id="checkBox_${i}" data-index="${i}" onchange="update(event)">
                <option selected disable> ${user.status} </option>
                <option>Selected</option>
                <option>Waiting list</option>
                <option>Not selected</option>
                </select>
                </form> <span id="mail_${i}">  </span>
                </td> </tr> </table>`;
  fullName = fullName + Name;
}
document.getElementById("main_table").innerHTML = fullName;
function update(even) {
  let result = even.target.value;
  let indx = even.target.dataset.index;
  console.log(indx);
  console.log(result);
  let send = `<button  data-addstauts="${result}" data-index="${indx}" onclick="sendMail(event)" class="btn">Send mail</button>`;
  document.getElementById(`mail_${indx}`).innerHTML = send;
  localStorage.setItem("All_form", JSON.stringify(allForms));
}
function sendMail(even) {
  let index = even.target.dataset.index;
  let obj = allForms[index];
  let Result = even.target.dataset.addstauts;
  console.log(Result);
  console.log(obj.Email);
  let contant = `${obj.First_Name+obj.Last_name} you will be ${Result}  for Freshschool in this year`;
  
  const emailBody = {
    to_email: obj.Email, // replace it with the receiver's email address
    to_name: obj.First_Name+obj.Last_name, // replace it with the receiver's name
    message: contant,
  };
  console.log(emailBody);
  sendEmailNotification(emailBody);
}

function sendEmailNotification(body) {
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
}

