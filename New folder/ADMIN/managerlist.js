// dynamically showing options while adding user 

function checkDesignation() {
  const e = document.getElementById("empdesg");
  const EmployeeDesg = e.options[e.selectedIndex].text;
  if (EmployeeDesg == "Manager") {
    let options = "<option>" + "Select Appointed Manager" + "</option>" + "<option>" + "Admin" + "</option>";
    $("#managernamelist").html(options);
  }
  else {
    fetch("https://localhost:44315/api/Employee/Managerlist")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let options = "<option>" + "Select Appointed Manager" + "</option>" ;
        for (var i = 0; i < data.length; i++) {
          options += "<option>" + data[i].empname + "</option>";
        }
        $("#managernamelist").html(options);
      });
  }
}