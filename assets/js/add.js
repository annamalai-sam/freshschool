let allForms = JSON.parse(localStorage.getItem("All_form"));
let fullName = "";
for (let i of allForms) {
  console.log(i.status);
  let Name = ` <table class="table"> <tr> <th> Name </th>
                <td> ${i.First_Name}  ${i.Last_name} </td> </tr>
                <tr> <th> Date Of Birth </th> <td> ${i.DOB} </td> </tr>
                <tr> <th> Father's Name </th> <td> ${i.Par_name} </td> </tr>
                <tr> <th> Email </th> <td> ${i.Email} </td> </tr>
                <form>
                <tr> <th> <label for="checkBox_${i}"> Result </label> </th> 
                <td>              
                <select id="checkBox_${i}" data-index="${i}" data-status="${i.status}" data-gmail="${i.Email}" onchange="update(event)">
                <option selected disable> ${i.status} </option>
                <option>Selected</option>
                <option>Waiting list</option>
                <option>Not selected</option>
                </select>
                </form> 
                </td> </tr> </table>`;
  fullName = fullName + Name;
}
document.getElementById("output").innerHTML = fullName;
function update(event) {
    let result = event.target.value;
    console.log(result);
    console.log(allForms[event.target.dataset.index]);
    // allForms[even.target.dataset.index].status = result;
    localStorage.setItem("All_form", JSON.stringify(allForms));
}