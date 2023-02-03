import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { singleProduct } from '../../redux/action'

function Product() {
  const id = useParams()
  const [countProduct, setCountProduct] = useState(1)
  const state = useSelector((state) => state?.product[0][0].dragon)
  const dispatch = useDispatch()
  const datafilter = state?.filter((e)=>e.id == id.id)

  const AddProduct = () =>{
    datafilter[0].count = countProduct
    dispatch(singleProduct(datafilter[0]))
  }
  return (
    <>
    <div className="container text-center py-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="card text-bg-dark border-0">
            {<img src={require(`../../asserts/${datafilter[0].image}`)} className="card-img" alt="background" height="100%" width="200px" />}
          </div>
        </div>
        <div className="col-lg-6 text-start">
          <h3 className="text-start">{datafilter[0]?.title}</h3>
          <h2> $ {datafilter[0]?.price?.toFixed(2)}</h2>
          <div className="text-justify">{datafilter[0]?.description}</div>
          <div className='countContainer'>
            <div>
              <button className='countButton' onClick={()=>setCountProduct(countProduct > 0 ? countProduct - 1 : 0)}>-</button>
              <button className='countButton'>{countProduct}</button>
              <button className='countButton' onClick={()=>setCountProduct(countProduct + 1)}>+</button>
            </div>
            <button className='addToCard' onClick={() => AddProduct()}>Add To card</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Product