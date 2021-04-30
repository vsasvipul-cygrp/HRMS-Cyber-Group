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
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",
  })
  //.then(response => response.json())
  .then((result) => result.json())

  .then((data) => {


    console.log(data);
    let li = ``;
    data.forEach((EmployeeFetch) => {
      // console.log(EmployeeFetch);
      li += `<tr>
              
              <td>${EmployeeFetch.type}</td>
              <td>${EmployeeFetch.sdate} </td>
              
              <td>${EmployeeFetch.edate}</td>
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


    console.log(data);
    let li = ``;
    data.forEach((EmployeeFetch) => {
      // console.log(EmployeeFetch);
      li += `<tr>
               
               <td>${EmployeeFetch.type}</td>
               <td>${EmployeeFetch.sdate} </td>               
               <td>${EmployeeFetch.edate}</td>
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


    console.log(data);
    let li = ``;
    data.forEach((EmployeeFetch) => {
      // console.log(EmployeeFetch);
      li += `<tr>
                
                <td>${EmployeeFetch.type}</td>
                <td>${EmployeeFetch.sdate} </td>               
                <td>${EmployeeFetch.edate}</td>
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

  var leavesdate = document.getElementById("leavesdate");
var d= leavesdate.value
console.log(d)
  var leaveddate = document.getElementById("leaveedate");
  var leaveReason = document.getElementById("leavereason");
  var id=window.localStorage.getItem("id");



  // var leave = {
  //   "id": id,
  //   "typeid": leavetypeId,
  //   "sdate": leavesdate.value,
  //   "edate": leaveddate.value,
  //   "reason": leaveReason.value,
  //   "status": "Pending",
  // };
  // console.log(leave);
  // fetch("https://localhost:44315/api/leave",
  //   {
  //     method: "POST",
  //     mode: "cors", // no-cors, *cors, same-origin
  //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: "same-origin", // include, *same-origin, omit
  //     headers: {
  //       "Content-Type": "application/json",
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     redirect: "follow", // manual, *follow, error
  //     referrerPolicy: "no-referrer",
  //     body: JSON.stringify(leave),
  //   })

  // console.log("New Leave Added");


}