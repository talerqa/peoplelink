import * as React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {Dispatch} from 'redux';
import {CommonAuthType, setUserDataAC} from '../../redux/authReducer';


class HeaderContainer extends React.Component<AuthPropsType> {
  constructor(props: AuthPropsType) {
    super(props);
  }

  componentDidMount() {

    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me/', {withCredentials: true})
      .then((res) => {
        console.log(this.props.isAuth)

        if (res.data.resultCode === 0) {
          let {id, email, login} = res.data.data

          console.log('RES')
          this.props.setUserData(id, email, login)
        }

      })
  }


  render() {
    return <Header id={this.props.id}
                   email={this.props.email}

                   login={this.props.login}
                   isAuth={this.props.isAuth}/>;
  }
}

type MapStateToPropsAuthType = {
  id: number | null
  email: string | null
  login: string | null,
  isAuth: boolean,

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
  setUserData: (id: number | null, email: string | null, login: string | null) => void
}

const mapDispatchToProps = (dispatch: Dispatch<CommonAuthType>): MapDispatchToPropsAuthType => {
  return {
    setUserData: (id: number | null, email: string | null, login: string | null) => {
      dispatch(setUserDataAC(id, email, login))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
