import { useState } from 'react'
import Sidebar from '../components/Sidebar'
 import Navbar from '../components/Navbar'

const AddProduct = () => {

  const [product, setProduct] = useState({
    name:'',
    stock:'',
    price:''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(product)

    alert('Product Added Successfully')
  }

  return (
    <div className='layout'>

      <Sidebar />

      <div className='main'>

        <Navbar />

        <div className='page-box'>

          <h2>Add Product</h2>

          <form onSubmit={handleSubmit}>

            <input
              type='text'
              placeholder='Product Name'
              className='form-control mb-3'
              onChange={(e)=>setProduct({...product,name:e.target.value})}
            />

            <input
              type='number'
              placeholder='Stock'
              className='form-control mb-3'
              onChange={(e)=>setProduct({...product,stock:e.target.value})}
            />

            <input
              type='number'
              placeholder='Price'
              className='form-control mb-3'
              onChange={(e)=>setProduct({...product,price:e.target.value})}
            />

            <button className='btn btn-primary'>Add Product</button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default AddProduct;