function newfrm() {
  let allfrm = [];
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let stu_num = document.getElementById("stu_num").value;
  let dob = document.getElementById("dob").value;
  let document = document.getElementById("document").value;
  let par_name = document.getElementById("par_name").value;
  let par_email = document.getElementById("par_email").value;
  let par_num = document.getElementById("par_num").value;
  let address = document.getElementById("address").value;
  let form = {
    First_Name: firstname,
    Last_name: lastname,
    Email: email,
    Stu_num: stu_num,
    DOB: dob,
    Document: document,
    Par_name: par_name,
    Par_email: par_email,
    Par_num: par_num,
    address: address,
  };

  alert(form);
}
