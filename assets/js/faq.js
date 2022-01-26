function getData() {
  let querylist = JSON.parse(localStorage.getItem("USER_QUERY_LIST"));
  if (querylist == null) {
    querylist = [];
  }
  return querylist;
}

function addQuery(even) {
  even.preventDefault();
  let questionList = getData();
  let query = {
    question: document.getElementById("query").value,
    Name: document.getElementById("name").value,
    mail: document.getElementById("mail").value
  }
  questionList.push(query);
  localStorage.setItem("USER_QUERY_LIST", JSON.stringify(questionList));
  alert("We will answer you soon and Please check your registered email (spam/promotions folder as well) for updates from us.");
}

function onPageLode() {
  let allFaq = JSON.parse(localStorage.getItem("FAQ"));
  let faqlist = "";
  for (let [index, setOfFaq] of allFaq.entries()) {
    let faq = ` <div class="contant-item">
                <a class="contant-link" href="#question${index}"> ${setOfFaq.question} </a>
                <div class="ans" id="question${index}">
                <p> ${setOfFaq.answer} </p>
                </div>
                </div>`;
    faqlist = faqlist + faq;
  }
  document.getElementById("FAQ").innerHTML = faqlist;
}

onPageLode();



