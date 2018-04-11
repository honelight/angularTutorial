using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vega.Data;
using vega.Models;


namespace vega.Controllers
{
    [Route("api/[controller]")]
    public class CarController:Controller
    {
        private CarContext context;
        public CarController(CarContext context)
        {
            this.context = context;
        }
        
        [HttpGet("makes")]
        public IEnumerable<CarMake> GetCarMakes()
        {
            return context.carMakes.ToList();
        }

        [HttpGet("features")]
        public IEnumerable<CarFeature> GetCarFeatures()
        {
            return context.carFeatures.ToList();
        }
    }
}