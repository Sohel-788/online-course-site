import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import './Course.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Courses = () => {
    const data12 = fakeData.slice(0, 12);
    const [courses, setCourse] = useState(data12);
    const [cart, setCart] = useState([]);
    // event handler
    const handleEnroll = (product) => {
        console.log("product added", product)
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='main-wrap'>
            <div className="course-wrap">
                {
                    courses.map(course => <Product handleEnroll={handleEnroll} product={course}></Product>)

                }
            </div>
            <div className="cart-wrap">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Courses;