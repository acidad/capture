import Wave from './Wave';

// Images
import home1 from '../img/home1.png';

//Styled
import { About, Description, Image, Hide } from '../styles';

// Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';

const AboutSection = () => {
	return (
		<About>
			<Description>
				<motion.div>
					<Hide>
						<motion.h2 variants={titleAnim}>We work to make</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>
							your <span>dreams</span> come{' '}
						</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>true</motion.h2>
					</Hide>
				</motion.div>
				<motion.p variants={fade}>
					Contact us for any photography or videography ideas that you may have.
					We have professionals with amazing skills.
				</motion.p>
				<motion.button variants={fade}>Contact Us</motion.button>
			</Description>
			<Image>
				<motion.img variants={photoAnim} src={home1} alt='guy with camera' />
			</Image>
			<Wave />
		</About>
	);
};

export default AboutSection;
