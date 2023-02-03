import React from 'react'
import { useSelector } from 'react-redux'

function CheckOut() {
    const state = useSelector((state) => state.singleProduct)
    var total = 0
  state?.map((e, i) => {
    total = total + (e?.count * e?.price)
  })
    return (
        <div className='my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h4>Billing Details</h4>
                        <div className='d-flex '>
                            <div className='input-container ' style={{ width: '80%' }}>
                                <label className='textLeft'>First Name</label>
                                <input type="text" className='inputBox' />
                            </div>
                            <div className='input-container ' style={{ width: '80%', marginLeft: 20 }}>
                                <label className='textLeft'>Last Name</label>
                                <input type="text" className='inputBox' placeholde="" />
                            </div>
                        </div>
                        <div className='input-container'>
                            <label className='textLeft'>Company Name</label>
                            <input type="text" className='inputBox' placeholde="" />
                        </div>
                        <div className='input-container'>
                            <label className='textLeft'>Street Address</label>
                            <input type="text" className='inputBox' placeholde="" />
                        </div>
                        <div className='input-container'>
                            <label className='textLeft'>Town/City </label>
                            <input type="text" className='inputBox' placeholde="" />
                        </div>
                        <div className='input-container'>
                            <label className='textLeft'>State</label>
                            <input type="text" className='inputBox' placeholde="" />
                        </div>
                        <div className='input-container'>
                            <label className='textLeft'>Zip Code </label>
                            <input type="text" className='inputBox' placeholde="" />
                        </div>
                        <div className='input-container'>
                            <label className='textLeft'>Phone</label>
                            <input type="text" className='inputBox' placeholde="" />
                        </div>
                        <div className='input-container'>
                            <label className='textLeft'>Email</label>
                            <input type="text" className='inputBox' placeholde="" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h5>Your Order</h5>
                        <div className="table-responsive">
                            <table className="table">
                                <tr className='borderBottom'>
                                    <th className='textLefttable'>Product</th>
                                    <th className='textRighttable'>SubTotal</th>
                                </tr>
                                {state.map((e, i) => {
                                    return (
                                        <>
                                            <tr className='borderBottom1'>
                                                <td className='textLefttable'>{e?.title.substring(0,20)}... {e?.price?.toFixed(2)} x {e?.count}</td>
                                                <td className='textRighttable'>$ {(e?.price * e?.count)?.toFixed(2)}</td>
                                            </tr>
                                        </>
                                    )
                                })}
                                
                                <tr className='borderBottom1'>
                                    <td className='textLefttable'>SubTotal</td>
                                    <td className='textRighttable'>$ {total?.toFixed(2)}</td>
                                </tr>
                                <tr className='borderBottom1'>
                                    <td className='textLefttable'>Total</td>
                                    <td className='textRighttable'>$ {total?.toFixed(2)}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut