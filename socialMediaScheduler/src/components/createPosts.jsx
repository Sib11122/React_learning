import React from "react";
import './css/createPosts.css'
class createPosts extends React.Component{
    constructor(){
        super();
        this.state={
            title:""
        }
    }
    render(){
        return(
        <div className="create">
        <h3>Create new post</h3>
        <label for="title">Title</label>
        <input type="text" placeholder="Enter the post title" id="title"></input>
        <label for="content">Content</label>
        <textarea placeholder="What's on your mind" id="content" rows={7}></textarea>
        <label for="image">Image(optional)</label>
        <input type="file" id="image"></input>
        <label for="schedule">Schedule date and time</label>
        <span>
            <input type="date" id="date"></input>
        <input type="time" id="datet"></input>
        </span>
        <button >Schedule Post</button>
        </div>
        )
    };
}
export default createPosts;