function onPageLode(){
let questionList = JSON.parse(localStorage.getItem("USER_QUERY_LIST"));
let questionBoxes = " ";
for (const [index,questioner] of questionList.entries()) {
  let questionBox = `<div  style="display:flex;">  <div class="contant">
  <P class="asker" id="name_${index}"> ${questioner.Name} </P> 
  <P class="asker" id="mail_${index}"> ${questioner.mail} </P> 
  <p class="asked"> ${questioner.question} </p>
  </div> 
  <div class="contant">
  <form>
  <textarea  id="${index}" class="ans" cols="30" rows="10" placeholder="Answer please...." required></textarea>
  <button class="btn" data-index="${index}" onclick="answer(event);"> Submit </button>
  <br/><br/>
  <button class="btn" data-index="${index}" onclick="addingFAQ(event);"> Add to FAQ </button>
  <br/>
  </form>
  </div>
  </div>`; 
  questionBoxes = questionBox + questionBoxes;
}
document.getElementById("question_box").innerHTML = questionBoxes;
}
onPageLode();
let allfaq = [];
function addingFAQ(even){
  even.preventDefault();
  let index_value = even.target.dataset.index;
  let questionList = JSON.parse(localStorage.getItem("USER_QUERY_LIST"));
  let questioner = questionList[index_value];
  let userQuestion = questioner.question;
  let answer = document.getElementById(index_value).value;
  let faq = {
  "question" : userQuestion,
  "answer" : answer,
}
  allfaq.push(faq);
  localStorage.setItem("FAQ",JSON.stringify(allfaq));
}

function answer(even){ 
  even.preventDefault();
  let index = even.target.dataset.index;
  let questionList = JSON.parse(localStorage.getItem("USER_QUERY_LIST"));
  let arrayObject = questionList[index];
  let answer = document.getElementById(index).value;
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
