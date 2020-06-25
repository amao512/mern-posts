import React from 'react'
import { InfoFooterStyled } from './InfoFooter.styled'
import { NavLink } from 'react-router-dom'
import LikeDislikeContainer from '../../LikeDislike/LikeDislikeContainer'

const InfoFooter = ({ info, comments, likes, dislikes }) => {
    return (
        <InfoFooterStyled>
            <LikeDislikeContainer post={true} likes={likes} dislikes={dislikes} infoId={info._id} />

            <div className='comments'>
                <NavLink to={`/p/${info._id}`}>
                    <span className="material-icons">comment</span>
                    <p>{comments.length}</p>
                </NavLink>
            </div>
            
            <div className='views'>
                <span className="material-icons">visibility</span>
                <p>{info.views}</p>
            </div>
        </InfoFooterStyled>
    )
}

export default InfoFooter
