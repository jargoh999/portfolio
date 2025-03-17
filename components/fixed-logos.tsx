import { Github, Mail } from "lucide-react";
import { Separator } from "./ui/separator";

const FixedLogos = () => {
    return (
        <div className="fixed left-0 top-0 h-[300px] w-16 border-white/20 bg-sticky flex flex-col items-center space-y-6">
            <Separator className="w-8 bg-white/20 h-2" orientation="vertical" />
            <a
                href="https://github.com/elias"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#c084fc] transition-colors"
            >
                <Github className="w-5 h-5" />
            </a>
            <a
                href="mailto:contact@elias.dev"
                className="text-white/60 hover:text-[#c084fc] transition-colors"
            >
                <Mail className="w-5 h-5" />
            </a>
        </div>  
    );
};

export default FixedLogos;