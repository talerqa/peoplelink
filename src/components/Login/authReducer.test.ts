import {authReducer, getCaptchaAC, setErrorAC, setUserDataAC,} from './authReducer';


describe('authReducer', () => {
  it('should set user data', () => {
    const initialState = {
      id: null,
      login: null,
      email: null,
      isAuth: false,
      error: '',
      getCaptcha: null,
    };
    const action = setUserDataAC(1, 'user@example.com', 'username', true, null);
    const newState = authReducer(initialState, action);
    expect(newState.id).toBe(1);
    expect(newState.email).toBe('user@example.com');
    expect(newState.isAuth).toBe(true);
  });

  it('should set error', () => {
    const initialState = {
      id: null,
      login: null,
      email: null,
      isAuth: false,
      error: '',
      getCaptcha: null,
    };
    const action = setErrorAC('Error message');
    const newState = authReducer(initialState, action);
    expect(newState.error).toBe('Error message');
  });

  it('should set captcha', () => {
    const initialState = {
      id: null,
      login: null,
      email: null,
      isAuth: false,
      error: '',
      getCaptcha: null,
    };
    const action = getCaptchaAC('captcha-image-url');
    const newState = authReducer(initialState, action);
    expect(newState.getCaptcha).toBe('captcha-image-url');
  });
});

