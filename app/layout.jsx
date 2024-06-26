import '@/styles/globals.css'; 

import Nav from '@/components/Nav';
import Provider from '@/components/Provider';

export const metadata = {
  title: "Promptopia",
  descriptiomn: "Discover & Share Ai Prompts",
};

const RootLayout = ( {children}) => {
  return (
    <html lang="pt-br">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
            <Nav />
            {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
