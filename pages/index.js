import { useRouter } from 'next/router';

import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Heal and Hope</title>
				<meta name='description' content='Heal And Hope Website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<div className='main-whole-page-container'>
					<div className='spacer'></div>
					<div className='container'>
						<MainPageBlock2
							containerID='firstMainPageBlock'
							header='Student Organization. Global Impact.'
							mainText='Giving children a second chance at life'
							buttonText='Donate Here'
							imageSource='/Logo.png'
							imageAlt='Heal And Hope Logo'
							buttonHREF='/'
						/>
					</div>
					<div className='main-cards-container'>
						<MainPageCard
							titleText='Fundraising Goal:'
							titleNumber='10,000$'
							imageSRC='/fundraising.png'
							imageALT='fundraising hands'
						/>
						<MainPageCard
							titleText='Funds raised:'
							titleNumber='5,000$'
							imageSRC='/fundraisingHeart.png'
							imageALT='fundraising heart'
						/>
						<MainPageCard
							titleText='Surgeries Funded:'
							titleNumber='43'
							imageSRC='/doctor.png'
							imageALT='fundraising doctor'
						/>
					</div>
					<div className='container'>
						<div className='front-page-section-container'>
							<MainPageBlock
								imageSource='/cowfLogo2.png'
								imageAlt='Children of war foundation logo'
								header='Who are we? '
								mainText='Heal and Hope is a student organization founded at McGill University.
								Our mission is to raise awareness about the overlooked cases of children with
								war-related injuries and fundraising for the reconstructive surgeries they require. 
								Our partnership with the Children of War foundation is crucial in meeting that goal. 
								COWF has evolved from saving one life at a time to now being on
								the forefront of systematic change with life enabling healthcare
								and education.
 '
								buttonText='Learn More'
								buttonHREF='/about'
								containerID='secondMainPageBlock'
							/>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

const MainPageBlock2 = ({
	containerID,
	imageSource,
	imageAlt,
	header,
	mainText,
	buttonText,
	buttonHREF,
}) => {
	const router = useRouter();
	return (
		<div className='front-page-section-container' id={containerID}>
			<div className='front-page-section-text-container'>
				<p className='front-page-section-caps-smaller-message'>{header}</p>
				<div className='front-page-section-larger-message'>{mainText}</div>
				<div class='front-page-section-donation-button-container'>
					<a>
						<button
							color='#fff'
							class='front-page-section-donation-button'
							onClick={() => router.push(buttonHREF)}
						>
							{buttonText}
							<ArrowSVG />
						</button>
					</a>
				</div>
			</div>
			<img
				src={imageSource}
				alt={imageAlt}
				className='front-page-section-image'
			></img>
		</div>
	);
};

const ArrowSVG = () => {
	return (
		<svg
			id='SVGDoc'
			width='18'
			height='12'
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			viewBox='0 0 18 12'
			className='Button___StyledSvg-w61ggs-1 kJIzYi'
		>
			<defs></defs>
			<desc>Generated with Avocode.</desc>
			<g>
				<g>
					<title>tail-right</title>
					<g>
						<title>Path</title>
						<path
							d='M1,5.5h16'
							fillOpacity='0'
							fill='#ffffff'
							strokeLinejoin='round'
							strokeLinecap='round'
							strokeOpacity='1'
							stroke='#ffffff'
							strokeMiterlimit='20'
							strokeWidth='2'
						></path>
					</g>
					<g>
						<title>Path</title>
						<path
							d='M12,1v0l5,5v0l-5,5v0'
							fillOpacity='0'
							fill='#ffffff'
							strokeLinejoin='round'
							strokeLinecap='round'
							strokeOpacity='1'
							stroke='#ffffff'
							strokeMiterlimit='20'
							strokeWidth='2'
						></path>
					</g>
				</g>
			</g>
		</svg>
	);
};

const MainPageBlock = ({
	containerID,
	imageSource,
	imageAlt,
	header,
	mainText,
	buttonText,
	buttonHREF,
}) => {
	const router = useRouter();
	return (
		<>
			<img src={imageSource} alt={imageAlt} className='main-page-image'></img>
			<div className='main-page-right-side-container'>
				<div className='main-right-side-long-text'>{header}</div>
				<div className='main-right-light-text'>{mainText}</div>
				<div class='front-page-section-donation-button-container'>
					<a>
						<button
							color='#fff'
							class='front-page-section-donation-button'
							onClick={() => router.push(buttonHREF)}
						>
							{buttonText}
							<ArrowSVG />
						</button>
					</a>
				</div>
			</div>
		</>
	);
};

const MainPageCard = ({ imageSRC, imageALT, titleText, titleNumber }) => {
	return (
		<div className='main-card'>
			<h3 className='main-card-title'>{titleText}</h3>
			<div className='main-card-image-container'>
				<h4 className='main-card-display-number'>{titleNumber}</h4>
				<img className='main-card-icon' src={imageSRC} alt={imageALT}></img>
			</div>
		</div>
	);
};
