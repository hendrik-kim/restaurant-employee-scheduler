using System;
using Microsoft.EntityFrameworkCore;

namespace API.Entities.ScheduleAggregate
{
    public class AvailableDate
    {
        public int Id { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
        public DayOfWeek DayOfWeek { get; set; } = DayOfWeek.Monday;

        public virtual Employee Employee { get; set; }
    }
}