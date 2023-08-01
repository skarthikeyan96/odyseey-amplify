/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFollower = /* GraphQL */ `
  subscription OnCreateFollower($filter: ModelSubscriptionFollowerFilterInput) {
    onCreateFollower(filter: $filter) {
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
`
export const onUpdateFollower = /* GraphQL */ `
  subscription OnUpdateFollower($filter: ModelSubscriptionFollowerFilterInput) {
    onUpdateFollower(filter: $filter) {
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
`
export const onDeleteFollower = /* GraphQL */ `
  subscription OnDeleteFollower($filter: ModelSubscriptionFollowerFilterInput) {
    onDeleteFollower(filter: $filter) {
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
`
export const onCreateFollowing = /* GraphQL */ `
  subscription OnCreateFollowing(
    $filter: ModelSubscriptionFollowingFilterInput
  ) {
    onCreateFollowing(filter: $filter) {
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
`
export const onUpdateFollowing = /* GraphQL */ `
  subscription OnUpdateFollowing(
    $filter: ModelSubscriptionFollowingFilterInput
  ) {
    onUpdateFollowing(filter: $filter) {
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
`
export const onDeleteFollowing = /* GraphQL */ `
  subscription OnDeleteFollowing(
    $filter: ModelSubscriptionFollowingFilterInput
  ) {
    onDeleteFollowing(filter: $filter) {
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
`
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $username: String
  ) {
    onCreatePost(filter: $filter, username: $username) {
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
`
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $username: String
  ) {
    onUpdatePost(filter: $filter, username: $username) {
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
`
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $username: String
  ) {
    onDeletePost(filter: $filter, username: $username) {
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
`
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $createdBy: String
  ) {
    onCreateComment(filter: $filter, createdBy: $createdBy) {
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
`
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $createdBy: String
  ) {
    onUpdateComment(filter: $filter, createdBy: $createdBy) {
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
`
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment(
    $filter: ModelSubscriptionCommentFilterInput
    $createdBy: String
  ) {
    onDeleteComment(filter: $filter, createdBy: $createdBy) {
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
`
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onCreateUser(filter: $filter, id: $id) {
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
`
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onUpdateUser(filter: $filter, id: $id) {
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
`
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onDeleteUser(filter: $filter, id: $id) {
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
`
