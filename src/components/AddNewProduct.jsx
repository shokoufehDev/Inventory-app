import React from 'react'
import { useEffect, useState } from 'react';

function AddNewProduct({categories, products, setProducts}) {

  const [productTitle, setProductTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [productCategory, setProductCategory] = useState('');


  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newProduct = { productTitle, quantity, productCategory };
    console.log(newProduct)
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    console.log(updatedProducts)
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setProductTitle('');
    setQuantity('');
    setProductCategory('');
  }

  return (
    <>
    <div className=' w-11/12'>
    <h2 className='text-light-gray text-xl font-medium p-2'>Add New Product</h2>
    <form onSubmit={handleSubmit}  className='flex flex-col bg-box-color p-4 rounded-xl'>
      <label className='mt-4 mb-1' htmlFor="">title</label>
      <input type="text" value={productTitle} onChange={(e) => setProductTitle(e.target.value)} required className='bg-box-color py-2 border rounded-xl w-1/3 outline-none p-2' />
      <label className='mt-4 mb-1' htmlFor="">quantity</label>
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required className='bg-box-color py-2 border rounded-xl w-1/3 outline-none p-2' />
      <label className='mt-4 mb-1' htmlFor="">category</label>
      <select name="" id="" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} required className='bg-box-color py-2 border rounded-xl outline-none p-2'>
        <option value="">select a category</option>
        {categories && categories.map((category, index) => (
          <option key={index} value={category.title}>{category.title}</option>
        ))}
      </select>
    <button type='submit' className='bg-dark-gray text-light-gray py-2 rounded-xl mt-4'>Add New Product</button>
    </form>
    </div>
    </>
  )
}

export default AddNewProduct