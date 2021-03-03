import React, { useEffect, useState } from 'react';

const TopHeadline = () => {

    const [articles, setArticles] = useState([]);

    useEffect( () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3bb8704cfe194767b1653a9999abd6a3';
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h2>Top Headlines:{articles.length} </h2>
        </div>
    );
};

export default TopHeadline;