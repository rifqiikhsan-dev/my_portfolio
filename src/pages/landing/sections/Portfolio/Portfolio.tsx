import { useState } from "react";
import { Button } from "../../../../components/common/button";
import {
  Card,
  CardContent,
  CardFooter
} from "../../../../components/common/card";

import { Dialog } from "../../../../components/common/dialog-simple";

export const Portfolio = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolioProjects)[0] | null
  >(null);

  const filterCategories = [
    { id: "all", name: "All" },
    { id: "uiux", name: "UI/UX Design" },
    { id: "mobile", name: "Mobile App" },
    { id: "website", name: "Website" }
  ];

  const portfolioProjects = [
    {
      id: 1,
      name: "Khidma",
      category: "Mobile App",
      image: "/assets/images/portfolio/image-khidma.png",
      alt: "Khidma",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis eu lectus et lobortis. Nulla sit amet finibus odio. Integer ut quam sed enim placerat laoreet. Mauris eu cursus leo. Fusce pulvinar tellus nibh, et faucibus nulla consequat eget. Donec sit amet iaculis turpis, nec auctor lacus. Integer sollicitudin justo id laoreet scelerisque. Aenean nisi tortor.",
      link: "https://example.com/khidma"
    },
    {
      id: 2,
      name: "Airplane",
      category: "Mobile App",
      image: "/assets/images/portfolio/image-airplane.png",
      alt: "Airplane",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis eu lectus et lobortis. Nulla sit amet finibus odio. Integer ut quam sed enim placerat laoreet. Mauris eu cursus leo. Fusce pulvinar tellus nibh, et faucibus nulla consequat eget. Donec sit amet iaculis turpis, nec auctor lacus. Integer sollicitudin justo id laoreet scelerisque. Aenean nisi tortor.",
      link: "https://example.com/airplane"
    },
    {
      id: 3,
      name: "Pantau Dbd",
      category: "Mobile App",
      image: "/assets/images/portfolio/image-pantaudbd.png",
      alt: "Pantaudbd",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis eu lectus et lobortis. Nulla sit amet finibus odio. Integer ut quam sed enim placerat laoreet. Mauris eu cursus leo. Fusce pulvinar tellus nibh, et faucibus nulla consequat eget. Donec sit amet iaculis turpis, nec auctor lacus. Integer sollicitudin justo id laoreet scelerisque. Aenean nisi tortor.",
      link: "https://example.com/pantaudbd"
    },
    {
      id: 4,
      name: "Global Pet Indo",
      category: "Mobile App",
      image: "/assets/images/portfolio/image-gpi-mobile.png",
      alt: "Gpi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis eu lectus et lobortis. Nulla sit amet finibus odio. Integer ut quam sed enim placerat laoreet. Mauris eu cursus leo. Fusce pulvinar tellus nibh, et faucibus nulla consequat eget. Donec sit amet iaculis turpis, nec auctor lacus. Integer sollicitudin justo id laoreet scelerisque. Aenean nisi tortor.",
      link: "https://example.com/gpi-mobile"
    },
    {
      id: 5,
      name: "Ngiklanmurah",
      category: "Mobile App",
      image: "/assets/images/portfolio/image-ngiklan.png",
      alt: "Ngiklan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis eu lectus et lobortis. Nulla sit amet finibus odio. Integer ut quam sed enim placerat laoreet. Mauris eu cursus leo. Fusce pulvinar tellus nibh, et faucibus nulla consequat eget. Donec sit amet iaculis turpis, nec auctor lacus. Integer sollicitudin justo id laoreet scelerisque. Aenean nisi tortor.",
      link: "https://example.com/ngiklanmurah"
    },
    {
      id: 6,
      name: "Gpi Dashboard",
      category: "Website",
      image: "/assets/images/portfolio/image-gpi-dashboard.png",
      alt: "Gpi DASHBOARD",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis eu lectus et lobortis. Nulla sit amet finibus odio. Integer ut quam sed enim placerat laoreet. Mauris eu cursus leo. Fusce pulvinar tellus nibh, et faucibus nulla consequat eget. Donec sit amet iaculis turpis, nec auctor lacus. Integer sollicitudin justo id laoreet scelerisque. Aenean nisi tortor.",
      link: "https://example.com/gpi-dashboard"
    },
    {
      id: 7,
      name: "Company Profile",
      category: "Website",
      image: "/assets/images/portfolio/image-protonema.png",
      alt: "Protonema",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis eu lectus et lobortis. Nulla sit amet finibus odio. Integer ut quam sed enim placerat laoreet. Mauris eu cursus leo. Fusce pulvinar tellus nibh, et faucibus nulla consequat eget. Donec sit amet iaculis turpis, nec auctor lacus. Integer sollicitudin justo id laoreet scelerisque. Aenean nisi tortor.",
      link: "https://example.com/protonema"
    },
    {
      id: 8,
      name: "Starship Dashboard",
      category: "Website",
      image: "/assets/images/portfolio/image-startship.png",
      alt: "Startship",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis eu lectus et lobortis. Nulla sit amet finibus odio. Integer ut quam sed enim placerat laoreet. Mauris eu cursus leo. Fusce pulvinar tellus nibh, et faucibus nulla consequat eget. Donec sit amet iaculis turpis, nec auctor lacus. Integer sollicitudin justo id laoreet scelerisque. Aenean nisi tortor.",
      link: "https://example.com/starship"
    },
    {
      id: 9,
      name: "Solidaritas Perempuan",
      category: "Website",
      image: "/assets/images/portfolio/image-sp.png",
      alt: "Sp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis eu lectus et lobortis. Nulla sit amet finibus odio. Integer ut quam sed enim placerat laoreet. Mauris eu cursus leo. Fusce pulvinar tellus nibh, et faucibus nulla consequat eget. Donec sit amet iaculis turpis, nec auctor lacus. Integer sollicitudin justo id laoreet scelerisque. Aenean nisi tortor.",
      link: "https://example.com/sp"
    },
    {
      id: 10,
      name: "Web Sekolah",
      category: "Website",
      image: "/assets/images/portfolio/image-bloksawo.png",
      alt: "Smk bloksawo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis eu lectus et lobortis. Nulla sit amet finibus odio. Integer ut quam sed enim placerat laoreet. Mauris eu cursus leo. Fusce pulvinar tellus nibh, et faucibus nulla consequat eget. Donec sit amet iaculis turpis, nec auctor lacus. Integer sollicitudin justo id laoreet scelerisque. Aenean nisi tortor.",
      link: "https://example.com/bloksawo"
    },
    {
      id: 11,
      name: "Belajar",
      category: "Website",
      image: "/assets/images/portfolio/image-tech.png",
      alt: "Tech",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis eu lectus et lobortis. Nulla sit amet finibus odio. Integer ut quam sed enim placerat laoreet. Mauris eu cursus leo. Fusce pulvinar tellus nibh, et faucibus nulla consequat eget. Donec sit amet iaculis turpis, nec auctor lacus. Integer sollicitudin justo id laoreet scelerisque. Aenean nisi tortor.",
      link: "https://example.com/belajar"
    },
    {
      id: 12,
      name: "Organisasi",
      category: "Website",
      image: "/assets/images/portfolio/image-idn.png",
      alt: "Idn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis eu lectus et lobortis. Nulla sit amet finibus odio. Integer ut quam sed enim placerat laoreet. Mauris eu cursus leo. Fusce pulvinar tellus nibh, et faucibus nulla consequat eget. Donec sit amet iaculis turpis, nec auctor lacus. Integer sollicitudin justo id laoreet scelerisque. Aenean nisi tortor.",
      link: "https://example.com/idn"
    },
    {
      id: 13,
      name: "Paradina",
      category: "Website",
      image: "/assets/images/portfolio/image-paradina.png",
      alt: "Paradina",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis eu lectus et lobortis. Nulla sit amet finibus odio. Integer ut quam sed enim placerat laoreet. Mauris eu cursus leo. Fusce pulvinar tellus nibh, et faucibus nulla consequat eget. Donec sit amet iaculis turpis, nec auctor lacus. Integer sollicitudin justo id laoreet scelerisque. Aenean nisi tortor.",
      link: "https://example.com/idn"
    }
  ];

  const filteredProjects =
    activeCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter((project) =>
          activeCategory === "uiux"
            ? project.category.toLowerCase().includes("ui")
            : project.category.toLowerCase().includes(activeCategory)
        );

  // const openDetailDialog = (project: (typeof portfolioProjects)[0]) => {
  //   setSelectedProject(project);
  //   setIsDetailDialogOpen(true);
  // };

  const closeDetailDialog = () => {
    setIsDetailDialogOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="w-full px-4 md:px-10 lg:px-20 py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-14">
        <div className="text-center" data-aos="fade-up">
          <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-[40px] text-foundation-whitelight tracking-wide leading-tight">
            Portfolio
          </h2>
        </div>

        <div
          className="flex flex-wrap justify-center gap-3 sm:gap-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {filterCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`px-5 sm:px-8 py-2.5 rounded-lg font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 ${
                activeCategory === category.id
                  ? "[background:linear-gradient(129deg,rgba(78,113,255,1)_0%,rgba(84,9,218,1)_100%)] text-white"
                  : "bg-[#ffffff14] text-foundation-whitenormal-active"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="flex flex-col bg-transparent border-0 overflow-hidden cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              // onClick={() => openDetailDialog(project)}
            >
              <CardContent className="p-0">
                <img
                  src={project.image}
                  className="w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px] object-cover rounded-t-xl"
                  alt={project.alt}
                />
              </CardContent>
              <CardFooter className="flex items-center justify-between p-4 bg-[#ffffff14] rounded-b-xl">
                <div className="font-bold text-sm sm:text-base text-foundation-whitenormal-active font-lato truncate max-w-[60%]">
                  {project.name}
                </div>
                <div className="font-bold text-xs sm:text-sm text-foundation-whitedark-hover font-lato text-right truncate max-w-[40%]">
                  {project.category}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {isDetailDialogOpen && selectedProject && (
        <Dialog
          isOpen={isDetailDialogOpen}
          onClose={closeDetailDialog}
          title={selectedProject.name}
        >
          <div className="flex flex-col gap-4 items-center">
            <img
              src={selectedProject.image}
              alt={selectedProject.alt}
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <p className="text-lg font-semibold text-gray-800">
              {selectedProject.category}
            </p>
            <p className="text-gray-600 text-center">
              {selectedProject.description}
            </p>
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-4"
              >
                View Project
              </a>
            )}
          </div>
        </Dialog>
      )}
    </section>
  );
};
