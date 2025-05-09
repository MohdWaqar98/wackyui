
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";


export const metadata:Metadata = {
    title: {
        template: "WackyUI = Open Source UI Kit",
        default: "WackyUI"
    }
}

export default function HomeLayout({children}:{children:React.ReactNode}) {
    return (
        <>
        <Header/>
        <main className="relative w-full pt-0 md:pt-0">
        {children}
        </main>
        <Footer/>
        </>
    );
}