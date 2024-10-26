
function Search({categories, setSearchTerm, searchTerm, setSort, setSelectedCategory}) {
  
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className='w-11/12 p-4 flex flex-col text-lg'>
      <h3 className='border-b font-medium mb-4'>Filters</h3>

      <div className='flex justify-between my-3'>
      <label htmlFor="">search</label>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='bg-bg-color p-2 border rounded-xl outline-none' />
      </div>
      <div className='flex justify-between my-3'>
      <label htmlFor="">sort</label>
      <select onChange={(e) => setSort(e.target.value) } name="" id="" className='bg-bg-color p-2 border rounded-xl outline-none w-1/3 text-base text-center'>
      <option value="">select a category</option>
      <option value="">latest</option>
      <option value="">earliest</option>
      </select>
      </div>
      <div className='flex justify-between my-3'>
      <label htmlFor="">Category</label>
      <select onChange={handleCategoryChange} name="" id="" className='bg-bg-color p-2 border rounded-xl outline-none w-1/6'>
        <option value="">All</option>
        {categories.map((category, index) => (
          <option key={index} value={category.title}>{category.title}</option>
        ))}
      </select>
      </div>
    </div>
  )
}

export default Search