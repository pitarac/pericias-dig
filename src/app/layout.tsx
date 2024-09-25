 
import "../styles/style.scss";
import "../styles/index.css";


export const metadata = {
	metadataBase: new URL('https://periciadigital.tec.br/'),
  title: 'Perícias Digitais | Especialistas em Tecnologia Judiciária',
  description: 'Serviços de perícias digitais confiáveis e detalhadas, com uma equipe de especialistas prontos para apoiar a justiça em casos tecnológicos e de informática. Consultoria e laudos técnicos para advogados e empresas.',
  keywords: 'perícias digitais, tecnologia judiciária, análise forense, consultoria tecnológica',
  author: 'Paulo Henrique Lima',
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  openGraph: {
    title: 'Perícias Digitais | Especialistas em Tecnologia Judiciária',
    description: 'Serviços de perícias digitais confiáveis e detalhadas.',
    url: 'https://periciadigital.tec.br/',
    image: 'public/assets/img/logo.png',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perícias Digitais | Especialistas em Tecnologia Judiciária',
    description: 'Serviços de perícias digitais confiáveis e detalhadas.',
    image: 'public/assets/img/logo.png',
  },
};




export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			 <head> 
				{/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PDQZ5H2S');`,
          }}
        />
      
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap"
        />
      </head>
			<body>
				{/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PDQZ5H2S"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
				{children}</body>
		</html>
	);
}
