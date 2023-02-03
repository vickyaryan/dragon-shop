import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

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
          <div className="table-responsive">
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
                      <th scope="row" className='text-left d-flex justify-content-around'>
                        <img src={`./asserts/${e?.image}`} className="card-img card-img-size" alt="background" /></th>
                      <td>{e?.title}</td>
                      <td className='text-cente'>{e?.price?.toFixed(2)}</td>
                      <td className='text-cente'>{e?.count}</td>
                      <td className='text-cente'>{(e?.count * e?.price)?.toFixed(2)}</td>
                      <td ><button className='text-danger border-0'>Cancle</button></td>
                    </tr>
                  </tbody>
                )
              })}
            </table>
          </div>
        </div>
        <div className="col-lg-5">
          <h4>Cart Total</h4>
          <div className="table-responsive">
            <div className='d-flex justify-content-around my-2'>
              <h6>SubTotal</h6>
              <h6>$ {total?.toFixed(2)}</h6>
            </div>
            <div className='d-flex justify-content-around my-2'>
              <h6>Total</h6>
              <h6>$ {total?.toFixed(2)}</h6>
            </div>
          </div>
          <NavLink to='/checkout' className='checkOut'>Product To CheckOut</NavLink>
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