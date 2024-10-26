import { useState } from "react";
import { useEffect } from "react";


function ProductList({ products, setProducts, searchTerm, sort, selectedCategory }) {
  console.log(products)

  const date = new persianDate();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [updatedFilteredProducts, setUpdatedFilteredProducts] = useState(filteredProducts)

  const deleteHandler = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, [setProducts]);
  
  useEffect(() => {
    console.log(products)
    let updatedFilteredProducts = products.filter(product => (
       product.productTitle.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (selectedCategory !== 'All') {
      updatedFilteredProducts = updatedFilteredProducts.filter(product => 
          product.productCategory === selectedCategory
      );
  }
  if (sort === 'latest') {
    updatedFilteredProducts = updatedFilteredProducts.sort((a, b) => new persianDate(b.date).diff(new persianDate(a.date)));
} else if (sort === 'earliest') {
    updatedFilteredProducts = updatedFilteredProducts.sort((a, b) => new persianDate(a.date).diff(new persianDate(b.date)));
}

    setFilteredProducts(updatedFilteredProducts);
}, [products, searchTerm, sort, selectedCategory]);

  return (
    <div className='p-2'>
      <h2 className='w-11/12 text-light-gray text-xl font-medium border-b border-dark-gray'>ProductList</h2>
      <ul className="w-11/12">
        {filteredProducts.length > 0  ? filteredProducts.map((product, index) => (
          <li key={index} className="flex justify-between items-center my-3"><span>{product.productTitle}</span>
          <div className="flex items-center gap-3">
            <span>{date.toLocale("fa").format("YYYY")}/{date.toLocale("fa").format("MM")}/{date.toLocale("fa").format("DD")}</span>
            <span className="border rounded-2xl py-0.5 px-1">{product.productCategory}</span>
            <span className="border-light-gray border-2 bg-dark-gray text-light-gray px-2.5 rounded-full">{product.quantity}</span>
            <span onClick={() => deleteHandler(index)} className="text-red border-2 rounded-full py-0.5 px-2 cursor-pointer">delete</span>
          </div>
          </li>)) : <p>there is no products!</p>}
      </ul>
    </div>
  )
}

export default ProductList