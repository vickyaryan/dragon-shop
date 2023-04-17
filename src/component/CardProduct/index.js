import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { RxCrossCircled } from 'react-icons/rx';

function CardProduct() {

  const state = useSelector((state) => state.singleProduct)
  var total = 0
  state?.map((e, i) => {
    total = total + (e?.count * e?.price)
  })
  return (
    <div >
    {state?.length ? (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-7">
          <div className="table-responsive overflow-hidden">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" colspan="2">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              {state?.map((e, i) => {
                return (
                  <tbody>
                    <tr>
                      <th className='cancleProduct'><RxCrossCircled size={20}/> </th>
                      <th scope="row" className='text-left d-flex justify-content-around'>
                        <img src={`https://dragon-speech.com/${e?.image}`} className="card-img card-img-size" alt="background" /></th>
                      <td>{e?.title}</td>
                      <td className='text-cente'>{e?.price?.toFixed(2)}</td>
                      <td className='text-cente'>{e?.count}</td>
                      <td className='text-cente'>{(e?.count * e?.price)?.toFixed(2)}</td>
                    </tr>
                  </tbody>
                )
              })}
            </table>
          </div>
          <button>UPDATE CARD</button>
        </div>
        <div className="col-lg-5 px-4 text-start">
          <h4 className='mb-3'>Cart Total</h4>
          <div className="table-responsive">
            <div className='d-flex justify-content-between my-2'>
              <h6>SubTotal</h6>
              <h6>$ {total?.toFixed(2)}</h6>
            </div>
            <hr />
            <div className='d-flex justify-content-between my-2'>
              <h6>Total</h6>
              <h6>$ {total?.toFixed(2)}</h6>
            </div>
            <hr />
          </div>
          <NavLink to='/checkout' className='checkOut mb-4'>Product To CheckOut</NavLink>
          <h3>Coupon</h3>
          <input type='text' placeholder='Coupan Code' className='w-100 mt-3 shadow rounded p-2'/>
          <h4><button className='w-100 rounded mt-3 p-4 text-center border-0'>Apply Coupan</button></h4>
        </div>
      </div>
    </div>
    ): (
      <p>Your cart is currently Empty</p>
    )}
    </div>
  )
}

export default CardProduct