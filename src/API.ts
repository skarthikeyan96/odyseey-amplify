/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFollowerInput = {
  id?: string | null,
  userID: string,
  followerID: string,
  userFollowersId?: string | null,
};

export type ModelFollowerConditionInput = {
  userID?: ModelIDInput | null,
  followerID?: ModelIDInput | null,
  and?: Array< ModelFollowerConditionInput | null > | null,
  or?: Array< ModelFollowerConditionInput | null > | null,
  not?: ModelFollowerConditionInput | null,
  userFollowersId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Follower = {
  __typename: "Follower",
  id: string,
  userID: string,
  followerID: string,
  user?: User | null,
  follower?: User | null,
  createdAt: string,
  updatedAt: string,
  userFollowersId?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  followers?: ModelFollowerConnection | null,
  following?: ModelFollowingConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelFollowerConnection = {
  __typename: "ModelFollowerConnection",
  items:  Array<Follower | null >,
  nextToken?: string | null,
};

export type ModelFollowingConnection = {
  __typename: "ModelFollowingConnection",
  items:  Array<Following | null >,
  nextToken?: string | null,
};

export type Following = {
  __typename: "Following",
  id: string,
  userID: string,
  followerID: string,
  user?: User | null,
  follower?: User | null,
  createdAt: string,
  updatedAt: string,
  userFollowingId?: string | null,
};

export type UpdateFollowerInput = {
  id: string,
  userID?: string | null,
  followerID?: string | null,
  userFollowersId?: string | null,
};

export type DeleteFollowerInput = {
  id: string,
};

export type CreateFollowingInput = {
  id?: string | null,
  userID: string,
  followerID: string,
  userFollowingId?: string | null,
};

export type ModelFollowingConditionInput = {
  userID?: ModelIDInput | null,
  followerID?: ModelIDInput | null,
  and?: Array< ModelFollowingConditionInput | null > | null,
  or?: Array< ModelFollowingConditionInput | null > | null,
  not?: ModelFollowingConditionInput | null,
  userFollowingId?: ModelIDInput | null,
};

export type UpdateFollowingInput = {
  id: string,
  userID?: string | null,
  followerID?: string | null,
  userFollowingId?: string | null,
};

export type DeleteFollowingInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  name: string,
  content: string,
  username?: string | null,
  coverImage?: string | null,
};

export type ModelPostConditionInput = {
  name?: ModelStringInput | null,
  content?: ModelStringInput | null,
  username?: ModelStringInput | null,
  coverImage?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  name: string,
  content: string,
  username?: string | null,
  coverImage?: string | null,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  message?: string | null,
  post?: Post | null,
  postID?: string | null,
  createdAt: string,
  updatedAt: string,
  createdBy?: string | null,
};

export type UpdatePostInput = {
  id: string,
  name?: string | null,
  content?: string | null,
  username?: string | null,
  coverImage?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  message?: string | null,
  postID?: string | null,
};

export type ModelCommentConditionInput = {
  message?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  message?: string | null,
  postID?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelFollowerFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  followerID?: ModelIDInput | null,
  and?: Array< ModelFollowerFilterInput | null > | null,
  or?: Array< ModelFollowerFilterInput | null > | null,
  not?: ModelFollowerFilterInput | null,
  userFollowersId?: ModelIDInput | null,
};

export type ModelFollowingFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  followerID?: ModelIDInput | null,
  and?: Array< ModelFollowingFilterInput | null > | null,
  or?: Array< ModelFollowingFilterInput | null > | null,
  not?: ModelFollowingFilterInput | null,
  userFollowingId?: ModelIDInput | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  content?: ModelStringInput | null,
  username?: ModelStringInput | null,
  coverImage?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionFollowerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  followerID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionFollowerFilterInput | null > | null,
  or?: Array< ModelSubscriptionFollowerFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFollowingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  followerID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionFollowingFilterInput | null > | null,
  or?: Array< ModelSubscriptionFollowingFilterInput | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  coverImage?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  postID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type CreateFollowerMutationVariables = {
  input: CreateFollowerInput,
  condition?: ModelFollowerConditionInput | null,
};

export type CreateFollowerMutation = {
  createFollower?:  {
    __typename: "Follower",
    id: string,
    userID: string,
    followerID: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFollowersId?: string | null,
  } | null,
};

export type UpdateFollowerMutationVariables = {
  input: UpdateFollowerInput,
  condition?: ModelFollowerConditionInput | null,
};

export type UpdateFollowerMutation = {
  updateFollower?:  {
    __typename: "Follower",
    id: string,
    userID: string,
    followerID: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFollowersId?: string | null,
  } | null,
};

export type DeleteFollowerMutationVariables = {
  input: DeleteFollowerInput,
  condition?: ModelFollowerConditionInput | null,
};

export type DeleteFollowerMutation = {
  deleteFollower?:  {
    __typename: "Follower",
    id: string,
    userID: string,
    followerID: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFollowersId?: string | null,
  } | null,
};

export type CreateFollowingMutationVariables = {
  input: CreateFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type CreateFollowingMutation = {
  createFollowing?:  {
    __typename: "Following",
    id: string,
    userID: string,
    followerID: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFollowingId?: string | null,
  } | null,
};

export type UpdateFollowingMutationVariables = {
  input: UpdateFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type UpdateFollowingMutation = {
  updateFollowing?:  {
    __typename: "Following",
    id: string,
    userID: string,
    followerID: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFollowingId?: string | null,
  } | null,
};

export type DeleteFollowingMutationVariables = {
  input: DeleteFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type DeleteFollowingMutation = {
  deleteFollowing?:  {
    __typename: "Following",
    id: string,
    userID: string,
    followerID: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFollowingId?: string | null,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    name: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        message?: string | null,
        postID?: string | null,
        createdAt: string,
        updatedAt: string,
        createdBy?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    name: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        message?: string | null,
        postID?: string | null,
        createdAt: string,
        updatedAt: string,
        createdBy?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    name: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        message?: string | null,
        postID?: string | null,
        createdAt: string,
        updatedAt: string,
        createdBy?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    message?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      name: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID?: string | null,
    createdAt: string,
    updatedAt: string,
    createdBy?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    message?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      name: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID?: string | null,
    createdAt: string,
    updatedAt: string,
    createdBy?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    message?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      name: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID?: string | null,
    createdAt: string,
    updatedAt: string,
    createdBy?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    followers?:  {
      __typename: "ModelFollowerConnection",
      items:  Array< {
        __typename: "Follower",
        id: string,
        userID: string,
        followerID: string,
        createdAt: string,
        updatedAt: string,
        userFollowersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        userID: string,
        followerID: string,
        createdAt: string,
        updatedAt: string,
        userFollowingId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    followers?:  {
      __typename: "ModelFollowerConnection",
      items:  Array< {
        __typename: "Follower",
        id: string,
        userID: string,
        followerID: string,
        createdAt: string,
        updatedAt: string,
        userFollowersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        userID: string,
        followerID: string,
        createdAt: string,
        updatedAt: string,
        userFollowingId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    followers?:  {
      __typename: "ModelFollowerConnection",
      items:  Array< {
        __typename: "Follower",
        id: string,
        userID: string,
        followerID: string,
        createdAt: string,
        updatedAt: string,
        userFollowersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        userID: string,
        followerID: string,
        createdAt: string,
        updatedAt: string,
        userFollowingId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetFollowerQueryVariables = {
  id: string,
};

export type GetFollowerQuery = {
  getFollower?:  {
    __typename: "Follower",
    id: string,
    userID: string,
    followerID: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFollowersId?: string | null,
  } | null,
};

export type ListFollowersQueryVariables = {
  filter?: ModelFollowerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFollowersQuery = {
  listFollowers?:  {
    __typename: "ModelFollowerConnection",
    items:  Array< {
      __typename: "Follower",
      id: string,
      userID: string,
      followerID: string,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      follower?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      userFollowersId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFollowingQueryVariables = {
  id: string,
};

export type GetFollowingQuery = {
  getFollowing?:  {
    __typename: "Following",
    id: string,
    userID: string,
    followerID: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFollowingId?: string | null,
  } | null,
};

export type ListFollowingsQueryVariables = {
  filter?: ModelFollowingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFollowingsQuery = {
  listFollowings?:  {
    __typename: "ModelFollowingConnection",
    items:  Array< {
      __typename: "Following",
      id: string,
      userID: string,
      followerID: string,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      follower?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      userFollowingId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    name: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        message?: string | null,
        postID?: string | null,
        createdAt: string,
        updatedAt: string,
        createdBy?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      name: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByUsernameQueryVariables = {
  username: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByUsernameQuery = {
  postsByUsername?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      name: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    message?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      name: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID?: string | null,
    createdAt: string,
    updatedAt: string,
    createdBy?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      message?: string | null,
      post?:  {
        __typename: "Post",
        id: string,
        name: string,
        content: string,
        username?: string | null,
        coverImage?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      postID?: string | null,
      createdAt: string,
      updatedAt: string,
      createdBy?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByPostIDQueryVariables = {
  postID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByPostIDQuery = {
  commentsByPostID?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      message?: string | null,
      post?:  {
        __typename: "Post",
        id: string,
        name: string,
        content: string,
        username?: string | null,
        coverImage?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      postID?: string | null,
      createdAt: string,
      updatedAt: string,
      createdBy?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    followers?:  {
      __typename: "ModelFollowerConnection",
      items:  Array< {
        __typename: "Follower",
        id: string,
        userID: string,
        followerID: string,
        createdAt: string,
        updatedAt: string,
        userFollowersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        userID: string,
        followerID: string,
        createdAt: string,
        updatedAt: string,
        userFollowingId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFollowerSubscriptionVariables = {
  filter?: ModelSubscriptionFollowerFilterInput | null,
};

export type OnCreateFollowerSubscription = {
  onCreateFollower?:  {
    __typename: "Follower",
    id: string,
    userID: string,
    followerID: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFollowersId?: string | null,
  } | null,
};

export type OnUpdateFollowerSubscriptionVariables = {
  filter?: ModelSubscriptionFollowerFilterInput | null,
};

export type OnUpdateFollowerSubscription = {
  onUpdateFollower?:  {
    __typename: "Follower",
    id: string,
    userID: string,
    followerID: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFollowersId?: string | null,
  } | null,
};

export type OnDeleteFollowerSubscriptionVariables = {
  filter?: ModelSubscriptionFollowerFilterInput | null,
};

export type OnDeleteFollowerSubscription = {
  onDeleteFollower?:  {
    __typename: "Follower",
    id: string,
    userID: string,
    followerID: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFollowersId?: string | null,
  } | null,
};

export type OnCreateFollowingSubscriptionVariables = {
  filter?: ModelSubscriptionFollowingFilterInput | null,
};

export type OnCreateFollowingSubscription = {
  onCreateFollowing?:  {
    __typename: "Following",
    id: string,
    userID: string,
    followerID: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFollowingId?: string | null,
  } | null,
};

export type OnUpdateFollowingSubscriptionVariables = {
  filter?: ModelSubscriptionFollowingFilterInput | null,
};

export type OnUpdateFollowingSubscription = {
  onUpdateFollowing?:  {
    __typename: "Following",
    id: string,
    userID: string,
    followerID: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFollowingId?: string | null,
  } | null,
};

export type OnDeleteFollowingSubscriptionVariables = {
  filter?: ModelSubscriptionFollowingFilterInput | null,
};

export type OnDeleteFollowingSubscription = {
  onDeleteFollowing?:  {
    __typename: "Following",
    id: string,
    userID: string,
    followerID: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFollowingId?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  username?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    name: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        message?: string | null,
        postID?: string | null,
        createdAt: string,
        updatedAt: string,
        createdBy?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  username?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    name: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        message?: string | null,
        postID?: string | null,
        createdAt: string,
        updatedAt: string,
        createdBy?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  username?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    name: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        message?: string | null,
        postID?: string | null,
        createdAt: string,
        updatedAt: string,
        createdBy?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  createdBy?: string | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    message?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      name: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID?: string | null,
    createdAt: string,
    updatedAt: string,
    createdBy?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  createdBy?: string | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    message?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      name: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID?: string | null,
    createdAt: string,
    updatedAt: string,
    createdBy?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  createdBy?: string | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    message?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      name: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID?: string | null,
    createdAt: string,
    updatedAt: string,
    createdBy?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    followers?:  {
      __typename: "ModelFollowerConnection",
      items:  Array< {
        __typename: "Follower",
        id: string,
        userID: string,
        followerID: string,
        createdAt: string,
        updatedAt: string,
        userFollowersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        userID: string,
        followerID: string,
        createdAt: string,
        updatedAt: string,
        userFollowingId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    followers?:  {
      __typename: "ModelFollowerConnection",
      items:  Array< {
        __typename: "Follower",
        id: string,
        userID: string,
        followerID: string,
        createdAt: string,
        updatedAt: string,
        userFollowersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        userID: string,
        followerID: string,
        createdAt: string,
        updatedAt: string,
        userFollowingId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    followers?:  {
      __typename: "ModelFollowerConnection",
      items:  Array< {
        __typename: "Follower",
        id: string,
        userID: string,
        followerID: string,
        createdAt: string,
        updatedAt: string,
        userFollowersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        userID: string,
        followerID: string,
        createdAt: string,
        updatedAt: string,
        userFollowingId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
