import "@fontsource/poppins";
import AppSidebar from "@/components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "@/styles/globals.css";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <Header />
        <Component {...pageProps} />
      </main>
    </SidebarProvider>
  );
}
