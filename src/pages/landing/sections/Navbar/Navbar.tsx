import { useEffect, useState } from "react";
import { Button } from "../../../../components/common/button";

const navItems = [
  { id: "header", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About me" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact me" }
];

export const Navbar = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("header");

  const handleNavItemClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleHireMe = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#0e0e0e]/80 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-screen overflow-x-hidden">
        <div className="flex items-center justify-between py-4 px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-transparent bg-gradient-to-r from-[#4E71FF] to-[#5409DA] bg-clip-text font-k2d font-bold text-2xl md:text-3xl">
            RIFQI DEV
          </div>

          <div className="hidden md:flex flex-1 justify-center items-center gap-[60px]">
            {navItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleNavItemClick(item.id)}
                className={`cursor-pointer text-xl font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-foundationorangenormal"
                    : "text-foundation-whitedark-hover hover:text-foundationorangenormal"
                }`}
              >
                {item.label}
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              onClick={handleHireMe}
              className="px-10 py-3 rounded-lg bg-gradient-to-r from-[#4E71FF] to-[#5409DA] text-white font-bold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Hire Me
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleNavItemClick(item.id)}
                className={`cursor-pointer text-base font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-foundationorangenormal"
                    : "text-foundation-whitedark-hover hover:text-foundationorangenormal"
                }`}
              >
                {item.label}
              </div>
            ))}
            <Button
              onClick={handleHireMe}
              className="w-full mt-2 bg-gradient-to-r from-[#4E71FF] to-[#5409DA] text-white font-bold rounded-lg py-2"
            >
              Hire Me
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
