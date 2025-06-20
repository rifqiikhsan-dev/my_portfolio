import { Button } from "../../../../components/common/button";
import { Card } from "../../../../components/common/card";
import Profile from "../../../../../public/assets/images/image-profile.png";

export const Hero = (): JSX.Element => {
  const statsData = [
    { value: "2+", label: "Experiences" },
    { value: "15+", label: "Project done" },
    { value: "99%", label: "Happy Clients" }
  ];

  const socialLinks = [
    { platform: "instagram", url: "https://www.instagram.com/rifqiikhsan19_/" },
    { platform: "facebook", url: "https://facebook.com/rifqiikhsan" },
    { platform: "linkedin", url: "https://linkedin.com/in/rifqiikhsan" }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/docs/Rifqi-CV.pdf";
    link.download = "cv-rifqi-ikhsan.pdf";
    link.click();
  };

  const handleHireMe = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="Hero"
      className="flex flex-col items-center gap-10 px-4 sm:px-6 md:px-10 lg:px-20"
    >
      <div
        data-aos="fade-up"
        className="flex flex-col lg:flex-row w-full max-w-[1280px] items-center justify-between gap-10 lg:gap-0"
      >
        <div
          data-aos="fade-right"
          className="flex flex-col items-start gap-10 lg:gap-20 text-center lg:text-left w-full md:w-auto"
        >
          <div className="flex flex-col items-start gap-4 lg:gap-[17px]">
            <div className="flex flex-col items-start gap-3">
              <div
                className="text-foundation-whitedark-active text-lg md:text-2xl font-semibold"
                data-aos="fade-up"
              >
                Hi I am
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-foundation-whitedark-hover text-xl sm:text-2xl md:text-[28px] font-bold"
              >
                Rifqi Ikhsan Rizkillah
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="bg-gradient-to-r from-[#1A3399] via-[#7691FF] to-[#4E71FF] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-[50px] lg:text-[70px] font-black tracking-wide leading-[1.1] lg:leading-[1.2] lg:whitespace-nowrap pb-2 lg:pb-4"
              >
                Frontend Developer
              </div>
            </div>

            <div
              className="flex gap-4 pt-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {socialLinks.map(({ platform, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform}
                  className="relative w-10 h-10 bg-[#ffffff0a] rounded-full border border-[#575757] flex items-center justify-center"
                >
                  <img
                    src={`/assets/icons/icon-${platform}.svg`}
                    className="w-[22px] h-[22px]"
                    alt={`${platform} icon`}
                  />
                </a>
              ))}
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <Button
              onClick={handleHireMe}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#4E71FF] to-[#5409DA] text-white text-base md:text-xl font-bold w-full md:w-auto hover:scale-105 hover:shadow-lg"
            >
              Hire Me
            </Button>
            <Button
              onClick={handleDownloadCV}
              variant="outline"
              className="px-8 py-3 rounded-lg border-2 border-[#959595] text-foundation-whitedark-hover text-base md:text-xl font-bold bg-transparent w-full md:w-auto hover:scale-105 hover:shadow-lg"
            >
              Download CV
            </Button>
          </div>

          <Card
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-[#ffffff0a] rounded-lg border-none w-full md:w-auto"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {statsData.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center sm:items-start gap-1 ${
                  index !== statsData.length - 1
                    ? "sm:pr-6 sm:border-r sm:border-[#959595]"
                    : ""
                }`}
              >
                <div className="text-[#4d70fe] text-xl md:text-2xl font-extrabold">
                  {stat.value}
                </div>
                <div className="text-foundation-whitenormal-hover text-base md:text-xl font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </Card>
        </div>

        <div
          className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] xl:max-w-[713px] aspect-[1/1] bg-[#ffffff0a] rounded-full flex items-center justify-center"
          data-aos="zoom-in-left"
        >
          <img
            src={Profile}
            className="w-[80%] h-auto object-cover"
            alt="Rifqi profile"
          />
        </div>
      </div>
    </div>
  );
};
