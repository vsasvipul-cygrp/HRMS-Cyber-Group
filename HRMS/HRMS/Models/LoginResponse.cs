namespace HRMS.Controllers
{
    public class LoginResponse
    {

        public LoginResponse(int id, string TokenString, int role)
        {
            Id = id;
            this.TokenString = TokenString;
            Role = role;
        }

        public int Id { get; set; }
        public string TokenString { get; set; }
        public int Role { get; set; }


    }
}