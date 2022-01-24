let allQuestions = JSON.parse(localStorage.getItem("USER_QUERY_LIST"));
let fullQuestions = "";
console.log(allQuestions);
for (let i = 0; i < allQuestions.length ; i++) {
  const each = allQuestions[i];
  let oneQuestion = `<div  style="display:flex;">  <div class="contant">
  <P class="asker" id="name_${i}"> ${each.Name} </P> 
  <P class="asker" id="mail_${i}"> ${each.mail} </P> 
  <p class="asked"> ${each.question} </p>
  </div> 
  <div class="contant">
  <form>
  <textarea  id="${i}" class="ans" cols="30" rows="10" placeholder="Answer please...." required></textarea>
  <button class="btn" data-index="${i}" onclick="answer(event);"> Submit </button>
  <br/><br/>
  <button class="btn" data-index="${i}" onclick="addingFAQ(event);"> Add to FAQ </button>
  <br/>
  </form>
  </div>
  </div>`; 
  fullQuestions = fullQuestions + oneQuestion;
document.getElementById("question_box").innerHTML = fullQuestions;
}
let allfaq = [];
function addingFAQ(even){
  even.preventDefault();
  let index_value = even.target.dataset.index;
  let arrayObj = allQuestions[index_value];
  let user_ques = arrayObj.question;
  let answer = document.getElementById(index_value).value;
  let faq = {
  "question" : user_ques,
  "answer" : answer,
}
  allfaq.push(faq);
  localStorage.setItem("FAQ",JSON.stringify(allfaq));
}


function answer(even){
  even.preventDefault();
  let indx = even.target.dataset.index;
  let arrayObject = allQuestions[indx];
  let answer = document.getElementById(indx).value;
  let question = arrayObject.question;
  console.log(question);
  console.log(answer);
  let contant = `
  ${question}       
  ${answer}
  `;
  const emailBody = {
  to_email: arrayObject.mail, // replace it with the receiver's email address
  to_name: arrayObject.Name, // replace it with the receiver's name
  message: contant,
};
console.log(emailBody);
sendEmailNotification(emailBody);
}

  function sendEmailNotification(body) {
    emailjs.send("service_1fhzihk", "template_lu9b6ct", body).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        // TODO: to do after Email is sent SUCCESSFULLY  //
      },
      function (error) {
        console.log("FAILED...", error);
        // TODO: to do if sending Email was UNSUCCESSFUL  //
      }
    );
    console.log(body);
  }
