import { Github, Twitter } from "lucide-react";

   {/* Footer */}
     const Footer = () => {
        return (
            <footer className="max-w-6xl mx-auto py-8 border-t border-[#8b8b8b]">
                <div className="flex justify-between items-center">
                    <span className="font-mono text-sm text-[#8b8b8b]">Copyright 2024. Made by Elias</span>
                    <div className="flex items-center space-x-4">
            <a href="#" className="text-[#8b8b8b] hover:text-[#8b8b8b] ">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#8b8b8b] hover:text-[#8b8b8b]">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        </footer>
        )
    };

    export default Footer;  