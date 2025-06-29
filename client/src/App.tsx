import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import Solutions from "@/pages/solutions";
import SolutionDetail from "@/pages/solution-detail";
import CloudMigration from "@/pages/cloud-migration";
import Industries from "@/pages/industries";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import AdminLogin from "@/pages/admin/login";
import CloudOptimization from "@/pages/services/cloud-optimization";
import RPA from "@/pages/services/rpa";
import LegacyModernization from "@/pages/services/legacy-modernization";
import AIIntegration from "@/pages/services/ai-integration";
import TradingAutomation from "@/pages/services/trading-automation";
import DataAnalytics from "@/pages/services/data-analytics";
import SaaSApplicationDevelopment from "@/pages/services/saas-development";
import MicrosoftAzure from "@/pages/technology/azure";
import AmazonAWS from "@/pages/technology/aws";
import AIFrameworks from "@/pages/technology/ai-frameworks";
import StreetSync from "@/pages/products/street-sync";
import ParallelCampus from "@/pages/products/parallel-campus";
import IndustrialERP from "@/pages/products/industrial-erp";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Switch>
        {/* Admin routes without main layout */}
        <Route path="/admin/login" component={AdminLogin} />
        
        {/* Main site routes with layout */}
        <Route>
          {() => (
            <>
              <Header />
              <main className="flex-1 pt-40">
                <Switch>
                  <Route path="/" component={Home} />
                  <Route path="/solutions" component={Solutions} />
                  <Route path="/solutions/:category" component={SolutionDetail} />
                  <Route path="/cloud-migration" component={CloudMigration} />
                  <Route path="/services/cloud-optimization" component={CloudOptimization} />
                  <Route path="/services/rpa" component={RPA} />
                  <Route path="/services/legacy-modernization" component={LegacyModernization} />
                  <Route path="/services/ai-integration" component={AIIntegration} />
                  <Route path="/services/trading-automation" component={TradingAutomation} />
                  <Route path="/services/data-analytics" component={DataAnalytics} />
                  <Route path="/services/saas-development" component={SaaSApplicationDevelopment} />
                  <Route path="/technology/azure" component={MicrosoftAzure} />
                  <Route path="/technology/aws" component={AmazonAWS} />
                  <Route path="/technology/ai-frameworks" component={AIFrameworks} />
                  <Route path="/products/street-sync" component={StreetSync} />
        <Route path="/products/parallel-campus" component={ParallelCampus} />
        <Route path="/products/industrial-erp" component={IndustrialERP} />
                  <Route path="/industries" component={Industries} />
                  <Route path="/blog" component={Blog} />
                  <Route path="/blog/:slug" component={BlogPost} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route component={NotFound} />
                </Switch>
              </main>
              <Footer />
            </>
          )}
        </Route>
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
