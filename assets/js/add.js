let allForms = JSON.parse(localStorage.getItem("All_form"));
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
                <select id="checkBox_${i}" data-index="${i}" data-status="${user.status}" data-gmail="${user.Email}" onchange="update(event)">
                <option selected disable> ${user.status} </option>
                <option>Selected</option>
                <option>Waiting list</option>
                <option>Not selected</option>
                </select>
                </form> <span id="mail">  </span>
                </td> </tr> </table>`;
  fullName = fullName + Name;
}
document.getElementById("output").innerHTML = fullName;
function update(even){
    let result = even.target.value;
    let user_mail = allForms[even.target.dataset.index].Email;
    let status_value = allForms[even.target.dataset.index].status;
    let name = allForms[even.target.dataset.index].First_Name+" "+allForms[even.target.dataset.index].Last_name;
    console.log(name);
    console.log(user_mail);
    status_value = result;
    console.log(status_value);
    localStorage.setItem("All_form", JSON.stringify(allForms));
    let send = `<button data-mail="${user_mail}" data-name = "${name}" data-addstauts="${status_value}" onclick="sendMail(event)" class="btn">Send mail</button>`;
    document.getElementById("mail").innerHTML = send;
}
function sendMail(even) {
let to = even.target.dataset.mail;
let state = even.target.dataset.addstauts;
let name = even.target.dataset.name;
let contant = `${name} you will be ${state}  for Freshschool for in this year`;
Email.send({
  Host : "smtp.gmail.com",
  Username : "freshschool2022@gmail.com",
  Password : "chitra@B2",
  To : to,
  From : "freshschoolsb2@gmail.com",
  Subject : "Result from Freshschool",
  Body : contant
})  
} 