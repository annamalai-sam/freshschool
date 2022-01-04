function sendMail(){
    event.preventDefault();
    Email.send({
        Host : "smtp.gmail.com",
        Username : "freshschoolsb2@gmail.com",
        Password : "chitra@B2",
        To : "santhanu236@gmail.com",
        From : "freshschoolsb2@gmail.com",
        Subject : "This is subject",
        Body : "And this is the body"
    }).then(
      alert("mail sented succesfully")
    )
}