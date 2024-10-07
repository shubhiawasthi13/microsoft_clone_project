import React from 'react'

function Card({cardimg, title, text, cardbtn}) {
  return (
    <>
    <div className="card custom_card" style={{width:"18rem", minHeight:"27rem"}}>
      <img src={cardimg} className="card-img-top" alt="card image"/>
  <div className="card-body">
    <h5 className="card-title card_title">{title}</h5>
    <p className="card-text">{text}</p>
    <button className="btn btn-primary card_btn fw-bold">{cardbtn}</button>
 
  </div>
</div>
    </>

  )
}

export default Card
