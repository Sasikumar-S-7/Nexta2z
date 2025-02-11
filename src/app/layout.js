import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css"; // Update path if needed
import Header from '@/components/Layout/Header/Header';
import { Footer } from '@/components/Layout/Header/Footer';
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: 'Home Page',
//   description: 'Home Page Description',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
