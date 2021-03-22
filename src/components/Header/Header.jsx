import React from 'react';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header>
      <div className={styles.headerUpLine}>
        <div>
          <div>
            <h1>Velvet</h1>
          </div>
          <div className={styles.searchContainer}>
            <form>
              <input></input>
            </form>
            <i className="fas fa-search" style={{ color: '#b5b5cf' }}></i>
          </div>
          <div className={styles.userSide}>
            <i className="fas fa-question-circle"></i>
            <i className="fas fa-envelope"></i>
            <i className="fas fa-bell"></i>
            <img src="https://cutt.ly/5jZr5qf" alt="userpic"></img>
          </div>
        </div>
      </div>
      <div className={styles.headerDownLine}>
        <div className={styles.headerDownLineContainer}>
          <div>
            <div>
              <i className="fas fa-home"></i>
              <span>Home</span>
            </div>
          </div>
          <div>
            <div>
              <i className="fas fa-wallet"></i>
              <span>Wallet</span>
            </div>
          </div>
          <div>
            <div>
              <i className="fas fa-newspaper"></i>
              <span>News</span>
            </div>
          </div>
          <div>
            <div>
              <i className="fas fa-comment-alt"></i>
              <span>Messenger</span>
            </div>
          </div>
          <div>
            <div>
              <i className="fas fa-user-friends"></i>
              <span>Friends</span>
            </div>

          </div>
          <div>
            <div>
              <i className="fas fa-chalkboard-teacher"></i>
              <span>Teach</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}