import './globals.css';

export const metadata = {
  title: 'AKS Hithium — Nation-Building Energy Storage. Secure Power.',
  description: 'AKS Hithium Energy brings global Tier-1 battery energy storage to Bangladesh — reliable power for industry, manufacturing, and the national grid.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
