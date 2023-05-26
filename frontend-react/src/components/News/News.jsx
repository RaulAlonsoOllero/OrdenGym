import React, { useState , useEffect} from 'react';
import {client,urlFor} from '../../client'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './News.css'

const News = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
     const query = '*[_type == "news"]'
    
     client.fetch(query)
      .then((data) => {setNews(data)})
    }, [])
    
  return (
    <>
    <div className='news-header'>
            <span className='stroke-text'>Las ultimas</span> 
            <span >Noticias</span> 
            <span className='stroke-text'>de nuestro club</span>
        </div>
     <div className='allContainer'>
      {news.map((news)=>(
        <Card className='card'>
        <Card.Img src={urlFor(news.image && news.image[0])}
            width={250}
            height={250}
            className="news-image"
            alt={news.slurge} />
        <Card.Body className='card-body'>
          <Card.Title className='card_title'>{news.name}</Card.Title>
          <Card.Text className='card_text'>
          {news.description}
          </Card.Text>
          <form action={news.link} method="get" target="_blank">
          <button type="submit" className="btn-news">Link a la Noticia</button>
          </form>
         
        </Card.Body>
      </Card>
     ))}
     </div>
    </>
  )
}

export default News