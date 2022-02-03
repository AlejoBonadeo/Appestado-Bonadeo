export interface AuthState {
  isLoggedIn: boolean
  username?: string
  favoriteIcon?: string
}

const initialState: AuthState = {
  isLoggedIn: false
} 
export type AuthAction = 
| { type: 'logIn' }
| { type: 'logOut' }
| { type: 'changeFavIcon', payload: string }
| { type: 'changeUsername', payload: string}

const AuthReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no username'
      }
    case 'logOut':
      return initialState
    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload
      }
    case 'changeUsername':
      return {
        ...state,
        username: action.payload
      }
    default:
      return state;
  }
  

};

export default AuthReducer;
