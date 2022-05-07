using System.Collections.Generic;
using API.Entities.ScheduleAggregate;

namespace API.Entities
{
    public class Employee : User
    {
        public virtual IEnumerable<AvailableDate> AvailableDates { get; set; }
    }
}