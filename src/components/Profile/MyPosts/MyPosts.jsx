import React, { Component, PureComponent } from 'react'
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'
import {
    maxLengthCreator,
    required,
} from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const maxLength10 = maxLengthCreator(10)

let addNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name="newPostText"
                component={Textarea}
                placeholder={'Post message'}
                validate={[required, maxLength10]}
            />

            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({ form: 'profileAddNewPostForm' })(
    addNewPostForm
)

const MyPosts = React.memo((props) => {
    console.log('render yo')

    let postsElements = props.posts.map((p) => (
        <Post message={p.message} key={p.id} likesCount={p.likesCount} />
    ))

    let newPostElement = React.createRef()

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>{postsElements}</div>
        </div>
    )
})

export default MyPosts
