import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';

export const metadata = {
  title: "Next.js - Influozy",
  description: "Influenzer Marketing Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomProvider >
          {children}
        </CustomProvider>
      </body>
    </html>
  );
}
