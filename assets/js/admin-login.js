let all_admin = JSON.parse(localStorage.getItem("allAdmin"));
function login (){
    event.preventDefault();
    let mail = document.getElementById("inputMail").value;
    let password = document.getElementById("inputPassword").value;
    console.log(mail,password);
    const adminExist = userCheck(mail,password);
    console.log(adminExist);
    if (adminExist){
        alert("logged in succesfully");
    }
    else{
        let output = `<p style="color: red;"> Mail id and password does not match </p>`;
        console.log(output);
        document.getElementById("alert").innerHTML = output; 
    }
}
    function userCheck(paramail,parapass){
        let isadmin = false;
        for (let i = 0; i < all_admin.length; i++){
            const user = all_admin[i];
            const gmail = user.ad_mail;
            const pass = user.ad_pass;
            if (paramail==gmail && parapass==pass){
                isadmin = true;
                break;
            }
        }
        return isadmin;
    }
