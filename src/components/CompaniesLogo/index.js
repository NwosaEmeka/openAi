import googleImg from "../../assets/images/google.png";
import shopifyImg from "../../assets/images/shopify.png";
import slackImg from "../../assets/images/slack.png";
import atlassianImg from "../../assets/images/atlassian.png";
import dropboxImg from "../../assets/images/dropbox.png";
import "./CompaniesLogo.scss";

export const CompaniesLogo = () => {
  return (
    <div className="companies">
      <div className="companies__logo">
        <img src={googleImg} alt="Google" />
      </div>
      <div className="companies__logo">
        <img src={slackImg} alt="Slack" />
      </div>
      <div className="companies__logo">
        <img src={atlassianImg} alt="Atlassian" />
      </div>
      <div className="companies__logo">
        <img src={dropboxImg} alt="Dropbox" />
      </div>
      <div className="companies__logo">
        <img src={shopifyImg} alt="Shopify" />
      </div>
    </div>
  );
};

export default CompaniesLogo;
