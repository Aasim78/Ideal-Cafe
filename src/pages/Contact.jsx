import { useState } from "react";
//import { Card, CardHeader, CardBody, CardTitle, CardText } from "@/components/ui/Card";
import  {Card, CardContent}  from "@/components/ui/Card";
import  Button  from "@/components/ui/Button";
import  Input  from "@/components/ui/Input";
import  Textarea  from "@/components/ui/Textarea";
import { 
  MapPinIcon, 
  PhoneIcon, 
  MailIcon,
  ClockIcon, 
  FacebookIcon, 
  InstagramIcon, 
  TwitterIcon, 
  SendIcon
} from "lucide-react";
import  toast  from "@/components/ui/Toast";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
        duration: 5000,
      });
      
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div>
      <Navbar />
      <main className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Contact Us</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Have a question, feedback, or want to make a bulk order? Reach out to us and we'll get back to you as soon as possible.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your message"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-ideal hover:bg-ideal-dark text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <SendIcon className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-200">
                  {/* Embed a map here */}
                  <div className="w-full h-full bg-ideal/20 flex items-center justify-center">
                    <p className="text-gray-600 font-medium">Map View</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPinIcon className="h-5 w-5 mr-3 text-ideal mt-0.5" />
                      <div>
                        <p className="font-medium">Main Office & Flagship Store</p>
                        <p className="text-gray-600 dark:text-gray-400">
                          456 MG Road<br />
                          Mangalore, Karnataka 575001
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <PhoneIcon className="h-5 w-5 mr-3 text-ideal" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600 dark:text-gray-400">+91 9876543210</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <MailIcon className="h-5 w-5 mr-3 text-ideal" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600 dark:text-gray-400">info@idealcafe.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <ClockIcon className="h-5 w-5 mr-3 text-ideal mt-0.5" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-gray-600 dark:text-gray-400">
                          Monday to Friday: 9:00 AM - 10:00 PM<br />
                          Saturday & Sunday: 9:00 AM - 11:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Connect With Us</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Follow us on social media to stay updated with our latest flavors, offers, and events.
                  </p>
                  
                  <div className="flex space-x-4">
                    <Button variant="outline" className="flex-1">
                      <FacebookIcon className="h-5 w-5 mr-2" />
                      Facebook
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <InstagramIcon className="h-5 w-5 mr-2" />
                      Instagram
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <TwitterIcon className="h-5 w-5 mr-2" />
                      Twitter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-12">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Do you offer home delivery?</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Yes, we offer home delivery for orders above ₹300 within Mangalore city limits. Delivery charges may apply depending on your location.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-2">Can I place a bulk order for events?</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Absolutely! We have special packages for birthdays, weddings, corporate events, and other occasions. Please contact us at least 48 hours in advance for bulk orders.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-2">Are your ice creams suitable for people with lactose intolerance?</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We have a limited selection of non-dairy sorbets that are suitable for people with lactose intolerance. Please ask our staff for recommendations.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-2">Do you have franchise opportunities?</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We're currently expanding through franchise partnerships. For franchise inquiries, please send an email to franchise@idealcafe.com with your details and location preferences.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
