function onPageLoad() {             // get all querylist from local storage and display it in on page load 
  let questionList = getUserQueriesData();  // get all queries from local storage 
  let htmlQuestionBox = " ";
  for (const [index, questioner] of questionList.entries()) {
    htmlQuestionBox += `<div  style="display:flex;">  <div class="contant">
  <P class="asker" id="name_${index}"> ${questioner.name} </P> 
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
  }
  document.getElementById("question_box").innerHTML = htmlQuestionBox;
}
onPageLoad();
function addingFAQ(even) {        // Adding FAQ from querylist and show in FAQ page 
  even.preventDefault();
  let index_value = even.target.dataset.index;
  let questionList = getUserQueriesData();
  let questioner = questionList[index_value];
  let userQuestion = questioner.question;
  let answer = document.getElementById(index_value).value;
  let newFaq = {
    "question": userQuestion,
    "answer": answer,
  }
  let faqList = getFaqData();    // get all faqlist from local storage 
  faqList.push(newFaq);
  localStorage.setItem("FAQ", JSON.stringify(faqList));
}

function answer(even) {    // Answering to user querylist
  even.preventDefault();
  let index = even.target.dataset.index;
  let questionList = getUserQueriesData();
  let questioner = questionList[index];
  let answer = document.getElementById(index).value;
  let question = questioner.question;
  console.log(question);
  console.log(answer);
  let contant = `
  ${question}       
  ${answer}
  `;
  const emailBody = {
    to_email: questioner.mail, // replace it with the receiver's email address
    to_name: questioner.name, // replace it with the receiver's name
    message: contant,
  };
  console.log(emailBody);
  sendEmailNotification(emailBody);
}

function sendEmailNotification(body) { // sending answer mail to users 
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

function getUserQueriesData() {  //get querylist from local storage
  let queryList = JSON.parse(localStorage.getItem("USER_QUERY_LIST"));
  if (queryList == null) {
    queryList = [];
  }
  return queryList;
}


function getFaqData() {  //get  list from local storage
  let faqList = JSON.parse(localStorage.getItem("FAQ"));
  if (faqList == null) {
    faqList = [];
  }
  return faqList;
}