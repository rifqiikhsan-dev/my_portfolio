import React, { useState } from "react";

import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../../components/select";
import { Textarea } from "../../../../components/textarea";

export const Contact = (): JSX.Element => {
  const services = [
    "Web Development",
    "UI/UX Design",
    "Mobile App Development",
    "Consulting",
    "Other"
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    timeline: "",
    projectDetails: ""
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isComplete = Object.values(formData).every(
      (val) => val.trim() !== ""
    );
    if (!isComplete) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Submitted data:", formData);
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
            <Select
              onValueChange={(val) => handleChange("service", val)}
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
            variant="outline"
            className="px-10 py-3 rounded-lg border-2 border-[#959595] bg-transparent font-lato font-bold text-xl text-foundation-whitedark-hover tracking-[0.60px]"
          >
            Send
          </Button>
        </div>
      </form>
    </section>
  );
};
