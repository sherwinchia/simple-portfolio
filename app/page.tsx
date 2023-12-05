import { experiences, personalDetails, projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  const handleGetStatusColor = (status: string) => {
    let color;
    switch (status) {
      case "active":
        color = "bg-green-500";
        break;
      case "inactive":
        color = "bg-red-500";
        break;
      case "pause":
        color = "bg-yellow-400";
        break;
      default:
        color = "bg-blue-500";
        break;
    }
    return color;
  };

  return (
    <>
      <div className=" grid-cols-1 lg:grid-cols-2 grid gap-4 lg:gap-8   border border-neutral-600 p-4 md:p-8 flex-1 content-start">
        <div className="">
          <section className="w-full flex flex-col sticky top-8">
            <Image
              src={personalDetails.avatar}
              width={100}
              height={100}
              className=" overflow-hidden  mb-4"
              alt={`${personalDetails.name} avatar`}
            ></Image>
            <div className="text-4xl font-bold pb-2 text-neutral-800">
              {personalDetails.name}
            </div>
            <div className="w-full lg:w-4/5 ">{personalDetails.aboutMe}</div>
          </section>
        </div>

        <div className="flex flex-col gap-4 ">
          {experiences.length > 0 && (
            <section className=" flex flex-col">
              <div className=" font-semibold pb-1 text-neutral-800">
                Experiences
              </div>
              {experiences.map((experience, index) => {
                return (
                  <div key={index} className="flex flex-col space-y-2">
                    <div
                      className={`flex justify-between items-center text-sm space-x-4`}
                    >
                      <div className="flex items-center space-x-1">
                        <span className="">{experience.role}</span>
                        {experience.company && (
                          <span className="text-xs">@{experience.company}</span>
                        )}
                      </div>
                      <span className="h-[.5px] bg-neutral-800 flex-1"></span>
                      <span>{experience.period}</span>
                    </div>
                  </div>
                );
              })}
            </section>
          )}
          {projects.length > 0 && (
            <section className=" flex flex-col  w-full">
              <div className=" font-semibold pb-1 text-neutral-800">
                Projects
              </div>
              {projects.map((project, index) => {
                return (
                  <div key={index} className="flex flex-col space-y-2">
                    <Link
                      target="_blank"
                      href={project.url ?? "/"}
                      className={`flex justify-between items-center text-sm space-x-4 group ${
                        project.url ? "" : "pointer-events-none"
                      }`}
                    >
                      <span
                        className={project.url ? "group-hover:underline" : ""}
                      >
                        {project.name}
                      </span>
                      <span className="h-[.5px] bg-neutral-800 flex-1"></span>
                      <div className="flex justify-center items-center">
                        <div
                          className={`z-10 w-2 h-2 rounded-full absolute ${handleGetStatusColor(
                            project.status
                          )}`}
                        ></div>
                        <div
                          className={`flex items-center w-2 h-2 rounded-full animate-ping ${handleGetStatusColor(
                            project.status
                          )}`}
                        ></div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </section>
          )}
          {personalDetails.socials.length > 0 && (
            <section className=" flex flex-col">
              <div className=" font-semibold pb-2 text-neutral-800">
                Find me
              </div>
              <div className="flex flex-wrap gap-4">
                {personalDetails.socials.map((social, index) => {
                  return (
                    <Link
                      href={social.url}
                      key={index}
                      className="flex justify-between items-center text-lg"
                    >
                      {social.type === "github" && <FaGithub />}
                      {social.type === "facebook" && <FaFacebookF />}
                      {social.type === "x" && <FaXTwitter />}
                      {social.type === "instagram" && <FaInstagram />}
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
