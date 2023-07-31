/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFollower = /* GraphQL */ `
  mutation CreateFollower(
    $input: CreateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    createFollower(input: $input, condition: $condition) {
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
export const updateFollower = /* GraphQL */ `
  mutation UpdateFollower(
    $input: UpdateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    updateFollower(input: $input, condition: $condition) {
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
export const deleteFollower = /* GraphQL */ `
  mutation DeleteFollower(
    $input: DeleteFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    deleteFollower(input: $input, condition: $condition) {
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
export const createFollowing = /* GraphQL */ `
  mutation CreateFollowing(
    $input: CreateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    createFollowing(input: $input, condition: $condition) {
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
export const updateFollowing = /* GraphQL */ `
  mutation UpdateFollowing(
    $input: UpdateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    updateFollowing(input: $input, condition: $condition) {
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
export const deleteFollowing = /* GraphQL */ `
  mutation DeleteFollowing(
    $input: DeleteFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    deleteFollowing(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
