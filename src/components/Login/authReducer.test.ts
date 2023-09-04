import {authReducer, AuthType, getCaptchaAC, setErrorAC, setUserDataAC,} from './authReducer';

let state: AuthType
beforeEach(() => {
  state = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    error: '',
    getCaptcha: null,
  };
})

describe('authReducer', () => {
  it('should set user data', () => {
    const action = setUserDataAC(1, 'user@example.com', 'username', true, null);
    const newState = authReducer(state, action);
    expect(newState.id).toBe(1);
    expect(newState.email).toBe('user@example.com');
    expect(newState.isAuth).toBe(true);
  });

  it('should set error', () => {
    const action = setErrorAC('Error message');
    const newState = authReducer(state, action);
    expect(newState.error).toBe('Error message');
  });

  it('should set captcha', () => {
    const action = getCaptchaAC('captcha-image-url');
    const newState = authReducer(state, action);
    expect(newState.getCaptcha).toBe('captcha-image-url');
  });
});

