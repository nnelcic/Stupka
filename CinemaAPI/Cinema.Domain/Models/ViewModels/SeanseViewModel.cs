using Cinema.Domain.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cinema.Domain.Models.ViewModels;

public class SeanseViewModel
{
    public int Id { get; set; }
    public DateTime StartTime { get; set; }
    public int MovieId { get; set; }
    public Movie Movie { get; set; }
    public int HallId { get; set; }
    public Hall Hall { get; set; }
}
