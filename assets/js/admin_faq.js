let allQuestions = JSON.parse(localStorage.getItem("allQuestions"));
let fullQuestions = "";
for (let i = 0; i < allQuestions.length ; i++) {
  const each = allQuestions[i];
  let oneQuestion = `<div  style="display:flex;">  <div class="contant">
  <P class="asker" id="mail_${i}"> ${each.mail} </P> 
  <p class="asked"> ${each.question} </p>
  </div> 
  <div class="contant">
  <form>
  <textarea  id="${i}" class="ans" cols="30" rows="10" minlength="10" placeholder="Answer please...." required></textarea>
  <button class="btn" data-index="${i}"  data-ques="${each.question}" data-mail="${each.mail}" onclick="answer(event);"> Submit </button>
  <br> <br>
  </form>
  </div>
  </div>`; 
  fullQuestions = fullQuestions + oneQuestion;
document.getElementById("output").innerHTML = fullQuestions;
}
function answer(even){
  even.preventDefault();
  let indexValue = even.target.dataset.index;
  let ans = document.getElementById(indexValue).value;
  let userMail = even.target.dataset.mail;
  let userQues = even.target.dataset.ques;
  console.log(ans);
  console.log(userQues);
  console.log(userMail);
  sendMail(userMail,userQues,ans); 
  console.log("value function");
}
function sendMail(user_mail,user_ques,Answer){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "freshschool2022@gmail.com",
    Password : "chitra@B2",
    To : user_mail,
    From : "freshschoolsb2@gmail.com",
    Subject : user_ques,
    Body : Answer
})
console.log(answer);
} 