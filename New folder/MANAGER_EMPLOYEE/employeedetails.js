console.log("hi")
var id = localStorage.getItem("id")

fetch("https://localhost:44315/api/employee/getemp/" + id,
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
        window.localStorage.setItem("AmId", data.empname)
        document.getElementById("empname").value = data.empname
        document.getElementById("emailid").value = data.emailid
        var nickname=document.getElementById("emailid").value;
        document.getElementById("nickname").value = nickname.slice(0,-10)      

        document.getElementById("desg").value = data.desg
        document.getElementById("contact").value = data.contact
        document.getElementById("amid").value = data.amid
    });