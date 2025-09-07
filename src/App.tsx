import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Cursor from './components/UI/Cursor';

function App() {
	return (
		<>
			<div className='grid h-screen grid-rows-[100px_1fr_100px]'>
				<Header />
				<main>
					<Hero />
					<Skills />
					<AboutMe />
					<Projects />
					<Contact />
				</main>
				<Footer />
			</div>
			<Cursor />
		</>
	);
}

export default App;
