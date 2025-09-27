import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EducationLoansPage from "./pages/EducationLoans";
import SchoolComparePage from "./pages/SchoolCompare";
import ScholarshipsPage from "./pages/Scholarships";
import AlumniPage from "./pages/Alumni";
import FundraisingPage from "./pages/Fundraising";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/education-loans" element={<EducationLoansPage />} />
            <Route path="/compare-schools" element={<SchoolComparePage />} />
            <Route path="/scholarships" element={<ScholarshipsPage />} />
            <Route path="/alumni-network" element={<AlumniPage />} />
            <Route path="/fundraising" element={<FundraisingPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
