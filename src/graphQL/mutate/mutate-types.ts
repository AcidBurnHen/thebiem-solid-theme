type User = {
    avatar: {
        url: string
    }
    jwtAuthExpiration: string,
    jwtRefreshToken: string,
    name: string,
    slug: string
}

export interface LoginData {
    user: User
}

export interface RegisterData {
    user: User
}

/* State types */

export type LoginState = {
    username: string,
    password: string
}

type RegState = {
    email: string,
    nickname: string,
}

export type RegisterState = LoginState & RegState
