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
 <button class="btn" data-index="${i}"  data-ques="${each.question}" onclick="addingFAQ(event);"> Add to FAQ </button>
   <br>
  <br> <br>
  </form>
  </div>
  </div>`; 
  fullQuestions = fullQuestions + oneQuestion;
document.getElementById("output").innerHTML = fullQuestions;
}
let allfaq = [];
 function addingFAQ(even){
  even.preventDefault();
   let user_ques = even.target.dataset.ques;
   let index_value = even.target.dataset.index;
   let answer = document.getElementById(index_value).value;
   let faq = {
     "question" : user_ques,
     "answer" : answer,
   }
   allfaq.push(faq);
   localStorage.setItem("FAQ",JSON.stringify(allfaq));
 }








 // function answer(even){
//   even.preventDefault();
//   let indexValue = even.target.dataset.index;
//   let ans = document.getElementById(indexValue).value;
//   let userMail = even.target.dataset.mail;
//   let userQues = even.target.dataset.ques;
//   console.log(ans);
//   console.log(indexValue);
//   console.log(userMail);
//   console.log(userQues);

//   Email.send({
//     Host : "smtp.gmail.com",
//     Username : "freshschool2022@gmail.com",
//     Password : "chitra@B2",
//     To : userMail,
//     From : "freshschoolsb2@gmail.com",
//     Subject : userQues,
//     Body : ans
//   })  

// console.log("sended");
// console.log(Email.send);
// }
//  <button class="btn" data-index="${i}"  data-ques="${each.question}" data-mail="${each.mail}" onclick="answer(event);"> Submit </button>

