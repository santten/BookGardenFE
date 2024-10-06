import React, { useState, useEffect } from "react";

function BrowseProducts() {
    const apiurl = process.env.REACT_APP_API_URL
    const [books, setBooks] = useState("Loading products...")

    useEffect(() => {
        fetch(apiurl + "/api/books", {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setBooks(data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            {"ok"}
        </div>
    )
}

export default BrowseProducts;