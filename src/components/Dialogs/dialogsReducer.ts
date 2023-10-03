import { DialogsPageType, MessageType } from "../../type";
import { v1 } from "uuid";

const SEND_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
const DELETE_DATA_MESSAGE = "DELETE-DATA-MESSAGE";
const SET_DATA_MESSAGE = "SET-DATA-MESSAGE";

const initState: DialogsPageType = {
  message: [
    { id: v1(), message: "Hello friend, you have a great social network.\n" },
    { id: v1(), message: "Hello" },
    {
      id: v1(),
      message: "Thanks, I'm trying hard to make the social network better.\n",
    },
  ],
  newMessageText: "",
  dialogsData: [
    { id: v1(), name: "Dimych" },
    { id: v1(), name: "Andrew" },
    { id: v1(), name: "Jon" },
    { id: v1(), name: "Max" },
    { id: v1(), name: "Andrew" },
    { id: v1(), name: "Viktor" },
  ],
};
export const dialogsReducer = (state = initState, action: CommonACType) => {
  switch (action.type) {
    case SET_DATA_MESSAGE: {
      return initState;
    }
    case SEND_MESSAGE: {
      const newPost: MessageType = { id: v1(), message: action.title };
      return {
        ...state,
        message: [...state.message, newPost],
      };
    }
    case UPDATE_MESSAGE_TEXT: {
      return { ...state, newMessageText: action.title };
    }
    case DELETE_DATA_MESSAGE: {
      return { ...state, message: [], dialogsData: [], newMessageText: "" };
    }
    default:
      return state;
  }
};

export type CommonACType =
  | SendMessageACType
  | UpdateNewMessageTextACType
  | DeleteDataMessageACType
  | SetDataMessageACType;

export type SendMessageACType = ReturnType<typeof sendMessageAC>;
export type UpdateNewMessageTextACType = ReturnType<
  typeof updateNewMessageTextAC
>;
export type DeleteDataMessageACType = ReturnType<typeof deleteDataMessageAC>;
export type SetDataMessageACType = ReturnType<typeof setDataMessageAC>;

export const sendMessageAC = (title: string) =>
  ({ type: SEND_MESSAGE, title }) as const;

export const updateNewMessageTextAC = (title: string) =>
  ({ type: UPDATE_MESSAGE_TEXT, title }) as const;

export const setDataMessageAC = () => ({ type: SET_DATA_MESSAGE }) as const;

export const deleteDataMessageAC = () =>
  ({ type: DELETE_DATA_MESSAGE }) as const;
