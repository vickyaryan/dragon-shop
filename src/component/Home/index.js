import React from 'react'
import Product from '../Products'
import Slider from './Slider'
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';

function Home(props) {
    const categories = ["Accessories", "Computer Components", "PC & Laptops", "Print & Scanner"]
    return (
        <>
            <Slider />
            <h2 className='py-5 text-center'>Best Selling Product</h2>
            <Product />
            <h2 className='py-5 text-center'>Browse Our Categories</h2>
            <div className="container">
                <div className="row">
                    {categories?.map((e, i) => {
                        return (
                            <div className="col-sm-4 col-md-3 col-sm-6 my-4" key={i}>
                                <NavLink to={`/productcat/${e}`}>
                                    <div className="containerImg">
                                        <div className="centeredImg py-3  text-center">{e}</div>
                                        <img src={require(`../../asserts/assocries.jpg`)} alt="Snow" className='catImg' />
                                    </div>
                                </NavLink>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <h3>FREE SHIPPING ON ALL ORDERS</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                    <div class="col d-flex">
                        <div className='horizental' />
                        <div className='px-2'>
                            <h3>FREE SHIPPING ON ALL ORDERS</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                        <div className='horizental' />
                    </div>
                    <div class="col">
                        <h3>FREE SHIPPING ON ALL ORDERS</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </div>
            </div>
            <Carousel variant="dark" style={{textAlign: 'center', background: '#8195AE', color: '#fff', paddingTop: 50, paddingBottom: 50 }}>
                <Carousel.Item>
                    <div className=' text-center'>
                        <>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </>
                        <div className='text-center'>
                            <h3 className='text-center'>Third slide label</h3>
                            <p className='text-center'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item><Carousel.Item>
                    <div className=' text-center'>
                        <>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </>
                        <div className='text-center'>
                            <h3 className='text-center'>Third slide label</h3>
                            <p className='text-center'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item><Carousel.Item>
                    <div className=' text-center'>
                        <>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </>
                        <div className='text-center'>
                            <h3 className='text-center'>Third slide label</h3>
                            <p className='text-center'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item><Carousel.Item>
                    <div className=' text-center'>
                        <>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </>
                        <div className='text-center'>
                            <h3 className='text-center'>Third slide label</h3>
                            <p className='text-center'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>

        </>
    )
}


export default Home
