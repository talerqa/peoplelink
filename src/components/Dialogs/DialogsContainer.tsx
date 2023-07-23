import * as React from 'react';
import {DialogsPageType, MessageType} from '../../redux/type';
import {CommonACType, sendMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {compose, Dispatch} from 'redux';
import Dialogs from './Dialogs';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';

class DialogsContainer extends React.Component<DialogsType> {
  constructor(props: DialogsType) {
    super(props);
  }

  componentDidMount() {
  }

  changeTextArea = (title: string) => {
    return this.props.changeTextArea(title)
  }

  addPost = (title: string) => {
    return this.props.addPost(title)
  }

  render() {
    return (<Dialogs
      dialogPage={this.props.dialogsPage}
      isAuth={this.props.isAuth}
      newMessageText={this.props.newMessageText}
      messages={this.props.messages}
      changeTextArea={this.changeTextArea}
      addPost={this.addPost}
    />);
  }

}

let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    dialogsPage: state.dialogsReducer,
    isAuth: state.authReducer.isAuth,
    newMessageText: state.dialogsReducer.newMessageText,
    messages: state.dialogsReducer.message,

  }
}

type mapStateToPropsType = {
  dialogsPage: DialogsPageType
  isAuth: boolean
  newMessageText: string | ''
  messages: Array<MessageType>

}

const mapDispatchToProps = (dispatch: Dispatch<CommonACType>): mapDispatchToPropsType => {
  return {
    addPost: (title: string) => {
      dispatch(sendMessageAC(title))
    },
    changeTextArea: (title: string) => {
      dispatch(updateNewMessageTextAC(title))
    }
  }
}

type mapDispatchToPropsType = {
  addPost: (title: string) => void
  changeTextArea: (title: string) => void
}

type DialogsType = mapStateToPropsType & mapDispatchToPropsType

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect)
(DialogsContainer)


// export const DialogsContainer = () => {
//   const [title, setTitle] = useState('')
//   const dialogsPage = useSelector<AppRootStateType, DialogsPageType>(state => state.dialogsReducer)
//
//   const dispatch = useDispatch()
//   //Добавляем новый пост
//   const addPost = () => {
//     let action = sendMessageAC(title)
//     dispatch(action)
//     setTitle('')
//   }
//
//   const changeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
//     if (e.currentTarget.value !== null) {
//       let newPost = e.currentTarget.value
//       setTitle(newPost)
//       const action = updateNewMessageTextAC(e.currentTarget.value)
//       dispatch(action)
//     }
//   }
//
//   const dialogsElement = dialogsPage.dialogsData
//     .map((dialog: DialogsDataType) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
//   const messageElement = dialogsPage.message.map((message: MessageType) => <Message message={message.message}/>)
//
//
//   return (<Dialogs
//     title={title}
//     dialogsElement={dialogsElement}
//     messageElement={messageElement}
//     changeTextArea={changeTextArea}
//     addPost={addPost}
//   />)
// }

