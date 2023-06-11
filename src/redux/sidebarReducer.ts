// const ADD_POST = 'ADD-POST';
// const UPDATE_NEWPOST_TEXT = 'UPDATE-NEWPOST-TEXT';


import {MyFrinedPageType} from './store';
import letov from './img/letov.webp';
import chekhov from './img/chekhov.jpg';
import adamovich from './img/adamovich.jpg';
import karatkevich from './img/karatkevich.jpg';
import kafka from './img/kafka.jpg';

const initState: MyFrinedPageType = {
  friends: [{id: 1, name: 'Egor', lastName: 'Letov', statusOnSite: true, img: letov,},
    {id: 2, name: 'Anton', lastName: 'Chekhov', statusOnSite: false, img: chekhov,},
    {id: 3, name: 'Ales\'', lastName: 'Adamovich', statusOnSite: true, img: adamovich,},
    {id: 4, name: 'Yladzimir', lastName: 'Karatkevich', statusOnSite: true, img: karatkevich,},
    {id: 5, name: 'Franz', lastName: 'Kafka', statusOnSite: false, img: kafka,},]
}

export const sidebarReducer = (state = initState, action: any) => {
  switch (action.type) {

    default:
      return state
  }
}
// Follow unfollow при нажатии кнопки мапяться друзья
// export type AddPostACType = ReturnType<typeof addPostAC>
// export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
//
// export const addPostAC = (title: string) => ({type: ADD_POST, title} as const)
//
// export const updateNewPostTextAC = (title: string) => ({
//   type: UPDATE_NEWPOST_TEXT, title
// } as const)
//
