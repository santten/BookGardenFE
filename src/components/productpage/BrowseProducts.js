import React, { useState, useEffect } from "react";

function BrowseProducts() {
    
    const apiurl = "http://localhost:4000/api/books"
    const [books, setBooks] = useState("Loading products...")

    useEffect(() => {
        fetch(apiurl, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setBooks(data);
                console.log(data, books);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            {"ok"}
        </div>
    )
}

export default BrowseProducts;