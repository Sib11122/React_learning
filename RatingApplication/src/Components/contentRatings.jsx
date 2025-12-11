import React from "react";
import './componentRatings.css';

class contentRatings extends React.Component {

     constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1
        }));
      },

      handleDislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1
        }));
      }
  }
    }
    render() {
        return (
            <div className="content-rating">
                <p>
                    this is the text
                </p>
                <div className="rating-buttons">
                    <button className="likeButton" onClick={this.state.handleLike}>Like({this.state.likes})</button>
                    <button className="dislikeButton" onClick={this.state.handleDislike}>Dislike({this.state.dislikes})</button>
                </div>
            </div>
        );
    }
}
export default contentRatings;