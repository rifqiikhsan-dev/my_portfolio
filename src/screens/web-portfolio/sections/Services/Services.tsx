import React from "react";
import { Card, CardContent } from "../../../../components/card";

const services = [
  {
    icon: "/assets/icons/icon-uiux.svg",
    iconAlt: "Hugeicons web design",
    title: "UI/UX Design",
    description:
      "Modern and friendly interfaces.\nFocused on clean look and easy navigation."
  },
  {
    icon: "/assets/icons/icon-web-dev.svg",
    iconAlt: "Bx code block",
    title: "Web Development",
    description:
      "Fast and responsive websites.\nBuilt with the latest web technologies."
  },
  {
    icon: "/assets/icons/icon-apps-dev.svg",
    iconAlt: "Mobile app development icon",
    title: "Apps Development",
    description:
      "Android and iOS applications.\nSimple, efficient, and reliable apps tailored to your business goals."
  }
];

export const Services = (): JSX.Element => {
  return (
    <section
      id="services"
      className="flex flex-col items-center gap-16 w-full px-4 sm:px-8 md:px-10 lg:px-20"
    >
      <div
        className="flex flex-col items-center gap-4 text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-foundation-whitelight tracking-wide leading-snug font-lato">
          Services
        </h2>
        <p className="max-w-[900px] font-medium text-base sm:text-lg md:text-xl text-foundation-whitedark-active leading-relaxed tracking-wide font-lato">
          Integrated digital solutions for your business needs.
        </p>
      </div>

      <div className="w-full max-w-[1429px]">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Card
              key={index}
              className="
                flex-1 basis-[280px] sm:basis-[300px] md:basis-[350px] max-w-full 
                bg-[#ffffff0a] rounded-3xl border-none
                transition-transform duration-300 ease-in-out hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              data-aos-duration="800"
            >
              <CardContent className="flex flex-col items-center gap-6 p-6 sm:p-8">
                <div className="flex flex-col items-center gap-4 text-center">
                  <img
                    className="w-14 h-14 sm:w-[70px] sm:h-[70px]"
                    alt={service.iconAlt}
                    src={service.icon}
                  />
                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-foundationorangenormal tracking-wide leading-tight font-lato">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-center font-medium text-foundation-whitedark-hover leading-relaxed font-lato">
                  {service.description.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < service.description.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
