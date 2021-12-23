let result = JSON.parse(localStorage.getItem("All_form"));

function why(email, index) {
  return ` 
            <label for="result"> Result </label>
            <select id="result_${index}" data-index="${index}" data-gmail="${email}" onchange="update(event)">
            <option selected disable>----</option>
            <option>Selected</option>
            <option>Waiting list</option>
            <option>Not selected</option>
            </select>`;
};
let fullName = "";
for (let i = 0; i < result.length; i++) {
  const user = result[i];
  let Name = ` <table class="table"> <tr> <th> Name </th>
                <td> ${user.First_Name} ${user.Last_name} </td> </tr>
                <tr> <th> Date Of Birth </th> <td> ${user.DOB} </td> </tr>
                <tr> <th> Father's Name </th> <td> ${user.Par_name} </td> </tr>
                <tr> <th> Email </th> <td> ${user.Email} </td> </tr>
                <tr> <th> Result </th> 
                <td>  <form>${why(user.Email, i)}
                </form> 
                </td> </tr> </table>`;
  fullName = fullName + Name;
}
document.getElementById("output").innerHTML = fullName;

function update(even) {
    
    result[even.target.dataset.index].status = even.target.value;

    console.log(result);

    localStorage.setItem("All_form", JSON.stringify(result));


}
