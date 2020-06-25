import React from 'react'
import UserPhoto from '../UserPhoto/UserPhoto'
import { InfoHeadStyled } from './InfoHead.styled'
import { NavLink } from 'react-router-dom'

const InfoHead = ({ isAdmin, user, info, onDelete, comment, onEdit }) => {
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
                    {!comment ? (
                            <NavLink to={`/edit/${info._id}`}>
                                <li>Edit</li>  
                            </NavLink>
                        )
                        : (
                            <li onClick={onEdit}>Edit</li>
                        )
                    }
                    
                    <li onClick={onDelete}>Delete</li>
                </ul>
            </div>
        </InfoHeadStyled>
    )
}

export default InfoHead
