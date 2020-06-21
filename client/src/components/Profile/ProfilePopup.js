import React from 'react'
import { PopUp } from './popUp.styled'

const ProfilePopup = ({ setPopup, deletePhoto, fileSelectedHandler }) => {
    return (
        <PopUp>
            <ul className='content'>
                <div className='close' onClick={() => setPopup(false)}>
                    <span className="material-icons">close</span>
                </div>

                <li>
                    <input type='file' 
                        name='file' 
                        id='file' 
                        accept='image/*'
                        onChange={fileSelectedHandler}
                    />

                    <label htmlFor='file'>Upload Image</label>
                </li>

                <li onClick={deletePhoto}>
                    <p>Delete</p>
                </li>
            </ul>
        </PopUp>
    )
}

export default ProfilePopup
