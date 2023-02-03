import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { initialProduct } from '../../redux/action'
import { Navbar, Container, Nav,NavDropdown } from 'react-bootstrap';
function NavBar() {
    const dispatch = useDispatch()
    const state = useSelector((state) => state?.singleProduct)
    const [priceData, setpriceData] = useState(0)
    useState(() => { dispatch(initialProduct()) }, [])

    useEffect(() => {
        state?.map((e) => setpriceData((e?.price * e?.count) + priceData));
    }, [state])
    const data = ["Desktop","Laptop","Tablets"]
    const data1 = ["Graphics Card", "Internal Hard Drive","Ram"]
    const accessories = ["Batteries","Hard Drives","Keyboard & Mouse","Memory Cards","USB Flash Drives"]
    return (
        <>
        <div className='headerLevel'>

        </div>
            <Navbar expand="md">
                <Container>
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">
                        <img src={require(`../../asserts/logo.png`)} height="30px" className="" alt="background" />
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink className="nav-link active" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/products">Product</NavLink>
                            <NavDropdown title="Pc/Laptops" id="basic-nav-dropdown">
                            <NavDropdown.Item href={`/productcat/desktop`} >Desktop</NavDropdown.Item>
                            <NavDropdown.Item href={`/productcat/laptop`} >Laptop</NavDropdown.Item>
                            <NavDropdown.Item href={`/productcat/tablets`} >Tablets</NavDropdown.Item>
                                {/* {data.map((e,i)=><NavDropdown.Item href={`/productcat/${e}`} key={i}>{e}</NavDropdown.Item>)} */}
                            </NavDropdown>
                            <NavDropdown title="Pc Component" id="basic-nav-dropdown">
                                {data1.map((e,i)=><NavDropdown.Item href={`/productcat/${e}`} key={i}>{e}</NavDropdown.Item>)}
                            </NavDropdown>
                            <NavDropdown title="Accessories" id="basic-nav-dropdown">
                                {accessories.map((e,i)=><NavDropdown.Item href={`/productcat/${e}`} key={i}>{e}</NavDropdown.Item>)}
                            </NavDropdown>
                        </Nav>
                        <Nav className='alignItem'>
                            <div className='call'>+91-8210-120-954</div>
                            <NavLink className='cardContainer1 ' to="/card">
                                <p className='cartPrice'>Card/$ {priceData?.toFixed(2)}</p>
                                <div className='cardContainer d-flex align-items-center'>
                                    <i className="cardSize fa-solid fa-bag-shopping"></i>
                                    <p className='cardNumber'>{state.length}</p>
                                </div>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar