const form = document.getElementById('form');
const username = document.getElementById('empname');
const email = document.getElementById('empemailid');
const password = document.getElementById('emppass');
const contact = document.getElementById('empcontact');
const e = document.getElementById("empdesg");
const x = document.getElementById("managernamelist");


function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const contactValue = contact.value.trim();
    const EmployeeDesg = e.options[e.selectedIndex].text;
    const EmployeeAM = x.options[x.selectedIndex].text;

    if(usernameValue === '') setErrorFor(username, 'Employee Name cannot be blank');
    else {
        setSuccessFor(username);
        if (emailValue === '') setErrorFor(email, 'Email cannot be blank');
        else if(!isEmail(emailValue)) setErrorFor(email, 'Email is not valid');
        else {
            setSuccessFor(email);
            if (passwordValue === '') setErrorFor(password, 'Password cannot be blank');
            else if(!isPassword(passwordValue)) setErrorFor(password, 'Minimum 8 characters, 1 uppercase & 1 lowercase letter, 1 number & 1 special character');
            else {
                setSuccessFor(password);
                if (contactValue === '') setErrorFor(contact, 'Phone Number cannot be blank');
                else if(!isPhone(contactValue)) setErrorFor(contact, 'Phone Number is not valid');
                else {
                    setSuccessFor(contact);
                    if (EmployeeDesg === '' || EmployeeDesg == 'Select Designation') setErrorFor(e, 'Designantion cannot be blank');
                    else {
                        setSuccessFor(e);
                        if (EmployeeAM === '' || EmployeeAM == 'Select Appointed Manager') setErrorFor(x, 'Appointed Manager cannot be blank');
                        else{
                            setSuccessFor(x);
                            AddEmployee();
                            $('#staticBackdrop').modal('hide')
                            $('#employeedata').DataTable().ajax.reload();                           
                        }
                    }
                }
            }
        }
    }
}
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

function isPhone(contact) {
    return /^(\d{10})|(\d{3}\s\d{3}\s\d{4})|(\d{3}\.\d{3}\.\d{4})|(\d{3}-\d{3}-\d{4})|(\d{3}\.\d{3}\.\d{4})|(\(\d{3}\)(\.|\s|)\d{3}\.\d{4})|(\(\d{3}\)(-|\s|)\d{3}-\d{4})|(\(\d{3}\)\s\d{3}\s\d{4})$/.test(contact);
}

function isPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}

function AddEmployee() {
    var EmployeeName = document.getElementById("empname");
    var EmployeeEmailId = document.getElementById("empemailid");
    var EmployeePassword = abc();
    var EmployeeContact = document.getElementById("empcontact");
    var e = document.getElementById("empdesg");
    var EmployeeDesg = e.options[e.selectedIndex].text;
    var x = document.getElementById("managernamelist");
    var EmployeeAM = x.options[x.selectedIndex].text;

    var EmployeeRole = null;
    if (EmployeeDesg == 'Manager') EmployeeRole = 2;
    else EmployeeRole = 3;

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

function abc() {
    var a = document.getElementById("emppass");
    var md5Hash = CryptoJS.MD5(a.value);

    console.log(md5Hash.toString());
    return md5Hash.toString();
}