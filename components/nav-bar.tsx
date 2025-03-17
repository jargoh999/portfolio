
const NavBar = () => {
    return (
        <nav className="py-6">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <span className="font-mono text-md text-tracking-wide">Ayomide</span>
                <div className="space-x-6 font-mono text-sm">
                    <a href="#home" className="hover:text-[#c084fc] text-tracking-wide">#Home</a>
                    <a href="#projects" className="hover:text-[#c084fc] text-tracking-wide">#Projects</a>
                    <a href="#about" className="hover:text-[#c084fc] text-tracking-wide">#About</a>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;