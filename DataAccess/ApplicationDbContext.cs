using System;
using Travel_Site;


namespace Travel_Site.DataAccess
{
	public class ApplicationDbContext : DbContext
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

		public DbSet<TravelPlaces> Travel Places { get; set; }
		public DbSet<TravelQuote> Quotes { get; set; }
	}
}
		//
	}
}
