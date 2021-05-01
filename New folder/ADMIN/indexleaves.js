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
      // console.log(EmployeeFetch);
      li += `<tr>
              
              <td>${EmployeeFetch.id}</td>
              <td>${EmployeeFetch.empname} </td>
              <td>${EmployeeFetch.sdate}</td>
              <td>${EmployeeFetch.edate}</td>
              <td>${EmployeeFetch.reason}</td>
              <td>${EmployeeFetch.status}</td>
              <td>${EmployeeFetch.amid}</td>
              <td>${EmployeeFetch.type}</td>
                         
              </tr>`;
    });
    document.getElementById("allemployeeleaves").innerHTML = li;
  });