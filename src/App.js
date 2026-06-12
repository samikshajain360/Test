import portfolioPage from "./Frame-187.png";
import logoFolioPage from "./Frame-188.png";
import brandIdentityPage from "./Desktop-1.png";
import bunnyPage from "./Desktop-2.png";
import myWheelsPage from "./Desktop-3.png";
import socialMediaPage from "./Desktop-5.png";

function App() {
  return (
    <main className="min-h-screen bg-black">
      <img
        className="block w-full h-auto"
        src={portfolioPage}
        alt="Portfolio page"
      />
      <img
        className="block w-full h-auto"
        src={logoFolioPage}
        alt="Logo folio page"
      />
      <img
        className="block w-full h-auto"
        src={brandIdentityPage}
        alt="Brand identity page"
      />
      <img
        className="block w-full h-auto"
        src={bunnyPage}
        alt="Bunny brand identity page"
      />
      <img
        className="block w-full h-auto"
        src={myWheelsPage}
        alt="My Wheels brand identity page"
      />
      <img
        className="block w-full h-auto"
        src={socialMediaPage}
        alt="Social media folio page"
      />
    </main>
  );
}

export default App;
