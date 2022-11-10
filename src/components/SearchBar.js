import Form from 'react-bootstrap/Form';

function SearchBar({search, setSearch, inStockSearch, setInStockSearch}) {

    function handleChange(e) {
        setSearch(e.target.value)
    }  
    
    function handleInStock() {
        setInStockSearch(inStockSearch === true ? false : true)
    }

    return (
        <div>
            <Form.Control 
                size="sm" 
                type="text" 
                placeholder="Search products" 
                value={search} 
                onChange={handleChange}/>
            <Form.Check 
                type="switch"
                id="custom-switch"
                label="Only items in stock"
                style={{textAlign : 'left'}}
                onChange={handleInStock}
            />
        </div>
    )
}
export default SearchBar