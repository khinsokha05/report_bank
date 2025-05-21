import { Footer2 } from "@/components/footer2"
import { Navbar1 } from "@/components/layout/navbar1"


export default function landingLayout({
    children,
}:{
    children: React.ReactNode
}){
    return(
        <>
        <Navbar1/>
        {children}
        <Footer2/>
        </>
    )
}