import { CanvasTextSystem } from 'pixi.js';
import Filtering from './Filtering'
import ProductCard from './ProductCard'

// imports static list from files, config database interaction asap when possible 
import bookArray from '../temporary_mock_data'

function ProductList({ category }) {
    // remove mb 100px when pagination is ok

    return (
        <div className="grid grid-cols-[20%_auto] gap-[4rem] mb-[100px] max-w-[90vw] ml-auto mr-auto">
            <div>
                <Filtering />
            </div>
            <div>
                {/* the auto value is just something until I know how the dropdown will be like */}
                <header className="grid grid-cols-[auto_300px]">
                    <h3 className="font-title text-[40px]">{category}</h3>
                    <p>this will be dropdown</p>
                </header>
                <main className="flex flex-row flex-wrap gap-[40px]">
                    {/*i imagine the sorting will be somewhere here*/}

                    {bookArray.map((item) => {
                        return <ProductCard key={item.id} item={item} />
                    })}
                </main>
            </div>
        </div>
    )
}

export default ProductList