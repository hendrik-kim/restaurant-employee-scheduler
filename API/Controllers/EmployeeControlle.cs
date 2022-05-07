using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using API.Entities.ScheduleAggregate;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        public EmployeeController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<AvailableDate>>> GetAvailableEmployeeByDate(DateTime startDate, DateTime endDate)
        {
            var result= _dbContext.AvailableDates
                .Where(a => a.StartDateTime >= startDate && a.EndDateTime <= endDate)
                .Include(a => a.Employee)
                .ToListAsync();
            return await result;
        }
    }
}