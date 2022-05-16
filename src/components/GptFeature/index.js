export const GptFeature = ({ title = "", text = "" }) => {
  return (
    <div>
      <h3 className="sub__header">{title}</h3>
      <p className="p__text-sm">{text}</p>
    </div>
  );
};

export default GptFeature;
