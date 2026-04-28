import "./globals.css";

export const metadata = {
  title: "Real Estate Virtual Chatbots",
  description: "Buyer and seller chatbot intake prototype for real estate agents."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
