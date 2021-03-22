import React, { Fragment } from 'react';
import styles from './styles.module.scss';

export const Home = () => {
  return (
    <>
    <div className={styles.newsContainer}>
      <h2>Top news</h2>
      <div className={styles.news}>
        <div className={styles.newsItem}>
          <div style={{ backgroundImage: 'url("https://cutt.ly/DjZsHKK")' }} className={styles.newsItemImg}></div>
        </div>
        <div className={styles.newsItem}>
          <div style={{ backgroundImage: 'url("https://static.footballhd.ru/uploads/posts/2021-01/1611297408_liver.jpg")' }} className={styles.newsItemImg}></div>
        </div>
        <div className={styles.newsItem}>
          <div style={{ backgroundImage: 'url("https://m.dw.com/image/52359549_401.jpg")' }} className={styles.newsItemImg}></div>
        </div>
        <div className={styles.newsItem}>
          <div style={{ backgroundImage: 'url("https://s0.rbk.ru/v6_top_pics/resized/1200xH/media/img/3/35/756111841679353.jpg")' }} className={styles.newsItemImg}></div>
        </div>
      </div>
    </div>
    <div className={styles.homeWrapper}>
      <div className={styles.postWrapper}>
          <div className={styles.postCreateForm}>
            <img src="https://cutt.ly/5jZr5qf" alt="userpic" />
            <form>
              <input placeholder="Create your post"></input>
            </form>
            <div className={styles.postCreateIcons}>
              <i className="fas fa-camera-retro"></i>
              <i className="far fa-smile-beam"></i>
              <i className="fas fa-microphone"></i>
            </div>
          </div>
      </div>
      <div className={styles.widgetWrapper}>
          <div className={styles.wallet}>
            <h3>Wallet</h3>
            <span>Hi Albert, your total balance</span>
            <div className={styles.balance}>
              <i class="fas fa-balance-scale-right"></i>
              <span style={{marginLeft: '15px'}}>1400</span>
            </div>
            <div className={styles.transactions}>
              <div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Angela Merkel</div>
                  <div style={{ fontSize: '0.8rem', color: '#8f8db1'}}>Yesterday at 14:53</div>
                </div>
                <div style={{ color: '#4f86d6' }}><span style={{ fontSize: '0.8rem'}}>received + </span>$150</div>
              </div>
              <div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Angela Merkel</div>
                  <div style={{ fontSize: '0.8rem', color: '#8f8db1'}}>Yesterday at 14:53</div>
                </div>
                <div style={{ color: '#4f86d6' }}><span style={{ fontSize: '0.8rem'}}>received + </span>$150</div>
              </div>
              <div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Angela Merkel</div>
                  <div style={{ fontSize: '0.8rem', color: '#8f8db1'}}>Yesterday at 14:53</div>
                </div>
                <div style={{ color: '#4f86d6' }}><span style={{ fontSize: '0.8rem'}}>received + </span>$150</div>
              </div>
              <div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Angela Merkel</div>
                  <div style={{ fontSize: '0.8rem', color: '#8f8db1'}}>Yesterday at 14:53</div>
                </div>
                <div style={{ color: '#4f86d6'}}><span style={{ fontSize: '0.8rem'}}>received + </span>$150</div>
              </div>
            </div>
          </div>
          <div className={styles.suggestions}></div>
      </div>
    </div>
    </>
  );
}