using Microsoft.EntityFrameworkCore;
using moviesAPI.Data.Entities;

namespace moviesAPI.Data
{
    public class DataDbContext : DbContext
    {
        public DataDbContext(DbContextOptions options) : base(options){}
        
        public DbSet<Genre?> Genres { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}