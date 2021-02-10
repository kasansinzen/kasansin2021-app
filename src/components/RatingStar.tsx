import React from 'react'

const RatingStar: React.FC<any> = props => {
  let { score = 0 } = props;
  let starItems = [];
  for(let i = 1; i <= 5; i++){
    if(i <= score){
      starItems.push(<i key={i} className="fas fa-star"></i>);
    }else{
      starItems.push(<i key={i} className="far fa-star"></i>);
    }
  }
  return (
    <div className="RatingStart">
      {starItems.map((icon)=> icon)}
    </div>
    );
}

export default RatingStar;