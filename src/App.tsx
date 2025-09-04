import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
	return (
		<div className='grid h-screen grid-rows-[100px_1fr_100px]'>
			<Header />
			<main>
				<Hero />
			</main>
			<Footer />
		</div>
	);
}

export default App;
