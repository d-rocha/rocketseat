import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';

import styles from './Comment.module.css';
import { useState } from 'react';

export function Comment({ commentId, author, comment, publishedAtTitle, publishedAt, onDeleteComment }) {
    const handleRemoveComment = () => {
        onDeleteComment(commentId);
    }

    const [like, setLike] = useState(0);

    const handleActionAddLike = () => {
        return setLike(like + 1);
    };

    return (
        <div className={styles.commentContainer}>
            <Avatar hasBorder={false} src={author.avatar} />

            <div className={styles.commentWrapper}>
                <div className={styles.commentContent}>
                    <div className={styles.commentHeader}>
                        <div className={styles.commentInfo}>
                            <strong>{author.name}</strong>

                            <time 
                                title={publishedAtTitle}
                                dateTime={publishedAt}>
                                    {publishedAt}
                            </time>
                        </div>

                        <button 
                            title='Deletar Comentário' 
                            onClick={handleRemoveComment}>
                            <Trash size={24} />
                        </button>
                    </div>

                    <p>{comment}</p>
                </div>

                <button className={styles.commentLike} onClick={handleActionAddLike}>
                    <ThumbsUp size={20} />
                    <span>Aplaudir</span>
                    <span>•</span>
                    <span>{like}</span>
                </button>
            </div>
        </div>
    );
}