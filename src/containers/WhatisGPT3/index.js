import { GptFeature } from "../../components";
import "./WhatisGPT3.scss";

export const WhatisGPT3 = () => {
  return (
    <div id="what_is_gpt3" className="gpt3__container">
      <div className="gpt3__feature-main">
        <GptFeature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="gpt3__feature-heading">
        <h2 className="header__text-sm">
          The possibilities are beyond your imagination
        </h2>
        <div>
          <a href="#home" className="link-text">
            Explore The Library
          </a>
        </div>
      </div>
      <div className="gpt3__feature-card">
        <GptFeature
          title="Chatbot"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <GptFeature
          title="Knowledebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <GptFeature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
};

export default WhatisGPT3;
