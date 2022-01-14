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
    mail : document.getElementById("mail").value
    }
    allQueries.push(queries);
    localStorage.setItem("allQuestions", JSON.stringify(allQueries));
    alert("We will answer you soon and Please check your registered email (spam/promotions folder as well) for updates from us.");
}