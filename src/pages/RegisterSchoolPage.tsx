// src/pages/RegisterSchoolPage.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RegisterSchoolPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl text-center">
          <CardHeader>
            <CardTitle className="text-3xl">Register Your School</CardTitle>
            <CardDescription className="text-lg text-muted-foreground pt-2">
              Join the largest network of schools in India.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Our school registration portal is currently under construction.
              Please check back soon to list your institution with SchoolDekho.
            </p>
            <Button asChild>
              <a href="/">Go Back to Home</a>
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterSchoolPage;