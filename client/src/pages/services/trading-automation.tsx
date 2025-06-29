import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Zap, Shield, Code, CheckCircle, Users, BarChart3, Clock, Target } from "lucide-react";
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

export default function TradingAutomation() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", { ...data, service: "Trading Automation Platform" });
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
      <section className="relative min-h-[500px] overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-700 to-green-800 -mt-40 pt-40">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 min-h-[500px] flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Automated Trading Solutions
              </Badge>
              
              <h1 className="font-montserrat font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">
                Trading Automation Platform
                <br />
                <span className="text-emerald-300">Seamless Multi-Platform Execution</span>
              </h1>
              
              <p className="text-lg lg:text-xl mb-8 text-emerald-100 leading-relaxed max-w-3xl mx-auto font-opensans">
                Automate your trading strategies seamlessly across Python, AmiBroker, TradingView, and Excel—enabling consistent, fast execution and reliable risk management.
              </p>
              
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg">
                Start Trading Automation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-8 text-center">
              Unified Trading Automation Platform
            </h2>
            <div className="prose prose-lg max-w-none font-opensans text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Our trading automation platform provides unified execution through a central Python engine that enforces consistent risk rules regardless of signal source, supporting multiple platforms and broker integrations.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Zap className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Unified Execution</h3>
                  <p>Central Python engine enforces consistent risk rules (SL/TP/TSL) regardless of signal source</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Code className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Multi-Channel Signals</h3>
                  <p>Support for AFL alerts, Pine Script webhooks, and spreadsheet triggers</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Broker Integration</h3>
                  <p>Connect to Shoonya, Zerodha, Fyers, and other brokers for live order placement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Components */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Core Components & Workflows
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-emerald-600 mr-3" />
                  <h3 className="font-bold text-xl">Python Command-Line Interface</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Real-Time Data Feeds via WebSocket/REST endpoints</li>
                  <li>• Drop-in custom strategy modules with standardized functions</li>
                  <li>• Automated order placement via broker SDKs</li>
                  <li>• Built-in risk management and position sizing</li>
                  <li>• Comprehensive logging and reporting</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-8 h-8 text-teal-600 mr-3" />
                  <h3 className="font-bold text-xl">AmiBroker Integration</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• AFL strategy alerts to Python engine</li>
                  <li>• Plugin/COM listener for seamless handoff</li>
                  <li>• Zero discrepancies between backtest and live</li>
                  <li>• JSON export and REST endpoint integration</li>
                  <li>• Existing AFL codebase compatibility</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="font-bold text-xl">TradingView Webhook Integration</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pine Script strategies with webhook alerts</li>
                  <li>• Flask/Django microservice for payload verification</li>
                  <li>• Automated signal queuing and execution</li>
                  <li>• Community script compatibility</li>
                  <li>• HTTPS endpoint security</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="font-bold text-xl">Excel-Based Automation</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Live data integration via RTD/DDE plugins</li>
                  <li>• Formula-based signal generation</li>
                  <li>• VBA or xlwings bridge to Python CLI</li>
                  <li>• Real-time P&L tracking dashboard</li>
                  <li>• Zero-code strategy prototyping</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Key Features & Benefits
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Multi-Environment Flexibility</h3>
                <p className="text-gray-700">Code in Python, leverage AFL, use TradingView charts, or prototype in Excel—all platforms supported seamlessly.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Consistent Risk Controls</h3>
                <p className="text-gray-700">Centralized enforcement of stop-loss, take-profit, and trailing stops across all platforms and strategies.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Faster Iteration & Deployment</h3>
                <p className="text-gray-700">Backtest in AmiBroker or TradingView, then push live with minimal configuration—no recompilation needed.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Scalable & Headless Operation</h3>
                <p className="text-gray-700">Run on any Linux/Windows server or cloud VM with 24×7 auto-restart and health-check logic.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Centralized Logging & Analytics</h3>
                <p className="text-gray-700">Comprehensive logging to CSV, SQL, or NoSQL with daily/weekly P&L reports and drawdown analysis.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Emotional Discipline</h3>
                <p className="text-gray-700">Rules-based execution removes human hesitation and enables millisecond-fast automated responses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Workflow */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Typical Deployment Workflow
            </h2>
            
            <div className="grid lg:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="font-bold text-xl mb-3">Clone Starter Kit</h3>
                <p className="text-gray-700">GitHub repo with Python CLI core, AmiBroker plugin, Pine Script examples, and Excel workbook samples.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="font-bold text-xl mb-3">Configure Credentials</h3>
                <p className="text-gray-700">Set up broker API keys, account IDs, and trading parameters in the configuration file.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="font-bold text-xl mb-3">Import Strategies</h3>
                <p className="text-gray-700">Add Python strategies, adapt AFL scripts, configure Pine Script alerts, and build Excel formulas.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                <h3 className="font-bold text-xl mb-3">Paper Trading</h3>
                <p className="text-gray-700">Run in simulation mode to verify indicator alignment, risk checks, and strategy performance.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">5</div>
                <h3 className="font-bold text-xl mb-3">Go Live</h3>
                <p className="text-gray-700">Deploy on dedicated server with process management, monitoring, and alert systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talk to Us Section */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6">
              Ready to Automate Your Trading?
            </h2>
            <p className="text-xl mb-8 text-emerald-100">
              Transform your trading strategies with our comprehensive automation platform supporting multiple execution environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4">
                Get Trading Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4">
                <Users className="w-5 h-5 mr-2" />
                Talk to Trading Expert
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    {...register("phone")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Tell us about your trading automation requirements..."
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4"
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