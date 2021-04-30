using System;
using System.Collections.Generic;

namespace HRMS.Models
{
    public partial class Leave
    {
        public int Leaveid { get; set; }
        public int Id { get; set; }
        public int Typeid { get; set; }
        public DateTime Sdate { get; set; }
        public DateTime Edate { get; set; }
        public string Reason { get; set; }
        public string Status { get; set; }

        public Employee IdNavigation { get; set; }
        public TypeInfo Type { get; set; }
    }
}
