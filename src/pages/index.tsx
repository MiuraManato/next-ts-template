import styles from "../styles/Home.module.css";
import format from "../components/format";

const Home = () => {
	return (
		<>
			<div className={styles.template}>
				<h1>My template</h1>
				{format()}
			</div>
		</>
	);
};

export default Home;
