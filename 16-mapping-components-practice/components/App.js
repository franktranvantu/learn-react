import React from 'react'
import Product from './Product'
import vschoolProducts from '../vschoolProducts'

function App() {
    const productComponents = vschoolProducts.map(product => <Product key={product.id} product={product} />)

    return (
        <div>
            {productComponents}
        </div>
    )
}

export default App