import React, { Component } from 'react';
//import axios from 'axios';
/* import Posts from './Posts/Posts'; */
import './Blog.css';
import { NavLink, Route, Switch } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

    render () {

        return (
            <div className="Postss" >

                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact
                            activeClassName="my-active"
                            activeStyle={{
                                color: '#fa923f',
                                textdecoration: 'underline'

                            }}
                            >Posts</NavLink></li>

                            <li><NavLink to= {{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true',
                                

                            }}activeClassName="my-active"
                            activeStyle={{
                                color: '#fa923f',
                                textdecoration: 'underline'

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
                <Switch>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
                <Route path="/:id" exact component={FullPost} />
                </Switch>

            </div>
        );
    }
}

export default Blog;