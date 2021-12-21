let result = JSON.parse(localStorage.getItem("All_form"));
for (i = 0; i < result.length; i++) {
const user = result[i];
let why = ` <form onsubmit="update()">
            <label for="result"> Result </label>
            <select id="result">
            <option selected>----</option>
            <option>Selected</option>
            <option>Waiting list</option>
            <option>Not selected</option>
            <input type="submit" value="Enter"> </select>`;
        }
        console.log(why);
 let fullName = '';
for (i = 0; i < result.length; i++) {
    const user = result[i];
     let Name =` <table class="table"> <tr> <th> Name </th>
                <td> ${user.First_Name} ${user.Last_name} </td> </tr>
                <tr> <th> Date Of Birth </th> <td> ${user.DOB} </td> </tr>
                <tr> <th> Father's Name </th> <td> ${user.Par_name} </td> </tr>
                <tr> <th> Email </th> <td> ${user.Email} </td> </tr>
                <tr> <th> Result </th> 
                <td> ${why}
                </form> 
                </td> </tr> </table>`;
         fullName = fullName+Name;
}
document.getElementById("output").innerHTML= fullName;
function update() {
    event.preventDefault();
    var selectD = document.getElementById('result');
    var opt = selectD.options[selectD.selectedIndex].text;
    document.getElementById('not').innerHTML = opt;
}
