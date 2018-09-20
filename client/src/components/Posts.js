import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPosts } from '../reducers/posts'
import {
  Container,
  Feed,
  Header, 
  Icon,
  Button,
  Grid,
  GridColumn,
  Divider,
  Dropdown
} from 'semantic-ui-react'

class Posts extends React.Component {
  state = { user: ''}


  posts = () => {
    const { posts } = this.props
    const { user } = this.state

    let visible = posts

    if (user)
      visible = posts.filter( p => p.user === user )

      return visible.map( post => {
        return (
        <Grid columns={3} contentAlign="center" textAlign="center">
          <Grid.Column></Grid.Column>
            <GridColumn>
              <Feed key={post.id}>
                <Feed.Content>
                  <Feed.Summary>
                  <Divider />
                    <Feed.User as="h2">
                      {post.user}
                      <Feed.Meta as="h4">
                        {post.location}
                      </Feed.Meta>
                    </Feed.User>
                    <Feed.Meta>
                        <span>
                          {post.post}
                        </span>
                    </Feed.Meta>
                  </Feed.Summary>
                  <br />
                  <Feed.Extra>
                    <Button color="blue" size="mini" compact basic>
                      <Link to={`posts/${post.id}`}>
                        View Post
                      </Link>
                    </Button>
                    <Feed.Meta>
                    <br />
                      <h5>Posted on...</h5>
                      {post.time}
                    </Feed.Meta>
                  </Feed.Extra>
                </Feed.Content>
              </Feed>
            </GridColumn>
          <Grid.Column></Grid.Column>
        </Grid>
      )
    }
  )
}

userOptions = () => {
  return this.props.users.map( (u, i) => {return { key: i, text: u, value: u} })
}

  render() {
    let { user } = this.state
    return (
      <Container>
          <Header as="h1" icon textAlign="center" color="blue">
            <Icon name='users' circular />
            <Header.Content>FRIENDS POSTS</Header.Content>
          </Header>
          <Dropdown
            placeholder="Search Users"
            fluid
            selection
            options={this.userOptions()}
            onChange={ (e, data) => this.setState({user: data.value }) }
            value={user}
          />
          {user && <Button
                      fluid
                      basic
                      compact
                      color="blue"
                      onClick={ () => this.setState({ user: ''}) }>
                      RESET USER: {user}
                    </Button>
          }
          <Divider />
          <Feed>
            {this.posts()}
          </Feed>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const posts = state.posts
  const users = [...new Set(posts.map( p => p.user ))]
  return {posts, users}
}

export default connect(mapStateToProps)(Posts)