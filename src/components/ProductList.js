import Filtering from './Filtering'
import ProductCard from './ProductCard'

import React from 'react'

// not real data, but copied from the models

let bookArray = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        rating: 5,
        year: 2024,
        publisher: "Charles Scribner's Sons",
        ISBN: "9780743273565",
        binding: "Hardback",
        pages: 218,
        language: "English"
    },
    {
        id: 2,
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        genre: "Classic",
        rating: 3,
        year: 2024,
        publisher: "Example Publisher",
        ISBN: "1234567890123",
        binding: "Hardback",
        pages: 864,
        language: "English"
    },
    {
        id: 2,
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        genre: "Classic",
        rating: 3,
        year: 2024,
        publisher: "Example Publisher",
        ISBN: "1234567890123",
        binding: "Hardback",
        pages: 864,
        language: "English"
    },
    {
        id: 2,
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        genre: "Classic",
        rating: 3,
        year: 2024,
        publisher: "Example Publisher",
        ISBN: "1234567890123",
        binding: "Hardback",
        pages: 864,
        language: "English"
    },
    {
        id: 2,
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        genre: "Classic",
        rating: 3,
        year: 2024,
        publisher: "Example Publisher",
        ISBN: "1234567890123",
        binding: "Hardback",
        pages: 864,
        language: "English"
    },
    {
        id: 2,
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        genre: "Classic",
        rating: 2,
        year: 2024,
        publisher: "Example Publisher",
        ISBN: "1234567890123",
        binding: "Hardback",
        pages: 864,
        language: "English"
    }
];

function ProductList({ category }) {
    // remove mb 100px when pagination is ok  

    return (
        <div className="grid grid-cols-[20%_auto] gap-[4rem] mb-[100px] max-w-[90vw] ml-auto mr-auto">
            <div className="bg-accent">
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