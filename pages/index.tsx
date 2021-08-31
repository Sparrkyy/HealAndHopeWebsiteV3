import { useRouter } from "next/router";

import Head from "next/head";
import { MainPageBlock2Props } from "../types/types";
import { MainPageBlock, ArrowSVG } from "../components/MainPageBlock";

export default function Home() {
	return (
		<>
			<Head>
				<title>Heal and Hope</title>
				<meta name='description' content='Heal And Hope Website' />
				{/* <link rel='icon' href='/favicon.ico' /> */}
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
								and education.'
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
}: MainPageBlock2Props) => {
	const router = useRouter();
	return (
		<div className='front-page-section-container' id={containerID}>
			<div className='front-page-section-text-container'>
				<p className='front-page-section-caps-smaller-message'>{header}</p>
				<div className='front-page-section-larger-message'>{mainText}</div>
				{buttonHREF && buttonText && (
					<div className='front-page-section-donation-button-container'>
						<a>
							<button
								color='#fff'
								className='front-page-section-donation-button'
								onClick={() => router.push(buttonHREF)}
							>
								{buttonText}
								<ArrowSVG />
							</button>
						</a>
					</div>
				)}
			</div>
			<img src={imageSource} alt={imageAlt} className='front-page-section-image'></img>
		</div>
	);
};

const MainPageCard = ({
	imageSRC,
	imageALT,
	titleText,
	titleNumber,
}: {
	imageSRC: string;
	imageALT: string;
	titleText: string;
	titleNumber: string;
}) => {
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
