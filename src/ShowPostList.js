/*
import React, {Component } from 'react'
import {connect} from 'react-redux'

class ShowPostList extends Component{

    createListItems(){
        return this.props.AllPosts.map((post) => {
            return(
                <li key={post.id}>{post.title}</li>
            )
        })
    }

    render() {
        if(!this.props.AllPosts){
            return(
                <h2>Click the Button First ...</h2>
            )
        }
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return{
        AllPosts: state.allPosts
    }
}

export default connect(mapStateToProps)(ShowPostList)
*/

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchPostdata}  from './actions/FetchPostData'; // Assuming you have an action to fetch posts

const ShowPostList = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.allPosts);

  useEffect(() => {
    dispatch(fetchPostdata()); // Assuming you have an action creator to fetch posts
  }, [dispatch]);

  const createListItems = () => {
    return allPosts.map((post) => (
      <li key={post.id}>{post.title}</li>
    ));
  };

  if (!allPosts) {
    return <h2>Click the Button First ...</h2>;
  }

  return <ul>{createListItems()}</ul>;
};

export default ShowPostList;
