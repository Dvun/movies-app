using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using moviesAPI.Data;
using moviesAPI.Domain.Services;
using moviesAPI.Domain.Services.Genres;
using moviesAPI.Infrastructure.Filters;
using moviesAPI.Profiles;

namespace moviesAPI.Infrastructure.Extensions
{
    public static class ServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddControllers(options =>
            {
                options.Filters.Add(typeof(ExceptionsFilter));
                options.Filters.Add(typeof(ErrorHandler));
            }).ConfigureApiBehaviorOptions(BadRequestService.Parse);

            // Database Connection
            services.AddDbContext<DataDbContext>(opt => opt.UseNpgsql(config.GetConnectionString("DbConnection")));

            
            services.AddTransient<MyActionFilter>();
            services.AddScoped<IGenreService, GenreService>();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();

            services.AddAutoMapper(typeof(MappingProfiles));

            // Cors Policy
            services.AddCors(opt => opt.AddPolicy("CorsPolicy", 
                policy => policy.AllowAnyMethod().AllowAnyHeader().WithOrigins(config.GetValue<string>("frontend_url"))));


            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            return services;
        }
    }
}