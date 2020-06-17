import React from 'react'
import { InfoHeadStyled } from '../styled-components/InfoHead.styled'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/profile.png'

const InfoHead = ({ isAdmin, user, info, onDelete }) => {
    return (
        <InfoHeadStyled>
            <div className='author'>
                <NavLink to={isAdmin ? '/profile' : `/profile/${user && user._id}`}>
                    <img src={userPhoto} alt='user-img' />
                </NavLink>

                <div className='info'>
                    <NavLink to={isAdmin ? '/profile' : `/profile/${user && user._id}`}>
                        <p>{user && `${user.name} ${user.lastName}`}</p>
                    </NavLink>

                    <span className='date'>{new Date(info.date).toLocaleDateString()}</span>
                </div>
            </div>
            
            <div className='drag-menu'>
                {isAdmin && <span className='material-icons'>drag_indicator</span>}

                <ul>
                    <NavLink to={`/edit/${info._id}`}>
                        <li>Edit</li>  
                    </NavLink>
                    
                    <li onClick={onDelete}>Delete</li>
                </ul>
            </div>
        </InfoHeadStyled>
    )
}

export default InfoHead
