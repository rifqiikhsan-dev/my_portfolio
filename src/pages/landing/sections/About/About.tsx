import { useEffect, useRef, useState } from "react";
import { DownloadIcon } from "lucide-react";
import { Button } from "../../../../components/common/button";
import { Card, CardContent } from "../../../../components/common/card";
import Profile from "../../../../../public/assets/images/image-profile.png";

export const About = (): JSX.Element => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `Hello! I'm Rifqi Ikhsan Rizkillah, a passionate Frontend Web & Mobile Developer with 2 years of professional experience. I'm creating responsive, user-friendly, and visually appealing applications that deliver seamless experiences across devices. My journey in development started with a strong foundation in HTML, CSS, and JavaScript, and has since expanded to modern frameworks like React, and Flutter. I enjoy bridging the gap between design and functionality by turning creative concepts into clean, efficient, and maintainable code. Throughout my career, I've worked on diverse projects ranging from corporate websites to mobile apps, always prioritizing usability and performance. I'm dedicated to staying up-to-date with the latest technologies and best practices to ensure that my work not only meets but exceeds client and user expectations. In this portfolio, you'll find examples of my work that showcase my skills in frontend architecture, UI/UX collaboration, and problem-solving. I'm eager to continue growing as a developer and to contribute to projects that challenge me and inspire innovation.`;

  const midpoint = Math.floor(fullText.length / 2);
  const firstHalf = fullText.slice(0, midpoint);

  const skills = [
    { name: "Figma", percentage: 80, icon: "/assets/icons/icon-figma.svg" },
    { name: "VS Code", percentage: 90, icon: "/assets/icons/icon-vscode.svg" },
    { name: "Flutter", percentage: 85, icon: "/assets/icons/icon-flutter.svg" },
    { name: "React JS", percentage: 60, icon: "/assets/icons/icon-react.svg" },
    {
      name: "Tailwind CSS",
      percentage: 70,
      icon: "/assets/icons/icon-tailwindcss.svg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/docs/Rifqi-CV.pdf";
    link.download = "cv-rifqi-ikhsan.pdf";
    link.click();
  };

  return (
    <section
      id="about"
      ref={aboutRef}
      className="flex flex-col items-center gap-8 md:gap-10 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20"
    >
      <header
        className="flex flex-col items-center gap-4 md:gap-[18px] max-w-[1429px] w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="font-bold text-foundation-whitelight text-2xl sm:text-3xl md:text-[40px] tracking-[0.60px] md:tracking-[1.20px] font-lato text-center leading-normal">
          About Me
        </h2>
        <p className="font-medium text-foundation-whitedark-active text-base sm:text-lg md:text-xl text-center tracking-[0.30px] md:tracking-[0.60px] leading-6 md:leading-8 font-lato px-4 sm:px-0">
          User Interface, Frontend Web And Mobile Developer
        </p>
      </header>

      <div className="flex flex-col items-end gap-16 md:gap-[100px] w-full max-w-[1429px]">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-[101px] w-full">
          <div
            className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[523px] h-auto bg-[#ffffff0a] flex-shrink-0"
            style={{
              borderTopLeftRadius: "40vw",
              borderTopRightRadius: "40vw",
              borderBottomLeftRadius: "12px",
              borderBottomRightRadius: "12px",
              aspectRatio: "523 / 676"
            }}
            data-aos="zoom-in"
          >
            <img
              src={Profile}
              className="absolute w-[90%] h-[90%] top-[5%] left-[5%] object-cover rounded-[12px]"
              alt="Profile"
            />
          </div>

          <div
            className="flex flex-col items-start gap-4 md:gap-8 max-w-[631px] w-full"
            data-aos="fade-left"
          >
            <div>
              <p className="font-medium text-foundation-whitedark-hover text-sm sm:text-base md:text-lg lg:text-xl text-justify leading-6 sm:leading-7 md:leading-8 lg:leading-[38px] font-lato">
                {isExpanded ? fullText : `${firstHalf}...`}
              </p>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-blue-400 hover:underline font-semibold text-sm sm:text-base"
              >
                {isExpanded ? "Tampilkan lebih sedikit" : "Baca selengkapnya"}
              </button>
            </div>

            <Button
              onClick={handleDownloadCV}
              className="px-6 sm:px-8 md:px-[30px] py-3 md:py-4 bg-gradient-to-r from-[#4E71FF] to-[#5409DA] rounded-lg flex items-center w-full md:w-auto transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <DownloadIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-2.5" />
              <span className="font-bold text-white text-base sm:text-lg md:text-xl tracking-[0.30px] md:tracking-[0.60px] font-lato">
                Download CV
              </span>
            </Button>
          </div>
        </div>

        <div
          ref={skillsRef}
          className="flex w-full flex-wrap items-start justify-center sm:justify-between gap-4 sm:gap-6"
        >
          {skills.map((skill, index) => {
            const [progress, setProgress] = useState(0);

            useEffect(() => {
              if (!startAnimation) return;
              let current = 0;
              const interval = setInterval(() => {
                current += 1;
                setProgress(current);
                if (current >= skill.percentage) clearInterval(interval);
              }, 30);
              return () => clearInterval(interval);
            }, [startAnimation]);

            const degree = (progress / 100) * 360;

            return (
              <Card
                key={index}
                className="flex flex-col w-[160px] sm:w-[180px] md:w-[200px] items-center gap-4 sm:gap-6 bg-transparent border-none"
                data-aos="flip-up"
                data-aos-delay={index * 100}
              >
                <CardContent className="p-0">
                  <div className="relative w-[100px] sm:w-[120px] md:w-[130px] h-[100px] sm:h-[120px] md:h-[130px] rounded-full">
                    <div
                      className="absolute top-0 left-0 w-full h-full rounded-full"
                      style={{
                        background: `conic-gradient(#4E71FF ${degree}deg, #292929 ${degree}deg)`
                      }}
                    ></div>
                    <div className="absolute top-[8px] sm:top-[9px] md:top-[10px] left-[8px] sm:left-[9px] md:left-[10px] w-[84px] sm:w-[102px] md:w-[110px] h-[84px] sm:h-[102px] md:h-[110px] rounded-full bg-[#111111] flex items-center justify-center">
                      {skill.icon && (
                        <img
                          className="w-[40px] sm:w-[50px] md:w-[60px] h-[40px] sm:h-[50px] md:h-[60px]"
                          alt={skill.name}
                          src={skill.icon}
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1 sm:gap-2 mt-4 sm:mt-6">
                    <div className="bg-gradient-to-r from-[#4E71FF] to-[#5409DA] bg-clip-text text-xl sm:text-2xl md:text-3xl font-bold text-transparent">
                      {progress}%
                    </div>
                    <div className="font-bold text-foundation-whitedark-hover text-lg sm:text-xl md:text-2xl font-lato text-center">
                      {skill.name}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
