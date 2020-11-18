// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const NotFound = () => {
	return (
		<motion.div
			variants={pageAnimation}
			initial='hidden'
			animate='show'
			exit='exit'
		>
			<h2>404 Error</h2>
			<h3>Page Not Found</h3>
		</motion.div>
	);
};

export default NotFound;
