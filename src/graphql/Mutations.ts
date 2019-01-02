import gql from 'graphql-tag'

export default class Mutations {
  // Users
  authenticate () {
    return gql`
      mutation authenticate($email: String!, $password: String!) {
        authenticate(email: $email, password: $password)
      }
    `
  }
  createUser () {
    return gql`
      mutation createUser($name: String!, $username: String!, $email: String!, $password: String!) {
        createUser(
          name: $name,
          username: $username,
          email: $email,
          password: $password
        ) {
          id
          username
          email
        }
      }
    `
  }

  // Categories
  createCategory () {
    return gql`
      mutation createCategory($title: String!) {
        createCategory(title: $title) {
          id
          title
        }
      }
    `
  }

  // Threads
  createThread () {
    return gql`
      mutation createThread($title: String!, $id: ID!, $body: String!) {
        createThread(title: $title, categoryId: $id, body: $body) {
          id
          title
        }
      }
    `
  }

  // Posts
  createPost () {
    return gql`
      mutation ccreatePost($body: String!, $id: ID!) {
        createPost(body: $body, threadId: $id) {
          id
        }
      }
    `
  }

}
