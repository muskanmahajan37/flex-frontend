import React from 'react';

export default ({ msg, format }) => (
  <div className={`my-loader ${format}`}>
    <i className='fa fa-circle-o-notch fa-spin'></i>
    <p>{msg}</p>
  </div>
);
