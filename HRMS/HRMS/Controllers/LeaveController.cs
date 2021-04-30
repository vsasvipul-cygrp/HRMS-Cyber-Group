using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRMS.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HRMS.Controllers
{
    [Route("api/[controller]")] //
    [ApiController]
    public class LeaveController : ControllerBase
    {

        HRMSContext _context;
        public LeaveController(HRMSContext context)
        {
            _context = context;
        }

        // GET: api/Leave    All types of leaves. Approved, rejected, pending everything!
        [HttpGet]
        public ActionResult AllLeaves()
        {
            var leave = _context.Leave.ToList();
            return Ok(leave);

        }

        // GET: api/Leave/5    get leaves of specific employee. for employee view. 
        [HttpGet]
        [Route("GetLeave/{id}")]
        public ActionResult GetLeaveByEmpId(int id)
        {
            var leaves = _context.Leave.Where(b => b.Id == id);
            return Ok(leaves);
        }





        // Get all leaevs that a manager has to take action on. On manager's view
        [HttpGet]
        [Route("{id}")]
        //Route("{id}")]    
        public ActionResult GetLeaveByAmId(string id) //GetLeaveByAmId  
        {

            var q = (from pd in _context.Leave
                     join od in _context.Employee on pd.Id equals od.Id
                     where (od.Amid == id && pd.Status == "Pending")
                     select new
                     {
                         od.Empname,
                         od.Amid,
                         pd.Id,
                         pd.Sdate,
                         pd.Edate,
                         pd.Reason,
                         pd.Status,
                         pd.Typeid,

                     }).ToList();


            return Ok(q);
        }


        //Closed leave by manager. on manager's view

        [HttpGet]
        [Route("GetClosedMLeave/{id}")]
        //Route("{id}")]    
        public ActionResult GetLeaveByAmIdNotPending(string id) //GetLeaveByAmId  
        {

            var q = (from pd in _context.Leave
                     join od in _context.Employee on pd.Id equals od.Id
                     where (od.Amid == id && pd.Status != "Pending")
                     select new
                     {
                         od.Empname,
                         od.Amid,
                         pd.Id,
                         pd.Sdate,
                         pd.Edate,
                         pd.Reason,
                         pd.Status,
                         pd.Typeid,

                     }).ToList();


            return Ok(q);
        }

        //All Leaves Approved, rejected or pending by manager! For Manager's view
        [HttpGet]
        [Route("GetAllMLeave/{id}")]
        //Route("{id}")]    
        public ActionResult GetAllLeaveByAmId(string id) //GetLeaveByAmId  
        {

            var q = (from pd in _context.Leave
                     join od in _context.Employee on pd.Id equals od.Id
                     where (od.Amid == id)
                     select new
                     {
                         od.Empname,
                         od.Amid,
                         pd.Id,
                         pd.Sdate,
                         pd.Edate,
                         pd.Reason,
                         pd.Status,
                         pd.Typeid,

                     }).ToList();


            return Ok(q);
        }


        // POST: api/Leave  adding leaves. 
        [HttpPost]
        public ActionResult AddLeave([FromBody]Leave leave)
        {
            _context.Leave.Add(leave);
            _context.SaveChanges();
            return Ok("Leave Added successfully");
        }



        // PUT: api/Leave/5  Changing status
        //[HttpPut("{id}")]
        [HttpPut("{id}")]
        public ActionResult UpdateLeave(int id, [FromBody] Leave leave)
        {
            Leave LeaveInfo = _context.Leave.FirstOrDefault(l => l.Leaveid == id);
            //LeaveInfo.Leaveid = leave.Leaveid;
            LeaveInfo.Id = leave.Id;
            LeaveInfo.Typeid = leave.Typeid;
            LeaveInfo.Sdate = leave.Sdate;
            LeaveInfo.Edate = leave.Edate;
            LeaveInfo.Reason = leave.Reason;
            LeaveInfo.Status = leave.Status;
            _context.Leave.Update(LeaveInfo);
            _context.SaveChanges();
            return Ok(LeaveInfo);
        }

        //get leaves table full. Employee's view

        [HttpGet]
        [Route("GetLeaveTable/{id}")]
        //Route("{id}")]    
        public ActionResult GetLeaveByEmId(int id) //GetLeaveByEmId  
        {

            var q = (from pd in _context.Leave
                     join od in _context.Employee on pd.Id equals od.Id
                     join td in _context.TypeInfo on pd.Typeid equals td.Typeid
                     where (od.Id == id)
                     select new
                     {
                         od.Id,
                         od.Amid,
                         pd.Sdate,
                         pd.Edate,
                         pd.Status,
                         td.Type,

                     }).ToList();


            return Ok(q);
        }


        //get opened leaves table. employee's view. 
        [HttpGet]
        [Route("GetOpenedLeaveTable/{id}")]
        //Route("{id}")]    
        public ActionResult GetOpenedLeaveByEmId(int id) //GetLeaveByEmId  
        {

            var q = (from pd in _context.Leave
                     join od in _context.Employee on pd.Id equals od.Id
                     join td in _context.TypeInfo on pd.Typeid equals td.Typeid
                     where (od.Id == id && pd.Status == "Pending")
                     select new
                     {
                         od.Id,
                         od.Amid,
                         pd.Sdate,
                         pd.Edate,
                         pd.Status,
                         td.Type,

                     }).ToList();


            return Ok(q);
        }



        //Closed leave table . employee's view
        [HttpGet]
        [Route("GetClosedLeaveTable/{id}")]
        //Route("{id}")]    
        public ActionResult GetClosedLeaveByEmId(int id) //GetLeaveByEmId  
        {

            var q = (from pd in _context.Leave
                     join od in _context.Employee on pd.Id equals od.Id
                     join td in _context.TypeInfo on pd.Typeid equals td.Typeid
                     where (od.Id == id && pd.Status != "Pending")
                     select new
                     {
                         od.Id,
                         od.Amid,
                         pd.Sdate,
                         pd.Edate,
                         pd.Status,
                         td.Type,

                     }).ToList();


            return Ok(q);
        }



    }
}

