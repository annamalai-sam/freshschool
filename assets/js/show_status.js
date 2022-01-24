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
        const gmail = i.Email;
        if (mail == gmail){
            let result = ` <table class="result"> <tr>
             <th class="row"> Name </th> <th class="row"> Date Of Birth </th> <th class="row"> Father's Name </th> <th class="row"> Email </th> <th class="row"> Result </th>
            </tr>
            <tr> 
            <td class="row">${i.First_Name} ${i.Last_name}</td> <td class="row"> ${i.DOB} </td><td class="row">  ${i.Par_name}</td> <td class="row"> ${i.Email}</td> <td class="row"> ${i.status} </td>
            </tr> </table> `;
            document.getElementById("output").innerHTML = result;
            exist = false;
            break;
        }
    }
    return exist;
}


