import { useEffect, useState } from "react"
import Banner from "./recipe_component/banner"
import Footer from "./recipe_component/footer"
import List from "./recipe_component/list"
import Nav from "./recipe_component/nav"
import Loader from "./recipe_component/loader"


const Recipe = () =>{
     
    // how to connect to api using three states:

    const [categories,setcategories] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error,setError] = useState("");

    // a state to store what we filtered with
    const [f,setF] = useState('');

    //filter Categorie
    const filterCategory = () => {
        const filtered = categories.filter(function(cat){
            return cat.strCategory.toLowercase().includes(f.toLowerCase())
        })
        return filtered;
    }

    //hook: useEffect | useState.
    
    const requestMaker = () =>{
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(function(fakeresp){
            return fakeresp.json()
        })
        .then(function(data){
            console.log(data.categories);
            setcategories(data,categories)
            setLoading(false)
        })
        .catch(function(err){
            setcategories([])
            setLoading(false)
            setError(err)

        })
    }
    

    useEffect(function(){
        requestMaker()
    },[])

    if(loading === true){
        return(
            <Loader/>
        )
    }

    return(
        <div className="container-fluid">
            <Nav/>
            <Banner setF={setF}/>
            <List categories = {filterCategory()}/>
            <Footer/>
        </div>
    )
}

export default Recipe