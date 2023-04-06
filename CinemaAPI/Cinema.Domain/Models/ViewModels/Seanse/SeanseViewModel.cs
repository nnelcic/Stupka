﻿namespace Cinema.Domain.Models.ViewModels;

public class SeanseViewModel
{
    public int Id { get; set; }
    public DateTime StartTime { get; set; }
    public MovieViewModel Movie { get; set; }
    public int HallId { get; set; }
    public PriceViewModel Price { get; set; }
}
