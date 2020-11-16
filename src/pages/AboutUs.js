import { Fragment } from 'react';

import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';

const AboutUs = () => {
	return (
		<Fragment className='about-us'>
			<AboutSection />
			<ServicesSection />
		</Fragment>
	);
};

export default AboutUs;
