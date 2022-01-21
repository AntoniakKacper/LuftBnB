import { AuthState, User } from "../models/Authentication";
import { createContext, Dispatch, FC, useReducer } from "react";

export enum UserActions {
  logout = 'SIGN_OUT',
  setToken = 'SET_TOKEN',
  setRefreshToken = 'SET_REFRESH_TOKEN',
  setUser = 'SET_USER'
}

type IActions = {
  type: UserActions;
  payload: string | User ;
}

const initialState: AuthState = {
  user: null,
  authenticated: false,
  refreshToken: null,
  token: null
};

export const UserContext = createContext<{
  state: AuthState; dispatch: Dispatch<IActions>
}>({
  state: initialState,
  dispatch: () => null
});

const authReducer = (state: AuthState, action: IActions) => {
  const { type, payload } = action;

  switch (type) {
    case UserActions.logout:
      localStorage.removeItem('LuftBnBAccessToken');
      localStorage.removeItem('LuftBnBRefreshToken');
      return initialState;
    case UserActions.setToken:
      return {
        ...state,
        authenticated: true,
        token: payload as string
      }
    case UserActions.setRefreshToken:
      return {
        ...state,
        refreshToken: payload as string
      }
    case UserActions.setUser:
      return {
        ...state,
        user: payload as User,
      }
    default:
      return state;
  }
};

interface AuthProviderProps {
  children: JSX.Element;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
