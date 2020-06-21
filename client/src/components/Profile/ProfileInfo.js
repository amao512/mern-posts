import React from 'react'
import { ProfileBlock } from './profile.styled'
import UserPhoto from '../generic/UserPhoto/UserPhoto'

const ProfileInfo = ({ id, setPopup, user }) => {
    return (
        <ProfileBlock>
            <div className='profile-info'>
                <div onClick={() => !id && setPopup(true)} className='photo'>
                    <UserPhoto owner={user._id} />

                    {!id && <div className='choose-img'>
                            <span className="material-icons">create</span>
                        </div>
                    }
                </div>

                <div className='name'>
                    <p>{`${user.name} ${user.lastName}`}</p>
                </div>
                
                <div className='email'>
                    <p>{user.email}</p>
                </div>
            </div>
        </ProfileBlock>
    )
}

export default ProfileInfo
