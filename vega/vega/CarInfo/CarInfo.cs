using System.Collections.Generic;

namespace vega.CarInfo
{
    public class CarModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class CarFeature
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
    
    public class CarMake
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<CarModel> Type { get; set; }            
    }
}