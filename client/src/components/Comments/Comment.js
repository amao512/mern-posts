import React from 'react'
import InfoHead from '../generic/InfoHead/InfoHead'
import LikeDislikeContainer from '../LikeDislike/LikeDislikeContainer'
import { CommentStyled } from './comment.styled'

const Comment = ({ comment, userId, owner, likes, dislikes, onDelete, editing, editingText, onEdit, setEditingText, onUpdate }) => {
    return (
        <CommentStyled>
            <InfoHead comment onEdit={onEdit} isAdmin={comment.owner === userId} user={owner} info={comment} onDelete={onDelete} />
            
            {!editing && <p className='comment'>{comment.text}</p>}
            {editing && <div className='editing'>
                    <textarea onChange={e => setEditingText(e.target.value)} value={editingText}/>
                    <button onClick={onUpdate}>Save</button>
                </div>
            }

            <LikeDislikeContainer infoId={comment._id} 
                                  comment={true}
                                  likes={likes}
                                  dislikes={dislikes}
            />
        </CommentStyled>
    )
}

export default Comment
