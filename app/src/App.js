import { useEffect, useState } from "react";
import "./App.css";
import twitterLogo from "./assets/twitter-logo.svg";

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
	const [walletAddress, setWalletAddress] = useState(null);
	// Check if wallet is connected
	const checkIfWalletIsConnected = async() => {
		try{
			// Solana object is injected if Phantom wallet is installed.
			const {solana} = window;
			if (solana) {
				if (solana.isPhantom){
					console.log("Phantom wallet found!");
					// Check if we're authorized to user's wallet.
					const response = await solana.connect({ onlyIfTrused: true, }); // If user already connected to the website this property will be true.
					console.log("Connected with Public Key",
						response.publicKey.toString())
				} else {
					console.log("Please install Phantom wallet.");
				}
			}
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => { 
		const onLoad = async() => {
			await checkIfWalletIsConnected();
		}
		// When the page is closed, the event listener is removed.
		window.addEventListener('load', onLoad);
		return () => window.removeEventListener('load', onLoad);
	}, []);
	return (
		<div className="App">
			<div className="container">
				<div className="header-container">
					<p className="header">🍭 Candy Drop</p>
					<p className="sub-text">NFT drop machine with fair mint</p>
				</div>
				<div className="footer-container">
					<img
						alt="Twitter Logo"
						className="twitter-logo"
						src={twitterLogo}
					/>
					<a
						className="footer-text"
						href={TWITTER_LINK}
						target="_blank"
						rel="noreferrer"
					>{`Adapted from @${TWITTER_HANDLE}`}</a>
				</div>
			</div>
		</div>
	);
};

export default App;
