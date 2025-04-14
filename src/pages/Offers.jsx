import  {Card, CardContent}  from "@/components/ui/Card";
//import { Card, CardHeader, CardBody, CardTitle, CardText } from "@/components/ui/Card";
import { CalendarIcon, ClockIcon, CopyIcon } from "lucide-react";
import  toast  from "@/components/ui/Toast";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
const offers = [
  {
    id: 1,
    title: "Happy Hours: Buy 1 Get 1 Free",
    description: "Every weekday from 3 PM to 5 PM, enjoy a free scoop when you buy one. This special happy hour promotion is perfect for an afternoon treat with a friend or loved one. Choose from any of our delicious flavors!",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    validUntil: "2025-05-31",
    timing: "3 PM to 5 PM",
    days: "Monday to Friday",
    code: "HAPPY2X",
    terms: [
      "Valid only during specified hours",
      "Second scoop must be of equal or lesser value",
      "Cannot be combined with other offers",
      "Valid for dine-in only"
    ]
  },
  {
    id: 2,
    title: "Student Special: 15% Off",
    description: "Students get 15% off on all orders above ₹300. Just show your valid student ID when ordering. This offer is our way of supporting students and making our delicious treats more accessible to you during your study breaks.",
    image: "https://images.unsplash.com/photo-1538489949601-3aa1f1a12fad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    validUntil: "2025-12-31",
    timing: "All day",
    days: "All week",
    code: "STUDENT15",
    terms: [
      "Valid student ID must be presented",
      "Minimum order value of ₹300",
      "Cannot be combined with other offers",
      "One discount per order"
    ]
  },
  {
    id: 3,
    title: "Family Pack Special",
    description: "1L Family pack with 2 toppings and nuts at just ₹450. Perfect for family gatherings! Share the joy of Ideal Café's famous ice creams with your loved ones with this special family-sized offering at a special price.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    validUntil: "2025-06-30",
    timing: "All day",
    days: "Weekends only",
    code: "FAMILY450",
    terms: [
      "Valid on Saturdays and Sundays only",
      "Standard toppings and nuts included",
      "Premium toppings available at extra cost",
      "Cannot be combined with other offers"
    ]
  },
  {
    id: 4,
    title: "Birthday Special: Free Scoop",
    description: "Celebrate your birthday with a free scoop of your favorite ice cream! Just show your ID as proof of your birthday and enjoy a complimentary treat from Ideal Café.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80",
    validUntil: "2025-12-31",
    timing: "All day",
    days: "Valid on your birthday and 7 days after",
    code: "BIRTHDAY",
    terms: [
      "Valid ID with birthdate must be presented",
      "Valid on your birthday and 7 days after",
      "One free scoop per birthday",
      "Premium flavors may have additional charge"
    ]
  },
  {
    id: 5,
    title: "Senior Citizen Discount: 10% Off",
    description: "We value our senior customers! Those aged 60 and above can enjoy a 10% discount on their entire order, any day of the week. Our way of showing respect and appreciation.",
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80",
    validUntil: "2025-12-31",
    timing: "All day",
    days: "All week",
    code: "SENIOR10",
    terms: [
      "Valid ID showing age must be presented",
      "Applicable on the entire bill",
      "Cannot be combined with other offers",
      "No minimum purchase required"
    ]
  },
  {
    id: 6,
    title: "Monsoon Madness: 20% Off on Sundaes",
    description: "When it rains, we pour discounts! Enjoy 20% off on all our signature sundaes during rainy days in Mangalore. The perfect way to brighten up a cloudy day!",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    validUntil: "2025-09-30",
    timing: "All day",
    days: "Only on days when it rains",
    code: "MONSOON20",
    terms: [
      "Valid only on days with recorded rainfall in Mangalore",
      "Applicable only on sundaes",
      "Cannot be combined with other offers",
      "Management's decision on 'rainy day' is final"
    ]
  }
];

const Offers = () => {
  const copyCode = (code) => {
    navigator.clipboard.writeText(code).then(
      () => {
        toast({
          title: "Code Copied!",
          description: `${code} has been copied to your clipboard.`,
          duration: 3000,
        });
      },
      (err) => {
        console.error("Could not copy code: ", err);
        toast({
          title: "Error copying code",
          description: "Please try again or copy manually.",
          variant: "destructive",
          duration: 3000,
        });
      }
    );
  };
  
  return (
    <div>
      <Navbar />
      <main className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Special Offers</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Discover our exclusive deals and promotions to enjoy Ideal Café's delicious ice creams for less.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <Card key={offer.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-56">
                  <img 
                    src={offer.image} 
                    alt={offer.title} 
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-white font-bold text-xl p-6">{offer.title}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{offer.description}</p>
                  
                  <div className="flex items-center mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <span>Valid until: {new Date(offer.validUntil).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <ClockIcon className="h-4 w-4 mr-2" />
                    <span>{offer.timing}, {offer.days}</span>
                  </div>
                  
                  <div 
                    className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-3 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => copyCode(offer.code)}
                  >
                    <div className="font-mono font-bold">{offer.code}</div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <CopyIcon className="h-4 w-4 mr-1" />
                      <span>Click to copy</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-2 text-sm text-gray-700 dark:text-gray-300">Terms & Conditions:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {offer.terms.map((term, index) => (
                        <li key={index}>{term}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Offers;
