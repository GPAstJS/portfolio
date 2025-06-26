import { Card } from "./components/card";
import { ProjectCard } from "./components/project-card";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoodreads } from "react-icons/fa";

export const App = () => {
  return (
    <main className="  py-[100px]  flex flex-col item justify-center   lg:flex-row  h-screen text-white">
      <div className="w-full lg:w-[50%] flex px-[1rem] lg:px-0 lg:justify-center">
        <div className=" px-[25px]  flex flex-col">
          <h1 className="text-[36px]">Guilherme Albuquerque</h1>
          <h2 className="text-[24px]">Front End Engineer</h2>
          <p className="my-[25px]">
            I build accessible, pixel-perfect digital <br /> experiences for the
            web.
          </p>

          <div className="flex flex-row gap-x-[15px] 2">
            <FaGithub className="w-[24px] h-[24px]" />
            <FaLinkedin className="w-[24px] h-[24px]" />
            <FaCodepen className="w-[24px] h-[24px]" />
            <FaInstagram className="w-[24px] h-[24px]" />
            <FaGoodreads className="w-[24px] h-[24px]" />
          </div>

          <div>
            <p className="sticky">About</p>
            <p className="sticky">Experience</p>
            <p className="sticky">Projects</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[70%] flex px-[2rem] lg:px-[0] lg:justify-center overflow-y-auto">
        <div className="w-[70%] ">
          <section className="flex  flex-col gap-y-[15px] px-0 lg:px-[25px]">
            <p className="">
              I’m a developer passionate about crafting accessible,
              pixel-perfect user interfaces that blend thoughtful design with
              robust engineering. My favorite work lies at the intersection of
              design and development, creating experiences that not only look
              great but are meticulously built for performance and usability.
            </p>
            <p>
              Currently, I'm a Senior Front-End Engineer at Klaviyo,
              specializing in accessibility. I contribute to the creation and
              maintenance of UI components that power Klaviyo’s frontend,
              ensuring our platform meets web accessibility standards and best
              practices to deliver an inclusive user experience.
            </p>
            <p>
              In the past, I've had the opportunity to develop software across a
              variety of settings — from advertising agencies and large
              corporations to start-ups and small digital product studios.
              Additionally, I also released a comprehensive video course a few
              years ago, guiding learners through building a web app with the
              Spotify API.
            </p>
            <p>
              In my spare time, I’m usually climbing, reading, hanging out with
              my wife and two cats, or running around Hyrule searching for Korok
              seedsKorok seeds.
            </p>
          </section>

          <div className="flex flex-col gap-y-[100px]">
            <section className="flex flex-col gap-y-[15px]">
              <Card
                date="2025 - Present"
                title="Senior Frontend Engineer, Accessibility ·"
                content="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
                tags={["JavaScript", "HTML", "CSS"]}
              />
              <Card
                date="2025 - Present"
                title="Senior Frontend Engineer, Accessibility ·"
                content="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
                tags={["JavaScript", "HTML", "CSS"]}
              />
              <Card
                date="2025 - Present"
                title="Senior Frontend Engineer, Accessibility ·"
                content="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
                tags={["JavaScript", "HTML", "CSS"]}
              />
              <Card
                date="2025 - Present"
                title="Senior Frontend Engineer, Accessibility ·"
                content="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
                tags={["JavaScript", "HTML", "CSS"]}
              />
              <Card
                date="2025 - Present"
                title="Senior Frontend Engineer, Accessibility ·"
                content="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
                tags={["JavaScript", "HTML", "CSS"]}
              />
              <Card
                date="2025 - Present"
                title="Senior Frontend Engineer, Accessibility ·"
                content="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
                tags={["JavaScript", "HTML", "CSS"]}
              />
            </section>

            <section>
              <ProjectCard
                image="*"
                title="Build a Spotify Connected App"
                content="Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more."
                tags={["JavaScript", "HTML", "CSS"]}
              />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};
