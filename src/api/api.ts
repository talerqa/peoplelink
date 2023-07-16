import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '79a5be98-9141-40d0-ad68-112bb7625a33'
  }
})

export const userApi = {
  getUsers: (currenPage: number = 1, pageSize: number = 28) => {
    return instance.get(`users?page=${currenPage}&count=${pageSize}`).then((res) => res.data)
  },

}

export const profileApi = {
  getProfileUser: (userId: string) => {
    return instance.get(`profile/` + userId)
  },
  followUser: (userId: number) => {
    return instance.post('follow/' + userId, userId)
  },
  unfollowUser: (userId: number) => {
    return instance.delete('follow/' + userId)
  }
}

export const authApi = {
  getAuthMe: () => {
    return instance.get('auth/me')
  }
}


