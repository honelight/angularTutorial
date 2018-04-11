using System.Collections.Generic;

namespace vega.Models
{
    public class CarModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string MakeId { get; set; }
    }

    public class CarFeature
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
    
    public class CarMake
    {
        public int Id { get; set; }
        public string MakeName { get; set; }
       
        public List<CarModel> ModelList { get; set; }            
    }
}