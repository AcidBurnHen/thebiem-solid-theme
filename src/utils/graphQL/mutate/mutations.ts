const userData = `
user {
  jwtAuthExpiration
  jwtAuthToken
  jwtRefreshToken
  name
  slug
  avatar {
    url
  }
}`;

export function loginUserMutation(username: string, pass: string) {
  return `
    mutation loginUser {
        login(input: {
          password: "${pass}", 
          username: "${username}"
        }) {
         ${userData}
        }
      }
    `;
}

export function registerUserMutation(
  username: string,
  nickname: string,
  email: string,
  pass: string
) {
  return `
  mutation registerUser {
    registerUser(input: {
      username: "${username}",
      nickname: "${nickname}"
      email: "${email}",
      password: "${pass}"
    }) {
      ${userData}
    }
  }
  `;
}
