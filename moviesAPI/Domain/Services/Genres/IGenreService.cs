using moviesAPI.Domain.Dtos.Genres;
using moviesAPI.Domain.Dtos.Pagination;

namespace moviesAPI.Domain.Services.Genres;

public interface IGenreService
{
    Task<List<GenreDto>> GetAll(PageViewDto pagination);
    Task<GenreDto> Get(int id);
    Task Post(CreateGenreDto genre);
    Task<GenreDto> Put(GenreDto genre);
    void Delete();
}