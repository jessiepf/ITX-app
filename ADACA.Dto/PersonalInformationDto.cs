using System;
using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace ADACA.Dto
{
	public class PersonalInformationDto
	{
        public int id { get; set; }

        [Required(ErrorMessage = "FirstName is required")]
        public string firstName { get; set; }

        [Required(ErrorMessage = "LastName is required")]
        public string lastName { get; set; }

        [Required(ErrorMessage = "Email address is required")]
        public string emailAddress { get; set; }

        [Required(ErrorMessage = "Phone No. is required")]
        public string phoneNumber { get; set; }
    }
}

