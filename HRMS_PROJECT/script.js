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