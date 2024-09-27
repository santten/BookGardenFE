import React, { useRef, useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Icon } from '@iconify/react';

// props
// items: array of numbers (bookIDs)
// title: string (product row title) - defaults to none if not provided 

const ProductRow = (props) => {
    const titleContent = props.title || "";
    
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const scrollRight = () => {
        // scroll right when clicking the button
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: "smooth",
            });
        }
    }

    const scrollLeft = () => {
        // scroll right when clicking the button
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -400,
                behavior: "smooth",
            });
        }
    }

    const updateScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
        }
    }

    useEffect(() => {
        updateScrollButtons();
        window.addEventListener('resize', updateScrollButtons);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.addEventListener('scroll', updateScrollButtons);
        }

        return () => {
            window.removeEventListener('resize', updateScrollButtons);
            if (scrollContainerRef.current) {
                scrollContainerRef.current.removeEventListener('scroll', updateScrollButtons);
            }
        };
    }, []);

    // check that items is an array + check that it isn't empty
    if (props.items.constructor !== Array || props.items.length === 0) {
        return <></>;
    } else {
        return (
            <div>
                <h2 className="font-title text-[xx-large] my-[1rem]">{titleContent}</h2>
                <div className="relative">
                    {canScrollLeft && (
                        <button className="z-99 absolute left-0 top-0 bg-gradient-to-r from-white from-20% w-[4rem] h-[100%]" onClick={scrollLeft}>
                            <Icon icon="weui:arrow-filled" flip="horizontal" height="3rem" className="hover:text-primary mr-[4rem]" />
                        </button>
                    )}
                    {canScrollRight && (
                        <button className="z-99 absolute right-0 top-0 bg-gradient-to-l from-white from-20% w-[4rem] h-[100%]" onClick={scrollRight}>
                            <Icon icon="weui:arrow-filled" height="3rem" className="hover:text-primary ml-[4rem]" />
                        </button>
                    )}
                    <div ref={scrollContainerRef} className="flex flex-row gap-[1.5rem] pb-[1rem] h-[100%] overflow-hidden">
                        {props.items.map((book) => {
                            return <ProductCard key={"card-" + book._id} item={book} />;
                        })}
                    </div>

                </div>
            </div>
        );
    }
}

export default ProductRow;