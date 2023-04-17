import React from 'react'

function Review() {
    return (
        <div className='d-grid'>
            <h5>Your Review</h5>
            <p>There are no review yet</p>
            <div className='p-4 d-grid reviewBorder'>
                        <h4>Your Review*</h4>
                <textarea rows={5} />
                <div className='d-flex my-4'>
                    <div className='d-grid'>
                        <h4>Name</h4>
                        <input type="text" className='reviewInput'/>
                    </div>
                    <div className='d-grid'>
                        <h4>Email</h4>
                        <input type="email" className='reviewInput ms-4 form-control'/>
                    </div>
                </div>
                <div className='justify-content-center d-flex'>
                <button className='reviewButton'>Submit</button>
                </div>

            </div>
        </div>
    )
}

export default Review