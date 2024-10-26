import Header from './components/Header'
import AddNewProduct from './components/addNewProduct'
import Search from './components/Search'
import ProductList from './components/ProductList'
import { useState } from 'react'
import { useEffect } from 'react';

function App() {
  const [isShowing, setIsShowing] = useState(false)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sort, setSort] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');


  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem('categories'));
    if (storedCategories) {
      setCategories(storedCategories);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newCategory = { title, description };
    const updatedCategories = [...categories, newCategory];
    setCategories(updatedCategories);
    console.log(updatedCategories)
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
  
    setTitle('');
    setDescription('');
  }

  return (
    <div className='flex justify-center text-dark-gray bg-bg-color w-screen'>
      <Header />
      <div className='flex w-11/12 p-4 justify-center'>
        <div className='flex  flex-col w-1/2'>
          {isShowing ? 
          <div className='w-full flex flex-col mt-20 mb-4 mx-0 p-4'>
            <h2 className='text-light-gray text-xl font-medium p-2'>Add New Category</h2>
            <form onSubmit={handleSubmit} className='w-11/12 flex flex-col bg-box-color rounded-xl p-4'>
              <label htmlFor="title">title</label>
              <input type="text" id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} required className='bg-box-color p-2 border rounded-xl outline-none mb-4 w-2/5' />
              <label htmlFor="description">description</label>
              <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)}  required className='bg-box-color p-2 border rounded-xl outline-none mb-5' ></textarea>
              <div className='flex gap-4'>
                <button className='w-1/2 border rounded-xl py-2' onClick={() => setIsShowing(false)}>Cancel</button>
                <button className='w-1/2 rounded-xl py-2 bg-dark-gray text-light-gray' type='submit'>Add Category</button>
              </div>
            </form>
          </div> : <p onClick={() => setIsShowing(true)} className='text-box-color text-lg font-medium mt-14 p-2'>Add new Category?</p> }
          <AddNewProduct categories={categories} products={products} setProducts={setProducts} />
        </div>
        <div className='flex flex-col m-6 mt-16 w-1/2'>
          <Search categories={categories} products={products} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSort={setSort} setSelectedCategory={setSelectedCategory} />
          <ProductList products={products} setProducts={setProducts} searchTerm={searchTerm} sort={sort}  selectedCategory={selectedCategory} />
        </div>
      </div>

    </div>
  )
}

export default App
