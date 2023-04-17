import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { initialProduct } from '../../redux/action'


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


function Product() {
    const dispatch = useDispatch()
    
    useState(() => { dispatch(initialProduct()) }, [])
    const state = useSelector((state) => state?.product)
    

    return (
        <div className="container">
            <div className="row">
                <Carousel responsive={responsive}>
                    {state.map((item, i) => {
                        return (
                            <div className="col-sm-4 col-md-3 col-sm-6 my-4" key={i}>
                                <NavLink className={'width-max myDIV'} to={`/product/${item?.id}`} style={{ color: '#414141', textDecoration: 'none' }}>
                                    <div className="card h-80 text-center">
                                        <div className='levelShow'>

                                        </div>
                                        <div className="card-body">
                                            <div className="card text-bg-dark border-0">
                                                <img src={`https://dragon-speech.com/${item.image}`} className="card-img" alt="background" height="200px" />
                                            </div>
                                            <h5 className="card-title">{item?.title}</h5>
                                            <p className="card-text lead fw-bold">$ {item.price}</p>
                                            <NavLink to={`/product/${item.id}`} className="hide btn btn-outline-dark">Buy</NavLink>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default Product