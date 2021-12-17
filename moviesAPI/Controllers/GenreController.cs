using Microsoft.AspNetCore.Mvc;
using moviesAPI.Data.Entities;
using moviesAPI.Domain.Dtos.Genres;
using moviesAPI.Domain.Dtos.Pagination;
using moviesAPI.Domain.Services.Genres;

namespace moviesAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GenreController : ControllerBase
{
    private readonly IGenreService _genreService;
    public GenreController(IGenreService genreService)
    {
        _genreService = genreService;
    }

    
    [HttpGet("getAll")]
    public async Task<ActionResult<List<GenreDto>>> Get([FromQuery] PageViewDto pagination)
    {
        return await _genreService.GetAll(pagination);
    }

    
    [HttpGet("{id:int}")]
    public async Task<ActionResult<GenreDto>> GetById(int id)
    {
        return await _genreService.Get(id);
    }

    
    [HttpPost("add")]
    public async Task<ActionResult> Post([FromBody] CreateGenreDto genre)
    {
        await _genreService.Post(genre);
        return Ok();
    }
    

    [HttpPut("update")]
    public async Task Put([FromBody] GenreDto genre)
    {
        await _genreService.Put(genre);
    }

    
    [HttpDelete("delete")]
    public async Task Delete()
    {
        _genreService.Delete();
    }
}