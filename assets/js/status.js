function checkResult(even){
    even.preventDefault();
    let mail = document.getElementById("res_mail").value;
    let mailExist = output(mail); 
    if(mailExist){
        alert("Mail does not Exist");
    }
}
function output (mail){
    let exist = true;
    let apply_status = JSON.parse(localStorage.getItem("All_form"));
    for (let i of apply_status) {
        const user = apply_status[i];
        const gmail = user.Email;
        if (mail == gmail){
            let result = ` <table class="result"> <tr>
             <th class="row"> Name </th> <th class="row"> Date Of Birth </th> <th class="row"> Father's Name </th> <th class="row"> Email </th> <th class="row"> Result </th>
            </tr>
            <tr> 
            <td class="row">${user.First_Name} ${user.Last_name}</td> <td class="row"> ${user.DOB} </td><td class="row">  ${user.Par_name}</td> <td class="row"> ${user.Email}</td> <td class="row"> ${user.status} </td>
            </tr> </table> `;
            document.getElementById("output").innerHTML = result;
            exist = false;
            break;
        }
    }
    return exist;
}


