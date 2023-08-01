/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

// import {DynamoDB as} from 'aws-sdk'

// var aws = require('aws-sdk')
// var ddb = new aws.DynamoDB()

var { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
var { PutCommand, DynamoDBDocumentClient } = require('@aws-sdk/lib-dynamodb')

var client = new DynamoDBClient({})
var docClient = DynamoDBDocumentClient.from(client)

// var ddb = new DynamoDBClient()

exports.handler = async (event, context) => {
  let date = new Date()
  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        // Items below that begin with __ are needed for DataStore. When you create an object in
        // DataStore for the first time, those fields are created automatically. If you don't have it when
        // you go update an item, it will throw and error.
        id: event.request.userAttributes.sub, // This is the Sub ID from AuthCognitoIdentityProvider, useful to query current user
        __typename: 'User',
        _lastChangedAt: date.valueOf().toString(), // timestamp
        _version: '1', // Every time this object gets modified, this version will increase, therefore we begin with 1
        createdAt: date.toISOString(),
        updatedAt: date.toISOString(),
        email: event.request.userAttributes.email,
      },
      TableName: process.env.USERTABLE,
    }

    const command = new PutCommand(params)

    try {
      // await ddb.putItem(params).promise()
      const response = await docClient.send(command)
      console.log('Success')
      return response
    } catch (err) {
      console.log('Error', err)
    }

    console.log('Success: Everything executed correctly')
  } else {
    console.log('Error: Nothing was written to DynamoDB')
  }
}
