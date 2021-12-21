
function checkResult(){
    event.preventDefault();
    console.group("Console_1")
    console.log("First log");
    let mail = document.getElementById("res_mail").value;

    let mailExist = output(mail);
    console.log(mailExist);
    if(mailExist){
        alert("Mail does not Exist");
    }
    console.groupEnd();
}
function output (mail){
    console.group("console_2");
    let exist = true;

    let apply_status = JSON.parse(localStorage.getItem("All_form"));
    
    for (i = 0; i < apply_status.length; i++) {
        const user = apply_status[i];
        const gmail = user.Email;
        if (mail == gmail){
            let result = `<tr>
             <th class="row"> Name </th> <th class="row"> Date Of Birth </th> <th class="row"> Father's Name </th> <th class="row"> Email </th> <th class="row"> Result </th>
            </tr>
            <tr> 
            <td class="row">${user.First_Name} ${user.Last_name}</td> <td class="row"> ${user.DOB} </td><td class="row">  ${user.Par_name}</td> <td class="row"> ${user.Email}</td> <td class="row">---</td>
            </tr>`;

            document.getElementById("output").innerHTML = result;
             console.log(gmail);
             console.log(user.First_Name);
             console.log(user.Last_name);
             console.log(user.DOB);
             console.log(user.Par_name);
             exist = false;
            break;
        }
    }
    console.groupEnd();
    return exist;
}