import { PropsWithChildren } from "react";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="w-full min-h-screen max-w-screen-3xl mx-auto bg-background">
      <Topbar />
      {children}
      <Footer />
    </div>
  );
}
