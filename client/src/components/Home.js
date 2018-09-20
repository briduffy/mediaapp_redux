import React from 'react'
import { Link } from 'react-router-dom'
import {
  Header,
  Container,
  Button,
  Icon
} from 'semantic-ui-react'

const Home = () => (
  <Container>
    <Header textAlign="center" as="h2">
      Welcome to
      <br />
      FRIENDS POSTS.
    </Header>
    <Link to="/posts">
      <Button animated fluid basic color='olive'> 
        <Button.Content visible>FRIENDS POSTS</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
      </Button>
    </Link>
  </Container>
)

export default Home