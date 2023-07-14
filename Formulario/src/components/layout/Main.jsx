import styles from './Main.module.css'

function Main(props){
    return(
     <section className={styles.form}>{props.children}</section>
    )
}

export default Main
