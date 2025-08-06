import Layout from "@/components/layout/Layout"
// import Bgmap from "@/components/sections/homepage1/Bgmap"
import Brands1 from "@/components/sections/homepage1/Brands1"
import Howitwork1 from "@/components/sections/homepage1/Howitwork1"
import Info1 from "@/components/sections/homepage1/Info1"
import News1 from "@/components/sections/homepage1/News1"
import Projects1 from "@/components/sections/homepage1/Projects1"
import Services1 from "@/components/sections/homepage1/Services1"
import Newsletter1 from "@/components/sections/homepage2/Newsletter1"

import Hero4 from "@/components/sections/homepage4/Hero4"

import Info7 from "@/components/sections/homepage4/Info7"

import Testimonial1 from "@/components/sections/homepage1/Testimonial1"
import Faq3 from "@/components/sections/homepage2/Faq3"
export default function Home() {

    return (
        <>
            <Layout>

                <Hero4 />
                <Brands1 />
                <Services1 />
                <Info7 />
                <Testimonial1 />
                {/* <Testimonial4 /> */}
                <Howitwork1 />
                {/* <Howitwork2 /> */}
                <div className="line-border mb-1 mt-1"></div>
                <Projects1 />
                
                {/* <Projects3 /> */}
               
               
                <Info1 />
                
                {/* <News1 /> */}
                {/* <News2 /> */}
                 <Faq3/>
                <Newsletter1 />
                

                {/* <Hero1 />
                <Brands1 />
                <Services1 />
                <Info1 />
                <Info2 />     
                <Howitwork1 />
                <Testimonial1 />
                <Projects1 /> */}
                {/* <Requestquote1 /> */}
                {/* <Pricing1 /> */}
                {/* <Faqs1 />
                <Cta1 />
                <News1 />
                <Bgmap /> */}
            </Layout>
        </>
    )
}