import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

function AddNewCategory() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);


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
  localStorage.setItem('categories', JSON.stringify(updatedCategories));

  setTitle('');
  setDescription('');
  };



  return (
    <div className='w-full flex flex-col mt-20 mb-4 mx-0 p-4'>
      <h2 className='text-light-gray text-xl font-medium p-2'>Add New Category</h2>
      <form onSubmit={handleSubmit} className='w-11/12 flex flex-col bg-box-color rounded-xl p-4'>
      <label htmlFor="title">title</label>
      <input type="text" id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} required className='bg-box-color p-2 border rounded-xl outline-none mb-4 w-2/5' />
      <label htmlFor="description">description</label>
      <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)}  required className='bg-box-color p-2 border rounded-xl outline-none mb-5' ></textarea>
      <div className='flex gap-4'>
        <button className='w-1/2 border rounded-xl py-2'>Cancel</button>
        <button className='w-1/2 rounded-xl py-2 bg-dark-gray text-light-gray' type='submit'>Add Category</button>
      </div>
    </form>
    </div>
  ) 
}

export default AddNewCategory