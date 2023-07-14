import styles from "./step1.module.css"
import LinkButton from "../layout/LinkButton"


function Step1(){
  
    return (
      <div className={styles.conteiner}>
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>

          <div className={styles.form}>
              <label htmlFor="nome">Name</label>
              <input id="nome" type="name" className={styles.input}/>

              <label htmlFor="nome">Email Address</label>
              <input id="email" type="email" className={styles.input}/>

              <label htmlFor="nome">Phone Number</label>
              <input id="telefone" type="number" className={styles.input}/>
          </div>
          
          <div className={styles.btns}>
            <LinkButton to="/form2" text="Next Step"/>
          </div>
        
      </div>
    )
}

export default Step1