import React, { Component } from 'react';
import axios from 'axios';


class Post extends Component {

    state = {
        post: null
    }

    // we automatically get props in class components, while in function based components, they need to be a parameter
    componentDidMount() {
        console.log(this.props);
        // figure out the route param here and then fetch data
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
             .then(response => {
                 this.setState({
                     post: response.data
                 });
             })
    }
    render() {

        const post = this.state.post ? (
            <div className="post">
                <span className="card-title">
                   { this.state.post.title }
                </span>
                <p>
                    { this.state.post.body }
                </p>
                
            </div>
        ):(
            <div>
                <p>Failed to load the post!</p>
            </div>
        );
        return (
            <div className="center">
                { post }</div>
        );
    }
}

export default Post;