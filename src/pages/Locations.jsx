import { useState } from "react";
//import { Card, CardHeader, CardBody, CardTitle, CardText } from "@/components/ui/Card";
import { Card, CardContent } from "@/components/ui/Card";
import  Button  from "@/components/ui/Button";
import { MapPinIcon, PhoneIcon, ClockIcon, StarIcon, InfoIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const locations = [
  {
    id: 1,
    name: "Ideal Café - MG Road",
    address: "456 MG Road, Mangalore, Karnataka 575001",
    phone: "+91 9876543210",
    hours: "9:00 AM - 10:00 PM",
    rating: 4.8,
    specialty: "Original location with the full menu",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2341&q=80",
    mapUrl: "https://maps.google.com"
  },
  {
    id: 2,
    name: "Ideal Café - City Centre Mall",
    address: "3rd Floor, City Centre Mall, KS Rao Road, Mangalore 575001",
    phone: "+91 9876543211",
    hours: "10:00 AM - 9:00 PM",
    rating: 4.5,
    specialty: "Special sundae varieties and desserts",
    image: "https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    mapUrl: "https://maps.google.com"
  },
  {
    id: 3,
    name: "Ideal Café - Bejai",
    address: "123 Bejai Main Road, Bejai, Mangalore 575004",
    phone: "+91 9876543212",
    hours: "9:00 AM - 10:30 PM",
    rating: 4.7,
    specialty: "Famous for Gadbad ice cream and family packs",
    image: "https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    mapUrl: "https://maps.google.com"
  },
  {
    id: 4,
    name: "Ideal Café - Attavar",
    address: "78 Hospital Road, Attavar, Mangalore 575001",
    phone: "+91 9876543213",
    hours: "9:00 AM - 10:00 PM",
    rating: 4.6,
    specialty: "Known for special coffee varieties and snacks",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    mapUrl: "https://maps.google.com"
  },
  {
    id: 5,
    name: "Ideal Café Express - Surathkal",
    address: "Near NITK Campus, Surathkal, Mangalore 575025",
    phone: "+91 9876543214",
    hours: "11:00 AM - 11:00 PM",
    rating: 4.4,
    specialty: "Popular among college students, student discounts available",
    image: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    mapUrl: "https://maps.google.com"
  },
  {
    id: 6,
    name: "Ideal Café - Forum Mall",
    address: "Forum Fiza Mall, 2nd Floor, Pandeshwar, Mangalore 575001",
    phone: "+91 9876543215",
    hours: "10:00 AM - 10:00 PM",
    rating: 4.6,
    specialty: "Exclusive mall location with special combo offers",
    image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    mapUrl: "https://maps.google.com"
  }
];

const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  const toggleLocation = (id) => {
    if (selectedLocation === id) {
      setSelectedLocation(null);
    } else {
      setSelectedLocation(id);
    }
  };
  
  return (
    <div>
      <Navbar />
      <main className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Our Locations</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Find the nearest Ideal Café to satisfy your ice cream cravings. We have multiple locations across Mangalore for your convenience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Card 
                key={location.id} 
                className={`overflow-hidden transition-all duration-300 ${
                  selectedLocation === location.id ? 'ring-2 ring-ideal scale-[1.02]' : 'hover:shadow-xl'
                }`}
              >
                <div className="relative h-48">
                  <img 
                    src={location.image} 
                    alt={location.name} 
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-3 right-3 flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(location.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">{location.name}</h3>
                  
                  <div className="flex items-start mb-2">
                    <MapPinIcon className="h-5 w-5 mr-2 text-ideal mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{location.address}</span>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <PhoneIcon className="h-5 w-5 mr-2 text-ideal flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{location.phone}</span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <ClockIcon className="h-5 w-5 mr-2 text-ideal flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{location.hours}</span>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <InfoIcon className="h-5 w-5 mr-2 text-ideal flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{location.specialty}</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      className="bg-ideal hover:bg-ideal-dark text-white"
                      onClick={() => window.open(location.mapUrl, '_blank')}
                    >
                      <MapPinIcon className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-ideal text-ideal hover:bg-ideal hover:text-white"
                      onClick={() => toggleLocation(location.id)}
                    >
                      {selectedLocation === location.id ? 'Less Info' : 'More Info'}
                    </Button>
                  </div>
                  
                  {selectedLocation === location.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 animate-accordion-down">
                      <h4 className="font-semibold mb-2">About This Location</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        This {location.name} branch serves our complete range of award-winning ice creams and specialty items. 
                        Visit us to experience the authentic taste of Ideal Café in a comfortable setting.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">Specialty:</span> {location.specialty}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

    </div>
  );
};

export default Locations;
