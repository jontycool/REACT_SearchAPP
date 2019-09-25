import React from 'react';

const Searchbox = ({ searchField, searchChange }) => {
  return (
    <div>
      <input
        className='tc ma2 pa3 br4 b--green bg-lightest-blue'
        placeholder='Search by Name'
        type='search'
        onChange={searchChange}
      />
      {/* <input
        className='tc ma2 pa3 br4 b--green bg-lightest-blue'
        placeholder='Search by Email'
        type='search'
        onChange={searchChangeEmail}
      /> */}
    </div>
  );
}

export default Searchbox;