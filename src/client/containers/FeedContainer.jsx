import React from 'react';




const FeedContainer = (props) => {

  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

//makes state stored in redux store available to our mapping-to-props functions
export default FeedContainer;
