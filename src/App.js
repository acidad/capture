import { Route, Switch } from 'react-router-dom';

// Import Pages
import Nav from './components/Nav';
import NotFound from './pages/404';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';

// Global Style
import GlobalStyles from './components/GlobalStyle';

function App() {
	return (
		<div className='App'>
			<GlobalStyles />
			<Nav />
			<Switch>
				<Route exact path='/' component={AboutUs} />
				<Route exact path='/work' component={OurWork} />
				<Route path='/work/:id' component={MovieDetail} />
				<Route path='/contact' component={ContactUs} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
}

export default App;
