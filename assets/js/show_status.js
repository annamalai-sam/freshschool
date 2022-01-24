function checkResult(even){
    even.preventDefault();
    let mail = document.getElementById("res_mail").value;
    let mailExist = showingResult(mail); 
    if(mailExist){
        alert("Mail does not Exist");
    }
}
function showingResult (mail){
    let exist = true;
    let studentlist = JSON.parse(localStorage.getItem("STUDENT_FORMLIST"));
    for (let student of studentlist) {
        const gmail = student.Email;
        if (mail == gmail){
            let result_table = ` <table class="result"> <tr>
            <th class="row"> Name </th> <th class="row"> Date Of Birth </th> <th class="row"> Father's Name </th> <th class="row"> Email </th> <th class="row"> Result </th>
            </tr>
            <tr> 
            <td class="row">${i.First_Name} ${i.Last_name}</td> <td class="row"> ${i.DOB} </td><td class="row">  ${i.Par_name}</td> <td class="row"> ${i.Email}</td> <td class="row"> ${i.status} </td>
            </tr> </table> `;
            document.getElementById("result_table").innerHTML = result_table;
            exist = false;
            break;
        }
    }
    return exist;
}


