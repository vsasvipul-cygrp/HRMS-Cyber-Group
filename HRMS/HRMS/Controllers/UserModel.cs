using HRMS.Models;

namespace HRMS.Controllers
{
    internal class UserModel : Employee
    {
        public string Username { get; set; }
        public string EmailAddress { get; set; }
    }
}