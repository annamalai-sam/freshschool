console.log("Linked");
function answer(even){
    even.preventDefault();
    let indexValue = even.target.dataset.index;
    let ans = document.getElementById(indexValue).value;
    let userMail = even.target.dataset.mail;
    let userQues = even.target.dataset.ques;
    Email.send({
        Host : "smtp.gmail.com",
        Username : "freshschool2022@gmail.com",
        Password : "chitra@B2",
        To : userMail,
        From : "freshschoolsb2@gmail.com",
        Subject : "Result from Freshschool",
        Body : ans
      }).then(
        message => alert(message)
      );
      console.log(ans);
      console.log(userMail);
      console.log(userQues);
}