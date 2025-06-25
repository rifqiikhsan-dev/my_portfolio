import { useState } from "react";

import { Button } from "../../../../components/common/button";
import { Input } from "../../../../components/common/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../../components/common/select";
import { Textarea } from "../../../../components/common/textarea";

export const Contact = (): JSX.Element => {
  const services = [
    "Web Development",
    "UI/UX Design",
    "Mobile App Development",
    "Consulting",
    "Other"
  ];

  const getInitialFormData = () => {
    const stored = sessionStorage.getItem("contactFormData");
    return stored
      ? JSON.parse(stored)
      : {
          name: "",
          email: "",
          phone: "",
          service: "",
          timeline: "",
          projectDetails: ""
        };
  };

  const [formData, setFormData] = useState(getInitialFormData);

  const handleChange = (field: string, value: string) => {
    const updated = {
      ...formData,
      [field]: value
    };
    setFormData(updated);
    sessionStorage.setItem("contactFormData", JSON.stringify(updated));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isComplete = Object.values(formData).every(
      (val) => typeof val === "string" && val.trim() !== ""
    );

    if (!isComplete) {
      alert("Please fill in all fields.");
      return;
    }

    const message = `Halo Rifqi Ikhsan,

Saya ingin mendiskusikan proyek dengan rincian sebagai berikut:

Nama: ${formData.name}
Email: ${formData.email}
Nomor HP: ${formData.phone}
Layanan yang dibutuhkan: ${formData.service.replace(/-/g, " ")}
Perkiraan timeline: ${formData.timeline}

Detail proyek:
${formData.projectDetails}

Silakan hubungi saya kembali jika ada hal yang perlu dikonfirmasi.

Terima kasih.`;

    const whatsappUrl = `https://wa.me/6289629814773?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    sessionStorage.removeItem("contactFormData");
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-[50px] w-full px-4 md:px-10 lg:px-20"
    >
      <header
        className="flex flex-col items-center gap-[18px]"
        data-aos="fade-up"
      >
        <h2 className="font-bold text-foundation-whitelight text-2xl sm:text-3xl md:text-[40px] tracking-[0.60px] md:tracking-[1.20px] font-lato text-center leading-normal">
          Contact me
        </h2>
        <p className="font-medium text-foundation-whitedark-active text-base sm:text-lg md:text-xl text-center tracking-[0.30px] md:tracking-[0.60px] leading-6 md:leading-8 font-lato px-4 sm:px-0">
          Cultivating Connections: Reach Out And Connect With Me
        </p>
      </header>

      <form
        className="flex flex-col items-start gap-[30px] w-full max-w-[1012px]"
        onSubmit={handleSubmit}
      >
        <div
          className="flex flex-col md:flex-row w-full gap-[30px]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="w-full md:w-1/2">
            <Input
              placeholder="Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="px-6 py-3.5 h-auto bg-[#ffffff0a] rounded-lg font-lato font-medium text-foundation-whitedark-hover text-base tracking-[0.48px]"
            />
          </div>
          <div className="w-full md:w-1/2">
            <Input
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="px-6 py-3.5 h-auto bg-[#ffffff0a] rounded-lg font-lato font-medium text-foundation-whitedark-hover text-base tracking-[0.48px]"
            />
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row w-full gap-[30px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="w-full md:w-1/2">
            <Input
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="px-6 py-3.5 h-auto bg-[#ffffff0a] rounded-lg font-lato font-medium text-foundation-whitedark-hover text-base tracking-[0.48px]"
            />
          </div>
          <div className="w-full md:w-1/2">
            {process.env.NODE_ENV === "test" ? (
              <select
                value={formData.service}
                onChange={(e) => handleChange("service", e.target.value)}
                className="px-6 py-3.5 h-auto bg-[#ffffff0a] rounded-lg font-lato font-medium text-foundation-whitedark-hover text-base tracking-[0.48px]"
                data-testid="service-select"
              >
                <option value="">Service Of Interest</option>
                {services.map((service) => (
                  <option
                    key={service}
                    value={service.toLowerCase().replace(/\s+/g, "-")}
                  >
                    {service}
                  </option>
                ))}
              </select>
            ) : (
              <Select
                onValueChange={(val) => handleChange("service", val as string)}
                value={formData.service}
              >
                <SelectTrigger className="px-6 py-3.5 h-auto bg-[#ffffff0a] rounded-lg font-lato font-medium text-foundation-whitedark-hover text-base tracking-[0.48px]">
                  <SelectValue placeholder="Service Of Interest" />
                </SelectTrigger>
                <SelectContent className="bg-[#3f3f3f] rounded-lg font-lato font-medium text-foundation-whitedark-hover text-base tracking-[0.48px]">
                  {services.map((service) => (
                    <SelectItem
                      key={service}
                      value={service.toLowerCase().replace(/\s+/g, "-")}
                    >
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row w-full gap-[30px]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="w-full md:w-1/2">
            <Input
              placeholder="Timeline"
              value={formData.timeline}
              onChange={(e) => handleChange("timeline", e.target.value)}
              className="px-6 py-3.5 h-auto bg-[#ffffff0a] rounded-lg font-lato font-medium text-foundation-whitedark-hover text-base tracking-[0.48px]"
            />
          </div>
          <div className="w-full md:w-1/2">
            <Textarea
              placeholder="Project Details..."
              value={formData.projectDetails}
              onChange={(e) => handleChange("projectDetails", e.target.value)}
              className="px-6 py-3.5 h-[162px] bg-[#ffffff0a] rounded-lg font-lato font-medium text-foundation-whitedark-hover text-base tracking-[0.48px] resize-none"
            />
          </div>
        </div>

        <div
          className="flex justify-end w-full"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Button
            type="submit"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#4E71FF] to-[#5409DA] text-white text-base md:text-xl font-bold w-full md:w-auto hover:scale-105 hover:shadow-lg"
          >
            Send
          </Button>
        </div>
      </form>
    </section>
  );
};
