import React from 'react'
import { connect } from 'react-redux'
import { updatePost, addPost } from '../reducers/posts'
import {
  Grid,
  GridColumn,
  Form,
  Dropdown
} from 'semantic-ui-react'

class PostForm extends React.Component {
  intialState= {
    user: '',
    location: '',
    time: '',
    post: ''
  }

  state = {...this.intialState}

  static getDerivedStateFromProps(props, state) {
    if (props.id !== state.id)
      return {...props}
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { closeForm, dispatch } = this.props
    const func = this.state.id ? updatePost : addPost
    dispatch(func(this.state))
    closeForm()
  }

  userOptions = () => {
    const { users } = this.props
    return users.map(u => ({ key: u, text: u, value: u }))
  }

  render() {
    const { user, location, time, post } = this.state
    return (
      <Grid columns={3} contentAlign="center" textAlign="center">
        <Grid.Column></Grid.Column>
          <GridColumn>
            <Form onSubmit={this.handleSubmit}>
              <Dropdown
                options={this.userOptions()}
                required
                value={user}
                onChange={(_, {value}) => this.setState({ category: value })}
                label="User"
              />
              <Form.Input
                name="location"
                required
                value={location}
                onChange={this.handleChange}
                label="Location"
              />
              <Form.Input
                name="time"
                required
                value={time}
                onChange={this.handleChange}
                label="Time"
              />
              <Form.Input
                name="post"
                required
                value={post}
                onChange={this.handleChange}
                label="Post"
              />
              <Form.Button>SAVE</Form.Button>
            </Form>
          </GridColumn>
          <GridColumn></GridColumn>
        </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  const { posts } = state
  const users = [...new Set(posts.map( p => p.users))]
  return {
    users
  }
}

export default connect(mapStateToProps)(PostForm)