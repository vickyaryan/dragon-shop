import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function BeatSelling() {
  const state = useSelector((state) => state?.product[0][0])
  var sliceProduct = state?.dragon.slice(6,12)
  return (
    <>
      <div>BeatSelling</div>
      {sliceProduct.map((e, i) => {
        return (
          <NavLink className='color-black' to={`/product/${e.id}`} key={i}>
          <div className='d-flex justify-content-center my-2'>
            <img src={require(`../../asserts/${e?.image}`)}  className="card-img letestImg" alt="background" />
            <div className='d-block'>
              <p className='mx-4'>{e?.title?.substring(0,20)}...</p>
              <p className='fw-bold'>$ {e?.price?.toFixed(2)}</p>
            </div>
          </div>
          </NavLink>
        )
      })}
    </>
  )
}

export default BeatSelling