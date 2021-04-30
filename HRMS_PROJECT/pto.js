// ------------------------ GET LEAVES OF ALL STATUS AND PENDING ----------------- 

var f =window.localStorage.getItem("id");
    



  fetch("https://localhost:44315/api/Leave/Getleavetable/" +f,
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
    .then((result) =>result.json())
    
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

    fetch("https://localhost:44315/api/Leave/GetOpenedLeaveTable/" +f,
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
     .then((result) =>result.json())
     
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

     fetch("https://localhost:44315/api/Leave/GetClosedLeaveTable/" +f,
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
      .then((result) =>result.json())
      
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

      function AddNewLeave()
      {
        var EmployeeName = document.getElementById("empname");
        var EmployeeEmailId = document.getElementById("empemailid");
        var EmployeePassword = abc();
        var EmployeeContact = document.getElementById("empcontact");    
        var e = document.getElementById("empdesg");
        var EmployeeDesg = e.options[e.selectedIndex].text;
        var x = document.getElementById("managernamelist");
        var EmployeeAM = x.options[x.selectedIndex].text;
        
        var EmployeeRole=null;
        if(EmployeeDesg=='Manager') EmployeeRole=2;
        else EmployeeRole=3;
    
        var tempUser = {
          "empname": EmployeeName.value,
          "emailid": EmployeeEmailId.value,
          "password": EmployeePassword,
          "desg": EmployeeDesg,
          "contact": EmployeeContact.value,      
          "amid": EmployeeAM,
          "role": EmployeeRole
        };
        console.log(tempUser);
        fetch("https://localhost:44315/api/employee", 
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
          body: JSON.stringify(tempUser),
        })
    
        console.log("New Account Added");
        
      
      }