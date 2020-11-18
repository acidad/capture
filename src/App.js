// Router
import { Route, Switch, useLocation } from 'react-router-dom';
// Global Style
import GlobalStyles from './components/GlobalStyle';
// Import Pages
import Nav from './components/Nav';
import NotFound from './pages/404';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
// Animation
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();

	return (
		<div className='App'>
			<GlobalStyles />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route exact path='/' component={AboutUs} />
					<Route exact path='/work' component={OurWork} />
					<Route path='/work/:id' component={MovieDetail} />
					<Route path='/contact' component={ContactUs} />
					<Route component={NotFound} />
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
