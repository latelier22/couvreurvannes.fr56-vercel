import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { site } from './site';

const inter = Inter({ subsets: ['latin'] });

export const siteMetadata = site;

export default function RootLayout({ children, pageTitle, pageDescription }) {
  const siteTitle = siteMetadata.title;
  const siteDescription = siteMetadata.description;

  const title = `${siteTitle} | ${pageTitle || ''}`;
  const description = `${siteDescription} | ${pageDescription || ''}`;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Add other meta tags if needed */}
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}



// import React from 'react';
// import { Inter } from 'next/font/google';
// import './globals.css';


// const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Couvreur à Loudéac',
//   description: 'PRO COUVREUR ET NETTOYAGE - Dave MIQUEL- 0780604044',
// };

// export default function RootLayout({ children, pageTitle, pageDescription }) {
//   const title = pageTitle || metadata.title;
//   const description = pageDescription || metadata.description;

//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>{title}</title>
//         <meta name="description" content={description} />
//         {/* Add other meta tags if needed */}
//       </head>
//       <body className={inter.className}>
       
//         {children}
//       </body>
//     </html>
//   );
// }