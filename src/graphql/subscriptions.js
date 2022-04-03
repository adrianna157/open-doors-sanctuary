/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCase = /* GraphQL */ `
  subscription OnCreateCase {
    onCreateCase {
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
export const onUpdateCase = /* GraphQL */ `
  subscription OnUpdateCase {
    onUpdateCase {
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
export const onDeleteCase = /* GraphQL */ `
  subscription OnDeleteCase {
    onDeleteCase {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
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
