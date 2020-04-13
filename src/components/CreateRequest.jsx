import React, { Component } from 'react';
import axios from 'axios';

class CreateRequest extends Component {
  state = { 
    productItems: [],
    productList: []
  }
  componentDidMount () {
    axios.get('/products').then(response => {
      this.setState({
        productItems: response.data.products
      })
    })
  }
  render (){
    const productItems = this.state.productItems
    let productList
    if (productItems.length > 0) {
      productList = productItems.map(productItem => {
        return (
          <>
            <div key={productItem.id} >
              <div className='five wide column'>
                <div >{productItem.name}</div>
              </div>
              <div className='eight wide column'>
                <div>{productItem.description}</div>
              </div>
              <div className='two wide column'>
                <div>{productItem.price}</div>
              </div>
            </div>
          </>
        )
      })
    }
    return (
      <div>
        <div className='ui three column centered grid'>{productList}</div>
      </div>
    )
  }
}
export default CreateRequest