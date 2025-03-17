import FixedLogos from "@/components/fixed-logos";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";


const SmallProjectCard = ({ title, description, liveLink, skills }: {
    title: string;
    description: string;
    skills: string;
}) => (
    <div className="relative group bg-transparent border border-white/20 rounded-none overflow-hidden h-auto">
        <div className="border border-white/20 p-1 rounded-none text-white/40">
            {skills}
        </div>
        <div className="p-4 space-x-3">
            <h3 className="text-[#e4e4e4] font-mono text-lg mb-2">{title}</h3>
            <p className="text-[#8b8b8b] text-sm mb-4">{description}</p>
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
                    <h1 className="text-xl font-mono">/about-me</h1>
                    <p className="text-sm text-gray-400">who am i?</p>
                </div>
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
            <Footer />
        </div>
    )
};

export default Page;