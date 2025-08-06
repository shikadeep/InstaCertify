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
                <div  className="row" >
                        <div className="col-lg-6">
                            <div className="box-faqs-left">
                                <h2 className=" mb-50 wow animate__animated animate__fadeIn">FAQs</h2>
                               
                                   <div className="box-gallery-faqs">
                                    <div className="image-top"><img src="/assets/imgs/page/homepage1/faq-img-5.jpg" alt="transp" />
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-6" 
                        >
                            <div className="box-accordion">
                                <div className="item-faqs-2 mb-30"><Link href='/'>
                                    <h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">What services does Instacertify offer?</h6></Link>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Instacertify provides comprehensive product testing and certification compliance services, including BIS, CRS, ISI, CDSCO, WPC, IMEI-DOT, GMARK, LMPC, SFDA, CIB, EPR, and E-waste Management.</p>
                                </div>
                                <div className="item-faqs-2 mb-30"><Link href='/'>
                                    <h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">How can I request a certification or testing service?</h6></Link>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                                    You can easily request our services by filling out the inquiry form on our website or by contacting us directly through our provided phone number or email. Our team will guide you through the process and provide the necessary assistance.</p>
                                </div>
                                <div className="item-faqs-2 mb-30"><Link href='/'>
                                    <h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">What industries do you serve?</h6></Link>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">We serve a wide range of industries, including manufacturing, electronics, pharmaceuticals, and consumer goods. Our expertise covers various sectors, ensuring tailored solutions for diverse regulatory needs.</p>
                                </div>
                                <div className="item-faqs-2 mb-30"><Link href='/'>
                                    <h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">How long does the certification process take?</h6></Link>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">The duration of the certification process depends on the specific requirements and complexity of the certification. Our team will provide you with an estimated timeline based on your needs and keep you updated throughout the process.</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}