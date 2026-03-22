
const Card = (props) => {
  return (
    <div className="card">
        <div className="top">
          <img
            src={props.logo}
            alt="./logo/img"
          />
          <button>Save <i className="ri-bookmark-line" style={{paddingLeft: "10px"}}></i></button>
        </div>
        <div className="center">
          <h2>{props.company} <span>{props.post}</span></h2>
          <h3>{props.role}</h3>
          <button>{props.type}</button>
          <button>{props.level}</button>
        </div>
        <hr/>
        <div className="bottom">
          <div>
            <h3>{props.salary}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card