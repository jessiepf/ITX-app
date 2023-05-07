using System;
using Microsoft.EntityFrameworkCore;
using ADACA.Domain;
using System.Diagnostics.Metrics;

namespace ADACA.Infrastructure
{
	public class PersonalContext : DbContext
	{
        public PersonalContext(DbContextOptions<PersonalContext> options) : base(options)
        {
        }
        
        public DbSet<PersonalInformation> PersonalInformations { get; set; }
    }
}

