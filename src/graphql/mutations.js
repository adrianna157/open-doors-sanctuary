/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addCaseToActiveCases = /* GraphQL */ `
  mutation AddCaseToActiveCases($input: AddCaseToActiveCases!) {
    AddCaseToActiveCases(input: $input) {
      id
      alias
      cases {
        nextToken
      }
      certification
      heardAboutUs
      createdAt
      updatedAt
    }
  }
`;
export const createCase = /* GraphQL */ `
  mutation CreateCase(
    $input: CreateCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    createCase(input: $input, condition: $condition) {
      id
      caseNumber
      ownerSub
      firstName
      lastName
      middleName
      age
      city
      state
      details
      escortAd
      webSources
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateCase = /* GraphQL */ `
  mutation UpdateCase(
    $input: UpdateCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    updateCase(input: $input, condition: $condition) {
      id
      caseNumber
      ownerSub
      firstName
      lastName
      middleName
      age
      city
      state
      details
      escortAd
      webSources
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteCase = /* GraphQL */ `
  mutation DeleteCase(
    $input: DeleteCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    deleteCase(input: $input, condition: $condition) {
      id
      caseNumber
      ownerSub
      firstName
      lastName
      middleName
      age
      city
      state
      details
      escortAd
      webSources
      status
      createdAt
      updatedAt
    }
  }
`;
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      id
      alias
      cases {
        nextToken
      }
      certification
      heardAboutUs
      createdAt
      updatedAt
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      id
      alias
      cases {
        nextToken
      }
      certification
      heardAboutUs
      createdAt
      updatedAt
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      id
      alias
      cases {
        nextToken
      }
      certification
      heardAboutUs
      createdAt
      updatedAt
    }
  }
`;
