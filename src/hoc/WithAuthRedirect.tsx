import *  as React from 'react';
import {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from '../app/store';
import {connect} from 'react-redux';

export type MapStateToPropsRedirectType = {
  isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppRootStateType) => ({
  isAuth: state.authReducer.isAuth
})

export function WithAuthRedirect <T>(Component: ComponentType<T>) {

  const RedirectComponent = (props: MapStateToPropsRedirectType) => {
    let {isAuth, ...restProps} = props

    if (!isAuth) return <Redirect to={'/login'}/>
    else return <Component {...restProps as T} />
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent)

}

