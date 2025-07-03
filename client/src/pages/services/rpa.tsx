import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, Clock, TrendingUp, Zap, CheckCircle, Users, Cpu } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export default function RPA() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", { ...data, service: "Robotic Process Automation (RPA)" });
    },
    onSuccess: () => {
      reset();
      alert("Thank you! We'll contact you soon.");
    },
  });

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] overflow-hidden bg-gradient-to-r from-blue-600 via-purple-700 to-red-600 -mt-40 pt-40">
        <div className="relative z-10 min-h-[500px] flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="font-montserrat font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">
                Robotic Process Automation
              </h1>
              
              <p className="text-lg lg:text-xl mb-8 text-purple-100 leading-relaxed max-w-3xl mx-auto font-opensans">
                Automate repetitive tasks with intelligent bots that work 24/7, reduce errors, and free your team to focus on strategic initiatives.
              </p>
              
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg">
                Start Automation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-8 text-center">
              Transform Your Business with RPA
            </h2>
            <div className="prose prose-lg max-w-none font-opensans text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Robotic Process Automation (RPA) enables businesses to automate rule-based, repetitive tasks using software robots that mimic human actions.
              </p>
              <p className="mb-6">
                Our RPA solutions deliver immediate ROI by reducing operational costs, eliminating human errors, and enabling your workforce to focus on high-value activities that drive business growth.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">80% Time Savings</h3>
                  <p>Reduce task completion time by automating manual processes</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">300% ROI</h3>
                  <p>Achieve rapid return on investment within the first year</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">24/7 Operations</h3>
                  <p>Bots work continuously without breaks or errors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Our RPA Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Process Assessment</h3>
                <p className="text-gray-700">Identify and evaluate processes suitable for automation with detailed ROI analysis.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Bot Development</h3>
                <p className="text-gray-700">Design and build intelligent software robots using leading RPA platforms.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Data Processing Automation</h3>
                <p className="text-gray-700">Automate data entry, validation, and migration across multiple systems.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Invoice & Document Processing</h3>
                <p className="text-gray-700">Streamline accounts payable, receivable, and document management workflows.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Customer Service Automation</h3>
                <p className="text-gray-700">Automate ticket routing, status updates, and customer communications.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Monitoring & Maintenance</h3>
                <p className="text-gray-700">24/7 bot monitoring, performance optimization, and continuous improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Our RPA Implementation Approach
            </h2>
            
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="font-bold text-xl mb-3">Discovery</h3>
                <p className="text-gray-700">Analyze current processes and identify automation opportunities with maximum ROI potential.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="font-bold text-xl mb-3">Design</h3>
                <p className="text-gray-700">Create detailed automation workflows and technical specifications for optimal performance.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="font-bold text-xl mb-3">Deploy</h3>
                <p className="text-gray-700">Implement and test RPA solutions with comprehensive user training and support.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                <h3 className="font-bold text-xl mb-3">Optimize</h3>
                <p className="text-gray-700">Monitor performance, gather feedback, and continuously improve automation efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talk to Us Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6">
              Ready to Automate Your Processes?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Discover which processes in your organization are prime candidates for RPA automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4">
                Get Process Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4">
                <Users className="w-5 h-5 mr-2" />
                Talk to RPA Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-8 text-center">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    {...register("company")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    {...register("phone")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="+91 98XXX XXXXX"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tell us about the processes you'd like to automate..."
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}