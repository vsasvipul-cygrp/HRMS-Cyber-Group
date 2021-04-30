using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRMS.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;



namespace HRMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        HRMSContext _context;
        public EmployeeController(HRMSContext context)
        {
            _context = context;
        }
        // GET: api/Employee AllEmployees
        [HttpGet]
        public ActionResult AllEmployees()
        {
            var employee = _context.Employee.ToList();
            return Ok(employee);

        }


        [HttpGet]
        [Route("Managerlist")]
        //Route("{id}")]    
        public ActionResult GetManagerName() //GetManagername  
        {

            var q = (from pd in _context.Employee

                     where (pd.Desg == "Manager")
                     select new
                     {
                         pd.Empname

                     }).ToList();


            return Ok(q);
        }


        //GET: api/Employee/5
        //[Route("getmail")]
        [HttpGet("{email}")]
        public ActionResult EmployeeById(string email)
        {
        var emp = _context.Employee.FirstOrDefault(employee=>employee.Emailid == email);
        return Ok(emp.Id);
        }



        // POST: api/Employee
        [HttpPost]
        public ActionResult AddEmployee([FromBody]Employee employee)
        {
            _context.Employee.Add(employee);
            _context.SaveChanges();
            return Ok("Employee Added successfully");
        }



        // PUT: api/Employee/5 UpdateEmployee
        [HttpPut("{id}")]
        public ActionResult UpdateEmployee(int id, [FromBody] Employee employeeRequest)
        {
            Employee employeeInfo = _context.Employee.FirstOrDefault(e => e.Id == id);
            employeeInfo.Empname = employeeRequest.Empname;
            employeeInfo.Emailid = employeeRequest.Emailid;
            employeeInfo.Password = employeeRequest.Password;
            employeeInfo.Desg = employeeRequest.Desg;
            employeeInfo.Contact = employeeRequest.Contact;
            employeeInfo.Amid = employeeRequest.Amid;
            employeeInfo.Role = employeeRequest.Role;





            _context.Employee.Update(employeeInfo);
            _context.SaveChanges();
            return Ok(employeeInfo);
        }





        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public ActionResult DeleteEmployee(int id)
        {
            var employeeInfo = _context.Employee.FirstOrDefault(e => e.Id == id);
            _context.Employee.Remove(employeeInfo);
            _context.SaveChanges();
            return Ok(employeeInfo);
        }
    }
}