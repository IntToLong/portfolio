import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';

function App() {
	return (
		<div className='grid h-screen grid-rows-[100px_1fr_100px]'>
			<Header />
			<main className='px-4 sm:px-6 md:px-20 lg:px-28'>
				<Hero />
				<Skills />
			</main>
			<Footer />
		</div>
	);
}

export default App;
