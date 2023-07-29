import axios, {AxiosResponse} from 'axios';
import {LoginFormType} from '../components/Login/Login';
import {ProfileType, UserType} from '../redux/type';


const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '79a5be98-9141-40d0-ad68-112bb7625a33'
  }
})

export const userApi = {
  getUsers: (currenPage: number = 1, pageSize: number = 28) => {
    return instance.get<GetUserType>(`users?page=${currenPage}&count=${pageSize}`).then((res) => {
      console.log(res)
      return  res.data
    })
  }
}

export const profileApi = {
  getProfileUser: (userId: string) => {
    return instance.get<ProfileType>(`profile/` + userId)
  },
  followUser: (userId: number) => {
    return instance.post<ResponseType<{ followed: boolean }>, AxiosResponse<ResponseType<{ followed: boolean }>>, { userId: number  }>('follow/' + userId, {userId})
  },
  unfollowUser: (userId: number) => {
    return instance.delete<ResponseType>('follow/' + userId)
  },
  getStatus: (userId : number) => {
    return instance.get<string>('profile/status/' + userId)
  },
  updateStatus: (status: string) => {
    return instance.put<ResponseType<string>, AxiosResponse<ResponseType<string>>, { status: string }>('profile/status', {status})
  }
}

export const authApi = {
  getAuthMe: () => {
    return instance.get<ResponseType<UserDataType>>('auth/me')
  },
  getCaptcha: ()=> {
    return instance.get<ResponseType<string>>('/security/get-captcha-url')
  },
  login: (data: LoginFormType)=> {
    return instance.post<ResponseType<LoginUserDataType>, AxiosResponse<ResponseType<LoginUserDataType>>, LoginFormType>('auth/login', data)
  },
  logOut: () => {
    return instance.delete<ResponseType>('auth/login')
  }
}

export type UserDataType = {
  id: number
  email: string
  login: string
}

export type LoginUserDataType = {
  email: string
  login: string
  rememberMe: boolean
}

export type GetUserType = {
  items: Array<UserType>,
  totalCount: number,
  error: string | null
}

export type ResponseType<D = {}> = {
  resultCode: number
  messages: Array<string>
  fieldsErrors: Array<string>
  data: D
}