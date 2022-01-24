function onPageLode(){
let admins = [
    {
        "mail":"chitra.muthukumaran@freshworks.com",  
        "password":"CM1019",
    },
    {
        "mail":"shanmuga.anandaraman@freshworks.com",  
        "password":"SA0580",
    },
    {
        "mail":"prasannabharati.ram@freshworks.com",  
        "password":"PR1457",
    },
]
localStorage.setItem("ALL_ADMIN", JSON.stringify(admins));  
}
onPageLode();
function login (even){
    even.preventDefault();
    let mail = document.getElementById("input_mail").value;
    let password = document.getElementById("input_password").value;
    console.log(mail,password);
    const adminExist = userCheck(mail,password);
    console.log(adminExist);
    if (adminExist){
        window.location.href='../../pages/admin.html    ';
    }
    else{
        let alertLine = `<p style="color: red;"> Mail id and password does not match </p>`;
        document.getElementById("alert").innerHTML = alertLine; 
    }
}
    function userCheck(paramail,parapass){
    console.log(paramail,parapass);
    let adminlist = JSON.parse(localStorage.getItem("ALL_ADMIN"));
        let adminhere = false;
        for (let admin of adminlist){
            console.log(admin.password,admin.mail);
            console.log(pass,gmail);
            if (paramail==admin.mail && parapass==admin.password){
                adminhere = true;
                break;
            }
        }
        return adminhere;
    }

    function show_pass() {
        let checkBox = document.getElementById("show_password");
        if (checkBox.checked) {
          document.getElementById("inputPassword").type = "text";
        }
        else {
          document.getElementById("inputPassword").type = "password";
        }
      }