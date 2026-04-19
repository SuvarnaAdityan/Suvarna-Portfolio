import "./globals.css";

export const metadata = {
  title: "Suvarna Ramu Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          borderBottom: "1px solid #ccc"
        }}>
          <h2>Suvarna Ramu</h2>
          <div style={{ display: "flex", gap: "15px" }}>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/publications">Publications</a>
            <a href="/resume">Resume</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}