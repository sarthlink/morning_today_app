import React, { useState } from 'react'
import axios from 'axios'

function News2() {

  const [news, setNews] = useState([])

  const fetchNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=6004b8fcb1604003b4ead57854e8d2c2")
      .then((response) => {
        console.log(response);
        setNews(response.data.articles)
      })
  }
  return (
    <div>
      <div className="container my-3">
        <div className="row">
          <div class="row justify-content-center">           
           <div className="col-2">
              <button className='btn btn-primary' onClick={fetchNews} >FetchNews</button>
          </div>
        </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {
            news.map((value,index) => {
              return (
                <div key={index} className="col-4 ">
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

export default News2;