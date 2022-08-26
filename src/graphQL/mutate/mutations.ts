export function loginUserMutation(username: string, pass: string) {
    return `
    mutation loginUser {
        login(input: {password: "${pass}", username: "${username}"}) {
          user {
            jwtAuthToken
            jwtAuthExpiration
            jwtRefreshToken
            jwtUserSecret
            name
            slug
            avatar {
              url
            }
          }
          authToken
        }
      }
    `
}