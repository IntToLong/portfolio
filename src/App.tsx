import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Cursor from './components/UI/Cursor';
import CursorProvider from './contexts/CursorProvider';

function App() {
	return (
		<CursorProvider>
			<div className='grid min-h-screen grid-rows-[auto_1fr_auto]'>
				<Header />
				<main className='overflow-x-hidden'>
					<Hero />
					<Skills />
					<AboutMe />
					<Projects />
					<Contact />
				</main>
				<Footer />
			</div>
			<Cursor />
		</CursorProvider>
	);
}

export default App;
