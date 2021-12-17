using System.ComponentModel.DataAnnotations;

namespace moviesAPI.Domain.Dtos.Genres;

public class GenreDto
{
    public int Id { get; set; }
    public string Name { get; set; }
}

public class CreateGenreDto
{
    [Required]
    [StringLength(20)]
    public string Name { get; set; }
}