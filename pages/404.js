import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Custom404() {

    return (
        <>
            <Layout>
                <h1>404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <Link href="/">Go back to Home</Link>
            </Layout>
        </>
    )
}