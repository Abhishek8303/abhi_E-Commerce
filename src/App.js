import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
// database
import products from "./db/data";
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
    // console.log(selectedCategory)
  const [query, setQuery] = useState("");
  // ------input Filter------

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() )!== -1
  );
  // console.log(filteredItems)

  // --------Radiofilter-------------
  const handleChange = (event) => {
    
    setSelectedCategory(event.target.value);
    console.log(event.target.value)
  };

  // ------- Button Fillter--------

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
    // console.log(event.target.value)
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;
     
    // -----filtering Input Item-------
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Filter
    if (selected) {
       
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected || selected === "All Products" || selected === "All"
      );
      // console.log(filteredProducts)

      return filteredProducts.map(
        ({ img, title, star, newPrice, reviews, prevPrice }) => (
          <Card
            key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            newPrice={newPrice}
            prevPrice={prevPrice}
          />
        )
      );
    }
  }
 const result = filteredData(products, selectedCategory, query)

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
