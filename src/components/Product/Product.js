import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props)
    const {image, name, price,topic,instructor,access} = props.product;
    return (
        <div className='product'>
            <div>

                 <img src={image} alt="" />
            </div>
            <div>
                <h3 className='product-title'>{name}</h3>
                <h5>Instructor: {instructor}</h5>
                <p>Category: {topic}</p>
                <p className='price'>Price: ${price}</p>
                <p><small><span className='text-danger'>Deadline:</span> {access}</small></p> <br/>
                <button onClick={()=>props.handleEnroll(props.product)} className='btn btn-success btn-lg'>Enroll Now</button>
            </div>
        </div>
    );
};

export default Product;