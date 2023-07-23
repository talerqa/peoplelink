import * as React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {authThunkCreator, logOutThunkCreator, setUserDataAC} from '../../redux/authReducer';


class HeaderContainer extends React.Component<AuthPropsType> {
  constructor(props: AuthPropsType) {
    super(props);
  }

  componentDidMount() {
    this.props.authThunkCreator()
  }

  logOutHandler = () => {
    this.props.logout()
  }

  render() {
    
    return <Header id={this.props.id}
                   email={this.props.email}
                   login={this.props.login}
                   isAuth={this.props.isAuth}
                   logout={this.logOutHandler}
    />;
  }
}

type MapStateToPropsAuthType = {
  id: number | null
  email: string | null
  login: string | null,
  isAuth: boolean
}

type AuthPropsType = MapStateToPropsAuthType & MapDispatchToPropsAuthType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsAuthType => {
  return {
    id: state.authReducer.id,
    email: state.authReducer.email,
    login: state.authReducer.login,
    isAuth: state.authReducer.isAuth,
  }
}

type MapDispatchToPropsAuthType = {
  setUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => void
  authThunkCreator: () => void
  logout: () => void
}

export default connect(mapStateToProps, {
  setUserData: setUserDataAC,
  authThunkCreator: authThunkCreator,
  logout: logOutThunkCreator,
})(HeaderContainer)
