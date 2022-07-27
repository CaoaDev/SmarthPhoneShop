import styles from '../../styles/about.module.css'

function About() {
	return (
		<div className={styles.about}>
			<h1 className={styles.title}>¿Quiénes somos?</h1>
      <p className={styles.parrafo}>
        Somos una empresa que ha revolucionado la industria retail
        con una nueva forma de conectar a las personas a través de
        la venta de celulares a crédito. Ofrecemos diversos
        productos financieros, de manera eficiente, ágil, cómoda y
        confiable.
      </p>
      <img
        src="https://macropay.mx/wp-content/uploads/2021/08/logos-fin.jpg"
        alt="Logos somos macropay"
        className={styles.image}
      />
    </div>
	)
}

export default About
