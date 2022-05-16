import { HeroContent, HeroImage } from "../../components";
import "./Hero.scss";

export const Hero = () => {
  return (
    <div className="hero__container" id="home">
      <HeroContent />
      <HeroImage />
    </div>
  );
};

export default Hero;
