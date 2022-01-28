function checkResult(even) {         // get mail from user
    even.preventDefault();
    let mail = document.getElementById("res_mail").value;
    let mailExist = showingResult(mail);
    if (mailExist) {
        alert("Mail does not Exist");
    }
}
function showingResult(mail) {  // check user 
    let exist = true;
    let studentlist = getData();
    for (let student of studentlist) {
        if (mail == student.mail) {      // if it exist show result   else alert 
            let result_table = ` <table class="result"> <tr>
            <th class="row"> Name </th> <th class="row"> Date Of Birth </th> <th class="row"> Father's Name </th> <th class="row"> Email </th> <th class="row"> Result </th> </tr>
            <tr><td class="row">${student.firstName} ${student.lastName}</td> <td class="row"> ${student.birthDate} </td><td class="row">  ${student.parentName}</td> <td class="row"> ${student.mail}</td> <td class="row"> ${student.status} </td></tr>
            </table> `;
            document.getElementById("result_table").innerHTML = result_table;
            exist = false;
            break;
        }
    }
    return exist;
}

function getData() {  //get student list from local storage
    let studentList = JSON.parse(localStorage.getItem("STUDENT_FORMLIST"));
    if (studentList == null) {
        studentList = [];
    }
    return studentList;
}
