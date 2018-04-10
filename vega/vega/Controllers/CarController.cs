using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using vega.CarInfo;


namespace vega.Controllers
{
    [Route("api/[controller]")]
    public class CarController:Controller
    {
        [HttpGet("makes")]
        public IEnumerable<CarMake> GetCarMakes()
        {
            return new List<CarMake>();
        }

        [HttpGet("features")]
        public IEnumerable<CarFeature> GetCarFeatures()
        {
            return new List<CarFeature>();
        }
    }
}