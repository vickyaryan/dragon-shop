import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

function ProductCat() {
    const id = useParams()
    var count = 0
    const [category, setCatgory] = useState()
    const [setStateProduct, getSetStateProduct ] = useState([])
    const { dragon} = useSelector((state) => state?.product[0][0])
    const state = useSelector((state) => state?.product[0][0])
    const dispatch = useDispatch()
    const datafilter3 = dragon?.filter((e) => e.title.toLowerCase() == id.id.toLowerCase())
    const propertyNames = Object.keys(state);

const findTrue =    propertyNames.find((item,index)=>{
    if(item == id?.id?.toLowerCase()){
        count = index
    }
})
    useState(()=>{getSetStateProduct(state)},[state])
    const accessories = ["batteries", "Hard Drives", "Keyboard & Mouse", "Memory Cards", "USB Flash Drives"]
    const computer = ["Graphics Card", "Internal Hard Drive", "Ram"]
    const pc = ["Desktop", "Laptop", "Tablets"]
    const softwares = ["Antivirus", "Dragon", "Office"]
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <MDBAccordion borderless initialActive={1}>
                        <MDBAccordionItem collapseId={1} headerTitle='Accessories'>
                            {accessories.map((e, i) => <p key={i} onClick={() => setCatgory(e)}>{e}</p>)}
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={2} headerTitle='Computer Cpmponents'>
                            {computer.map((e, i) => <p key={i}>{e}</p>)}
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={3} headerTitle='PC & Laptops'>
                            {pc.map((e, i) => <p key={i}>{e}</p>)}
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={4} headerTitle='Software'>
                            {softwares.map((e, i) => <p key={i}>{e}</p>)}
                        </MDBAccordionItem>
                    </MDBAccordion>

                </div>
                <div className="col-md-9" >
                    <div className="container">
                        <div className="row">
                            <p className='textLeft my-4'><span>Home / </span> {id.id}</p>
                            {datafilter3?.map((item, i) => {
                                return (
                                    <div className="col-sm-3 col-md-4 col-sm-6" key={i}>
                                        <NavLink to={`/product/${item.id}`} style={{ color: '#414141', textDecoration: 'none' }} >
                                            <div className="card h-80 text-center">
                                                <div className="card-body">
                                                    <div className="card text-bg-dark border-0">
                                                        <img src={require(`../asserts/${item.image}`)} className="card-img" alt="background" height="200px" />
                                                    </div>
                                                    <p className="card-title text-muted text-capitalize">{item?.title}</p>
                                                    <p className="card-text fw-bold"><span className='secondPrice'>${item.price + (item.price * 0.2)}</span>   $ {item.price?.toFixed(2)}</p>
                                                    <NavLink to={`/product/${item.id}`} className="btn btn-outline-dark">Buy</NavLink>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCat