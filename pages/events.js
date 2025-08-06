import Accordion from "@/components/elements/Accordion"
import Layout from "@/components/layout/Layout"
import Newsletter1 from "@/components/sections/homepage2/Newsletter1"
import News1Slider from "@/components/slider/News1Slider"
import Link from "next/link"
export default function Events() {
    const truncate = (str, maxLength) => {
        return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
    };

    return (
        <>
            <Layout>
                <section className="section d-block hero-faqs">
                    <div className="container position-relative">
                        <div className="banner-trackyourparcel" />
                        <div className="box-info-trackyourparcel">
                            <h2 className="color-brand-2 mb-25 wow animate__animated animate__fadeIn"> Events</h2>

                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container position-relative">
                        <h2 className=" mb-20 wow animate__animated animate__fadeIn">Upcoming Events</h2>

                        <section className="section mt-70">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                        <div className="card-blog-grid hover-up">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage1/EventImg2.jpg" alt="transp" />
                                                <div className="btn btn-border-brand-1 mr-15" href="/blog">Sat Feb 01</div></div>
                                            <div className="card-info">
                                                <h5 className="color-brand-2">PRINTPACK INDIA 2025</h5>
                                                <p className="font-sm color-grey-500 mt-10">{truncate("PRINTPACK INDIA 2025 shows the future of printing and packaging. This premium event for professionals and organizations will provide an opportunity to learn about cutting-edge technology, creative solutions, and industry trends.", 70)} </p>
                                                <div className="line-border" />
                                                <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details<span>
                                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></span></Link><span className="date-post font-sm color-grey-700"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                        <div className="card-blog-grid hover-up">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage1/EventImg3.jpg" alt="transp" />
                                                <div className="btn btn-border-brand-1 mr-15" href="/blog">Fri Feb 01</div></div>
                                            <div className="card-info">
                                                <h5 className="color-brand-2">Footwear India Expo</h5>
                                                <p className="font-sm color-grey-500 mt-10">{truncate("Footwear India Expo is a leading forum for the footwear industry, bringing together manufacturers, buyers, and suppliers. Discover the most recent trends, inventive styles, and sophisticated innovations driving the future of footwear. With networking opportunities and live product demos, this expo is the best venue for industry experts looking to expand their business and keep ahead of the competition in the footwear sector.", 80)}</p>
                                                <div className="line-border" />
                                                <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details<span>
                                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></span></Link><span className="date-post font-sm color-grey-700"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                        <div className="card-blog-grid hover-up">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage1/EventImg4.jpg" alt="transp" />
                                                <div className="btn btn-border-brand-1 mr-15" href="/blog">Mon Jn 06</div>
                                            </div>
                                            <div className="card-info">
                                                <h5 className="color-brand-2">MAHATech Pune 2025</h5>
                                                <p className="font-sm color-grey-500 mt-10">{truncate(" Join MAHATech Pune 2025, a major industrial event that will showcase...", 80)}</p>
                                                <div className="line-border" />
                                                <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details<span>
                                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></span></Link><span className="date-post font-sm color-grey-700"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                        <div className="card-blog-grid hover-up">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage1/EventImg6.jpg" alt="transp" />
                                                <div className="btn btn-border-brand-1 mr-15" href="/blog">Thu Jan 09</div></div>
                                            <div className="card-info">
                                                <h5 className="color-brand-2">PLASTPACK 2025</h5>
                                                <p className="font-sm color-grey-500 mt-10">{truncate(" PLASTPACK 2025 presents the most recent innovations in plastic packaging technology and sustainable alternatives.", 70)}</p>
                                                <div className="line-border" />
                                                <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details<span>
                                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></span></Link><span className="date-post font-sm color-grey-700"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="text-center mt-40 wow animate__animated animate__fadeIn">
                                    <nav className="box-pagination">
                                        <ul className="pagination">
                                            <li className="page-item"><Link className="page-link page-prev" href="#" /></li>
                                            <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                            <li className="page-item"><Link className="page-link active" href="#">2</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">4</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">5</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">6</Link></li>
                                            <li className="page-item"><Link className="page-link page-next" href="#" /></li>
                                        </ul>
                                    </nav>
                                </div> */}
                            </div>
                        </section>


                    </div>
                </section>



                <div className="mt-90" />

                <Newsletter1 />
            </Layout>

        </>
    )
}