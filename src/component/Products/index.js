import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Product() {
    const state = useSelector((state) => state?.product[0][0])
    
    return (
        <div className="container">
            <div className="row">
                {console.log('mmmmmmmmmmmmmmnnnnnnnnnnnnnnn',state)}
                {state?.dragon?.map((item, i) => {
                    return (
                        <div className="col-sm-4 col-md-3 col-sm-6 my-4" key={i}>
                        <NavLink to={`/product/${item.id}`} style={{color:'#414141', textDecoration: 'none'}} >
                            <div className="card h-80 text-center">
                                <div className="card-body">
                                    <div className="card text-bg-dark border-0">
                                        <img src={require(`../../asserts/${item.image}`)} className="card-img" alt="background" height="200px" />
                                    </div>
                                    <h5 className="card-title">{item?.title}</h5>
                                    <p className="card-text lead fw-bold">$ {item.price?.toFixed(2)}</p>
                                    <NavLink to={`/product/${item.id}`} className="btn btn-outline-dark">Buy</NavLink>
                                </div>
                            </div>
                        </NavLink>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Product