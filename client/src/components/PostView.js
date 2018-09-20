import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Divider,
  Header,
  Grid,
  GridColumn,
  Message, 
  StatisticLabel,
  FeedUser} from 'semantic-ui-react'

const PostView = ({ post = {} }) => (

  <Grid columns={3}>
    <Grid.Column></Grid.Column>
    <GridColumn textAlign="center">
    <Link to="/posts">ALL POSTS</Link>
      <div>
        <p>{post.post}</p>
      </div>
    </GridColumn>
    <GridColumn></GridColumn>
  </Grid>
)

const mapStateToProps = (state, props) => {
  return { post: state.posts.find(p => p.id === parseInt(props.match.params.id)) }
}

export default connect(mapStateToProps)(PostView)