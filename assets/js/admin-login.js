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
        window.location.href='../../pages/add.html';
        // let output1 = `<p style="color: red;"> logged in succesfully </p>`;
        // document.getElementById("alert").innerHTML = output1
    }
    else{
        let output2 = `<p style="color: red;"> Mail id and password does not match </p>`;
        console.log(output2);
        document.getElementById("alert").innerHTML = output2; 
    }
}
    function userCheck(paramail,parapass){
        let adminhere = false;
        for (let i = 0; i < all_admin.length; i++){
            const user = all_admin[i];
            const gmail = user.ad_mail;
            const pass = user.ad_pass;
            if (paramail==gmail && parapass==pass){
                adminhere = true;
                break;
            }
        }
        return adminhere;
    }
