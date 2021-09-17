import React, { Component } from 'react';
//import axios from 'axios';
/* import Posts from './Posts/Posts'; */
import './Blog.css';
import { NavLink, Route } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';


class Blog extends Component {

    render () {

        return (
            <div className="Postss" >

                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to= {{
                                pathname: '/new-post'
                            }}>New Posts</NavLink></li>
                        </ul>
                    </nav>
                </header>
               
                  {/* <Route path="/" exact render={() =><h1>Home </h1>  }   />
                  <Route path="/" render={() =><h1>Home 2 </h1>  }   /> */}
                {/* <section>
                    <FullPost id={this.state.selectedPostid} />
                </section>
                <section>
                    <NewPost />
                </section> */}

                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />

            </div>
        );
    }
}

export default Blog;