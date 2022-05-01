using System.Collections.Generic;
using System.Linq;
using API.Entities;

namespace API.Data
{
    public static class Seeder
    {
        public static void Initialize(ApplicationDbContext context)
        {
            if (context.Products.Any()) return;
            var products = new List<Product>
            {
                new Product{
                    Name = "product name etc",
                    Price = 11.05
                }
            };

            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}