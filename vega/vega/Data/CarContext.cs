using Microsoft.EntityFrameworkCore;
using vega.Models;

namespace vega.Data
{
    public class CarContext : DbContext
    {
        public CarContext(DbContextOptions<CarContext> options): base(options){}
        
        public DbSet<CarMake> carMakes { get; set; }
        public DbSet<CarFeature> carFeatures { get; set; }
        public DbSet<CarModel> CarModels { get; set; }
        
    }
}