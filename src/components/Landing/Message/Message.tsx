import React from 'react'
import { IframeStyled, MessageContainer } from './Message.styles'

interface IMessage {
    message?: string | null;
    author?: string | null;
    video: string;
}

const Message = ({message, author, video}:IMessage) => {

    return (
        <MessageContainer>
            <div className='video'>
                <IframeStyled>
                    <iframe
                        src={video}
                        title="Feria de la solidaridad| Mensaje del rector"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen />
                </IframeStyled>
                <div className='message'>
                    <p>{message}</p>
                    <h2>- {author} -</h2>
                </div>
            </div>
        </MessageContainer>
    )
}

export default Message