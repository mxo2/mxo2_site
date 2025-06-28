import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface TechnologyCardProps {
  icon: LucideIcon;
  name: string;
  subtitle: string;
  title: string;
  description: string;
  link: string;
}

export default function TechnologyCard({ 
  icon: Icon, 
  name, 
  subtitle, 
  title, 
  description, 
  link 
}: TechnologyCardProps) {
  return (
    <Card className="bg-white bg-opacity-10 backdrop-blur-sm card-hover border-0">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <div className="bg-cyan w-16 h-16 rounded-lg flex items-center justify-center mr-4">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="font-montserrat font-bold text-xl text-white">{name}</h3>
            <p className="text-cyan text-sm italic">{subtitle}</p>
          </div>
        </div>
        <h4 className="font-montserrat font-semibold text-lg mb-4 text-white">{title}</h4>
        <p className="text-gray-300 mb-6">{description}</p>
        <Link href={link}>
          <a className="font-montserrat font-semibold text-cyan hover:text-white transition-colors uppercase text-sm">
            Learn More
          </a>
        </Link>
      </CardContent>
    </Card>
  );
}
