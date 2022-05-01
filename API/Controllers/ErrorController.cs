using System;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ErrorController : BaseApiController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotfound()
        {
            return NotFound();
        }

        [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {
            return BadRequest(new ProblemDetails { Title = "This is a bad request" });
        }

        [HttpGet("unauthorised")]
        public ActionResult GetUnauthorised()
        {
            return Unauthorized();
        }

        [HttpGet("validation-error")]
        public ActionResult GetValidationError()
        {
            ModelState.AddModelError("Problem1", "This is 1st error");
            ModelState.AddModelError("Problem2", "This is 2nd error");
            ModelState.AddModelError("Problem3", "This is 3rd error");

            return ValidationProblem();
        }

        [HttpGet("Server-error")]
        public ActionResult GetServerError()
        {
            throw new Exception("This is server error");
        }
    }
}