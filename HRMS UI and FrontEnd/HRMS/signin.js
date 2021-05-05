function check() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === '' && passwordValue === '') {
    swal({
      icon: 'error',
      title: 'Oops...',
      text: 'Incomplete credentials.',

    });
  }
  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  }

  else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  }
  else {
    setSuccessFor(email);
  }
  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  }
  else {
    setSuccessFor(password);
  }
  if (window.localStorage.getItem("token") != false) {

    login();
  }

}

function login() {
  var EmailId = document.getElementById("email");
  var Password = encryptPassword();
  fetch("https://localhost:44315/api/login",
    {
      method: "POST",
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {

        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        "emailid": EmailId.value,
        "password": Password,
      }),

    })
    //.then(response => response.json())
    .then((result) => result.json())
    .then((response) => {
      var role = `${response.role}`;
      var token = `${response.tokenString}`;
      var id = `${response.id}`;

      window.localStorage.setItem("token", token);
      window.localStorage.setItem("id", id);
      window.localStorage.setItem("role", role);
      window.localStorage.setItem("email", EmailId.value);

      if (window.localStorage.getItem("token").toString() != "false") {
        if (window.localStorage.getItem("role") == "1") {
          console.log("hello")
          window.open("./ADMIN/index.html", "_self");
        }
        else {
          window.open("./MANAGER_EMPLOYEE/index.html", "_self");
        }
        swal({
          icon: 'success',
          title: 'Login successful',
          text: 'Proceed!',

        });

      } else {
        // swal({
        //   icon: 'error',
        //    title: 'User not found!',
        //   text: 'Try Again!',

        //  });
      }
    });

}

function encryptPassword() {
  var a = document.getElementById("pwd").value;
  console.log(a);
  // var md5Hash = CryptoJS.MD5(a.value);

  // console.log(md5Hash.toString());
  // return md5Hash.toString();
  //   var encrypted = CryptoJS.AES.encrypt(a,"");
  //   console.log(encrypted.toString());
  //   return encrypted.toString();
  // 
  const key = '55a51621a6648525';
  const keyutf = CryptoJS.enc.Utf8.parse(key);
  const iv = CryptoJS.enc.Base64.parse(key);
  const enc = CryptoJS.AES.encrypt(a, keyutf, { iv: iv });
  const encStr = enc.toString();
  console.log('encStr', encStr);
  return encStr;


}




// ----------------------------- SWAL ALERT ----------------- 



const email = document.getElementById('email');
const password = document.getElementById('pwd');



function setErrorFor(input, message) {

  const formCtrl = input.parentElement; //.form-control

  const small = formCtrl.querySelector('small');
  console.log(formCtrl)

  console.log(small)

  //add error message inside small
  small.innerText = message;

  //add error class
  formCtrl.className = 'form-ctrl error';
}
function setSuccessFor(input) {
  const formCtrl = input.parentElement; //.form-control
  formCtrl.className = 'form-ctrl success';
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function getPassword() {
  var email = document.getElementById("forgot-email").value;
  console.log(email);

  fetch("https://localhost:44315/api/employee/forgot/" + email,
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
    .then((result) => result.text())

    .then((data) => {
      var encryptedPassword = data;
      console.log(encryptedPassword)
      const key = '55a51621a6648525';
      const keyutf = CryptoJS.enc.Utf8.parse(key);
      const iv = CryptoJS.enc.Base64.parse(key);
      const dec = CryptoJS.AES.decrypt(
        { ciphertext: CryptoJS.enc.Base64.parse(encryptedPassword) },
        keyutf,
        {
          iv: iv
        });
      const decStr = CryptoJS.enc.Utf8.stringify(dec)
      console.log('decStr', decStr);

      // var body = $('#body').val();

      var Body = 'Hey User, Your password is given below. Please do not share this with anyone and save it for future references.<br><b>PASSWORD</b> :' + decStr;
      //console.log(name, phone, email, message);

      Email.send({
        SecureToken: "15310dfc-5ba6-423d-8644-4b455b088f7c",
        To: email,
        From: "hrmscygrp@gmail.com",
        Subject: "Encrypted Password - " + email,
        Body: Body
      }).then(
        message => {
           //console.log (message);
           if (message == 'OK') {
            swal({
              icon: 'success',
              // title: 'Login successful',
              text: 'Your mail has been send. Thank you for connecting.',
    
            });
            // alert('Your mail has been send. Thank you for connecting.');
          }
          else {
            console.error(message);
            swal({
              icon: 'error',
              text: 'There is error at sending message',
    
            });
            // alert('There is error at sending message. ')

          }

        }
      );
    });
}






