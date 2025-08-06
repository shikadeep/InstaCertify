import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function News() {
    return (
        <>
            <Layout headerStyle="newsletter" footerStyle="newsletter">
              <div className="" >
              <section className="section d-block newsletter-style">
                    
                </section>
  
               <section className="section mt-60 newsletter-style">
                    <div className="container">
                        <h4 className="title-favicon-newsletter color-brand-2 mb-25">Our Blog &amp; Insights</h4>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image"><img  alt=" instacertify" />
                                    </div>
                                    <div className="card-info">
                                        <h5 className="color-brand-2">How to find reliable logistics company in China and AsiaGuidelines for
                                             Implementation of IS 18112 : 2022 | Digital Television Receiver for Satellite Broadcast Transmission</h5>
                                        
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">READ MORE<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span>
                                            </Link></div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
              </div>
            </Layout>
        </>
    )
}