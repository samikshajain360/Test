import portfolioPage from "./Frame-187.png";
import logoFolioPage from "./Frame-188.png";
import brandIdentityPage from "./Desktop-1.png";
import bunnyPage from "./Desktop-2.png";
import myWheelsPage from "./Desktop-3.png";
import orangedivider from "./orangedivider.png";
import logofolioDivider from "./Group-5.png";
import bunnydivider from "./bunnydivider.png";
import socialMediaPage from "./Desktop-5.png";
import newDivider from "./Group-6.png";

function App() {
  return (
    <main className="min-h-screen bg-black">
      {/* Portfolio */}
      <div className="relative">
        <img
          className="block w-full h-auto"
          src={portfolioPage}
          alt="Portfolio page"
        />

        <img
          src={logofolioDivider}
          alt=""
          className="absolute left-0 top-full -translate-y-[260px] w-full z-10 pointer-events-none"
        />
      </div>

      {/* Logo Folio */}
      <div className="relative">
        <img
          className="block w-full h-auto"
          src={logoFolioPage}
          alt="Logo folio page"
        />

        <img
          src={orangedivider}
          alt=""
          className="absolute left-0 top-full -translate-y-[205px] w-full z-10 pointer-events-none"
        />
      </div>

      {/* Brand Identity */}
      <img
        className="block w-full h-auto"
        src={brandIdentityPage}
        alt="Brand identity page"
      />

      {/* Bunny + Divider */}
      <div className="relative">
        <img
          className="block w-full h-auto"
          src={bunnyPage}
          alt="Bunny brand identity page"
        />

        <img
          src={bunnydivider}
          alt=""
          className="absolute left-0 top-full -translate-y-[380px] w-full z-10 pointer-events-none"
        />
      </div>

      {/* My Wheels + New Divider */}
      <div className="relative">
        <img
          className="block w-full h-auto"
          src={myWheelsPage}
          alt="My Wheels brand identity page"
        />

        <img
          src={newDivider}
          alt=""
          className="absolute left-0 top-full -translate-y-[240px] w-full z-10 pointer-events-none"
        />
      </div>

      {/* Social */}
      <img
        className="block w-full h-auto"
        src={socialMediaPage}
        alt="Social page"
      />
    </main>
  );
}

export default App;