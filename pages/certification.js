import { useState, useEffect } from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Certification() {


    return (
        <Layout>
            <section className="section mt-110">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8">
                            <h2
                                // className="title-favicon
                                className=" mb-2 wow animate__animated animate__fadeIn0">   Certificates</h2>
                            {/* <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">The latest information
                                            about shipping services and our promotions</p> */}
                        </div>
                        
                    </div>
                    <div className="row mt-60">
                        <div className="box-swiper" style={{ width: "30%" , borderRadius: "30px" }}>
                            <div className="swiper-container swiper-group-3-customers pb-50">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image"  >
                                    <img src="/assets/imgs/page/services/BIS.jpg" alt="instacertify" />
                                        
                                    </div>
                                    <div className="card-info">
                                        <h5 className="color-brand-2">BIS (ISI MARK) for Foreign Manufacturers</h5>
                                    
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0">
                                            <Link className="btn btn-link font-sm color-brand-2" href="#">READ MORE<span>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg></span></Link><span className="date-post font-sm color-grey-700"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </section>
        </Layout>
    )
}
