import React from 'react';

export default ({ msg, color, format }) => (
  <div className={`my-loader ${color} ${format}`}>
    <i className='fa fa-circle-o-notch fa-spin'></i>
    <p>{msg}</p>
  </div>
);
