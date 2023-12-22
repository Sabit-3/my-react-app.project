import React from 'react';
import './Form.css';
// import {myContext} from '../../App'

const Form = () => {
  // const label = useContext(myContext)

  return (
    <div className='Form'>
      <form className='contact-form'>
        <label>Email</label>
        <input placeholder='Enter your email' />
        <label>Name</label>
        <input placeholder='Enter your name' />
        <label>Query</label>
        <textarea placeholder='Enter your query' defaultValue={''}></textarea>
        {/* or use value prop: */}
        {/* <textarea placeholder='Enter your query' value={''}></textarea> */}
      </form>
    </div>
  );
};

export default Form;
