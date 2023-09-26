import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner";
import Donations from "../../components/Donations/Donations";
import { useState } from "react";



const Home = () => {

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategory = (category) => {
        setSelectedCategory(category);
    }

   const donations = useLoaderData();
    // console.log(donations);

    
    return (
        <div>
            <Banner onCategorySeacrh ={handleCategory}></Banner>
            <Donations donations ={donations} selectedCategory={selectedCategory}></Donations>
        </div>
    );
};

export default Home;