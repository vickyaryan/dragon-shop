import React from 'react'
import { NavLink } from 'react-router-dom'

function Card(props) {
    return (
        <NavLink className={'width-max myDIV'} to={`/product/${props?.id}`} style={{ color: '#414141', textDecoration: 'none' }}>
            <div className="card h-80 text-center">
                <div className='levelShow'>

                </div>
                <div className="card-body">
                    <div className="card text-bg-dark border-0">
                    <img src={`https://dragon-speech.com/${props.image}`} className="card-img" alt="background" height="200px" />
                    </div>
                    <h5 className="card-title">{props?.title}</h5>
                    <p className="card-text lead fw-bold">$ {props?.price}</p>
                    <NavLink to={`/product/${props?.id}`} className="hide btn btn-outline-dark">Buy</NavLink>
                </div>
            </div>
        </NavLink>
    )
}

export default Card