/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCase = /* GraphQL */ `
  query GetCase($id: ID!) {
    getCase(id: $id) {
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
export const listCases = /* GraphQL */ `
  query ListCases(
    $filter: ModelCaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
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
export const listUserss = /* GraphQL */ `
  query ListUserss(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        alias
        certification
        heardAboutUs
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const casesByUser = /* GraphQL */ `
  query CasesByUser(
    $ownerSub: String
    $sortDirection: ModelSortDirection
    $filter: ModelCaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    casesByUser(
      ownerSub: $ownerSub
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
