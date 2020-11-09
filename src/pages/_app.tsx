import '@/styles/tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<script
					src="https://kit.fontawesome.com/839ed4bd9e.js"
					crossOrigin="anonymous"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
