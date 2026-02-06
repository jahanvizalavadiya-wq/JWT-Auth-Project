using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public IActionResult GetSecret()
        {
            return Ok("Protected data from .NET API 🔐");
        }
    }
}
