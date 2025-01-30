import CtaSection from "../../Components/Common/CtaSection"
import PageHero from "../../Components/Common/PageHero"
import TestimonialSlider from "../../Components/Testimonial/Testimonial"
import Footer from "../../Layouts/Footer"
import Header from "../../Layouts/Header"

const TestimonialPage = () => {
    document.body.className = "homepage1-body";
    return (
        <>
            <Header />
            <PageHero
                className="about-header-area"
                title={"Testimonials"}
                breadcrumb={["Home", "Testimonials"]}
            />
            <TestimonialSlider />
            <CtaSection />
            <Footer />
        </>
    )
}

export default TestimonialPage
