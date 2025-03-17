import React from 'react';

interface SkillCardProps {
    title: string;
    skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
    return (
        <div className="border border-white/20 rounded-none p-4">
            <h3 className="font-mono text-md tracking-wide text-white/50 p-1 m-1 font-normal  border border-white/20">{title}</h3>
            <div className="space-y-2 text-[#8b8b8b] ">
                {skills.map((skill, index) => (
                    <p key={index}>{skill}</p>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;