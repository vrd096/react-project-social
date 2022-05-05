import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './Profileinfo/Profileinfo'

const Profile = (props) => {
    return (
        <section>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer />
        </section>
    )
}

export default Profile
