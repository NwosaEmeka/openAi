import { useState } from "react";
import groupImage from "../../assets/images/groupImages.png";

export const HeroContent = () => {
  const [email, setEmail] = useState("");

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="hero__content">
      <h1 className="header__text-lg">
        Let’s Build Something amazing with GPT-3 OpenAI
      </h1>
      <p className="p__text">
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>
      <div className="hero__form">
        <form>
          <input
            type="email"
            id="email"
            value={email}
            placeHolder="Your Email"
            onChange={handleOnChange}
          />
          <button onClick={handleOnSubmit} className="hero__btn">
            Get Started
          </button>
        </form>
      </div>
      <div className="hero__signup">
        <div className="hero__signup-img">
          <img src={groupImage} alt="group_image" />
        </div>
        <div className="hero__signup-text">
          <span>1,600 people requested access a visit in last 24 hours</span>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
