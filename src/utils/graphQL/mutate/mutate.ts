import { Fetch } from "../fetch";
import { LoginData, LoginState, RegisterData, RegisterState } from "./mutate-types";
import { loginUserMutation, registerUserMutation } from "./mutations";

export async function LoginUser(state: LoginState): Promise<LoginData> {
    const loggedInData = await Fetch(loginUserMutation(state.username, state.password))
    return loggedInData.login as LoginData;
}

export async function RegisterUser(state: RegisterState): Promise<RegisterData> {
    const registeredUserData = await Fetch(registerUserMutation(state.username, state.nickname, state.email, state.password))
    console.log(registeredUserData);
    return registeredUserData as RegisterData
}