import styles from './Contacts.module.css'
import snapchatLogo from '../../assets/Snap.svg'
import facebookLogo from '../../assets/facebook-2.svg'
import xLogo from '../../assets/x_icon.svg'

const Contacts = () => {
  return (
    <section className={styles.contactsSection}>
      <div className={styles.container}>
        <div className={styles.infoAndForm}>
          <h1>Контакты</h1>
          <ul className={styles.contactList}>
            <li>- 8 800 000 00 00</li>
            <li>- email@example.com</li>
          </ul>

          <form className={styles.contactForm}>
            <div className={styles.formRow}>
              <input
                type="email"
                placeholder="Ваш email"
                className={styles.inputField}
              />
              <input
                type="text"
                placeholder="Ваше имя"
                className={styles.inputField}
              />
            </div>
            <textarea
              placeholder="Введите сообщение"
              className={styles.messageField}
            ></textarea>
            <button type="submit" className={styles.submitButton}>
              Отправить
            </button>
          </form>
        </div>

        <div className={styles.socials}>
          <p>Найдите нас:</p>
          <div className={styles.socialIcons}>
            <a
              href="https://www.snapchat.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={snapchatLogo} alt="Snapchat" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookLogo} alt="Facebook" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={xLogo} alt="X" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
