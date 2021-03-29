import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { useStore } from 'effector-react';
import { $messages, fileToBase64Fx, send} from './model'

const messageStatusText = {
  sending: 'fas fa-check',
  send: 'fas fa-check-double'
}

export const Messenger = () => {
  const messages = useStore($messages);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = e => {
    const formElements = e.currentTarget.elements

    
      const formatedValues = {
        text: formElements.chatMessage.value,
      }

      send(formatedValues)
    
    
    e.currentTarget.reset()
    e.preventDefault()
  }

  const handleFileInputChange = e => {
    const file = e.target.files[0];
    
    fileToBase64Fx( file )

    e.target.value = null;
  };

  return (
    <>
      <div className={styles.chatsFilter}>
        <div>All</div>
        <div>Unread</div>
        <div>Business</div>
        <div>Group</div>
      </div>
      <div className={styles.messenger}>
        <div className={styles.chatList}>
          <div className={styles.chatListSearch}>
            <form>
              <input placeholder="Search in all messages"></input>
            </form>
            <i className="fas fa-search" style={{ color: '#52537c' }}></i>
          </div>
          <div className={styles.list}>
            <div className={styles.chatListItem}>
              <img src="https://cutt.ly/5jZr5qf" alt="userpic" />
              <div className={styles.chatListName}>
                <div style={{ fontWeight: 'bold' }}>Piere Barbosa</div>
                <div style={{ fontSize: '14px', color: 'gray' }}>I'll notify you</div>
              </div>
              <div className={styles.chatListTime}>
                <div style={{ fontSize: '14px', color: 'gray' }}>17:42</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chat}>
          <div className={styles.chatDate}>
            <div>Today</div>
          </div>
          <div className={styles.messagesWrapper}>
            {
              messages.map(msg => {
                return (
                  <div className={styles.yourMessage} key={msg.uuid}>
                    <div className={styles.messageBody}>
                    <div>
                        {msg.base64URL && <div><img src={msg.base64URL} alt="img"></img></div>}
                        {msg.text}
                        <i className={[`${messageStatusText[msg.status]}`, styles.messageStatus].join(' ')}></i>
                    </div>
                    </div>
                    <div className={styles.messageTime}>{msg.time}</div>
                    
                  </div>
                )
              })
            }
            <div ref={messagesEndRef}></div>

          </div>
          <form className={styles.chatForm} onSubmit={handleSubmit}>
            <input type="file"
              id="file-upload"
              onChange={handleFileInputChange}
            >
            </input>
            <label for="file-upload">
              <i className="fas fa-plus-circle"></i>
            </label>
            <div className={styles.chatInput}>
              <input
                name="chatMessage"
                placeholder="Type something"
                autoComplete="off"
              />
            </div>
            <div className={styles.chatIcons}>
              <i className="fas fa-wallet"></i>
              <i className="far fa-laugh-beam"></i>
              <i className="fas fa-camera-retro"></i>
              <i className="fas fa-microphone"></i>
            </div>
          </form>
        </div>
        <div className={styles.companionInfo}>
          <div className={styles.contactAvatar}>
            <img src="https://cutt.ly/5jZr5qf" style={{ width: '100px', borderRadius: '50%' }} alt="userpic"></img>
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Piere Barbosa</div>
            <div style={{ fontSize: '14px', color: 'gray' }}>Active 17 min ago</div>
          </div>
          <div className={styles.contactInfo}>
            <div>
              <i className="fas fa-key"></i>
              <div>39e65da2398b1c43</div>
            </div>
            <div>
              <i className="fas fa-phone-alt"></i>
              <div>+45 394 2000134</div>
            </div>
            <div>
              <i className="fas fa-link"></i>
              <div>www.websitehere.com</div>
            </div>
          </div>
          <div className={styles.contactButtons}>
            <div><a href="/">Edit contact</a></div>
          </div>
        </div>
      </div>
    </>
  );
}