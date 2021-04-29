function login()
{
 var EmailId = document.getElementById("email");
 var Password = encryptPassword();

var LoginUser = 
{
"emailid":EmailId.value,
"password":Password,
}

fetch("https://localhost:44315/api/login", 
{   
    method: "POST",
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(LoginUser),
    
})
//.then(response => response.json())
.then((response) => response.text())
  .then((response) => {
    console.log("Bearer " + response);
    window.localStorage.setItem("token", response);
    if (window.localStorage.getItem("token").toString() != "false") {
      alert("Login Successful. Open Link");
      openPage();
    } else {
      alert("This user does not exist");
    }
  });

}

function openPage(){
  window.open("./index.html", "_blank");
}

function encryptPassword(){
  var a=document.getElementById("pwd");
  var md5Hash = CryptoJS.MD5(a.value); 
  
  console.log(md5Hash.toString()); 
  return md5Hash.toString();
  }


  
  // ----------- ADD USER FUNCTION IS HERE //// 


  function AddEmployee(){
    var EmployeeName = document.getElementById("empname");
    var EmployeeEmailId = document.getElementById("empemailid");
    var EmployeePassword = document.getElementById("emppass");
    var EmployeeContact = document.getElementById("empcontact");    
    var e = document.getElementById("empdesg");
    var EmployeeDesg = e.options[e.selectedIndex].text;
    var EmployeeAM = document.getElementById("empamid");
    
    var EmployeeRole=null;
    if(EmployeeDesg=='Manager') EmployeeRole=2;
    else EmployeeRole=3;

    var tempUser = {
      "empname": EmployeeName.value,
      "emailid": EmployeeEmailId.value,
      "password": EmployeePassword.value,
      "desg": EmployeeDesg,
      "contact": EmployeeContact.value,      
      "amid": EmployeeAM.value,
      "role": EmployeeRole
    };
    console.table(tempUser);
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

    console.log("Successfully Added");
    
  
  }



  // -------------- FETCH DATA FROM EMPLOYEE TABLE ------------ 

  function EmployeeFetchData() {
    fetch("https://localhost:44315/api/employee", {
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
      .then((res) => res.json())
  
      .then((data) => {
        
  
        console.log(data);
        let li = ``;
        data.forEach((EmployeeFetch) => {
          console.log(EmployeeFetch);
          li += `<tr>
                
                <td>${EmployeeFetch.empname}</td>
                <td>${EmployeeFetch.emailid} </td>
                <td>${EmployeeFetch.desg}</td>
                <td>${EmployeeFetch.contact}</td>
                <td>${EmployeeFetch.amid}</td>
                           
                </tr>`;
        });
        document.getElementById("employeedata").innerHTML = li;
        console.log("worked");
        // console.log(EmployeeFetch);
  
        // do something with data
      })
      .catch(function (error) {
  
        console.log("Looks like there was a problem: \n", error);
      });
  
      
  }