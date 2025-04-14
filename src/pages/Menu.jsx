import { useState, useEffect } from "react";
import { menuItems, categories } from "@/data/menuData";
import MenuCard from "@/components/MenuCard";
import Button  from "@/components/ui/Button";
import  Input  from "@/components/ui/Input";
import { SearchIcon, SlidersIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [filterPopular, setFilterPopular] = useState(false);
  const [filterNew, setFilterNew] = useState(false);
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    let filtered = [...menuItems];
    
    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        item => item.name.toLowerCase().includes(query) || 
                item.description.toLowerCase().includes(query)
      );
    }
    
    // Filter by popular
    if (filterPopular) {
      filtered = filtered.filter(item => item.isPopular);
    }
    
    // Filter by new
    if (filterNew) {
      filtered = filtered.filter(item => item.isNew);
    }
    
    // Sort items
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Keep default order
        break;
    }
    
    setFilteredItems(filtered);
  }, [selectedCategory, searchQuery, sortBy, filterPopular, filterNew]);
  
  const toggleShowFilters = () => {
    setShowFilters(!showFilters);
  };
  
  const resetFilters = () => {
    setSelectedCategory("All");
    setSortBy("default");
    setFilterPopular(false);
    setFilterNew(false);
    setSearchQuery("");
  };
  
  return (
    <div>
      <Navbar />
      <main className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Our Menu</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore our wide range of delicious ice creams, desserts, beverages, and snacks.
          </p>
          
          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
              <div className="relative w-full md:w-auto md:flex-1 max-w-md">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search menu items..."
                  className="pl-10 pr-4 py-2 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Button 
                variant="outline" 
                onClick={toggleShowFilters}
                className="w-full md:w-auto flex items-center gap-2"
              >
                <SlidersIcon className="h-4 w-4" />
                Filters & Sort
              </Button>
            </div>
            
            {showFilters && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-6 animate-accordion-down">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          className={`text-sm ${
                            selectedCategory === category 
                              ? "bg-ideal hover:bg-ideal-dark text-white" 
                              : "border-gray-300"
                          }`}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Sort By</h3>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant={sortBy === "default" ? "default" : "outline"}
                        className={`text-sm ${
                          sortBy === "default" ? "bg-ideal hover:bg-ideal-dark text-white" : "border-gray-300"
                        }`}
                        onClick={() => setSortBy("default")}
                      >
                        Default
                      </Button>
                      <Button
                        variant={sortBy === "price-low" ? "default" : "outline"}
                        className={`text-sm ${
                          sortBy === "price-low" ? "bg-ideal hover:bg-ideal-dark text-white" : "border-gray-300"
                        }`}
                        onClick={() => setSortBy("price-low")}
                      >
                        Price: Low to High
                      </Button>
                      <Button
                        variant={sortBy === "price-high" ? "default" : "outline"}
                        className={`text-sm ${
                          sortBy === "price-high" ? "bg-ideal hover:bg-ideal-dark text-white" : "border-gray-300"
                        }`}
                        onClick={() => setSortBy("price-high")}
                      >
                        Price: High to Low
                      </Button>
                      <Button
                        variant={sortBy === "rating" ? "default" : "outline"}
                        className={`text-sm ${
                          sortBy === "rating" ? "bg-ideal hover:bg-ideal-dark text-white" : "border-gray-300"
                        }`}
                        onClick={() => setSortBy("rating")}
                      >
                        Top Rated
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Filter By</h3>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant={filterPopular ? "default" : "outline"}
                        className={`text-sm ${
                          filterPopular ? "bg-ideal hover:bg-ideal-dark text-white" : "border-gray-300"
                        }`}
                        onClick={() => setFilterPopular(!filterPopular)}
                      >
                        Popular Items
                      </Button>
                      <Button
                        variant={filterNew ? "default" : "outline"}
                        className={`text-sm ${
                          filterNew ? "bg-ideal hover:bg-ideal-dark text-white" : "border-gray-300"
                        }`}
                        onClick={() => setFilterNew(!filterNew)}
                      >
                        New Arrivals
                      </Button>
                      <Button
                        variant="outline"
                        className="text-sm border-gray-300"
                        onClick={resetFilters}
                      >
                        Reset All
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Menu Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No items found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Try adjusting your search or filter criteria
              </p>
              <Button variant="outline" onClick={resetFilters}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
