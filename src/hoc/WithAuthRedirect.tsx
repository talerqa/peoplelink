import *  as React from 'react';
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from '../redux/store';
import {connect} from 'react-redux';

type MapStateToPropsRedirectType = {
  isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppRootStateType): MapStateToPropsRedirectType => {
  return {
    isAuth: state.authReducer.isAuth
  }
}

export const WithAuthRedirect = (Component: any) => {

  class RedirectComponent extends React.Component<any> {
    render() {
      if (!this.props.isAuth) return <Redirect to={'/login'}/>
      return <Component {...this.props}/>
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

  return ConnectedAuthRedirectComponent
};
