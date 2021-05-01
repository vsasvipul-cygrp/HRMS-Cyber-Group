fetch("https://localhost:44315/api/Leave/",
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
      
      var sdate=`${EmployeeFetch.sdate}`;
      var yyyy=sdate.slice(0,4)
      var mm=sdate.slice(5,7)
      var dd=sdate.slice(8,10)
      sdate=mm+"/"+dd+"/"+yyyy

      var edate=`${EmployeeFetch.edate}`;
      var yyyy=edate.slice(0,4)
      var mm=edate.slice(5,7)
      var dd=edate.slice(8,10)
      edate=mm+"/"+dd+"/"+yyyy
      li += `<tr>
              
              <td>${EmployeeFetch.id}</td>
              <td>${EmployeeFetch.empname} </td>
              <td>${sdate}</td>
              <td>${edate}</td>
              <td>${EmployeeFetch.reason}</td>
              <td>${EmployeeFetch.status}</td>
              <td>${EmployeeFetch.amid}</td>
              <td>${EmployeeFetch.type}</td>
                         
              </tr>`;
    });
    document.getElementById("allemployeeleaves").innerHTML = li;
  });