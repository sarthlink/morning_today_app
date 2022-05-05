import React, { useState } from 'react'
import axios from 'axios'
import './News3.css'
function News3(props) {

  const [news, setNews] = useState([])

  var country = props.country;
  axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=6004b8fcb1604003b4ead57854e8d2c2`)
    .then((response) => {
    //   console.log(response);
      setNews(response.data.articles)
  })
  return (
    <div>
      <div className="container">
        <div className="row">
          {
            news.map((value,index) => {
              while(index<6)
              return (
                <div key={index} className="col-4">
                  <div className="card glassMorphism" style={{ height: "22rem", margin:"10px" }}>
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}

export default News3;