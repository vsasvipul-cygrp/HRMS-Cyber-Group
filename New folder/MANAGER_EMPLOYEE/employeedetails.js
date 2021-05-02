var id = localStorage.getItem("id")
console.log(id)

//ANIMATE COUNTER



// Work From Home Leaves Balance
fetch("https://localhost:44315/api/leave/GetWFHLeaveTable/" + id,
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
        var c = 0;
        for (var i = 0; i < data.length; i++) {
            c += data[i].days
        }
        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
        
        const obj = document.getElementById("approvedWfh");
        animateValue(obj, 0, c, 500);
    });

// Casual Leave Balance
fetch("https://localhost:44315/api/leave/GetCLLeaveTable/" + id,
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
        var c = 0;
        for (var i = 0; i < data.length; i++) {
            c += data[i].days
        }
        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
        
        const obj = document.getElementById("approvedCl");
        animateValue(obj, 0, c, 500);
    });

// Sick Leave Balance
fetch("https://localhost:44315/api/leave/GetSLLeaveTable/" + id,
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
        var c = 0;
        for (var i = 0; i < data.length; i++) {
            c += data[i].days
        }
        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
        
        const obj = document.getElementById("approvedSl");
        animateValue(obj, 0, c, 500);
    });

// Earned Leave Balance
fetch("https://localhost:44315/api/leave/GetELLeaveTable/" + id,
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
        var c = 0;
        for (var i = 0; i < data.length; i++) {
            c += data[i].days
        }
        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
        
        const obj = document.getElementById("approvedEl");
        animateValue(obj, 0, c, 500);
    });

// Leave Without Pay Balance
fetch("https://localhost:44315/api/leave/GetLWPLeaveTable/" + id,
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
        var c = 0;
        for (var i = 0; i < data.length; i++) {
            c += data[i].days
        }
        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
        
        const obj = document.getElementById("approvedLwp");
        animateValue(obj, 0, c, 500);
    });

// Marital Leave Balance
fetch("https://localhost:44315/api/leave/GetMLLeaveTable/" + id,
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
        var c = 0;
        for (var i = 0; i < data.length; i++) {
            c += data[i].days
        }
        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
        
        const obj = document.getElementById("approvedMl");
        animateValue(obj, 0, c, 500);
    });

// Bereavement Leave Balance
fetch("https://localhost:44315/api/leave/GetBLLeaveTable/" + id,
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
        var c = 0;
        for (var i = 0; i < data.length; i++) {
            c += data[i].days
        }
        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
        
        const obj = document.getElementById("approvedBl");
        animateValue(obj, 0, c, 500);
    });





// **************************************************************
// -------------------PROFILE DETAILS----------------------------
// **************************************************************


// var id = localStorage.getItem("id")

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
        window.localStorage.setItem("Employee-name", data.empname)

        window.localStorage.setItem("Manager-name", data.amid)
        document.getElementById("empname").value = data.empname
        document.getElementById("emailid").value = data.emailid
        var nickname = document.getElementById("emailid").value;
        document.getElementById("nickname").value = nickname.slice(0, -10)

        document.getElementById("desg").value = data.desg
        document.getElementById("contact").value = data.contact
        document.getElementById("amid").value = data.amid
    });