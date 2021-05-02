var role = localStorage.getItem("role")
var AmId = localStorage.getItem("AmId")

if (role != 2) document.getElementById("manager").style.display = 'none'

fetch("https://localhost:44315/api/leave/" + AmId,
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

            var sdate = `${EmployeeFetch.sdate}`;
            var yyyy = sdate.slice(0, 4)
            var mm = sdate.slice(5, 7)
            var dd = sdate.slice(8, 10)
            sdate = mm + "/" + dd + "/" + yyyy

            var edate = `${EmployeeFetch.edate}`;
            var yyyy = edate.slice(0, 4)
            var mm = edate.slice(5, 7)
            var dd = edate.slice(8, 10)
            edate = mm + "/" + dd + "/" + yyyy

            var reason = `${EmployeeFetch.reason}`;
            li += `<tr>
              
              <td>${EmployeeFetch.id}</td>
              <td>${EmployeeFetch.empname} </td>
              <td>${sdate}</td>
              <td>${edate}</td>
              <td>${EmployeeFetch.reason}</td>
              <td>${EmployeeFetch.type}</td>
                <td> <a href="#!" onclick="approveRequest(${EmployeeFetch.leaveid},${EmployeeFetch.id},${EmployeeFetch.typeid},'${EmployeeFetch.sdate}','${EmployeeFetch.edate}','${reason}')" class="label theme-bg text-white f-12 rounded">Approve</a> <a href="#!" onclick="rejectRequest()" class="label theme-bg2 text-white f-12 rounded">Reject</a></td>         
              </tr>`;
        });
        document.getElementById("managerLeaveRequests").innerHTML = li;
    });


function approveRequest(lId, id, typeId, sDate, eDate, reason) {
    console.log(reason)
    // var TempUser = {
    //     "leaveid": l,
    //     "id": id,
    //     "typeid": 2,
    //     "sdate": "2021-05-02T00:00:00",
    //     "edate": "2021-05-04T00:00:00",
    //     "reason": "Family Function",
    //     "status": "Approved",
    // };
    // console.log(TempUser);
    // var urlUpdate = "https://localhost:44315/api/leave/" + id.toString();
    // console.log(urlUpdate);
    // fetch(urlUpdate, {
    //     method: "PUT",
    //     mode: "cors", // no-cors, *cors, same-origin
    //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: "same-origin", // include, *same-origin, omit
    //     headers: {
    //         "Content-Type": "application/json",
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     redirect: "follow", // manual, *follow, error
    //     referrerPolicy: "no-referrer",
    //     body: JSON.stringify(TempUser),
    // })
    //     //.then(response => response.json())
    //     .then((result) => {
    //         console.log(result);
    //     });
}