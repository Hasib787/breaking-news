import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {

    const [articles, setArticles] = useState([]);

    useEffect( () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3bb8704cfe194767b1653a9999abd6a3';
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles))
            .catch(err =>console.log(err))
    }, [])
    return (
        <div>
            <h2>Top Headlines:{articles.length} </h2>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;