import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/MovieMagnet.jpg";
import proj2 from "../../public/images/projects/PixelateMe.jpg";
import proj3 from "../../public/images/projects/OpenCoin.jpg";
import proj4 from "../../public/images/projects/PDFChatter.png";
import proj5 from "../../public/images/projects/Event Management System.jpg";
import proj6 from "../../public/images/projects/SSR.jpg";
import proj7 from "../../public/images/projects/ODD.png";
import proj8 from "../../public/images/projects/PandemicPal.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Crypto Screener Application github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {

  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Nikhil Chowdary Portfolio| Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by Nikhil"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          <div className="col-span-6 sm:col-span-12">
              <Project
                type="Chatbot"
                img={proj8}
                title="Pandemic Pal  🤖
                WhatsApp ChatBot"
                link="https://github.com/nikhilc523/PandemicPal"
                github="https://github.com/nikhilc523/PandemicPal"
              />
              
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                img={proj6}
                title="Student Social Responsibility"
                link="https://ssramritapuri.vercel.app"
                github="https://github.com/nikhilc523/ssrBackend"
              />
              
            </div>
          <div className="col-span-12">
              <FeaturedProject
                type="Web Application"
                title="Onsite-Disease-Detection"
                summary="Onsite Disease Detection (ODD) is a web app that helps users quickly assess serious health risks, especially when doctors aren't available."
          
                img={proj7}
                link="https://github.com/nikhilc523/Onsite-Disease-Detection"
                github="https://github.com/nikhilc523/Onsite-Disease-Detection"
              />
            </div>
          <div className="col-span-12">
              <FeaturedProject
                type="Web Application"
                title="PDFChatter"
                summary="PDF Chatter-Full stack AI Saas based application | TypeScript, Next Js, PineconeDB, PostgreSQL, Tailwind CSS, AWS SDK"
          
                img={proj4}
                link="https://pdf-chatter-six.vercel.app"
                github="https://github.com/nikhilc523/PDFChatter"
              />
            </div>
            
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Web Application"
                title="Pixelate Me!"
                img={proj2}
                link="https://github.com/nikhilc523/PixelateMe-"
                github="https://github.com/nikhilc523/PixelateMe-"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="OpenCoin"
                img={proj3}
                link="https://github.com/nikhilc523/OpenCoin"
                github="https://github.com/nikhilc523/OpenCoin"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Movie Magnet"
                summary="Welcome to MovieMagent, your ultimate destination for discovering, exploring, and staying up-to-date with the world of movies!
                "
                img={proj1}
                link="https://github.com/nikhilc523/MovieMagnet"
                github="https://github.com/nikhilc523/MovieMagnet"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Web Application"
                img={proj5}
                title="Event Management System"
                link="https://github.com/nikhilc523/Event_Management_System"
                github="https://github.com/nikhilc523/Event_Management_System"
              />
            </div>
            
            
          </div>
        </Layout>
      </main>
    </>
  );
}
