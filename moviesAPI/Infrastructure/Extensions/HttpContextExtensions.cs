using Microsoft.EntityFrameworkCore;

namespace moviesAPI.Infrastructure.Extensions;

public static class HttpContextExtensions
{
    public static async Task InsertParametersPaginationInHeader<T>(this HttpContext httpContext, IQueryable<T> queryable)
    {
        if (httpContext == null) throw new ArgumentNullException(nameof(httpContext));
        double count = await queryable.CountAsync();
        httpContext.Response.Headers.Add("totalAmountOfRecords", count.ToString());
    }
}