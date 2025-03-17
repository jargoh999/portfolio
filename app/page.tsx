"use client"
import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, ExternalLink, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import SkillCard from "@/components/ui/skill-card"
import FixedLogos from "@/components/fixed-logos"
import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"

const ProjectCard = ({ title, description, image, liveLink, skills }: {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  skills: string;
}) => (
  <div className="relative group bg-transparent border border-white/20 rounded-none overflow-hidden h-auto">
    <div className="aspect-video overflow-hidden">
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="border border-white/20 p-1 rounded-none text-white/40">
      {skills}
    </div>
    <div className="p-4 space-x-3">
      <h3 className="text-[#e4e4e4] font-mono text-lg mb-2">{title}</h3>
      <p className="text-[#8b8b8b] text-sm mb-4">{description}</p>
      <Button
        variant="ghost"
        className="text-[#8b8b8b] hover:text-[#c084fc] hover:bg-[#282c33] transition-colors font-mono text-sm border-2 border-[#c084fc] rounded-none"
      >
        Live <span className="ml-2"><ExternalLink className="w-5 h-5" /></span>
      </Button>
      <Button
        variant="ghost"
        className="text-[#8b8b8b] hover:text-[#c084fc] hover:bg-[#282c33] transition-colors font-mono text-sm border-2 border-white/20 rounded-none"
      >
        Cached <span className="ml-2"><ExternalLink className="w-5 h-5" /></span>
      </Button>
    </div>
  </div>
)

export default function Home() {
  return (
    <div className="min-h-screen bg-[#282c33] text-white px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Navigation */}
      <NavBar />
      <FixedLogos />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h1 className="font-mono text-3xl mb-4">
              Ayomide is a{" "}
              <span className="text-[#c084fc]">web designer</span> and{" "}
              <span className="text-[#c084fc]">front-end developer</span>
            </h1>
            <p className="text-[#8b8b8b] mb-6">
              Hi, I&apos;m a developer who loves technology and web creativity.
            </p>
            <Button className="border border-[#b36ec8] rounded-none bg-[#282c33] hover:bg-[#282c33]">
              Contact me !!!
            </Button>
          </div>
          <div className="relative ">
            <img
              src="https://res.cloudinary.com/dbjtncfmz/image/upload/v1740508761/Dots_rntgx6.png"
              alt="Profile"
              className="rounded-none w-[69px] max-w-md mx-auto absolute bottom-1/7 right-1/9"
            />

            <img
              src="https://res.cloudinary.com/dbjtncfmz/image/upload/v1740508284/Image_uk3iyl.png"
              alt="Profile"
              className="rounded-lg w-full max-w-md mx-auto"
            />
            <div className="flex items-center px-3 py-1 rounded-none border bg-[#282c33] m-1 border-2 border-white/20 text-xs relative-1  mt-[10px]">
              <span className="w-2 h-2 bg-[#c084fc] rounded-full mr-2"></span>
              Currently Working on PortfoLio
            </div>
          </div>

        </motion.div>
      </section>
      {/* Quote Section */}
      <section id="quote" className="mx-auto flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center">
          <div className="flex items-center relative">
            <h3 className="p-4 font-mono text-lg flex items-center justify-center text-[#8b8b8b] border border-white/20 pt-6 text-center  ">
              &ldquo;Programs must be written for people to read, and only incidentally for machines to execute&rdquo;</h3>
            <div className="absolute top-0 left-4 bg-sticky">
              <img
                src="https://res.cloudinary.com/dbjtncfmz/image/upload/v1740511823/dwacx42zz2398teo0rek.png"
                alt="Profile"
                className="max-w-md mx-auto ab-1 h-5 top-0 left-4 bg-[#282c33] p-1"
              />
            </div>
            <div className="absolute bottom-[-2] right-3 bg-sticky">
              <img
                src="https://res.cloudinary.com/dbjtncfmz/image/upload/v1740511823/dwacx42zz2398teo0rek.png"
                alt="Profile"
                className="max-w-md mx-auto ab-1 h-5 bottom-1 right-3 bg-[#282c33] p-1"
              />
            </div>
          </div>
          <div className="inline-flex self-end ml-auto">
            <span className="text-sm p-4 font-mono text-lg flex items-center justify-center text-[#8b8b8b] border border-white/20 pt-6 text-center border-t">- Harold Benson</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto py-20 border-t border-[#c084fc]">
        <div className="flex justify-between items-center mb-12 ">
          <h2 className="font-mono text-2xl">
            <span className="text-[#c084fc]">#</span>projects
          </h2>
          <Button variant="link" className="text-[#8b8b8b] hover:text-[#c084fc]">
            View all →
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="ChoreNodes"
            description="Microsoft Windows hosting"
            image="/placeholder.svg"
            liveLink="#"
            skills="React Django Java"
          />
          <ProjectCard
            title="ProtectX"
            description="Discord bot create and host"
            image="/placeholder.svg"
            liveLink="#"
            skills="React Django Java"
          />
          <ProjectCard
            title="Kahoot Answers Viewer"
            description="Get answers to your kahoot quiz"
            image="/placeholder.svg"
            liveLink="#"
            skills="React Django Java"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto py-20 border-t border-[#c084fc]">
        <h2 className="font-mono text-2xl mb-12">
          <span className="text-[#c084fc]">#</span>skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="text-[#8b8b8b]">
              <img src="https://res.cloudinary.com/dbjtncfmz/image/upload/v1741682922/zakky-surya-hard-surface-1-removebg-preview_ivjjfu.png" alt="" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <SkillCard
                title="Languages"
                skills={["JavaScript (ES6)", "Python", "HTML5/CSS3"]}
              />
            </div>
            <div className="space-y-4">
              <SkillCard
                title="Frameworks"
                skills={["React.js", "Next.js", "Node.js"]}
              />
            </div>
            <div className="space-y-4">
              <SkillCard
                title="Tools"
                skills={["Git", "VS Code", "Figma"]}
              />
            </div>
            <div className="space-y-4">
            
            </div>
            <div className="space-y-4">
              <SkillCard
                title="Tools"
                skills={["Git", "VS Code", "Figma"]}
              />

            </div> <div className="space-y-4">
              <SkillCard
                title="Tools"
                skills={["Git", "VS Code", "Figma"]}
              />

        </div>
          </div>
          
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto py-20">
        <h2 className="font-mono text-2xl mb-8">
          <span className="text-[#c084fc]">#</span>about-me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-[#8b8b8b] space-y-4">
            <p>Hello, I'm Elias!</p>
            <p>
              I'm a self-taught front-end developer based in Oslo, Norway.
              I can develop responsive websites from scratch and raise them
              into modern user-friendly web experiences.
            </p>
             <p>
              I'm a self-taught front-end developer based in Oslo, Norway.
              I can develop responsive websites from scratch and raise them
              into modern user-friendly web experiences.
            </p> <p>
              I'm a self-taught front-end developer based in Oslo, Norway.
              I can develop responsive websites from scratch and raise them
              into modern user-friendly web experiences.
            </p> <p>
              I'm a self-taught front-end developer based in Oslo, Norway.
              I can develop responsive websites from scratch and raise them
              into modern user-friendly web experiences.
            </p>
            <Button className="border border-[#b36ec8] rounded-none bg-[#282c33] hover:bg-[#282c33] mt-[30px]">
              Read more →
            </Button>
          </div>
          <div className="text-[#8b8b8b]">
            <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3o2anhwdzJmaHY2aHNkMTMxbzJyNHFndmUwYW14NTJwZjVmejRxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JWuBH9rCO2uZuHBFpm/giphy.gif" alt="" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="max-w-6xl mx-auto py-20">
        <h2 className="font-mono text-2xl mb-8">
          <span className="text-[#c084fc]">#</span>contacts
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px]">
          <div className="text-[#8b8b8b]">
            <p>I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me.</p>
          </div>
          <div className="space-y-4 w-[200px] mt-10 border border-white/20 h-auto p-2">
           
            <Button variant="ghost" className="text-[#8b8b8b] hover:text-[#8b8b8b] hover:bg-[#282c33]">
                <Github className="w-5 h-5" /> ella@gmail.com
              </Button>
            <Button variant="ghost" className="text-[#8b8b8b] hover:text-[#8b8b8b] hover:bg-[#282c33]">
              <Twitter className="w-5 h-5" /> ella@gmail.com
              </Button>
            <Button variant="ghost" className="text-[#8b8b8b] hover:text-[#8b8b8b] hover:bg-[#282c33]">
              <Linkedin className="w-5 h-5" /> ella@gmail.com
              </Button>
          
          </div>
        </div>
      </section>

      {/* Footer */}
   <Footer />
    </div>
  )
}