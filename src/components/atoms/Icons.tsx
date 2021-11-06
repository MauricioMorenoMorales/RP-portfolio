import React, { useState } from 'react';
import styled from 'styled-components';
import { colorSystem } from '../../global/designSystem';

const Container = styled.div`
	cursor: pointer;
	user-select: none;
	display: inline;
`;
const SimpleContainer = styled.div`
	user-select: none;
	display: inline;
`;

//HTML

const Icons: React.FC<{
	type:
		| 'burger'
		| 'linkedin'
		| 'github'
		| 'email'
		| 'react'
		| 'typescript'
		| 'reduxToolkit'
		| 'figma'
		| 'html'
		| 'stylus'
		| 'javaScript'
		| 'css'
		| 'sass'
		| 'testingLibrary'
		| 'styledComponents'
		| 'storyBook'
		| string;
	oneColor?: boolean;
}> = ({ type, oneColor }) => {
	const [hover, setHover] = useState<boolean>(false);
	if (type === 'burger')
		return (
			<Container>
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					onClick={() => setHover(false)}
				>
					<path
						d="M0.999974 6.99998H30.9999C31.552 6.99998 31.9999 6.55194 31.9999 6C31.9999 5.44798 31.5519 5.00003 30.9999 5.00003H0.999974C0.448035 5.00003 0 5.44798 0 6C0 6.55203 0.448035 6.99998 0.999974 6.99998Z"
						fill={hover ? colorSystem.blue : '#f2f2f2'}
					/>
					<path
						d="M30.9999 15H0.999974C0.447952 15 0 15.4481 0 16C0 16.5519 0.448035 17 0.999974 17H30.9999C31.552 17 31.9999 16.5519 31.9999 16C31.9999 15.4481 31.552 15 30.9999 15Z"
						fill={hover ? colorSystem.blue : '#f2f2f2'}
					/>
					<path
						d="M30.9999 25H0.999974C0.447952 25 0 25.448 0 26C0 26.552 0.448035 26.9999 0.999974 26.9999H30.9999C31.552 26.9999 31.9999 26.5519 31.9999 26C32 25.448 31.552 25 30.9999 25Z"
						fill={hover ? colorSystem.blue : '#f2f2f2'}
					/>
				</svg>
			</Container>
		);
	else if (type === 'email')
		return (
			<Container>
				<svg
					width="32"
					height="22"
					viewBox="0 0 32 22"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M28.0913 0.137817H3.90873C1.75355 0.137817 0 1.89137 0 4.04655V17.9534C0 20.1086 1.75355 21.8622 3.90873 21.8622H28.0913C30.2464 21.8622 32 20.1086 32 17.9534V4.04697C32.0004 1.89137 30.2469 0.137817 28.0913 0.137817ZM26.1813 2.68782L16 9.24728L5.81868 2.68782H26.1813ZM28.0913 19.3126H3.90873C3.15945 19.3126 2.55 18.7027 2.55 17.9538V4.11922L15.2133 12.2622C15.2303 12.2729 15.2486 12.2801 15.266 12.2899C15.2843 12.3001 15.303 12.3098 15.3217 12.3192C15.4199 12.3698 15.521 12.4106 15.6243 12.4373C15.6349 12.4403 15.6455 12.4416 15.6562 12.4441C15.7697 12.4709 15.8844 12.4875 15.9992 12.4875C15.9996 12.4875 16 12.4875 16 12.4875C16.0009 12.4875 16.0013 12.4875 16.0017 12.4875C16.1165 12.4875 16.2312 12.4713 16.3447 12.4441C16.3553 12.4416 16.3659 12.4403 16.3766 12.4373C16.4798 12.4106 16.5806 12.3698 16.6792 12.3192C16.6979 12.3098 16.7166 12.3001 16.7348 12.2899C16.7523 12.2801 16.7705 12.2729 16.7875 12.2622L29.4508 4.11922V17.9534C29.4504 18.7027 28.8405 19.3126 28.0913 19.3126Z"
						fill="#56CCF2"
					/>
				</svg>
			</Container>
		);
	else if (type === 'github')
		return (
			<Container>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					onClick={() => setHover(false)}
				>
					<path
						d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
						fill={
							hover ? colorSystem.blue : oneColor ? colorSystem.blue : '#f2f2f2'
						}
					/>
				</svg>
			</Container>
		);
	else if (type === 'linkedin')
		return (
			<Container>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					onClick={() => setHover(false)}
				>
					<path
						d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"
						fill={hover ? colorSystem.blue : '#f2f2f2'}
					/>
				</svg>
			</Container>
		);
	else if (type === 'react')
		return (
			<SimpleContainer>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M14.23 12.004C14.23 12.5968 13.9946 13.1654 13.5754 13.5847C13.1563 14.004 12.5879 14.2397 11.995 14.24C11.402 14.24 10.8332 14.0044 10.4139 13.5851C9.99458 13.1658 9.759 12.597 9.759 12.004C9.759 11.4111 9.99444 10.8426 10.4136 10.4233C10.8327 10.004 11.4011 9.76826 11.994 9.76799C12.587 9.76799 13.1558 10.0036 13.5751 10.4229C13.9944 10.8422 14.23 11.411 14.23 12.004V12.004ZM16.878 1.314C15.532 1.314 13.771 2.274 11.99 3.936C10.21 2.283 8.448 1.334 7.103 1.334C6.693 1.334 6.32 1.427 5.997 1.612C4.622 2.405 4.314 4.876 5.024 7.977C1.98 8.917 0 10.42 0 12.004C0 13.594 1.99 15.101 5.043 16.034C4.339 19.147 4.653 21.622 6.031 22.414C6.351 22.601 6.721 22.689 7.133 22.689C8.478 22.689 10.24 21.729 12.021 20.065C13.801 21.719 15.563 22.668 16.908 22.668C17.318 22.668 17.691 22.578 18.014 22.393C19.388 21.601 19.697 19.13 18.987 16.028C22.02 15.096 24 13.59 24 12.004C24 10.414 22.01 8.90699 18.957 7.97199C19.661 4.862 19.347 2.385 17.969 1.592C17.651 1.408 17.281 1.315 16.877 1.314H16.878ZM16.873 2.404V2.41C17.098 2.41 17.279 2.454 17.431 2.537C18.097 2.919 18.386 4.372 18.161 6.241C18.107 6.701 18.019 7.186 17.911 7.681C16.951 7.445 15.905 7.26399 14.804 7.14699C14.144 6.24199 13.459 5.41999 12.769 4.69999C14.361 3.21999 15.856 2.408 16.874 2.405L16.873 2.404ZM7.103 2.424C8.115 2.424 9.617 3.232 11.213 4.704C10.527 5.424 9.843 6.24099 9.193 7.14599C8.086 7.26299 7.039 7.44399 6.08 7.68399C5.968 7.19399 5.885 6.71999 5.826 6.26399C5.596 4.39599 5.88 2.944 6.54 2.557C6.73 2.467 6.94 2.43 7.103 2.425V2.424ZM11.985 5.47399C12.44 5.94199 12.895 6.466 13.345 7.03799C12.905 7.01799 12.455 7.004 12 7.004C11.54 7.004 11.085 7.01399 10.64 7.03799C11.08 6.466 11.535 5.942 11.985 5.473V5.47399ZM12 8.1C12.74 8.1 13.477 8.13399 14.202 8.19299C14.608 8.77499 15.004 9.396 15.385 10.053C15.757 10.693 16.095 11.343 16.403 11.999C16.095 12.654 15.757 13.309 15.39 13.949C15.01 14.609 14.617 15.237 14.21 15.819C13.482 15.882 12.744 15.917 12 15.917C11.26 15.917 10.523 15.882 9.798 15.824C9.392 15.242 8.996 14.62 8.615 13.964C8.243 13.324 7.905 12.674 7.597 12.018C7.9 11.361 8.243 10.705 8.61 10.064C8.99 9.40399 9.383 8.77799 9.79 8.19599C10.518 8.13199 11.256 8.09799 12 8.09799V8.1ZM8.365 8.35399C8.125 8.73099 7.885 9.11699 7.661 9.51399C7.436 9.90399 7.226 10.296 7.026 10.688C6.761 10.032 6.536 9.37799 6.35 8.74099C6.99 8.59099 7.665 8.45799 8.365 8.35499V8.35399ZM15.625 8.35399C16.32 8.45699 16.99 8.58399 17.631 8.74099C17.451 9.37299 17.226 10.023 16.971 10.674C16.771 10.284 16.561 9.89099 16.331 9.49999C16.106 9.10799 15.866 8.72599 15.626 8.35399H15.625ZM18.688 9.029C19.172 9.179 19.632 9.346 20.063 9.527C21.795 10.267 22.915 11.235 22.915 12.003C22.91 12.771 21.79 13.743 20.058 14.478C19.638 14.658 19.178 14.82 18.703 14.971C18.423 14.013 18.057 13.015 17.603 11.991C18.053 10.974 18.413 9.981 18.688 9.027V9.029ZM5.293 9.03299C5.571 9.99299 5.938 10.99 6.393 12.013C5.943 13.03 5.581 14.023 5.307 14.977C4.823 14.827 4.363 14.659 3.937 14.477C2.205 13.74 1.085 12.771 1.085 12.003C1.085 11.235 2.205 10.261 3.937 9.527C4.357 9.347 4.817 9.18499 5.293 9.03299V9.03299ZM16.971 13.313C17.236 13.97 17.461 14.625 17.647 15.261C17.007 15.418 16.331 15.551 15.631 15.651C15.871 15.276 16.111 14.889 16.336 14.493C16.561 14.103 16.771 13.705 16.972 13.313H16.971ZM7.026 13.333C7.226 13.725 7.436 14.116 7.666 14.508C7.896 14.898 8.131 15.28 8.371 15.651C7.676 15.549 7.006 15.421 6.365 15.265C6.545 14.635 6.771 13.983 7.025 13.332L7.026 13.333ZM17.92 16.32C18.032 16.813 18.12 17.288 18.174 17.743C18.404 19.611 18.12 21.063 17.46 21.451C17.313 21.541 17.122 21.579 16.897 21.579C15.885 21.579 14.383 20.772 12.787 19.299C13.473 18.579 14.157 17.763 14.807 16.859C15.914 16.741 16.961 16.559 17.92 16.319V16.32ZM6.09 16.33C7.05 16.564 8.096 16.745 9.197 16.862C9.857 17.767 10.542 18.589 11.232 19.308C9.637 20.791 8.14 21.603 7.122 21.603C6.902 21.598 6.716 21.553 6.569 21.471C5.903 21.091 5.614 19.637 5.839 17.768C5.893 17.308 5.981 16.824 6.089 16.33H6.09ZM10.65 16.97C11.09 16.99 11.54 17.004 11.995 17.004C12.455 17.004 12.91 16.994 13.355 16.97C12.915 17.542 12.46 18.065 12.01 18.535C11.555 18.065 11.1 17.542 10.65 16.97Z"
						fill="#2F80ED"
					/>
				</svg>
			</SimpleContainer>
		);
	else if (type === 'figma')
		return (
			<SimpleContainer>
				<svg
					width="17"
					height="24"
					viewBox="0 0 17 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12.195 8.981H7.607V0H12.195C14.671 0 16.685 2.014 16.685 4.49C16.685 6.966 14.671 8.981 12.195 8.981ZM9.078 7.51H12.195C13.86 7.51 15.214 6.155 15.214 4.491C15.214 2.827 13.859 1.472 12.195 1.472H9.078V7.51ZM9.078 8.981H4.491C2.015 8.981 0.000999928 6.967 0.000999928 4.491C0.000999928 2.015 2.015 0 4.491 0H9.079V8.981H9.078ZM4.491 1.471C2.826 1.471 1.472 2.826 1.472 4.49C1.472 6.154 2.826 7.51 4.491 7.51H7.608V1.471H4.491ZM9.078 16.49H4.491C2.015 16.49 0.000999928 14.476 0.000999928 12C0.000999928 9.524 2.015 7.51 4.491 7.51H9.079V16.49H9.078ZM4.491 8.981C2.826 8.981 1.472 10.336 1.472 12C1.472 13.664 2.827 15.019 4.491 15.019H7.608V8.981H4.491ZM4.515 24C2.026 24 0 21.986 0 19.51C0 17.034 2.014 15.02 4.49 15.02H9.078V19.461C9.078 21.964 7.031 24 4.515 24ZM4.491 16.49C3.69064 16.4911 2.92336 16.8095 2.35741 17.3754C1.79147 17.9414 1.47306 18.7086 1.472 19.509C1.472 21.174 2.837 22.528 4.516 22.528C6.221 22.528 7.609 21.152 7.609 19.46V16.49H4.491ZM12.195 16.49H12.097C9.621 16.49 7.607 14.476 7.607 12C7.607 9.524 9.621 7.51 12.097 7.51H12.195C14.671 7.51 16.685 9.524 16.685 12C16.685 14.476 14.671 16.49 12.195 16.49ZM12.098 8.981C10.433 8.981 9.079 10.336 9.079 12C9.079 13.664 10.434 15.019 12.098 15.019H12.196C13.861 15.019 15.215 13.664 15.215 12C15.215 10.336 13.859 8.981 12.195 8.981H12.098Z"
						fill="#F2994A"
					/>
				</svg>
			</SimpleContainer>
		);
	else if (type === 'typescript')
		return (
			<SimpleContainer>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.125 0C0.502 0 0 0.502 0 1.125V22.875C0 23.498 0.502 24 1.125 24H22.875C23.498 24 24 23.498 24 22.875V1.125C24 0.502 23.498 0 22.875 0H1.125ZM18.488 9.75C19.1 9.75 19.642 9.787 20.115 9.861C20.5611 9.92784 20.9989 10.0418 21.421 10.201V12.659C21.2184 12.5189 21.0031 12.398 20.778 12.298C20.5458 12.1935 20.3062 12.1066 20.061 12.038C19.5966 11.9086 19.1171 11.8413 18.635 11.838C18.335 11.838 18.062 11.866 17.816 11.924C17.5967 11.9709 17.3864 12.0526 17.193 12.166C17.023 12.27 16.893 12.395 16.8 12.54C16.7065 12.6861 16.6578 12.8565 16.66 13.03C16.66 13.226 16.713 13.403 16.816 13.559C16.92 13.715 17.068 13.863 17.259 14.003C17.45 14.143 17.682 14.279 17.955 14.413C18.228 14.548 18.537 14.687 18.881 14.829C19.351 15.026 19.773 15.236 20.147 15.457C20.521 15.679 20.842 15.93 21.11 16.21C21.378 16.489 21.582 16.808 21.724 17.167C21.866 17.526 21.938 17.943 21.938 18.42C21.938 19.077 21.813 19.63 21.565 20.076C21.3227 20.5159 20.975 20.8887 20.553 21.161C20.0982 21.4494 19.5941 21.6514 19.066 21.757C18.5 21.877 17.903 21.937 17.276 21.937C16.6589 21.9397 16.0429 21.8848 15.436 21.773C14.9109 21.6822 14.4017 21.5161 13.924 21.28V18.65C14.8278 19.4191 15.9743 19.8441 17.161 19.85C17.494 19.85 17.785 19.82 18.033 19.76C18.282 19.7 18.489 19.616 18.656 19.51C18.822 19.402 18.946 19.276 19.029 19.13C19.1207 18.96 19.1625 18.7675 19.1494 18.5748C19.1363 18.3821 19.0689 18.197 18.955 18.041C18.8064 17.8444 18.6247 17.6752 18.418 17.541C18.1617 17.3711 17.8917 17.2226 17.611 17.097C17.2782 16.945 16.9425 16.7997 16.604 16.661C15.686 16.278 15.002 15.809 14.551 15.256C14.101 14.703 13.875 14.034 13.875 13.251C13.875 12.637 13.998 12.11 14.244 11.669C14.49 11.228 14.824 10.865 15.248 10.58C15.6965 10.2841 16.1943 10.0711 16.718 9.951C17.298 9.81426 17.8921 9.74679 18.488 9.75ZM3.375 9.938H12.938V12.104H9.506V21.75H6.789V12.104H3.375V9.938Z"
						fill="#2F80ED"
					/>
				</svg>
			</SimpleContainer>
		);
	else if (type === 'reduxToolkit')
		return (
			<SimpleContainer>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_121:65)">
						<path
							d="M16.634 16.504C17.504 16.429 18.177 15.664 18.134 14.75C18.087 13.836 17.338 13.102 16.425 13.102H16.364C15.9109 13.1182 15.4828 13.3136 15.1737 13.6453C14.8647 13.977 14.7001 14.4179 14.716 14.871C14.746 15.35 14.942 15.74 15.21 16.024C14.162 18.062 12.589 19.56 10.205 20.819C8.60199 21.657 6.90899 21.973 5.26099 21.749C3.88299 21.554 2.80499 20.939 2.14499 19.95C1.15699 18.451 1.06699 16.834 1.88999 15.216C2.48999 14.046 3.38899 13.193 3.98899 12.773C3.80786 12.2708 3.6674 11.7548 3.56899 11.23C-0.868014 14.408 -0.416014 18.752 0.931986 20.805C1.93599 22.303 3.98899 23.261 6.23599 23.261C6.83599 23.261 7.46599 23.217 8.07899 23.067C11.976 22.318 14.927 19.981 16.62 16.535L16.634 16.504ZM21.982 12.758C19.662 10.03 16.244 8.532 12.348 8.532H11.838C11.585 7.978 11.001 7.633 10.34 7.633H10.295C9.35199 7.633 8.61699 8.44299 8.64799 9.38599C8.67799 10.284 9.44199 11.034 10.356 11.034H10.43C10.7542 11.0215 11.0679 10.9159 11.3337 10.7299C11.5995 10.5439 11.8062 10.2853 11.929 9.985H12.484C14.793 9.985 16.979 10.659 18.972 11.977C20.499 12.982 21.594 14.3 22.209 15.874C22.747 17.162 22.718 18.421 22.164 19.471C21.309 21.118 19.87 21.988 17.968 21.988C16.769 21.988 15.601 21.613 15.001 21.344C14.641 21.642 14.041 22.137 13.607 22.437C14.925 23.035 16.259 23.38 17.547 23.38C20.469 23.38 22.641 21.733 23.466 20.144C24.364 18.346 24.29 15.32 21.996 12.728L21.982 12.758ZM6.48999 17.042C6.51999 17.941 7.28299 18.69 8.19799 18.69H8.25799C8.48317 18.6849 8.70505 18.6348 8.91057 18.5427C9.11609 18.4505 9.30109 18.3181 9.45467 18.1534C9.60824 17.9886 9.72729 17.7948 9.80481 17.5833C9.88232 17.3718 9.91672 17.147 9.90599 16.922C9.90599 16.022 9.12699 15.275 8.21299 15.275H8.15299C8.09299 15.275 8.00299 15.275 7.92699 15.304C6.68399 13.206 6.15899 10.957 6.35499 8.532C6.47499 6.704 7.07499 5.115 8.15199 3.797C9.05199 2.673 10.745 2.117 11.899 2.089C15.135 2.028 16.484 6.06 16.588 7.663L18.086 8.113C17.741 3.197 14.686 0.619995 11.764 0.619995C9.01999 0.619995 6.48999 2.613 5.46999 5.535C4.07699 9.43 4.99099 13.177 6.69999 16.174C6.54999 16.369 6.45999 16.713 6.48999 17.042Z"
							fill="#764ABC"
						/>
					</g>
					<defs>
						<clipPath id="clip0_121:65">
							<rect width="24" height="24" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</SimpleContainer>
		);
	else if (type === 'html')
		return (
			<SimpleContainer>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.5 0H22.5L20.59 21.563L11.977 24L3.413 21.562L1.5 0ZM8.531 9.75L8.299 7.032L18.358 7.035L18.588 4.413L5.412 4.41L6.11 12.42H15.236L14.91 15.846L12 16.65L9.045 15.84L8.857 13.73H6.248L6.578 17.901L12 19.351L17.379 17.908L18.123 9.751H8.531V9.75Z"
						fill="#EB5757"
					/>
				</svg>
			</SimpleContainer>
		);
	else if (type === 'css')
		return (
			<SimpleContainer>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.5 0H22.5L20.59 21.563L11.977 24L3.412 21.562L1.5 0ZM18.59 4.413L5.41 4.41L5.623 7.032L15.748 7.034L15.493 9.75H8.853L9.093 12.323H15.275L14.909 15.846L11.999 16.65L9.043 15.84L8.855 13.73H6.245L6.535 17.585L12 19.288L17.373 17.758L18.59 4.414V4.413Z"
						fill="#2D9CDB"
					/>
				</svg>
			</SimpleContainer>
		);
	else if (type === 'javaScript')
		return (
			<SimpleContainer>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0 0H24V24H0V0ZM22.034 18.276C21.859 17.181 21.146 16.261 19.031 15.403C18.295 15.058 17.477 14.818 17.234 14.263C17.143 13.933 17.129 13.753 17.188 13.558C17.338 12.912 18.103 12.718 18.703 12.898C19.093 13.018 19.453 13.318 19.679 13.798C20.713 13.122 20.713 13.122 21.434 12.673C21.164 12.253 21.03 12.072 20.848 11.893C20.218 11.188 19.379 10.828 18.014 10.859L17.309 10.948C16.633 11.113 15.989 11.473 15.599 11.953C14.459 13.244 14.788 15.494 16.168 16.424C17.533 17.444 19.529 17.668 19.784 18.629C20.024 19.799 18.914 20.174 17.818 20.039C17.007 19.859 16.558 19.453 16.063 18.703L14.233 19.754C14.443 20.234 14.683 20.443 15.043 20.863C16.783 22.619 21.133 22.529 21.914 19.859C21.943 19.769 22.154 19.154 21.988 18.209L22.034 18.276ZM13.051 11.031H10.803C10.803 12.969 10.794 14.895 10.794 16.836C10.794 18.068 10.857 19.199 10.656 19.547C10.326 20.236 9.476 20.148 9.09 20.027C8.694 19.831 8.493 19.561 8.26 19.172C8.197 19.067 8.15 18.976 8.133 18.976L6.308 20.101C6.613 20.731 7.058 21.273 7.632 21.618C8.487 22.128 9.636 22.293 10.839 22.023C11.622 21.797 12.297 21.332 12.65 20.612C13.16 19.682 13.052 18.542 13.047 17.266C13.059 15.212 13.047 13.157 13.047 11.087L13.051 11.031Z"
						fill="#F2C94C"
					/>
				</svg>
			</SimpleContainer>
		);
	else if (type === 'stylus')
		return (
			<SimpleContainer>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_219:240)">
						<path
							d="M13.671 8.861C13.226 8.507 11.974 9.1 11.621 9.979C11.175 11.095 10.516 12.725 9.86897 13.439C9.18597 14.189 9.11797 13.609 9.18597 13.177C9.34397 12.157 10.339 9.796 10.882 9.13C10.68 8.83 9.36197 8.874 8.44697 10.296C8.10497 10.832 7.32497 12.621 6.45697 14.03C6.26697 14.335 6.02997 14.122 6.21397 13.409C6.42097 12.584 7.03197 10.32 7.81797 8.538C9.88197 8.129 12.072 7.842 13.751 7.836C13.977 7.776 14.128 7.573 13.751 7.561C12.304 7.512 10.131 7.683 8.09897 7.941C8.48997 7.159 8.91097 6.537 9.33797 6.274C8.87397 5.981 7.93397 6.097 7.39797 6.891C7.13613 7.28932 6.90159 7.70494 6.69597 8.135C5.20597 8.367 3.93097 8.629 3.28397 8.874C2.61297 9.13 2.68597 9.942 3.09397 9.789C3.94397 9.472 5.08997 9.142 6.36597 8.849C5.55397 10.68 4.91897 12.841 4.76697 13.719C4.38797 15.856 5.71297 15.843 6.35997 15.001C7.06197 14.079 8.52597 10.838 8.75197 10.497C8.81897 10.381 8.91197 10.442 8.86197 10.545C7.22697 13.81 7.36597 15.074 8.69197 14.793C9.28897 14.665 10.321 13.64 10.589 13.109C10.644 12.981 10.76 12.993 10.735 13.048C9.69797 15.74 8.37997 17.918 7.49497 18.602C6.68997 19.218 6.09097 17.882 8.94097 15.965C9.36297 15.679 9.16697 15.288 8.69097 15.422C7.22097 15.654 3.00997 16.99 1.16097 18.272C1.01897 18.37 0.890972 18.449 0.896972 18.651C0.902972 18.767 1.10497 18.724 1.20297 18.663C3.59597 17.228 5.55397 16.668 7.79997 16.197C7.82997 16.21 7.86697 16.216 7.89697 16.204C8.00097 16.179 7.99497 16.234 7.92797 16.277C7.81689 16.3415 7.70275 16.4005 7.58597 16.454C6.07297 17.045 5.15697 18.351 5.48097 19.017C5.75597 19.591 7.23897 19.383 7.94097 19.005C9.66097 18.071 10.912 16.24 11.767 13.713C12.512 11.473 13.452 8.935 13.671 8.861ZM3.69997 16.094C4.32297 15.349 4.39597 14.58 3.91397 13.152C3.60897 12.249 3.10197 11.553 3.47397 10.992C3.87097 10.394 4.71397 10.973 4.01197 11.772L4.15197 11.87C4.99397 11.968 5.40897 10.814 4.77997 10.484C3.11997 9.618 1.66697 11.284 2.30797 13.213C2.58297 14.03 2.96797 14.897 2.65597 15.587C2.38797 16.179 1.86897 16.527 1.52097 16.539C0.794972 16.576 1.27697 14.909 2.11297 14.494C2.18597 14.458 2.28997 14.409 2.19297 14.287C1.16097 14.171 0.556972 14.647 0.208972 15.312C-0.804028 17.246 2.13097 17.961 3.69897 16.094H3.69997ZM23.674 14.03C20.874 13.664 14.832 14.152 12.165 14.861C11.371 15.068 11.591 15.489 11.994 15.41C12 15.41 12.171 15.367 12.177 15.367C14.368 14.94 19.684 14.567 22.784 15.16C23.156 15.227 24.274 14.11 23.674 14.03ZM14.454 13.701C15.234 13.311 16.394 10.893 17.156 9.57C17.211 9.472 17.309 9.55 17.254 9.618C15.326 12.938 16.144 13.323 16.906 13.274C17.926 13.213 18.866 11.748 19.073 11.418C19.159 11.29 19.208 11.394 19.159 11.486C19.109 11.638 18.933 11.907 18.768 12.273C18.536 12.792 18.78 12.993 18.982 13.085C19.299 13.238 20.165 13.14 20.299 12.609C19.434 12.591 21.508 8.501 21.722 8.251C21.142 7.915 20.245 8.282 19.836 9.087C18.964 10.814 18.231 12.206 17.773 12.23C16.883 12.279 18.799 8.38 19.11 8.257C18.92 7.982 17.706 8.098 17.028 9.147C16.784 9.527 15.296 12.163 14.929 12.597C14.282 13.366 14.233 12.707 14.416 11.937C14.477 11.675 14.581 11.339 14.716 10.967C15.143 10.003 15.601 9.697 15.882 9.386C17.767 7.293 18.848 5.596 18.42 4.931C18.042 4.339 16.778 4.601 15.967 5.821C14.471 8.062 13.093 11.131 12.916 12.536C12.745 13.939 13.763 14.042 14.453 13.701H14.454ZM21.826 10.405C22.064 10.991 22.424 11.571 22.21 12.084C22.033 12.523 21.8 12.707 21.545 12.749C21.185 12.809 21.282 11.681 21.899 11.345C21.954 11.315 22.033 11.168 21.959 11.083C21.179 11.04 20.739 11.413 20.501 11.907C19.811 13.354 22.064 13.749 23.168 12.327C23.608 11.76 23.626 11.199 23.204 10.18C22.937 9.533 22.528 9.05 22.784 8.623C23.059 8.173 23.717 8.562 23.224 9.167L23.334 9.227C23.974 9.264 24.236 8.41 23.748 8.197C22.461 7.647 21.258 9.032 21.826 10.405ZM15.247 9.594C15.314 9.441 15.357 9.399 15.473 9.142C16.143 7.665 16.987 6.109 17.566 5.383C17.926 5.004 18.432 5.517 17.517 6.921C16.992 7.73566 16.3848 8.4943 15.705 9.185V9.191C15.534 9.38 15.381 9.539 15.314 9.631C15.265 9.691 15.21 9.68 15.247 9.594Z"
							fill="#F2F2F2"
						/>
					</g>
					<defs>
						<clipPath id="clip0_219:240">
							<rect width="24" height="24" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</SimpleContainer>
		);
	else if (type === 'sass')
		return (
			<SimpleContainer>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 0C18.627 0 24 5.373 24 12C24 18.627 18.627 24 12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0ZM9.615 15.998C9.79 16.643 9.771 17.246 9.591 17.79L9.526 17.97C9.502 18.031 9.474 18.09 9.448 18.146C9.308 18.436 9.122 18.706 8.893 18.956C8.195 19.715 7.221 20.003 6.803 19.761C6.353 19.499 6.577 18.426 7.387 17.571C8.258 16.653 9.507 16.062 9.507 16.062V16.059L9.615 15.998ZM19.526 5.137C18.984 3.004 15.449 2.303 12.104 3.492C10.115 4.199 7.96 5.31 6.411 6.759C4.568 8.48 4.275 9.98 4.396 10.607C4.823 12.818 7.853 14.264 9.099 15.337V15.343C8.732 15.523 6.043 16.872 5.413 18.268C4.738 19.738 5.518 20.789 6.028 20.923C7.603 21.359 9.223 20.563 10.093 19.274C10.933 18.013 10.859 16.393 10.497 15.598C10.993 15.463 11.577 15.403 12.327 15.494C14.428 15.734 14.848 17.054 14.757 17.594C14.667 18.133 14.234 18.448 14.083 18.538C13.933 18.629 13.888 18.658 13.902 18.719C13.917 18.809 13.993 18.809 14.112 18.794C14.277 18.764 15.208 18.344 15.253 17.323C15.298 16.033 14.067 14.594 11.878 14.623C10.978 14.639 10.407 14.714 10.003 14.879C9.973 14.834 9.942 14.804 9.898 14.774C8.548 13.319 6.043 12.299 6.148 10.364C6.178 9.659 6.433 7.8 10.948 5.55C14.653 3.704 17.609 4.215 18.119 5.34C18.852 6.944 16.543 9.93 12.688 10.364C11.218 10.529 10.453 9.96 10.257 9.749C10.048 9.524 10.018 9.509 9.943 9.555C9.823 9.615 9.898 9.81 9.943 9.93C10.063 10.23 10.528 10.755 11.339 11.025C12.043 11.25 13.769 11.384 15.839 10.575C18.163 9.676 19.978 7.17 19.453 5.07L19.526 5.137Z"
						fill="#CC6699"
					/>
				</svg>
			</SimpleContainer>
		);
	else if (type === 'testingLibrary')
		return (
			<SimpleContainer>
				<svg
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
				>
					<title>Testing Library</title>
					<path
						fill="#E33332"
						d="M23.447 9.756c.028.05.053.113.078.186-.028-.06-.047-.129-.078-.186.592 2.304-1.95 5.003-5.13 4.239h.001c4.596-3.01 2.332-6.772.19-8.58-1.762-1.49-.721-1.95.021-1.95.237 0 .443.046.519.121l-.005-.004.006.004c-.018-1.433-5.066-1.11-.65 3.494 2.268 2.365-.408 7.596-3.596 3.618a.974.974 0 0 1-.071-.113c.515-.214.937-.795.937-1.753a2.383 2.383 0 0 0-.197-.986c.368-.75.707-1.647.707-2.77 0-2.684-1.742-5.076-4.18-5.076s-4.18 2.392-4.18 5.076c0 1.123.339 2.02.707 2.771a2.374 2.374 0 0 0-.197.988c0 .958.421 1.54.937 1.753a.985.985 0 0 1-.072.113C6.006 14.679 3.33 9.447 5.598 7.083c4.417-4.604-.633-4.926-.651-3.494l.008-.004c.078-.074.28-.12.515-.12.742 0 1.783.46.021 1.95-2.133 1.8-4.383 5.538.139 8.542.018.013.03.027.049.04-3.176.764-5.714-1.928-5.131-4.232l.004-.01c-.001.002-.002.005-.004.006l.001-.003-.003.007c-1.174 1.61-.606 5.779 3.778 6.168.019.003.035.009.054.012-4.36 1-3.048 7.02.021 6.056L4.388 22l.016-.003C2.27 21.652 2.11 19 3.176 18.087c1.172-1.006 2.519-.137 5.302-.932l.03-.004c-.03 2.446 2.352 3.76 1.103 5.16-1.316 1.473-3.112-.1-2.858-1.55l.006-.029-.004.008v-.004l-.004.012C5.65 22.598 7.044 24 8.61 24c.899 0 1.855-.462 2.429-1.567 1.214-2.337-2.385-6.432.96-6.432 3.344 0-.255 4.095.959 6.432.574 1.105 1.53 1.567 2.43 1.567 1.571 0 2.97-1.411 1.85-3.268l.005.021-.006-.017c.276 1.457-1.533 3.057-2.855 1.575-1.244-1.404 1.131-2.718 1.106-5.163 2.806.812 4.157-.072 5.334.94 1.066.911.906 3.564-1.228 3.91h.007c3.07.958 4.377-5.054.018-6.057l.005-.001c4.44-.362 5.009-4.573 3.822-6.184zm-20.238.39C3.072 7.9 5.019 6.073 5.62 5.565c.838-.707 1.165-1.272.998-1.727a.809.809 0 0 0-.656-.512 1.411 1.411 0 0 0-.573.03c.169-.082.365-.13.574-.13.475 0 .866.223.995.569.117.313.12 1.007-1.174 2.133-2.047 1.783-2.213 3.922-1.685 5.33.458 1.223 1.47 2.014 2.58 2.014.177 0 .355-.02.533-.057-.54.46-1.16.61-1.412.656-1.494-1.045-2.512-2.419-2.591-3.727zm5.208 6.873c-1.135.302-2.295.319-3.038.323-.924.006-1.655.01-2.333.593-.617.528-.873 1.594-.609 2.536.091.325.19.656.426.857.178.153.482.37.787.522l-.016-.004c.019.01.033.023.052.033-.993-.212-1.572-1.18-1.642-2.134-.088-1.205.602-2.728 2.832-3.055.354-.052.728-.083 1.101-.114.91-.076 1.85-.155 2.497-.54-.024.38-.046.788-.057.983zm.25-2.684c-.65.998-1.936 1.153-3.07 1.29-.32.038-.613.083-.883.138l-.356-.024c-1.801-.156-3.141-1.006-3.775-2.396a4.068 4.068 0 0 1-.353-2.055s.038-.376.108-.77c-.087 1.095.207 2.138.88 2.997a4.649 4.649 0 0 0 3.636 1.762c1.33 0 2.588-.59 3.545-1.663.33-.37.478-.398.516-.398.128.186.019.708-.247 1.119zm6.372-5.503c0 1.347-1.527 1.347-1.527 0s1.527-1.347 1.527 0zM13.234 3.34c0 .741-1.235.741-1.235 0 0-.74 1.235-.74 1.235 0zm-.258 8.156c0 .749-.06 1.356-.133 1.356s-.126-.605-.125-1.355c0-.75.062-1.356.133-1.356.07 0 .128.606.125 1.355zm-.952-1.614c.056 0 .1.73.1 1.631s-.044 1.631-.1 1.631-.1-.73-.1-1.63c0-.902.045-1.632.1-1.632zm-.193-8.21c0 .511-.849.511-.849 0s.85-.506.85 0zm-.587 4.22c0-.354.587-.351.587 0 0 .354-.587.354-.587 0zm.046 5.622c0 .768-.064 1.39-.137 1.39-.073 0-.132-.622-.131-1.389s.064-1.389.138-1.389c.074 0 .132.62.13 1.388zm0-7.495c0 .51-.849.51-.849 0s.849-.51.849 0zm-1.147-1.234c0 .353-.587.353-.587 0s.587-.353.587 0zm-.08 2.508c0 .255-.425.255-.425 0 0-.256.424-.256.424 0zm-1.1 3.54c0-1.347 1.528-1.347 1.528 0s-1.528 1.347-1.528 0zm5.327 9.088c-.078.74-.273 1.38-.446 1.946-.347 1.138-.622 2.036.242 3.002.363.407.829.622 1.346.622.64 0 1.278-.34 1.664-.889a1.97 1.97 0 0 0 .325-.844c.017.16.026.31.015.417a1.623 1.623 0 0 1-.197.646c-.336.595-1.063.98-1.85.98-.95 0-1.77-.532-2.253-1.459-.481-.927-.132-2.214.177-3.35.302-1.115.564-2.077.104-2.678-.263-.345-.727-.512-1.417-.512-.691 0-1.155.167-1.418.512-.46.6-.198 1.563.104 2.678.309 1.136.658 2.423.177 3.35-.482.927-1.303 1.459-2.252 1.459-.788 0-1.515-.385-1.851-.98a1.623 1.623 0 0 1-.182-1.058c.048.296.142.582.323.84.387.547 1.025.888 1.665.888.518 0 .984-.215 1.348-.622.862-.966.588-1.862.24-2.998-.173-.567-.369-1.21-.445-1.95-.1-.966.119-1.827.6-2.36.399-.441.967-.666 1.69-.666s1.293.224 1.69.665c.48.533.7 1.393.6 2.36zm3.029-4.647c1.11 0 2.122-.79 2.579-2.014.526-1.408.36-3.547-1.69-5.33-1.295-1.127-1.292-1.82-1.175-2.134.13-.345.52-.569.994-.569.193 0 .372.045.532.115l.011.004a1.466 1.466 0 0 0-.533-.018.809.809 0 0 0-.656.512c-.166.455.16 1.02.998 1.728.6.507 2.548 2.334 2.411 4.578-.08 1.308-1.097 2.682-2.591 3.727a3.072 3.072 0 0 1-1.412-.656c.177.038.356.057.532.057zm4.635 6.469c-.07.956-.65 1.922-1.645 2.134.015-.008.028-.018.042-.027.305-.153.608-.368.785-.52.235-.202.335-.533.426-.858.264-.942.008-2.008-.609-2.536-.678-.582-1.409-.587-2.333-.593-.743-.004-1.903-.021-3.04-.323-.01-.196-.03-.602-.054-.983.647.386 1.589.465 2.5.542.373.031.744.062 1.097.113 2.23.327 2.919 1.848 2.83 3.05zm-2.666-3.979c-.271-.056-.565-.1-.886-.14-1.135-.136-2.421-.291-3.07-1.29-.268-.41-.38-.93-.292-1.09a.145.145 0 0 1 .048-.009c.09 0 .238.073.511.379.957 1.073 2.217 1.663 3.546 1.663 1.414 0 2.774-.66 3.637-1.763.672-.858.965-1.9.88-2.994.07.393.107.77.107.77a4.068 4.068 0 0 1-.353 2.054c-.634 1.39-1.974 2.24-3.775 2.396l-.353.024zm-9.69-7.495a.236.236 0 0 1 .11.221.236.236 0 1 1-.47 0 .235.235 0 0 1 .36-.221zm4.295.443a.235.235 0 0 1-.11-.222.235.235 0 1 1 .469 0 .236.236 0 0 1-.359.222z"
					/>
				</svg>
			</SimpleContainer>
		);
	else if (type === 'styledComponents')
		return (
			<SimpleContainer>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>styled-components</title>
					<path
						fill="#DB7093"
						d="M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z"
					/>
				</svg>
			</SimpleContainer>
		);
	else if (type === 'storyBook')
		return (
			<SimpleContainer>
				<svg
					height="24"
					width="24"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Storybook</title>
					<path
						fill="#FF4785"
						d="M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z"
					/>
				</svg>
			</SimpleContainer>
		);
	else return <></>;
};

export default Icons;
