import React from 'react';

const UseCaseCard = (props) => {
  return (
    <div className="usecase-card">
      <h4>{props.title}</h4>
      <hr></hr>
      <h6>
          {props.description}
      </h6>
    </div>
  );
};
export default UseCaseCard;