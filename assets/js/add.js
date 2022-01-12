let allForms = JSON.parse(localStorage.getItem("All_form"));
let fullName = "";
for (let i of allForms) {
  const user = allForms[i];
  let Name = ` <table class="table"> <tr> <th> Name </th>
                <td> ${user.First_Name}  ${user.Last_name} </td> </tr>
                <tr> <th> Date Of Birth </th> <td> ${user.DOB} </td> </tr>
                <tr> <th> Father's Name </th> <td> ${user.Par_name} </td> </tr>
                <tr> <th> Email </th> <td> ${user.Email} </td> </tr>
                <form>
                <tr> <th> <label for="checkBox_${i}"> Result </label> </th> 
                <td>              
                <select id="checkBox_${i}" data-index="${i}" data-status="${user.status}" data-gmail="${user.Email}" onchange="update(event)">
                <option selected disable> ${user.status} </option>
                <option>Selected</option>
                <option>Waiting list</option>
                <option>Not selected</option>
                </select>
                </form> 
                </td> </tr> </table>`;
  fullName = fullName + Name;
}
document.getElementById("output").innerHTML = fullName;
function update(even) {
    let result = even.target.value;
    allForms[even.target.dataset.index].status = result;
    localStorage.setItem("All_form", JSON.stringify(allForms));
}