import React from 'react'

const Card = (props) => {

  return (
    <div>
      <div className="parent">
        <div className="card">
          <img
            src={props.img}
            alt=""
          />
          <h2>{props.name}, {props.age}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            accusamus assumenda vel sapiente fuga sint, velit laboriosam
            cupiditate incidunt neque deserunt mollitia ea voluptatem
            laudantium.
          </p>
          <button>View Profile</button>
        </div>
      </div>
    </div>
  )
}

export default Card