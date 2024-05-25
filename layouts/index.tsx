import { PropsWithChildren } from "react";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import ContactForm from "@/modules/ContactUs/ContactForm";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="bg-background">
        <div className="w-full min-h-screen max-w-screen-3xl mx-auto">
          <Topbar
            handleContact={() => {
              (document.getElementById("modal_contact") as any).showModal();
            }}
          />
          {children}
          <Footer />
        </div>
      </div>
      <dialog id="modal_contact" className="modal">
        <div className="modal-box">
          <ContactForm />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="bg-transparent">close</button>
        </form>
      </dialog>
    </>
  );
}
