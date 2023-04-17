import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function TopReated() {
  const state = useSelector((state) => state?.product)
  var sliceProduct = state?.slice(state?.length - 5, state?.length)
  return (
    <>
      <h4 className='text-center mb-5'>Top Reated</h4>
      {sliceProduct.map((e, i) => {
        return (
          <NavLink className='color-black' to={`/product/${e.id}`} key={i}>
            <div className='d-flex g-3 my-2'>
              <img src={`https://dragon-speech.com/${e.image}`} className="card-img letestImg" alt="background" />
              <div className='d-block'>
                <p className='mx-4 my-1 text-center'>{e?.title?.substring(0, 20)}...</p>
                <p className='fw-bold text-center'>$ {e?.price?.toFixed(2)}</p>
              </div>
            </div>
          </NavLink>
        )
      })}
    </>
  )
}

export default TopReated