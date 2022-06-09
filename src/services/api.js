function getAllData(){
    const linkToJson = "data/logements.json";
  
      const fetchData =   async () => {
          var data = await fetch(linkToJson).then((res) => {
        return res.json();
        });
      
           // setProperties(data);
          console.log(data);
        }
          return fetchData();
 


}
export default getAllData;