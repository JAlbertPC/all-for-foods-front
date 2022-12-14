import React, {useEffect, useState} from "react";
import RecipeReviewCard from "./component/RecipeCardsList.home";
import Welcomebanner from "./component/Welcomebanner";
import Sharebanner from "./component/Sharerecipebanner";
import '../CSS/Home.style.css';
import {Button, Typography} from "@mui/material";
import {getAllRecipesController} from "../../controllers/RecipesController";
import {recetaRandom} from "../../controllers/RecipesController";

function Home() {

    const [recipes, setRecipes] = useState(null)

    useEffect(() => {
        getAllRecipesController().then(response => {
            setRecipes(response)
        })
    }, [])

    return (
        <div>
            <div className="banners">
                <Welcomebanner />
                <Sharebanner />
            </div>
            <div className='div-banner bottom-section-spacing'>
                <Typography variant='h4' >
                    Don&apos;t know what to cook?
                </Typography>
                <Typography variant='h6'>
                    Don&apos;t worry, leave it to us!
                </Typography>
            </div>
            <Button  sx={{ bgcolor: '#efd6a7', color:'#5D737E' }} variant="contained" className="small-top-spacing" onClick={() => {recetaRandom(recipes)}} className="">Show me a random recipe</Button>
            <RecipeReviewCard recipes={recipes}/>
        </div>
    )
}
export default Home;