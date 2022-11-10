import ProductRow from "./ProductRow";
import Table from 'react-bootstrap/Table';


function ProductTable({allItems, setAllItems, search, inStockSearch}) {
    return (
        <div>
                
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {allItems
                        .filter(item => {
                            return inStockSearch ?
                                item.inStock : item
                        })
                        .filter(item => {
                            return item.name.toLowerCase().includes(search.toLowerCase())
                        })
                        .map(item => {
                        return <ProductRow 
                                    name={item.name} 
                                    price={item.price} 
                                    inStock={item.inStock} 
                                    key={item.name}/>
                    })}
                    </tbody>                    
                </Table>
        </div>
    )
}

export default ProductTable