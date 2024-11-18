import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';

import data from '../../data/mock-comments';

import styles from './Post.module.css';

export function Post({ author, content, publishedAt }) {
    const [comments, setComments] = useState(data);
    const [newCommentText, setNewCommentText] = useState('');
    const commentData = {
        author: {
            avatar: 'https://github.com/d-rocha.png',
            name: 'Davi Rocha'
        },
        publishedAt: new Date()
    }

    const isNewCommentEmpty = newCommentText.length === 0 
        ? styles.actionDisabled
        : styles.actionEnabled;
    

    const formattedDate = (date, isDateRelativeToNow) => {
        if(isDateRelativeToNow) 
            return formatDistanceToNow(date, { locale: ptBR, addSuffix: true });

        if(!isDateRelativeToNow) 
            return format(date, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });
    }

    const handlePostComment = evt => {
        if(isNewCommentEmpty) return;

        evt.preventDefault();

        const newID = comments.length > 0 ? Math.max(...comments.map(item => item.id)) + 1 : 1;
        const newComment = {
            ...commentData,
            id: newID,
            comment: newCommentText
        }

        setComments([...comments, newComment]);
        setNewCommentText('');
    }

    const handleNewComment = evt => {
        evt.target.setCustomValidity('');
        setNewCommentText(evt.target.value);
    }

    const handleNewCommentInvalid = evt => {
        evt.target.setCustomValidity('O Comentário não pode ser postado vazio!')
    }

    const deleteComment = commentId => {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment.id !== commentId
        })

        setComments(commentsWithoutDeleteOne);
    }

    return (
        <article className={styles.postContainer}>
            <header className={styles.postHeader}>
                <div className={styles.postInfoWrapper}>
                    <Avatar src={author.avatar}/>

                    <div className={styles.postInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <div className={styles.postAt}>
                    <time title={formattedDate(publishedAt, false)} dateTime={publishedAt.toISOString()}>
                        {formattedDate(publishedAt, true)}
                    </time>
                </div>
            </header>

            <div className={styles.postContent}>
                {
                    content.map(item => {
                        const Tag = item.type === 'link' ? 'a' : 'p';
                        return (
                            <Tag key={item.content} href={item.type === 'link' ? '#' : undefined}>
                                {item.content}
                            </Tag>
                        );
                    })
                }
            </div>

            <form className={styles.postCommentWrapper} onSubmit={handlePostComment}>
                <p>Deixe seu feedback</p>

                <textarea 
                    placeholder='Deixe um comentário' 
                    name='comment'
                    value={newCommentText}
                    onChange={handleNewComment}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                
                <div className={styles.postCommentAction}>
                    <button type='submit' className={isNewCommentEmpty}>
                        Publicar
                    </button>
                </div>
            </form>

            {
                comments && comments.map(item => {
                    if(author.name !== item.author.name) {
                        return (
                            <Comment 
                                key={item.id} 
                                commentId={item.id}
                                author={item.author}
                                comment={item.comment}
                                publishedAtTitle={formattedDate(item.publishedAt, false)}
                                publishedAt={formattedDate(item.publishedAt, true)}
                                onDeleteComment={deleteComment}
                            />
                        );
                    }
                })
            }
        </article>
    );
}