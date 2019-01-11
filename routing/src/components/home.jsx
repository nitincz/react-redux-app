import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    state ={
         posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(response => {
                this.setState({
                    posts: response.data.slice(0,10)
                });
             });
    }
    render() {

        const { posts } = this.state;
        const postsToRender = posts.map(
            post => {
                return (
                    <div className="post card" key={ post.id}>
                        <div className="card-content">
                            <Link to={ '/' + post.id }>
                            <span className="card-title">
                                {post.title}
                            </span>
                            </Link>
                            <p>{ post.body }</p>
                        </div>
                    </div>
                );
            }
        );
        return posts.length == 0 ? (
            <div className="center">Loading...</div>
        ) : ( postsToRender );
    }
}

export default Home