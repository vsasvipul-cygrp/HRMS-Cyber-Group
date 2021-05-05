using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HRMS.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;


namespace HRMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : Controller
    {
        private HRMSContext _context;
        private IConfiguration _config;

        public LoginController(IConfiguration config, HRMSContext context)
        {
            _context = context;
            _config = config;
        }
        //[AllowAnonymous]
        //[HttpPost]
        //public string Login([FromBody]Employee login)
        // {
        //    IActionResult response = Unauthorized();
        //    var user = AuthenticateUser(login);
        //     if (user != null)
        //     {
        //         var tokenString = GenerateJSONWebToken(user);
        //        return tokenString;
        //    }

        //    return "false";
        //}
        [AllowAnonymous]
        [HttpPost]
        public LoginResponse employeeLogin([FromBody] Employee userInfo)
        {
            var employeeInfo = AuthenticateUser(userInfo);

            if (employeeInfo != null)
            {
                var TokenString = GenerateJSONWebToken(employeeInfo);

                var queryRole = _context.Employee
                            .Where(v => v.Emailid == userInfo.Emailid)
                            .Select(v => v.Role).ToList();
                int role = queryRole[0];

                var queryId = _context.Employee
                            .Where(v => v.Emailid == userInfo.Emailid)
                            .Select(v => v.Id).ToList();
                int id = queryId[0];


                return new LoginResponse(id, TokenString, role);
            }
            return new LoginResponse(0, "false", 0);
        }
        [HttpGet]
        public ActionResult GetLoginFeed()
        {
            var UserList = _context.Employee.ToList();
            return Ok(UserList);
        }
        private string GenerateJSONWebToken(Employee userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              null,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private Employee AuthenticateUser(Employee login)
        {

            var authUser = _context.Employee.FirstOrDefault(Employee => Employee.Emailid == login.Emailid);
            Employee user = null;

            if (authUser != null)
            {
                if (login.Emailid == authUser.Emailid && login.Password == authUser.Password)
                {
                    user = login;
                }
            }
            return user;
        }
    }
}

