let allQuestions = JSON.parse(localStorage.getItem("allQuestions"));
let fullQuestions = "";
for (let i = 0; i < allQuestions.length ; i++) {
  const each = allQuestions[i];
  let oneQuestion = `<div  style="display:flex;">
  <div class="contant">
  <P class="asker" id="mail"> ${each.mail} </P> 
  <p class="asked"> ${each.question} </p>
  </div> 
  <div class="contant">
  <form onsubmit="">
  <textarea  id="ques" class="ans" cols="30" rows="10" minlength="10" placeholder="Answer please...." required></textarea>
  <button class="btn"> Submit </button>
  <br> <br>
  </form>
  </div>
  </div>`; 
  fullQuestions = fullQuestions + oneQuestion;
document.getElementById("output").innerHTML = fullQuestions;
}
             