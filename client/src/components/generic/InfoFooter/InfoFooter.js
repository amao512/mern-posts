import React from 'react'
import { InfoFooterStyled } from './InfoFooter.styled'
import { NavLink } from 'react-router-dom'

const InfoFooter = ({ info, comments }) => {
    return (
        <InfoFooterStyled>
            <div className='views'>
                <span className="material-icons">visibility</span>
                <p>{info.views}</p>
            </div>
            <div className='comments'>
                <NavLink to={`/p/${info._id}`}>
                    <span className="material-icons">comment</span>
                    <p>{comments.length}</p>
                </NavLink>
            </div>
        </InfoFooterStyled>
    )
}

export default InfoFooter
