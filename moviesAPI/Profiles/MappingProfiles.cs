using AutoMapper;
using moviesAPI.Data.Entities;
using moviesAPI.Domain.Dtos.Genres;

namespace moviesAPI.Profiles;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Genre, GenreDto>();
        CreateMap<GenreDto, Genre>();
        CreateMap<CreateGenreDto, Genre>();
        CreateMap<GenreDto, CreateGenreDto>();
    }
}