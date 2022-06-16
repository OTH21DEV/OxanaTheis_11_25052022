import "../../styles/Tag.css";

const Tag = (props) => {
  return (
    <div className="property-tags-wrapper">
      <div className="property-tags">
        {props.value.map((tag, index) => (
          <h3 key={index}>{tag}</h3>
        ))}
      </div>
    </div>
  );
};
export default Tag;
