import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Text = () => {
  const [value, setValue] = useState('');
  console.log(value)
  return (
    <div className='text'>
      <div className="content">
        <input type="text" />
        <div className="editor">
          <ReactQuill theme="snow" value={value} onChange={setValue} />    
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <input type="file" id="file" style={{display:"none"}} />
          <label htmlFor="file">Choose Image</label>
          <br />
          <button>Upload Post</button>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" name='category'  id="food" value="food"/>
          <label htmlFor="food">Food</label>
          <input type="radio" name='category'  id="travel" value="travel"/>
          <label htmlFor="travel">Travel</label>
          <input type="radio" name='category'  id="lifestyle" value="lifestyle"/>
          <label htmlFor="lifestyle">Lifestyle</label>
          <input type="radio" name='category'  id="photography" value="photography"/>
          <label htmlFor="photography">Photography</label>
          <input type="radio" name='category'  id="personal" value="personal"/>
          <label htmlFor="personal">Personal</label>
          <input type="radio" name='category'  id="music" value="music"/>
          <label htmlFor="music">Music</label>
        </div>
      </div>
    </div>
  )
}

export default Text