import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

import { MovieState } from '../movieState';

const MovieDetail = () => {
	const history = useHistory();
	const url = history.location.pathname;

	// State
	const [movies] = useState(MovieState());
	const [movie, setMovie] = useState(null);

	// UseEffect
	useEffect(() => {
		const updateMovie = async () => {
			const currentMovie = await movies.find(
				stateMovie => stateMovie.url === url
			);
			setMovie(currentMovie);
		};
		updateMovie();
	}, [url, movies]);

	return (
		<>
			{movie && (
				<Details>
					<HeadLine>
						<h2>{movie.title}</h2>
						<img src={movie.mainImg} alt={movie.title} />
					</HeadLine>
					<Awards>
						{movie.awards.map(award => (
							<Award
								key={award.title}
								title={award.title}
								description={award.description}
							/>
						))}
					</Awards>
					<ImageDisplay>
						<img src={movie.secondaryImg} alt='movie' />
					</ImageDisplay>
				</Details>
			)}
		</>
	);
};

const Details = styled.div`
	color: white;
`;

const HeadLine = styled.div`
	min-height: 90vh;
	padding-top: 20vh;
	position: relative;

	h2 {
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -10%);
	}

	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;

const Awards = styled.div`
	min-height: 80vh;
	display: flex;
	margin: 5rem 10rem;
	align-items: center;
	justify-content: space-around;
`;

const ImageDisplay = styled.div`
	min-height: 50vh;

	img {
		width: 100%;
		height: 100vh;
		object-fit: cover;
	}
`;

// Award Component
const Award = ({ title, description }) => {
	return (
		<AwardStyle>
			<h3>{title}</h3>
			<div className='line'></div>
			<p>{description}</p>
		</AwardStyle>
	);
};

const AwardStyle = styled.div`
	padding: 5rem;
	h3 {
		font-size: 2rem;
	}

	p {
		padding: 2rem 0rem;
	}

	.line {
		width: 100%;
		background: #23d997;
		height: 0.5rem;
		margin: 1rem 0rem;
	}
`;

export default MovieDetail;
