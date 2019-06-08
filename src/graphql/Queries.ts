import gql from 'graphql-tag'

export default class Queries {
  // Categories

  public categories () {
    return gql`query categories($page: Int!, $perPage: Int!) {
      categories(pagination: {page: $page, perPage: $perPage}) {
        totalPages
        totalEntries
        page
        perPage
        entries {
          id
          title
          slug
        }
      }
    }`
  }

  public category () {
    return gql`
      query category($id: ID!) {
        category(id: $id) {
          id
          title
          threads {
            id
            title
            slug
            insertedAt
            updatedAt
          }
        }
      }
    `
  }

  // Threads

  public threads () {
    return gql` query threads {
      threads {
        id
        category {
          id
          title
        }
        title
        slug
        insertedAt
        updatedAt
      }
    }`
  }

  public thread () {
    return gql`
      query thread($id: ID!) {
        thread(id: $id) {
          id
          title
          slug
          insertedAt
          updatedAt
          category {
            id
            title
          }
          posts {
            id
            body
            insertedAt
            updatedAt
            user {
              id
              name
              email
            }
          }
        }
      }
    `
  }

  // Posts

  public posts () {
    return gql`
      query posts {
        posts {
          id
          body
          thread {
            id
            title
          }
          user {
            id
            name
            email
          }
          insertedAt
          updatedAt
        }
      }
    `
  }

  public post () {
    return gql`
      query post($id: ID!) {
        post(id: $id) {
          id
          body
          thread {
            id
            title
            category {
              id
              title
            }
          }
          user {
            id
            name
            email
          }
          insertedAt
          updatedAt
        }
      }
    `
  }

}
