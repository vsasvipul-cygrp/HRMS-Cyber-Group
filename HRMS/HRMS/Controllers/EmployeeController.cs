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
            var employee = (from a in _context.Employee
                            orderby a.Role ascending
                            select new
                            {
                                a.Id,
                                a.Empname,
                                a.Emailid,
                                a.Password,
                                a.Desg,
                                a.Contact,
                                a.Amid,
                                a.Role
                            }).ToList();
            return Ok(employee);

        }

        // GET: api/Employee/5
        [HttpGet("getEmp/{id}", Name = "Get")]
        public ActionResult EmployeeById(int id)
        {
            var employee = _context.Employee.FirstOrDefault(studentInfo => studentInfo.Id == id);
            return Ok(employee);
        }



        [HttpGet]
        [Route("GetManagerEmailid/{Amid}")]
        //Route("{id}")]    
        public ActionResult GetManagerEmailid(string Amid) //GetLeaveByAmId  
        {
            var result = (from a in _context.Employee
                          where a.Empname == Amid select new {a.Emailid});
            return Ok(result);
        }

        [HttpGet]
        [Route("GetEmployeeName")]
        //Route("{id}")]
        public ActionResult GetName() //GetLeaveByAmId
        {
            var result = (from a in _context.Employee
                          orderby a.Role ascending
                          select new { a.Empname });
            return Ok(result);
        }



        [HttpGet]
        [Route("GetEmpid/{name}")]
        //Route("{id}")]
        public ActionResult Getid(string name)
        {
            var employee1 = _context.Employee.FirstOrDefault(EmployeeInfo => EmployeeInfo.Empname == name);
            return Ok(employee1.Id);
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



        //GET: api/Employee/5
        [Route("getrole/{email}")]
        [HttpGet()]
       public ActionResult RoleByEmail(string email)
        {
         var emp = _context.Employee.FirstOrDefault(employee => employee.Emailid == email);
           return Ok(emp.Role);
       }
        [Route("forgot/{email}")]
        [HttpGet()]
        public ActionResult forgetpassword(string email)
        {
            var emp = _context.Employee.FirstOrDefault(employee => employee.Emailid == email);
            
            if (emp != null)
            {
                return Ok(emp.Password);
            }
            else
            {
                return null;
            }
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