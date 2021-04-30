using System;
using System.Collections.Generic;

namespace HRMS.Models
{
    public partial class TypeInfo
    {
        public TypeInfo()
        {
            Leave = new HashSet<Leave>();
        }

        public int Typeid { get; set; }
        public string Type { get; set; }
        public int Total { get; set; }
        public int Balance { get; set; }
        public int Pending { get; set; }
        public int Approved { get; set; }
        public int Rejected { get; set; }

        public ICollection<Leave> Leave { get; set; }
    }
}
