import Accordion from "@/components/elements/Accordion";
import Link from "next/link";

export default function Faq3() {

    return (
        // <section className="section d-block">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-lg-6">
        //                 <h2 className="mb-20 wow animate__animated animate__fadeIn">FAQs</h2>
        //                 <div className="box-accordion">
        //                     <Accordion />
        //                     <div className="line-border mt-20 mb-20" />
        //                     <h3 className="color-brand-2 wow animate__animated animate__fadeIn">Nead more help?</h3>
        //                 </div>
        //             </div>
        //             <div className="col-lg-6 d-flex align-items-center justify-content-center">
        //                 <div className="faq-image-section">
        //                     <img 
        //                         src="/assets/imgs/page/homepage1/faq-img-5.jpg" 
        //                         alt="instacertify faq" 
        //                         className="img-fluid wow animate__animated animate__fadeIn"
        //                         style={{ maxWidth: "98%", borderRadius: "12px", marginTop: '20px'}}
        //                     />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section className="section pt-80 mb-70 bg-faqs">
                <div className="container">
                <div  className="" >
                        <div className="">
                            <div className="box-faqs-left">
                                <h2 className=" mb-20 wow animate__animated animate__fadeIn">FAQs</h2>
                                <p className="font-md color-grey-700 mb-50 wow animate__animated animate__fadeIn">Feeling
                                    inquisitive? Have a read through some of our FAQs or contact our supporters for help</p>
                                   
                                
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box-accordion">
                                <Accordion />
                                <div className="line-border mt-50 mb-50" />
                                <h3 className="color-brand-2 wow animate__animated animate__fadeIn">Nead more help?</h3>
                                <div className="mt-20"><Link className="btn btn-brand-1-big mr-20 wow animate__animated animate__fadeIn" href="/contact">Contact Us</Link><Link className="btn btn-link-medium wow animate__animated animate__fadeIn" href="#">Learn
                                    More
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}