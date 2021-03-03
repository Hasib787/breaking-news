import React from 'react';
import {Button, Card, Image} from 'react-bootstrap';

const News = (props) => {
    const { title, urlToImage, description } = props.article;
    return (
            <Card className="mt-5">
                <Card.Header>Top Head Lins</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Image Style="height:300px" src={urlToImage} thumbnail />
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
    );
};

export default News;