import FixedLogos from "@/components/fixed-logos"
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar"
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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

const SmallProjectCard = ({ title, description, liveLink, skills }: {
    title: string;
    description: string;
    liveLink: string;
    skills: string;
}) => (
    <div className="relative group bg-transparent border border-white/20 rounded-none overflow-hidden h-auto">
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
const Page = () => {
    


    return (
        <div className="min-h-screen bg-[#282c33] text-white px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Navigation */}
            <NavBar />
            <FixedLogos />
            <main className="container mx-auto p-5 ">
                {/* Projects Header */}
                <div className="max-w-6xl mx-auto py-30 space-y-5">
                    <h1 className="text-xl font-mono">/projects</h1>
                    <p className="text-sm text-gray-400">List of my projects</p>
                </div>
                <section id="projects" className="max-w-6xl mx-auto py-20">
                    <div className="flex justify-between items-center mb-12 ">
                        <h2 className="font-mono text-2xl">
                            <span className="text-[#c084fc]">#</span>Complete Apps
                        </h2>
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
                        <ProjectCard
                            title="Kahoot Answers Viewer"
                            description="Get answers to your kahoot quiz"
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

                
                <section id="projects" className="max-w-6xl mx-auto py-20">
                    <div className="flex justify-between items-center mb-12 ">
                        <h2 className="font-mono text-2xl">
                            <span className="text-[#c084fc]">#</span>Small Apps
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <SmallProjectCard
                            title="ChoreNodes"
                            description="Microsoft Windows hosting"
                            liveLink="#"
                            skills="React Django Java"
                        />
                        <SmallProjectCard
                            title="ProtectX"
                            description="Discord bot create and host"
                            liveLink="#"
                            skills="React Django Java"
                        />
                        <SmallProjectCard
                            title="Kahoot Answers Viewer"
                            description="Get answers to your kahoot quiz"
                            liveLink="#"
                            skills="React Django Java"
                        />
                        <SmallProjectCard
                            title="Kahoot Answers Viewer"
                            description="Get answers to your kahoot quiz"
                            liveLink="#"
                            skills="React Django Java"
                        />
                    </div>
                </section>

              
            </main>
            <Footer/>
        </div>
        
    )




};
export default Page;