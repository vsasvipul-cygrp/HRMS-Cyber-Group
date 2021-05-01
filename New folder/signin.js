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
        console.log("hi")
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
        alert("hi")
        // swal({
        //   icon: 'error',
        //    title: 'User not found!',
        //   text: 'Try Again!',

        //  });
      }
    });

}

function encryptPassword() {
  var a = document.getElementById("pwd");
  var md5Hash = CryptoJS.MD5(a.value);

  console.log(md5Hash.toString());
  return md5Hash.toString();
}




// ----------------------------- SWAL ALERT ----------------- 



const email = document.getElementById('email');
const password = document.getElementById('pwd');


function check() {

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === '' && passwordValue === '') {
    swal({
      icon: 'error',
      title: 'Oops...',
      text: 'Complete it!',

    });
  }
  else if (emailValue === '') {
    swal({
      icon: 'error',
      title: 'Oops...',
      text: 'Email Can not be blank!',

    });
  } else if (!isEmail(emailValue)) {

    swal({
      icon: 'error',
      title: 'Oops...',
      text: 'Not a valid Email!',

    });
  }
  else if (passwordValue === '') {
    swal({
      icon: 'error',
      title: 'Oops...',
      text: 'Password  Can not be blank!',
    });
  }

}



function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}











