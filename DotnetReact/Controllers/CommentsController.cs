using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using DotnetReact.Models;
using System.Linq;

namespace DotnetReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
        private static List<CommentModel> Comments; 

        static CommentsController()
        {
            Comments = new List<CommentModel>
            {
                new CommentModel
                {
                    Id = 1,
                    Author = "Daniel Lo Nigro",
                    Text = "Hello ReactJS.NET World!"
                },
                new CommentModel
                {
                    Id = 2,
                    Author = "Pete Hunt",
                    Text = "This is one comment"
                },
                new CommentModel
                {
                    Id = 3,
                    Author = "Jordan Walke",
                    Text = "This is *another* comment"
                },
            };
        }

        [HttpGet]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public IReadOnlyCollection<CommentModel> Get()
        {
            return Comments;
        }

        [HttpPost]
        public ActionResult Post([FromBody] CommentModel comment)
        {
            comment.Id = Comments.Count() + 1;

            Comments.Add(comment);
            
            return Content("Success :)");
        }
    }
}