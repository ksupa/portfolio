import { archivo } from "./fonts";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { skills } from "./data/skills";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <main>
      <section className='p-6 items-end md:items-center lg:items-start md:p-20 flex h-screen bg-cover bg-center bg-[url(../images/banner.webp)]'>
        <div>
          <h1 className={`${archivo.className} text-6xl md:text-8xl font-bold`}>
            KEVIN SUPA
          </h1>
          <p className='text-2xl sm:text-4xl md:text-5xl'>WEB DEVELOPER</p>
        </div>
      </section>

      {/* About */}
      <div className='content-center p-6 md:p-20 w-full max-w-6xl my-0 mx-auto'>
        <p className='text-2xl sm:text-4xl md:text-5xl text-center mb-4'>
          Hello! I'm Kevin.
        </p>
        <p className='text-lg sm:text-xl md:text-2xl text-center mb-4'>
          A web developer in Edmonton, Alberta with a passion for clean code and
          smooth user experience.
        </p>
        <p className='text-lg sm:text-xl md:text-2xl text-center'>
          Multi-instrument musician in my spare time. I believe both great
          websites and great music come down to the same thing: making something
          complex feel effortless.
        </p>

        <div className='mt-10 md:mt-20 grid grid-rows-3 sm:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-6 justify-center'>
          {skills.map((skill) => (
            <img
              key={skill.id}
              title={skill.title}
              className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16'
              src={skill.image}
            />
          ))}
        </div>
      </div>

      {/* Projects */}
      <section className='bg-gray-300'>
        <div className='mt-7 p-6 md:p-20 w-full max-w-6xl my-0 mx-auto'>
          <h2
            className={`text-2xl sm:text-4xl md:text-5xl text-center mb-7 md:mb-13`}>
            Projects
          </h2>

          <div className='grid w-full justify-center gap-7 '>
            {projects.map((project) => {
              return (
                <Card key={project.id} className={"w-full"}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.subTitle}</CardDescription>
                    <CardAction className='flex gap-3 items-center'>
                      <Link href={project.sourceCode} target='_blank'>
                        <img
                          title='Source Code'
                          className='w-10 h-10'
                          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg'
                        />
                      </Link>
                      <Button>
                        <Link href={project.demoLink} target='_blank'>
                          Demo
                        </Link>
                      </Button>
                    </CardAction>
                  </CardHeader>
                  <CardContent
                    className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                    <p>{project.description}</p>
                    <img
                      alt={project.title}
                      src={project.image}
                      className='rounded-lg object-cover max-h-60 md:max-h-full w-full'
                    />
                  </CardContent>
                  <CardFooter className='mt-4'>
                    {project.technologies.map((tech, index) => {
                      return (
                        <img
                          key={index}
                          title={tech.name}
                          className='w-7 h-7 mr-2'
                          src={tech.icon}
                        />
                      );
                    })}
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <div className='content-center p-6 md:p-20 w-full max-w-6xl my-0 mx-auto'>
        <p className='text-2xl sm:text-4xl md:text-5xl text-center mb-4'>
          Get in touch!
        </p>
      </div>
    </main>
  );
}
