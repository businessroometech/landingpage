// import Header from "../../Layouts/Header";
import PageHero from "../../Components/Common/PageHero";
import CtaSection from "../../Components/Common/CtaSection";
// import Footer from "../../Layouts/Footer";
import BlogTopArea from "../../Components/Blog/BlogTopArea";
import BlogfullContent from "../../Components/Blog/BlogfullContent";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";

const BlogPage = () => {
  return (
    <>
      <MobileHeaderSidebar />
      <PageHero
        className="about-header-area"
        title={"Our Blog"}
        breadcrumb={["Home", "Our Blog"]}
      />
      <BlogTopArea />
      <BlogfullContent />
      
      <CtaSection />
    </>
  );
};

export default BlogPage;
