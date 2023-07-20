import { gql } from '@apollo/client';

export const REG_USER = gql`
  mutation registrationUser($registrationUser: CreateAuthInput!) {
    registrationUser(registrationUser: $registrationUser) {
      accessToken
    }
  }
`;

export const AUTH_USER = gql`
  mutation loginUser($loginUser: LoginUserInput!) {
    loginUser(loginUser: $loginUser) {
      accessToken
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export const REFRESH_TOKEN = gql`
  mutation refresh {
    refresh {
      accessToken
    }
  }
`;
