// src/App.tsx

import { Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Your existing page imports
import HomePage from "./pages/HomePage";
import EducationLoansPage from "./pages/EducationLoans";
import SchoolComparePage from "./pages/SchoolCompare";
import ScholarshipsPage from "./pages/Scholarships";
import AlumniPage from "./pages/Alumni";
import LoginPage from "./pages/Login";
import AdminPage from "./pages/Admin";
import FundraisingPage from "./pages/Fundraising";
import NotFound from "./pages/NotFound";
import SchoolsPage from "./pages/Schools";
import RegisterSchoolPage from "./pages/RegisterSchoolPage";

// Your existing context/component imports
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

// A simple loading component for Suspense
const LoadingSpinner = () => (
  <div className="flex h-screen w-full items-center justify-center">
    <p>Loading...</p>
  </div>
);

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
          <AuthProvider>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* --- ALL YOUR PUBLIC ROUTES --- */}
                <Route path="/" element={<HomePage />} />
                <Route path="/education-loans" element={<EducationLoansPage />} />
                <Route path="/compare" element={<SchoolComparePage />} />
                <Route path="/scholarships" element={<ScholarshipsPage />} />
                <Route path="/alumni-network" element={<AlumniPage />} />
                <Route path="/fundraising" element={<FundraisingPage />} />
                <Route path="/schools" element={<SchoolsPage />} />
                
                {/* --- MISSING ROUTES ADDED HERE --- */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register-school" element={<RegisterSchoolPage />} />
                
                {/* --- PROTECTED ADMIN ROUTE --- */}
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <AdminPage />
                    </ProtectedRoute>
                  }
                />

                {/* --- CATCH-ALL NOT FOUND ROUTE --- */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;