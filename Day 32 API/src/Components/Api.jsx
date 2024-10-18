import React, { useEffect, useState } from 'react';

export default function Api() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchApi();
    }, []);

    const fetchApi = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const res = await response.json();
        console.log(res);
        setData(res);
    };

    return (
        <div className="container">
            {data &&
                data.map((e, i) => {
                    return (
                        <div key={i} className="product-card">
                            <ul>
                                <li>{e.title}</li>
                                <li>${e.price}</li>
                                <img src={e.image} alt={e.title} />
                            </ul>
                            <div className="add-to-cart">Add to Cart</div>
                        </div>
                    );
                })}
        </div>
    );
}
