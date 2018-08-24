using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using DotnetReact.Models;
using Microsoft.Extensions.Configuration;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace DotnetReact.Controllers
{
    public class HomeController : Controller
    {
        private readonly IConfiguration _configuration;

        public HomeController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public ActionResult Index()
        {
            return View();
        }

        public async Task<ActionResult> Comments()
        {
            var apiUrl = "http://localhost:52164/api/comments";
            ViewBag.CommentsUrl = apiUrl;

            var client = new HttpClient();
            var data = await client.GetStringAsync(apiUrl);
            var comments = JsonConvert.DeserializeObject<List<CommentModel>>(data);

            return View(comments);
        }
    }
}