import "../../styles/Tag.css";

const Tag = (props) => {
  return (
    <div>
    <div className="property-tags">
      {props.value.map((tag) => (
        <h3>{tag}</h3>
      ))}
      </div>
    </div>
  );
};
export default Tag;
