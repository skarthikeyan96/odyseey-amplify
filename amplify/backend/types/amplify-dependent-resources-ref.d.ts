export type AmplifyDependentResourcesAttributes = {
  api: {
    socialmediaamplify: {
      GraphQLAPIEndpointOutput: 'string'
      GraphQLAPIIdOutput: 'string'
      GraphQLAPIKeyOutput: 'string'
    }
  }
  auth: {
    socialmediaamplifybbdddd5d: {
      AppClientID: 'string'
      AppClientIDWeb: 'string'
      IdentityPoolId: 'string'
      IdentityPoolName: 'string'
      UserPoolArn: 'string'
      UserPoolId: 'string'
      UserPoolName: 'string'
    }
    userPoolGroups: {
      AdminGroupRole: 'string'
    }
  }
  function: {
    socialmediaamplifybbdddd5dPostConfirmation: {
      Arn: 'string'
      LambdaExecutionRole: 'string'
      LambdaExecutionRoleArn: 'string'
      Name: 'string'
      Region: 'string'
    }
  }
  storage: {
    postImages: {
      BucketName: 'string'
      Region: 'string'
    }
  }
}
