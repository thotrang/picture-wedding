import { PropsWithChildren } from "react";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import ContactForm from "@/modules/ContactUs/ContactForm";
import Head from "next/head";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Head>
        <title>GOLDSTAR MEDIA</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/x-icon"
          href="../public/favicon.ico"
        ></link>
      </Head>
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
      <dialog id="modal_contact" className="modal border-none">
        <div className="modal-box w-10/12 max-w-5xl bg-backgroundSecond border border-solid border-borderColor">
          <ContactForm />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="bg-transparent !border-none !p-0 !m-0">
            close
          </button>
        </form>
      </dialog>
    </div>
  );
}
