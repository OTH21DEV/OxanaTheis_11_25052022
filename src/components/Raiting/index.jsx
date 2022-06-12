import starEmpty from "../../assets/star_empty.svg";
import starFull from "../../assets/star_full.svg";


function Raiting(props){

const rate =[];
for (let i=1;i<=5;i++){
    rate.push(i <= props.value)
}
console.log(rate)

return (
    <div>
  {rate.map((value,index) => (
       <img src= {value === true ? starFull : starEmpty} key={index} alt =""/>
      ))}
    </div>
  );
}
export default Raiting