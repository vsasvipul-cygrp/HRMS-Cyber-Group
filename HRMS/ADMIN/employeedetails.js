

fetch("https://localhost:44315/api/Employee/GetEmployeeName")
    .then((res) => res.json())
    .then((data) => {
        //   console.log(data);
        let options = "<option>" + "Select Employee" + "</option>";
        for (var i = 0; i < data.length; i++) {
            // console.log(data[i]['id'])
            let x = "<option>" + `${data[i]['empname']}` + "</option>";
            options += x;
        }
        $("#allEmployeeList").html(options);
    });

$('#allEmployeeList').on('change', function () {
    var empName = $(this).val();
    console.log(empName);
    if (empName == 'Select Employee') { }
    else {
        fetch("https://localhost:44315/api/Employee/GetEmpid/" + empName)
            .then((res) => res.json())
            .then((id) => {
                console.log(id);


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
                        const total = document.getElementById("totalWfh").innerHTML;
                        const obj = document.getElementById("approvedWfh");
                        const remaining = total - c;
                        animateValue(obj, 0, remaining, 500);
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

                        const total = document.getElementById("totalCl").innerHTML;
                        const obj = document.getElementById("approvedCl");
                        const remaining = total - c;
                        animateValue(obj, 0, remaining, 500);
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
                        const total = document.getElementById("totalSl").innerHTML;
                        const obj = document.getElementById("approvedSl");
                        const remaining = total - c;
                        animateValue(obj, 0, remaining, 500);
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

                        const total = document.getElementById("totalEl").innerHTML;
                        const obj = document.getElementById("approvedEl");
                        const remaining = total - c;
                        animateValue(obj, 0, remaining, 500);
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
                        const total = document.getElementById("totalLwp").innerHTML;
                        const obj = document.getElementById("approvedLwp");
                        const remaining = total - c;
                        animateValue(obj, 0, remaining, 500);
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
                        const total = document.getElementById("totalMl").innerHTML;
                        const obj = document.getElementById("approvedMl");
                        const remaining = total - c;
                        animateValue(obj, 0, remaining, 500);
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

                        const total = document.getElementById("totalBl").innerHTML;
                        const obj = document.getElementById("approvedBl");
                        const remaining = total - c;
                        animateValue(obj, 0, remaining, 500);
                    });
            });
    }
});

