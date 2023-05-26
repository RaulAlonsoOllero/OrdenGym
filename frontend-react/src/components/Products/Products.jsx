import React, { useState , useEffect} from 'react';
import './Products.css'
import {urlFor,client} from '../../client'


const Products = () => {
const [products, setProducts] = useState([])

useEffect(() => {
 const query = '*[_type == "products"]'

 client.fetch(query)
  .then((data) => {setProducts(data)})
}, [])

console.log(products)
  return (
    <>
    <div className="products-header">
            <span>Algunos productos</span>
            <span className='stroke-text'>Que puedes comprar</span>
            <span>en nuestra tienda</span>
        </div>
    <div className='allContainer'>
      {products.map((product)=>(
        <div className="products_container">
        <div className="imgBox">
          <img
            src={urlFor(product.image && product.image[0])}
            width={250}
            height={250}
            className="product-image"
            alt={product.slurge}
          />
          </div>
          <div class="contentBox">
            <h3>{product.name}</h3>
            <h2 class="price">{product.price} €</h2>
          </div>
          </div>
      ))}
    </div>
    </>
  )
}



export default Products