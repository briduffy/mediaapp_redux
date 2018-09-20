import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PostForm from './PostForm'
import {
  Divider,
  Header,
  Grid,
  GridColumn,
  Container,
  Message } from 'semantic-ui-react'

const PostView = ({ post = {} }) => (
  <Container>
    <Link to="/posts">ALL POSTS</Link>
      <div>
        <p>{post.text}</p>
      </div>
  </Container>
)

const mapStateToProps = (state, props) => {
  return { post: state.posts.find(p => p.id === parseInt(props.match.params.id)) }
}

export default connect(mapStateToProps)(PostView)