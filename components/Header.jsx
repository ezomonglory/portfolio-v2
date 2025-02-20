import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const Header = ({next, prev}) => {
	const menuRef = useRef();
	const router = useRouter();

	return (
		<div className='md:bg-[#F4F2EE] md:px-[80px] px-[20px] pt-[30px]'>
			<div className='flex justify-between border-transparent border-[0.5px] border-b-[#9F9F9F] pb-[30px] items-center fadein  '>
				<svg
					width='53'
					height='32'
					viewBox='0 0 53 32'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g id='Logo'>
						<g id='_105553361090592'>
							<path
								id='Vector'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M26.9143 22.8619C26.2992 22.5653 26.5346 22.6246 26.0481 22.2567C25.8088 22.0768 25.872 22.1677 25.6624 22.0293C25.2016 21.7248 25.5339 21.9818 25.3163 21.7168C24.5984 20.8862 23.75 20.3404 22.9649 19.5829C22.4388 19.0767 21.2443 17.6982 20.1289 18.157C20.3484 18.7701 20.3326 18.1037 21.1395 18.8275C23.4949 20.9436 24.5094 24.535 26.7125 27.0466C32.2105 33.3178 44.3177 33.5591 49.4972 28.1976C52.6081 24.976 52.9522 21.26 52.8236 15.5999L40.7441 15.5742V19.7095L48.0693 19.7649C48.3957 27.8377 38.8989 29.0184 32.1254 26.0301C30.8498 25.4665 27.5175 23.653 26.9162 22.8639L26.9143 22.8619Z'
								fill='#111821'
							/>
							<path
								id='Vector_2'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M32.886 24.2324C32.9414 24.1889 33.06 23.9714 33.0818 23.9555C32.9671 23.7202 33.1332 23.8962 32.8128 23.8191C32.5498 23.9377 32.1641 23.6846 31.998 23.5857C30.9498 22.9628 30.2399 22.5277 29.431 21.5922C25.539 17.0931 27.7559 4.90472 38.4294 4.55467C41.2891 4.46172 43.1283 5.08469 45.1712 6.61144L46.7672 7.99976C47.3743 7.63192 47.938 7.15728 48.4937 6.74592L50.2736 5.32003C49.6585 4.27187 47.1331 2.22301 45.719 1.52885C39.6041 -1.47324 31.1832 0.110864 26.8937 4.83748C24.5699 7.39855 21.3878 11.9511 23.7136 16.7074C24.6569 18.6356 26.1362 20.2455 27.3821 21.3787C28.3492 22.2567 30.8707 24.3768 32.886 24.2324Z'
								fill='#111821'
							/>
							<path
								id='Vector_3'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M1.21222 10.7784C1.17465 10.7586 1.12323 10.7349 1.0995 10.721L0.484444 10.2227C0.124509 9.71243 0.587282 9.96359 0.229325 9.62739L0.164062 10.0051C0.185817 11.9076 4.2776 14.0949 6.4649 14.8702C8.38323 15.5505 13.628 17.0515 15.7757 16.7707L19.3375 16.9289C19.3415 15.6771 19.5254 13.6638 19.1991 12.6097L6.76352 12.6493C6.54994 12.4179 6.66464 12.9083 6.53214 12.1509L6.46885 4.91659L19.3375 4.92055L19.3336 0.767456L1.76201 0.771411L1.75015 11.1818L1.21222 10.7784Z'
								fill='#111821'
							/>
							<path
								id='Vector_4'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M19.3954 31.2788L19.4132 26.8785C17.2576 26.8686 15.1197 26.8726 12.9819 26.8726C11.6707 26.8726 7.64415 27.0348 6.65927 26.7935L6.64148 17.9118L7.07854 18.0582C7.39694 17.9929 7.35343 17.894 7.35343 18.1551C7.85181 18.5031 8.83866 18.784 8.58552 19.1518L8.90986 19.2467L8.83273 18.8453C8.45697 17.4906 2.52003 14.7436 1.84367 13.4423C1.59646 14.3797 1.7606 28.9669 1.75863 31.2274L19.3974 31.2788H19.3954Z'
								fill='#111821'
							/>
							<path
								id='Vector_5'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M6.76342 12.6493L6.73376 4.96209C8.00737 5.21127 17.959 5.17172 19.4956 5.00362L19.4917 1.23023C19.551 0.332375 19.5391 1.04829 19.3334 0.767461L19.3374 4.92055L6.46875 4.9166L6.53204 12.1509C6.66454 12.9103 6.54983 12.4179 6.76342 12.6493Z'
								fill='#111821'
							/>
							<path
								id='Vector_6'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M19.3946 31.2788C19.5053 31.1443 19.622 31.4865 19.5884 30.1694C19.5647 29.2122 19.6556 27.5311 19.5093 26.835C18.7459 26.5581 8.47194 26.7164 6.79488 26.7322L6.79884 19.8657C6.79884 18.7424 6.60107 17.9988 7.07769 18.0562L7.35258 18.1531C7.35258 17.892 7.39609 17.9909 7.07769 18.0562L6.64062 17.9098L6.65842 26.7915C7.64528 27.0348 11.6698 26.8706 12.981 26.8706C15.1189 26.8706 17.2567 26.8667 19.4124 26.8765L19.3946 31.2768V31.2788Z'
								fill='#111821'
							/>
							<path
								id='Vector_7'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M15.7734 16.7727C15.9811 17.1247 18.9159 17.0377 19.4756 16.9447L19.4954 13.6519C19.5172 12.5385 19.5013 12.8015 19.1968 12.6097C19.5251 13.6658 19.3392 15.677 19.3352 16.9289L15.7734 16.7707V16.7727Z'
								fill='#111821'
							/>
							<path
								id='Vector_8'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M0.162168 10.0051L0.227431 9.62741C0.585388 9.96361 0.122615 9.71245 0.48255 10.2227L1.0976 10.7211C1.12134 10.7349 1.17275 10.7586 1.21033 10.7784C1.1866 10.7448 1.15298 10.6538 1.13913 10.6795L0.907748 10.4244C-0.134481 9.43755 0.747557 10.1436 0.437064 9.40393C0.205677 9.50479 0.128548 9.51072 0 9.58192C0.00197766 10.3512 -0.011866 9.77573 0.160191 10.0032L0.162168 10.0051Z'
								fill='#111821'
							/>
							<path
								id='Vector_9'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M32.8824 24.2324C33.2977 24.0406 33.003 24.5053 33.2067 23.9595L33.1711 23.5857C32.4888 23.6154 32.9832 23.5402 32.8112 23.8191C33.1316 23.8962 32.9654 23.7202 33.0801 23.9555C33.0584 23.9714 32.9397 24.1889 32.8843 24.2324H32.8824Z'
								fill='#111821'
							/>
							<path
								id='Vector_10'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M8.58401 19.1498C8.72442 19.308 8.61565 19.5849 8.94394 19.2962C9.29201 18.9877 8.9301 18.9521 8.82924 18.8453L8.90637 19.2467L8.58203 19.1518L8.58401 19.1498Z'
								fill='#111821'
							/>
							<path
								id='Vector_11'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M26.9105 22.8619C26.8808 22.8283 26.8373 22.7333 26.8195 22.763L25.3125 21.7168C25.5281 21.9818 25.1958 21.7247 25.6586 22.0293C25.8682 22.1677 25.8049 22.0768 26.0442 22.2567C26.5307 22.6246 26.2954 22.5652 26.9105 22.8619Z'
								fill='#111821'
							/>
						</g>
					</g>
				</svg>

				<ul className=' space-x-[48px] items-center hidden md:flex neuereg'>
					<a
						href='#works'
						className='text-[16px] text-[#202020] cursor-pointer '
					>
						WORK
					</a>
					<a
						href='/EG RESUME.pdf'
						download='ezomon glory resume'
						className='text-[16px] text-[#202020] cursor-pointer '
					>
						RESUME
					</a>
					<a
						href='#about'
						className='text-[16px] text-[#202020] cursor-pointer '
					>
						ABOUT ME
					</a>
				</ul>

				<a
					href='#contact'
					className='text-[16px] text-[#202020] hidden md:block neuereg cursor-pointer'
				>
					CONTACT ME
				</a>

				<Image
					src='/menu.svg'
					width={32}
					height={32}
					alt='menu'
					className='block md:hidden'
					onClick={() => {
						document.getElementById("menu").style = "right: 0px;";
					}}
				/>
			</div>

			<div
				ref={menuRef}
				className=' w-screen px-[20px] py-[104px] h-screen bg-[#EAE8E4] z-30 fixed top-0 right-[100%] flex-col space-y-[24px] anim '
				id='menu'
			>
				<div
					className='absolute top-[40px] right-[20px] '
					onClick={() => {
						document.getElementById("menu").style = "right: 100%;";
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='32'
						height='32'
						viewBox='0 0 32 32'
						fill='none'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M29.3346 16C29.3346 23.3638 23.3651 29.3333 16.0013 29.3333C8.63751 29.3333 2.66797 23.3638 2.66797 16C2.66797 8.63619 8.63751 2.66666 16.0013 2.66666C23.3651 2.66666 29.3346 8.63619 29.3346 16ZM11.9608 11.9595C12.3513 11.569 12.9845 11.569 13.375 11.9595L16.0013 14.5858L18.6275 11.9595C19.018 11.569 19.6512 11.569 20.0417 11.9595C20.4322 12.3501 20.4322 12.9832 20.0417 13.3738L17.4155 16L20.0417 18.6262C20.4322 19.0167 20.4322 19.6499 20.0417 20.0404C19.6511 20.4309 19.018 20.4309 18.6274 20.0404L16.0013 17.4142L13.375 20.0404C12.9845 20.4309 12.3514 20.4309 11.9608 20.0404C11.5703 19.6499 11.5703 19.0167 11.9608 18.6262L14.587 16L11.9608 13.3737C11.5703 12.9832 11.5703 12.35 11.9608 11.9595Z'
							fill='#1C1B1F'
						/>
					</svg>
				</div>
				<div className='flex flex-col space-y-[24px] '>
					<a
						className='text-[20px] leading-[24px] uppercase text-[#202020] border-[0.5px] pb-[16px] px-[8px] border-transparent border-b-[#6d6b6b94] neue-md '
						onClick={() => {
							// document.getElementById("menu").style = "display:none";
							// setTimeout(() => {
							// 	document.getElementById("menu").style = "right:100%";
							// 	// window.location.href = "/#works";
							// }, 1000);
							document.getElementById("menu").style = "right:100%";
							router.push("/#works");
							//     setTimeout(() => {
							//         window.location.href="/#works"
							//     }, 1000);
						}}
					>
						Works
					</a>

					<a
						href='/EG RESUME.pdf'
						download='ezomon glory resume'
						className='text-[20px] leading-[24px] uppercase text-[#202020] border-[0.5px] pb-[16px] px-[8px] border-transparent border-b-[#6d6b6b94] neue-md '
					>
						Resume
					</a>

					<a
						className='text-[20px] leading-[24px] uppercase text-[#202020] border-[0.5px] pb-[16px] px-[8px] border-transparent border-b-[#6d6b6b94] neue-md '
						onClick={() => {
							router.push("/#about");
							document.getElementById("menu").style = "right:100%";
							// document.getElementById("menu").style = "display:none";
							// setTimeout(() => {
							// 	document.getElementById("menu").style = "right:100%";
							// 	// window.location.href = "/#contact";
							// }, 1000);
						}}
					>
						About me
					</a>

					<a
						className='text-[20px] leading-[24px] uppercase text-[#202020] border-[0.5px] pb-[16px] px-[8px] border-transparent border-b-[#6d6b6b94] neue-md '
						onClick={() => {
							// document.getElementById("menu").style = "display:none";
							router.push("/#contact");
							document.getElementById("menu").style = "right:100%";
							// setTimeout(() => {
							// 	document.getElementById("menu").style = "right:100%";
							// 	// window.location.href = "/#contact";
							// }, 1000);
						}}
					>
						contact me
					</a>



{/* 
					<Link
              href="/#works"
              className="h-[48px] py-[10px] bg-[#DE3F3B] rounded-full px-[16px] flex items-center space-x-[8px]"
            >
              <span>{returnArr}</span>
              <h2 className="neuemd text-[18px] text-white">Return</h2>
            </Link> */}


           {
			next &&  <div
			onClick={() => {
				next();
				document.getElementById("menu").style = "right:100%";
			}}

			className="h-[48px] py-[10px] bg-[#DE3F3B] rounded-full px-[24px] w-fit"
		  >
			<h2 className="neuemd text-[18px] text-white">Next project</h2>
		  </div>
		   }
				</div>
			</div>
		</div>
	);
};

export default Header;
