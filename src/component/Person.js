import React from 'react';

const Person = (props) => {
    return (
        <div className='person'>
          <h1 className='btn btn-danger'>{props.name}</h1>
          <h2>profession:{props.job}</h2>
      </div>
    );
};

export default Person;