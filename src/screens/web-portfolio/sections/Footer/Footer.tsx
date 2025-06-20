import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "../../../../components/navigation-menu";

export const Footer = (): JSX.Element => {
  const navItems = [
    { id: "header", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About me" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact me" }
  ];

  const handleNavItemClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="footer"
      className="w-full flex flex-col items-center gap-12 px-4 sm:px-6 md:px-12 lg:px-20 pt-10 pb-6 bg-[#ffffff0a]"
    >
      <div className="w-full max-w-[1277px] flex flex-col items-center gap-12">
        <h1 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-[#4E71FF] to-[#5409DA] bg-clip-text text-transparent [font-family:'K2D',Helvetica]">
          RIFQI DEV
        </h1>

        <NavigationMenu className="w-full">
          <NavigationMenuList className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  onClick={() => handleNavItemClick(item.id)}
                  className="hover:text-foundationorangenormal cursor-pointer font-medium text-base sm:text-lg md:text-xl tracking-wide text-foundation-whitedark-hover whitespace-nowrap [font-family:'Lato',Helvetica]"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="w-full max-w-[1277px] flex flex-col items-center gap-8">
        <div className="flex justify-center items-center gap-4">
          {["instagram", "facebook", "linkedin"].map((platform, idx) => (
            <div
              key={idx}
              className="w-10 h-10 bg-[#ffffff0a] rounded-full border border-[#575757] flex items-center justify-center"
            >
              <img
                src={`/assets/icons/icon-${platform}.svg`}
                className={`w-[22px] ${
                  platform === "linkedin" ? "h-[24px]" : "h-[22px]"
                }`}
                alt={`${platform} icon`}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3.5 text-center">
          <img
            src="/assets/icons/icon-mail.svg"
            className="w-6 h-6"
            alt="Mail icon"
          />
          <span className="font-bold text-base sm:text-lg md:text-xl tracking-wide text-foundation-whitedark-hover whitespace-nowrap [font-family:'Lato',Helvetica]">
            rifqiikhsan.dev@gmail.com
          </span>
        </div>
      </div>
    </footer>
  );
};
