let allQueries = [];

function pre_data() {
  let questions = JSON.parse(localStorage.getItem("allQuestions"));
  if (questions == null) {
    allQueries = [];
  } else {
    allQueries = questions;
  }
}
pre_data();



function addQueries(even){
    even.preventDefault();
    let queries = {
    question : document.getElementById("query").value,
    Name : document.getElementById("name").value,
    mail : document.getElementById("mail").value
    }
    allQueries.push(queries);
    localStorage.setItem("allQuestions", JSON.stringify(allQueries));
    alert("We will answer you soon and Please check your registered email (spam/promotions folder as well) for updates from us.");
}


  let allfaq = JSON.parse(localStorage.getItem("FAQ"));
  let output = "";
  for(let i = 0; i < allfaq.length; i++){
    let one = allfaq[i];
    let ques = one.question;
    let anes = one.answer;
    console.log(ques);
    console.log(anes);
    let out = `  <div class="contant-item">
                 <a class="contant-link" href="#question${i}"> ${ques} </a>
                 <div class="ans" id="question${i}">
                 <p> ${anes} </p>
                 </div>
                 </div>`;
    output = output + out;
  }
document.getElementById("output").innerHTML = output;



