var managername = localStorage.getItem('Manager-name');
  console.log(managername)
  fetch('https://localhost:44315/api/employee/GetManagerEmailid/' + managername)
    .then(response => response.json())
    .then(data => window.localStorage.setItem('managerMail', data[0].emailid));

// ------------------------ GET LEAVES OF ALL STATUS AND PENDING ----------------- 

var f = window.localStorage.getItem("id");
fetch("https://localhost:44315/api/Leave/Getleavetable/" + f,
  {
    method: "GET",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",
  })
  //.then(response => response.json())
  .then((result) => result.json())

  .then((data) => {


    console.log("all" + data);
    let li = ``;
    data.forEach((EmployeeFetch) => {
      localStorage.setItem("manager-name", EmployeeFetch.amid)
      var sdate = `${EmployeeFetch.sdate}`;
      var yyyy = sdate.slice(0, 4)
      var mm = sdate.slice(5, 7)
      var dd = sdate.slice(8, 10)
      sdate = mm + "/" + dd + "/" + yyyy

      var edate = `${EmployeeFetch.edate}`;
      var yyyy = edate.slice(0, 4)
      var mm = edate.slice(5, 7)
      var dd = edate.slice(8, 10)
      edate = mm + "/" + dd + "/" + yyyy
      li += `<tr>
              
              <td>${EmployeeFetch.type}</td>
              <td>${sdate} </td>              
              <td>${edate}</td>
              <td>${EmployeeFetch.status}</td>
              <td>${EmployeeFetch.amid}</td>
                         
              </tr>`;
    });
    document.getElementById("myrequestleave").innerHTML = li;
  });

// --------------------------  OPEN LEAVE OF  EMPLOYEEE --------- 

fetch("https://localhost:44315/api/Leave/GetOpenedLeaveTable/" + f,
  {
    method: "GET",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",
  })
  //.then(response => response.json())
  .then((result) => result.json())

  .then((data) => {


    console.log("open" + data);
    let li = ``;
    data.forEach((EmployeeFetch) => {
      var sdate = `${EmployeeFetch.sdate}`;
      var yyyy = sdate.slice(0, 4)
      var mm = sdate.slice(5, 7)
      var dd = sdate.slice(8, 10)
      sdate = mm + "/" + dd + "/" + yyyy

      var edate = `${EmployeeFetch.edate}`;
      var yyyy = edate.slice(0, 4)
      var mm = edate.slice(5, 7)
      var dd = edate.slice(8, 10)
      edate = mm + "/" + dd + "/" + yyyy
      li += `<tr>
               
               <td>${EmployeeFetch.type}</td>
               <td>${sdate} </td>               
               <td>${edate}</td>
               <td>${EmployeeFetch.status}</td>
               <td>${EmployeeFetch.amid}</td>
                          
               </tr>`;
    });
    document.getElementById("openrequestleave").innerHTML = li;
  });

// ------------------------- CLOSED LEAVE OF EMPLOYEE --------------- 

fetch("https://localhost:44315/api/Leave/GetClosedLeaveTable/" + f,
  {
    method: "GET",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",
  })
  //.then(response => response.json())
  .then((result) => result.json())

  .then((data) => {
    console.log("closed" + data);
    let li = ``;
    data.forEach((EmployeeFetch) => {
      var sdate = `${EmployeeFetch.sdate}`;
      var yyyy = sdate.slice(0, 4)
      var mm = sdate.slice(5, 7)
      var dd = sdate.slice(8, 10)
      sdate = mm + "/" + dd + "/" + yyyy

      var edate = `${EmployeeFetch.edate}`;
      var yyyy = edate.slice(0, 4)
      var mm = edate.slice(5, 7)
      var dd = edate.slice(8, 10)
      edate = mm + "/" + dd + "/" + yyyy
      li += `<tr>
                
                <td>${EmployeeFetch.type}</td>
                <td>${sdate} </td>               
                <td>${edate}</td>
                <td>${EmployeeFetch.status}</td>
                <td>${EmployeeFetch.amid}</td>
                           
                </tr>`;
    });
    document.getElementById("closerequestleave").innerHTML = li;
  });




// --------------- ADD NEW LEAVE -------------- 

function AddNewLeave() {
  
  var x = document.getElementById("leavetypeid");
  var Leavetype = x.options[x.selectedIndex].text;
  var leavetypeId;
  if (Leavetype == "Work From Home") leavetypeId = 1;
  else if (Leavetype == "Casual Leave") leavetypeId = 2;
  else if (Leavetype == "Sick Leave") leavetypeId = 3;
  else if (Leavetype == "Earned Leave") leavetypeId = 4;
  else if (Leavetype == "Leave Without Pay") leavetypeId = 5;
  else if (Leavetype == "Maternity Leave") leavetypeId = 6;
  else if (Leavetype == "Bereavement Leave") leavetypeId = 7;

  var id = localStorage.getItem('id');
  var leavesdate = document.getElementById("leavesdate");
  var leaveddate = document.getElementById("leaveedate");
  var leaveReason = document.getElementById("leavereason");

  var leave = {
    "id": id,
    "typeid": leavetypeId,
    "sdate": leavesdate.value,
    "edate": leaveddate.value,
    "reason": leaveReason.value,
    "status": "Pending",
  };
  console.log(leave);
  fetch("https://localhost:44315/api/leave",
    {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer",
      body: JSON.stringify(leave),
    })

  console.log("New Leave Added");



  var sd = $('#leavesdate').val();
  var ed = $('#leaveedate').val();
  var managerMail = localStorage.getItem('managerMail')
  var employeeName = localStorage.getItem('Employee-name')
  var reason = $('#leavereason').val();
  console.log(managerMail)

  var Body = 'Hi ' + managername + ', <br> ' + employeeName + ' has requested a leave from ' + sd + ' to ' + ed + ' reason being ' + reason + "." + '<br>Please respond accordingly.';

  Email.send({
    SecureToken: "15310dfc-5ba6-423d-8644-4b455b088f7c",
    To: managerMail,
    From: "hrmscygrp@gmail.com",
    Subject: "Leave Request - " + employeeName,
    Body: Body
  }).then(
    message => {
      if (message == 'OK') {
        alert('Leave Applied Successfully.');
      }
      else {
        console.error(message);
        alert('Leave.')

      }

    }
  );

}