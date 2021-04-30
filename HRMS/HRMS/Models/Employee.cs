using System;
using System.Collections.Generic;

namespace HRMS.Models
{
    public partial class Employee
    {
        public Employee()
        {
            Leave = new HashSet<Leave>();
        }

        public int Id { get; set; }
        public string Empname { get; set; }
        public string Emailid { get; set; }
        public string Password { get; set; }
        public string Desg { get; set; }
        public string Contact { get; set; }
        public string Amid { get; set; }
        public int Role { get; set; }

        public ICollection<Leave> Leave { get; set; }
        
    }
}
