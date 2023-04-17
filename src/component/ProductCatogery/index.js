import React,{useEffect, useState} from 'react'
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux'

import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import Card from '../Card';

function ProductCatogery() {
    const [category, setCatgory] = useState()
    const id = useParams()
    
    const {product} = useSelector((state) => state)
    const accessories = ["batteries", "Hard Drives", "Keyboard & Mouse", "Memory Cards", "USB Flash Drives"]
    const computer = ["Graphics Card", "Internal Hard Drive", "Ram"]
    const pc = ["Desktop", "Laptop", "Tablets"]
    const softwares = ["Antivirus", "Dragon", "Office"]
  return (
    <div className="container">
            <div className="row">
                <div className="col-md-3">
                    {console.log('statestate',product)}
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
                            {product?.length > 0 && product?.map((item, i) => {
                                return (<>{item?.subcategory === id?.id ? <div className="col-sm-3 col-md-4 col-sm-6" key={i}> <Card {...item}/> </div> : ''} </>)
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductCatogery