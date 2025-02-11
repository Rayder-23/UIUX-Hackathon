import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EditorPickSection from "./components/EditorPickSection";
import BestsellerProducts from "./components/bestseller";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import BlogSection from "./components/blog";


export default function Home() {
  return (
      <>
        <Header />
        {/* Hero Section */}
        <Hero />
        {/* Editor's Pick Section */}
        <EditorPickSection />
        {/* BestsellerProducts Section */}
        <BestsellerProducts />
        {/* Hero2 Section */}
        <Hero2 />
        {/* Hero3 Section */}
        <Hero3 />
        {/* Blog Section */}
        <BlogSection />
        {/* Footer Section */}
        
      </>
      
  );
}
