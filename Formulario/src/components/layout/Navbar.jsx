import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.image}>

      <div className={styles.info_flex}>
        <div className={styles.box}>1</div>
        <div>
         <p>STEP 1</p>
         <h3>YOUR INFO</h3>
        </div>
      </div>

      <div className={styles.info_flex}>
      <div className={styles.box}>2</div>
        <div>
         <p>STEP 2</p>
         <h3>SELECT PLAN</h3>
        </div>
      </div>

      <div className={styles.info_flex}>
      <div className={styles.box}>3</div>
        <div>
         <p>STEP 3</p>
         <h3>ADD-ONS</h3>
        </div>
      </div>

      <div className={styles.info_flex}>
      <div className={styles.box}>4</div>
        <div>
         <p>STEP 4</p>
         <h3>SUMMARY</h3>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
