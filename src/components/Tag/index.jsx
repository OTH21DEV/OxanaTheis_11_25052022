import "../../styles/Tag.css";


function Tag(props) {
  console.log(props.tags);
  /*
let tag =[];
for(let i=0; i<props.tags.length; i++){
  tag.push(props.tags[i])
}*/
  return (
    <div className="property-tags">


<p>{props.tags}</p>
    </div>
  );
}
export default Tag;
