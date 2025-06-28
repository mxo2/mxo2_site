import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export default function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
  return (
    <Card className="bg-white shadow-lg card-hover border-0">
      <CardContent className="p-8">
        <div className="bg-cyan w-16 h-16 rounded-full flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="font-montserrat font-bold text-xl text-navy mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <Link href={link}>
          <a className="font-montserrat font-semibold text-cyan hover:text-navy transition-colors uppercase text-sm flex items-center">
            Learn More <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </Link>
      </CardContent>
    </Card>
  );
}
