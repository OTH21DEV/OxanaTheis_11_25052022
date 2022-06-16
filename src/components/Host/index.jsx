import "../../components/Host/Host.css";

function Host(props){

return(
    <div className="property-host">
    <h3>{props.value.name}</h3>
    <img src={props.value.picture} alt=""/>
    </div>
)

}

export default Host