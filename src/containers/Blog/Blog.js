import React, { Component } from 'react';
//import axios from 'axios';
/* import Posts from './Posts/Posts'; */
import './Blog.css';
import { NavLink, Route, Switch,Redirect } from 'react-router-dom';
import Posts from './Posts/Posts';
/* import NewPost from './NewPost/NewPost'; */
import asyncComponent from '../../hoc/asyncComponent';


const AsyncnewPost = asyncComponent(() =>  {
    return import('./NewPost/NewPost');
});


class Blog extends Component {
    state = {
        auth: true
    }

    render () {

        return (
            <div className="Postss" >

                <header>
                     <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact
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
                
                {this.state.auth ? <Route path=" /new-post" exact component={AsyncnewPost} /> :null}
                <Route path="/posts" component={Posts} />
                <Route render={()=> <h1>Not Found :( </h1> }  />
                {/* <Route path="/" component={Posts} /> */} 
                {/* <Redirect from="/" to="/posts/" />   */}
                </Switch>   
 
            </div>
        );
    }
}

export default Blog;