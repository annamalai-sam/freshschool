let all_adm = [
    {
        "ad_mail":"chitra.muthukumaran@freshworks.com",  
        "ad_pass":"FWE1019C",
    },
    {
      "ad_mail":"prasannabharati.ram@freshworks.com",  
      "ad_pass":"FWE1457C",
    },
    {
        "ad_mail":"shanmuga.anandaraman@freshworks.com",  
        "ad_pass":"FWE0580C",
    },
]
localStorage.setItem("allAdmin", JSON.stringify(all_adm));

let allAdmin = JSON.parse(localStorage.getItem("allAdmin"));
function login (even){
    even.preventDefault();
    let mail = document.getElementById("inputMail").value;
    let password = document.getElementById("inputPassword").value;
    console.log(mail,password);
    const adminExist = userCheck(mail,password);
    console.log(adminExist);
    if (adminExist){
        window.location.href='../../pages/admin.html    ';
    }
    else{
        let output2 = `<p style="color: red;"> Mail id and password does not match </p>`;
        console.log(output2);
        document.getElementById("alert").innerHTML = output2; 
    }
}
    function userCheck(paramail,parapass){
        console.log(paramail,parapass);
        let adminhere = false;
        for (let i of allAdmin){
            const pass = i.ad_pass;
            const gmail = i.ad_mail;
            console.log(pass,gmail);
            if (paramail==gmail && parapass==pass){
                adminhere = true;
                break;
            }
        }
        return adminhere;
    }
