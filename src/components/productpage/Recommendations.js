import { useEffect, useState } from "react"
import ProductRow from "../ProductRow"
import useLoadingComponent from "../../hooks/useLoadingComponent"

const Recommendations = (props) => {
    const apiurl = process.env.REACT_APP_API_URL
    const genres = (props.bookinfo.genre).split(', ')

    const before_loading = "status: loading"
    const [recommendations, setRecommendations] = useState(before_loading)
    const isLoading = recommendations === before_loading;

    useEffect(() => {
        const fetchRecommendations = async () => {
            let allRecommendations = [];
            try {
                genres.forEach((item) => {
                    fetch((apiurl + `/api/books/genre/` + item), {
                        method: "GET"
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            allRecommendations.push(...data)
                            const uniqueRecommendations = Array.from(new Set(allRecommendations.map(item => item._id)))
                                .map(id => allRecommendations.find(item => item._id === id))
                                .filter(item => props.bookinfo._id !== item._id);

                            setRecommendations(uniqueRecommendations);
                        })
                        .catch((error) => console.error(error));
                })
            }
            catch (error) {
                console.error(error)
            }

        }
        fetchRecommendations();
    }, [])

    return (
        <div className="containerBig">
            {useLoadingComponent(isLoading, "Loading book information...",
                ProductRow, { items: recommendations, title: "More Like This" })}
        </div>
    )
}

export default Recommendations
