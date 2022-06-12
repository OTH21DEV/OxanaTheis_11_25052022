
import data from '../data/logements.json'
//import dataAccordions from '../datas/apropos.json'

 export default class getDataApi {
   //Récuperer les données des annonces sous format json.
   getProperties(){
      return data; 
   }
   //Récuperer les données d'une annonce d'un id passé comme parametre sous format json.
  getProperty(id){
      return  data.find(selectedProperty => selectedProperty.id === id);
   }
   //Récuperer les données de la page apropos sous format json.

}
