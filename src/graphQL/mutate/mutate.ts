import { Fetch } from "../fetch";
import { LoginState } from "./mutate-types";
import { loginUserMutation } from "./mutations";

export async function LoginUser(state: LoginState) {
    const loggedInData = await Fetch(loginUserMutation(state.username, state.password))
    console.log(loggedInData);
}