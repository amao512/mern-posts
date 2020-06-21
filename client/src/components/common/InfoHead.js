import React from 'react'
import { InfoHeadStyled } from '../styled-components/InfoHead.styled'
import { NavLink } from 'react-router-dom'
import UserPhoto from '../UserPhoto'

const InfoHead = ({ isAdmin, user, info, onDelete }) => {
    return (
        <InfoHeadStyled>
            <div className='author'>
                <div className='photo'>
                    <NavLink to={isAdmin ? '/profile' : `/profile/${user && user._id}`}>
                        <UserPhoto owner={user && user._id} />
                    </NavLink>
                </div>

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
