/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFollower = /* GraphQL */ `
  query GetFollower($id: ID!) {
    getFollower(id: $id) {
      id
      userID
      followerID
      user {
        id
        name
        followers {
          nextToken
          __typename
        }
        following {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      follower {
        id
        name
        followers {
          nextToken
          __typename
        }
        following {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userFollowersId
      __typename
    }
  }
`;
export const listFollowers = /* GraphQL */ `
  query ListFollowers(
    $filter: ModelFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        followerID
        user {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        follower {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        userFollowersId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFollowing = /* GraphQL */ `
  query GetFollowing($id: ID!) {
    getFollowing(id: $id) {
      id
      userID
      followerID
      user {
        id
        name
        followers {
          nextToken
          __typename
        }
        following {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      follower {
        id
        name
        followers {
          nextToken
          __typename
        }
        following {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userFollowingId
      __typename
    }
  }
`;
export const listFollowings = /* GraphQL */ `
  query ListFollowings(
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        followerID
        user {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        follower {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        userFollowingId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      name
      content
      username
      coverImage
      comments {
        items {
          id
          message
          postID
          createdAt
          updatedAt
          createdBy
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        content
        username
        coverImage
        comments {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postsByUsername = /* GraphQL */ `
  query PostsByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        content
        username
        coverImage
        comments {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      message
      post {
        id
        name
        content
        username
        coverImage
        comments {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      postID
      createdAt
      updatedAt
      createdBy
      __typename
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        post {
          id
          name
          content
          username
          coverImage
          createdAt
          updatedAt
          __typename
        }
        postID
        createdAt
        updatedAt
        createdBy
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const commentsByPostID = /* GraphQL */ `
  query CommentsByPostID(
    $postID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByPostID(
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        message
        post {
          id
          name
          content
          username
          coverImage
          createdAt
          updatedAt
          __typename
        }
        postID
        createdAt
        updatedAt
        createdBy
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      followers {
        items {
          id
          userID
          followerID
          createdAt
          updatedAt
          userFollowersId
          __typename
        }
        nextToken
        __typename
      }
      following {
        items {
          id
          userID
          followerID
          createdAt
          updatedAt
          userFollowingId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        followers {
          nextToken
          __typename
        }
        following {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
