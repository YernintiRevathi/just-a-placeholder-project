// src/pages/Admin.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AdminPage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl text-center">
          <CardHeader>
            <CardTitle className="text-3xl">Admin Dashboard</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Welcome, <span className="font-semibold text-primary">{user?.name || 'Admin'}</span>!
            </p>
            <p>
              This is your protected admin area. You can manage schools, scholarships, and users from here.
            </p>
            <Button onClick={logout} variant="destructive">
              Log Out
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;