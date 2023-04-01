﻿using Cinema.Domain.Models.Entities;

namespace Cinema.Domain.Models.DTOs;

public class UpdateSeanseRequest
{
    public DateTime StartTime { get; set; }
    public int MovieId { get; set; }
    public int HallId { get; set; }
}
