import { Link } from "wouter";

export default function MegaMenu() {
  const menuData = {
    cloud: {
      title: "Cloud",
      services: [
        "Cloud Migration",
        "Cloud Optimization", 
        "Cloud Cost Audit",
        "Managed Cloud Services"
      ],
      technologies: [
        "Microsoft Azure",
        "AWS",
        "DevOps & CI/CD",
        "Terraform / Docker / Kubernetes"
      ]
    },
    applications: {
      title: "Applications",
      services: [
        "Legacy Application Modernization",
        "SaaS Development",
        "Workflow Automation",
        "ERP Implementation",
        "eCommerce Development",
        "CRM Development"
      ],
      technologies: [
        "React.js / Vue.js / Next.js",
        "Node.js / Django / Laravel",
        "ERPNext",
        "PostgreSQL / MongoDB"
      ]
    },
    aiIot: {
      title: "AI & IoT",
      services: [
        "RPA",
        "AI Model Integration",
        "Data Analytics & Insights",
        "IoT Architecture Design"
      ],
      technologies: [
        "OpenAI / TensorFlow",
        "MQTT / Edge Devices",
        "Power BI / Looker",
        "Scikit-Learn / Pandas"
      ]
    }
  };

  return (
    <div className="mega-menu absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-4xl bg-white shadow-2xl rounded-lg mt-2 p-8 border">
      <div className="grid grid-cols-3 gap-8">
        {Object.entries(menuData).map(([key, section]) => (
          <div key={key}>
            <h3 className="font-montserrat font-bold text-navy text-lg mb-4 uppercase">
              {section.title}
            </h3>
            
            <div className="mb-6">
              <h4 className="font-opensans font-semibold text-medium-gray text-sm mb-2 uppercase">
                Services
              </h4>
              <ul className="space-y-2">
                {section.services.map((service) => (
                  <li key={service}>
                    <Link href={`/solutions/${key}`}>
                      <a className="text-gray-700 hover:text-cyan transition-colors text-sm">
                        {service}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-opensans font-semibold text-medium-gray text-sm mb-2 uppercase">
                Technology
              </h4>
              <ul className="space-y-2">
                {section.technologies.map((tech) => (
                  <li key={tech}>
                    <Link href={`/solutions/${key}`}>
                      <a className="text-gray-700 hover:text-cyan transition-colors text-sm">
                        {tech}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
