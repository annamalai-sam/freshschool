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
    name: document.getElementById("name").value,
    mail: document.getElementById("mail").value
  }
  questionList.push(query);
  localStorage.setItem("USER_QUERY_LIST", JSON.stringify(questionList));
  alert("We will answer you soon and Please check your registered email (spam/promotions folder as well) for updates from us.");
}

function onPageLode() {
  let faqList = getFaqData();
  let faq = " ";
  for (let [index, setOfFaq] of faqList.entries()) {
  faq += ` <div class="contant-item">
                <a class="contant-link" href="#question${index}"> ${setOfFaq.question} </a>
                <div class="ans" id="question${index}">
                <p> ${setOfFaq.answer} </p>
                </div>
                </div>`;
  }
  document.getElementById("FAQ").innerHTML = faq;
}

onPageLode();


function getFaqData() {  //get student list from local storage
  let faqList = JSON.parse(localStorage.getItem("FAQ"));
  if (faqList == null) {
    faqList = [];
  }
  return faqList;
}
