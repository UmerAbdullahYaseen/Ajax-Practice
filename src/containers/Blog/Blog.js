import React, { Component } from 'react';
//import axios from 'axios';
/* import Posts from './Posts/Posts'; */
import './Blog.css';
import { Route } from 'react-router-dom';



class Blog extends Component {

    render () {

        return (
            <div className="Postss" >

                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Posts</a></li>
                        </ul>
                    </nav>
                </header>
               
                  <Route path="/" exact render={() =><h1>Home </h1>  }   />
                  <Route path="/" render={() =><h1>Home 2 </h1>  }   />
                {/* <section>
                    <FullPost id={this.state.selectedPostid} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;