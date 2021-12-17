using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using moviesAPI.Data;
using moviesAPI.Data.Entities;
using moviesAPI.Domain.Dtos.Genres;
using moviesAPI.Domain.Dtos.Pagination;
using moviesAPI.Infrastructure.Extensions;

namespace moviesAPI.Domain.Services.Genres;

public class GenreService : IGenreService
{
    private readonly DataDbContext _dbContext;
    private readonly IMapper _mapper;
    private readonly HttpContext _httpContext;
    public GenreService(DataDbContext dbContext, IMapper mapper, HttpContext httpContext)
    {
        _dbContext = dbContext;
        _mapper = mapper;
        _httpContext = httpContext;
    }

    
    public async Task<List<GenreDto>> GetAll(PageViewDto pagination)
    {
        var queryable = _dbContext.Genres.AsQueryable();
        await _httpContext.InsertParametersPaginationInHeader(queryable);
        var genres = await queryable.OrderBy(x => x.Name).ToListAsync();
        return _mapper.Map<List<GenreDto>>(genres);
    }

    
    public async Task<GenreDto> Get(int id)
    {
        var genre = await _dbContext.Genres.FirstOrDefaultAsync(genre => genre.Id == id);
        return _mapper.Map<GenreDto>(genre);
    }

    
    public async Task Post(CreateGenreDto genre)
    {
        var existGenre = await _dbContext.Genres.FirstOrDefaultAsync(g => g.Name == genre.Name);
        if (existGenre != null) throw new Exception("Genre is already created!");
        await _dbContext.Genres.AddAsync(_mapper.Map<CreateGenreDto, Genre>(genre));
        await _dbContext.SaveChangesAsync();
    }

    
    public async Task<GenreDto> Put(GenreDto genre)
    {
        throw new NotImplementedException();
    }

    
    public async void Delete()
    {
        throw new NotImplementedException();
    }
}