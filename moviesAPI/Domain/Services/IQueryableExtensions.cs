using moviesAPI.Domain.Dtos.Pagination;

namespace moviesAPI.Domain.Services;

public static class IQueryableExtensions
{
    public static IQueryable<T> Paginate<T>(IQueryable<T> queryable, PageViewDto pagination)
    {
        return queryable.Skip((pagination.Page - 1) * pagination.RecordsPerPage)
            .Take(pagination.RecordsPerPage);
    }
}