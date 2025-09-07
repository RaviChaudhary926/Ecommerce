import React from 'react'

const Card = (props) => {
  return (
    <>

      <div className="card m-3 shadow-sm rounded-3 position-relative overflow-hidden">
        <div className="image">
        <a href={`/productdetails/${props.data.id}`} className=''>
        <img src={props.data.thumbnail} className=""  alt="item1" />
            </a>
            </div>
        <small className="position-absolute badge bg-danger" style={{ top: '15px', right: '-3px' }}>{props.data.tags[1]}</small>
        <div className="card-body px-2 py-1">
          <small className="text-secondary">{props.data.category}</small>
          <h4 className="card-title" title={props.data.title}>{props.data.title.slice(0, 17)}
            {
              props.data.title.length > 15 ? '...' : ''
            }
          </h4>
          <div className="d-md-flex justify-content-between align-items-center">
            <p className="card-text text-warning fw-bold">${props.data.price}</p>
            <a href={`/productdetails/${props.data.id}`} className="px-2 btn text-danger">view More <i className="bi bi-arrow-right text-info"></i></a>
          </div>
          {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
        </div>
      </div>


    </>
  )
}

export default Card
