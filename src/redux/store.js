import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Hi, how are you?',
                    likesCount: 15,
                },
                {
                    id: 2,
                    message: "It's my first post",
                    likesCount: 25,
                },
                {
                    id: 3,
                    message: 'dsfsdfdsf',
                    likesCount: 1,
                },
                {
                    id: 4,
                    message: 'dsfdsfdsfds',
                    likesCount: 7,
                },
            ],
            newPostText: 'it-kamasutra',
        },
        dialogsPage: {
            messages: [
                {
                    id: 1,
                    message: 'Hi',
                },
                {
                    id: 2,
                    message: 'How are you?',
                },
                {
                    id: 3,
                    message: 'Yo',
                },
                {
                    id: 4,
                    message: 'Whats up?',
                },
                {
                    id: 5,
                    message: 'Im fine',
                },
                {
                    id: 6,
                    message: 'good',
                },
            ],
            dialogs: [
                {
                    id: 1,
                    name: 'Dimych',
                },
                {
                    id: 2,
                    name: 'Andrew',
                },
                {
                    id: 3,
                    name: 'Sveta',
                },
                {
                    id: 4,
                    name: 'Sasha',
                },
                {
                    id: 5,
                    name: 'Victor',
                },
                {
                    id: 6,
                    name: 'Valera',
                },
            ],
            newMessageBody: '',
        },
        sidebar: {},
    },
    _callSubscriber() {},
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(
            this._state.profilePage,
            action
        )
        this._state.dialogsPage = dialogsReducer(
            this._state.dialogsPage,
            action
        )
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    },
}
