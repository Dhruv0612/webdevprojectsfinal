import React,{Component} from 'react';
import ProductsList from './components/Productslist'; 


class Appp extends Component{
  constructor(){
    super();
    console.log('hi from constructor');
    this.state={products: [],
                searchValue:''};
  };

  componentDidMount(){
    fetch('https://first-project-fb18b.web.app/products.json')
    .then(response=>response.json())
    .then(items=>this.setState({products:items}))
  }

  render() {
    const {products,searchValue} = this.state;
    const filteredProducts = products.filter(product=>product.name.toLowerCase().includes(searchValue.toLowerCase()));

    return (
      <div className='App'>
      <h1>search products</h1>
      <div>
        <input type='search' placeholder='search products' className='search-bar' onChange={e=>{
          this.setState({searchValue:e.target.value},()=>console.log(this.state));
          console.log(this.state);}}/>
      </div>
      <ProductsList products={filteredProducts}>
      {this.state.products.map(product => (<div key={product.id}><p>{product.name} : {product.price} Discount: {product.discount}</p></div>))}

      </ProductsList>
        
      </div>
    );
  }
}

export default Appp;
