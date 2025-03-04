import BackToTop from "@/common/BackToTop";
import Footer from "@/common/Footer";
import CardSlider from "@/components/CardSlider";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Team from "@/components/Team";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <CardSlider />
      <Story />
      <Team />
      <Footer />
      <BackToTop />
    </div>
  );
}
