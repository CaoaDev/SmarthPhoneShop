// import css module
import SimpleMap from './map'
import styles from './styles/footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<ul>
				<li>
					<a href="https://www.facebook.com/groups/1026099821359053">
						Facebook
					</a>
				</li>
				<li>
					<a href="sadasdadas">Ubicanos por google maps</a>
				</li>
				<li>
					<span>
						Ubicanos en: México - Yucatán 97158 - AV CIRCUITO COLONIAS #70 X 20
						LOCAL 5D COL. CHUMINOPOLIS CP 97158
					</span>
          <SimpleMap/>
				</li>
			</ul>
		</footer>
	)
}

export default Footer
