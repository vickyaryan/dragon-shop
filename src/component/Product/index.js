import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { singleProduct } from '../../redux/action'
import Discription from './discription';
import Review from './review';
import axios from 'axios';

function Product() {
  const id = useParams()
  const [countProduct, setCountProduct] = useState(1)
  const [discription, setDiscription] = useState(true)
  const state = useSelector((state) => state?.product)
  const dispatch = useDispatch()
  const datafilter = state?.filter((e) => e.id == id.id)

  const AddProduct = () => {
    datafilter[0].count = countProduct
    dispatch(singleProduct(datafilter[0]))
  }

  return (
    <>
      <div className="container text-center py-5">
        {console.log('datafilterdatafilterdatafilter',datafilter)}
        <div className="row">
          <div className="col-lg-6">
            <div className="card text-bg-dark border-0">
              {<img src={`https://dragon-speech.com/${datafilter[0]?.image}`} className="card-img" alt="background" height="100%" width="200px" />}
            </div>
          </div>
          <div className="col-lg-6">
            <p>Home / {datafilter[0]?.category}</p>
            <h3 className="text-start">{datafilter[0]?.name}</h3>
            <h2> $ {datafilter[0]?.price}</h2>
            <div className="text-justify">{datafilter[0]?.shotDisc}</div>
            <div className='countContainer'>
              <div>
                <button className='countButton countButton-left' onClick={() => setCountProduct(countProduct > 0 ? countProduct - 1 : 0)}>-</button>
                <button className='countButton'>{countProduct}</button>
                <button className='countButton countButton-right' onClick={() => setCountProduct(countProduct + 1)}>+</button>
              </div>
              <button className='addToCard' onClick={() => AddProduct()}>Add To card</button>
            </div>
          </div>
          <div className="col-lg-12 d-flex">
              <h4 onClick={() => setDiscription(true)} className='mx-3'>Discriptio</h4>
              <h4 onClick={() => setDiscription(false)}>Review</h4>
          </div>
          <div className="col-lg-12">
            {discription ? <Discription data={datafilter[0]?.longDisc}/> : <Review />}
          </div>
        </div>
      </div>
    </>
  )
}

export default Product