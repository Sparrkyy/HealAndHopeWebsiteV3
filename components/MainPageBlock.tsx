import { useRouter } from "next/router";
import { MainPageBlock2Props } from "../types/types";

export const MainPageBlock = ({
	containerID,
	imageSource,
	imageAlt,
	header,
	mainText,
	buttonText,
	buttonHREF,
	imageID,
}: MainPageBlock2Props) => {
	const router = useRouter();
	return (
		<>
			<img src={imageSource} alt={imageAlt} className='main-page-image' id={imageID ? imageID : undefined}></img>
			<div className='main-page-right-side-container'>
				<div className='main-right-side-long-text'>{header}</div>
				<div className='main-right-light-text'>{mainText}</div>
				{buttonText && buttonHREF && (
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
		</>
	);
};

export const ArrowSVG = () => {
	return (
		<svg
			id='SVGDoc'
			width='18'
			height='12'
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
