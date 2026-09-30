import './globals.css';

export const metadata = {
  title: 'Mopizor — Spin and Win',
  description: 'Assistant Spin and Win — Mopizor',
  icons: {
    icon: '/de.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
