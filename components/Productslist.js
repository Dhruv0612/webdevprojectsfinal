import React,{Component} from 'react';
import './productsgrid.css';

const ProductsList=(props)=>{
    console.log(props.children);
    return <div className='prod-grid'>{props.children}</div>
    //return {this.state.products.map(product => (<div key={product.id}><p>{product.name} : {product.price} Discount: {product.discount}</p></div>))}

}

export default ProductsList;

