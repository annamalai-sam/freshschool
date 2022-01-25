function getData() {
  let emptyList = " ";
  let nullList = JSON.parse(localStorage.getItem("USER_QUERY_LIST"));
  if (nullList == null) {
    emptyList = [];
  } else {
    emptyList = nullList;
  }
  return emptyList;
}

function addQueries(even){
    even.preventDefault();
    let newQuestionList = getData();
    let newQuery = {
    question : document.getElementById("query").value,
    Name : document.getElementById("name").value,
    mail : document.getElementById("mail").value
    }
    newQuestionList.push(newQuery);
    localStorage.setItem("USER_QUERY_LIST", JSON.stringify(newQuestionList));
    alert("We will answer you soon and Please check your registered email (spam/promotions folder as well) for updates from us.");
}

function onPageLode(){
  let allfaq = JSON.parse(localStorage.getItem("FAQ"));
  let faqlist = "";
  for(let [index,setOfFaq] of  allfaq.entries()){
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



