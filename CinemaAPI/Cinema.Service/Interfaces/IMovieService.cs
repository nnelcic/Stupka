﻿using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.ViewModels;
using Cinema.Domain.RequestFeatures;

namespace Cinema.Service.Interfaces;

public interface IMovieService
{
    Task<(IEnumerable<MovieViewModel> movies, MetaData metaData)> GetAllAsync(MovieParameters movieParameters);
    Task<MovieViewModel> GetAsync(int id);
    Task<MovieViewModel> GetByMovieDetailsIdAsync(int movieDetailsId);
    Task<MovieInfoViewModel> GetInfoAsync(int id);
    Task<MovieInfoViewModel> AddAsync(AddMovieRequest addMovieRequest);
    Task UpdateAsync(int id, UpdateMovieRequest updateMovieRequest);
    Task DeleteAsync(int id);
}
