import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  const posts = [
    {
      id:1,
      title:"my trip",
      description:"when fishing",
      image:"https://images.unsplash.com/photo-1572123866325-6f15f82c993d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
    },
    {
      id:2,
      title:"my day",
      description:"when day",
      image:"https://images.unsplash.com/photo-1588746853740-bd35aad10bfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      id:3,
      title:"bagel",
      description:"when eating",
      image:"https://images.unsplash.com/photo-1627308595260-6fad84c40413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      id:4,
      title:"duck",
      description:"animal",
      image:"https://images.unsplash.com/photo-1632877943287-64636ca57b7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      id:5,
      title:"plant",
      description:"when gardening",
      image:"https://plus.unsplash.com/premium_photo-1661757545105-63edc4987957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    
  ]
  return (
    <div classname="home">
      <div classname="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="image">
              <img src={post.image} alt="" />
            </div>
            <div className="content">
              <Link to={'/post/${post.id}'}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
 export default Home