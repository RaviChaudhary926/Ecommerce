import React from 'react'

const Slider = () => {
  return (
    <>
     <div id="banner" className="my-5">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/b1.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/images/b2.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/images/b3.png" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      
    </>
  )
}

export default Slider
