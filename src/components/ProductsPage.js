import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";

function ProductsPage ({allItems, setAllItems}) {
    const [search, setSearch] = useState('')
    const [inStockSearch, setInStockSearch] = useState(false)

    return (
        <div className="products-page">
            <h1>IronStore</h1>
            <SearchBar 
                search={search} 
                setSearch={setSearch} 
                inStockSearch={inStockSearch} 
                setInStockSearch={setInStockSearch}
            />
            <ProductTable 
                allItems={allItems} 
                setAllItems={setAllItems} 
                search={search}
                inStockSearch={inStockSearch}    
            />
        </div>
    )
}

export default ProductsPage