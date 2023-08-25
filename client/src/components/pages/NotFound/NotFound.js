import styles from './NotFound.module.scss';

const NotFound = () => {
  return(
    <div>
      <h1 className={styles.h1notfound}>Oops! Nothing found!</h1>
        <p className={styles.notfound}>404</p>
        <p className={styles.pnotfound}>Such site does not exist.</p>
    </div>
  )
}

export default NotFound;