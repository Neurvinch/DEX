const express = require('express');
const Moralis = require('moralis').default;
const app = express();
const cors = require('cors');
const port = 3001;
require("dotenv").config();

app.use(cors());
app.use(express.json());


app.get("/tokenPrice", async (req, res) => {

      const {query} =req;

     const responseOne = await Moralis.EvmApi.token.getTokenPrice({
           address: query.address
     })

     const responseTwo = await Moralis.EvmApi.token.getTokenPrice({
        address: query.address
     })

     const inUsdPrice ={

         tokenOne : responseOne.raw.priceInUsd,
         tokenTwo : response.raw.priceInUsd,
         ratio : responseOne.raw.usdPrice / responseTwo.raw.usdPrice,
     }


       res.status(200).json(inUsdPrice)

     }

    

)

Moralis.start({
    apiKey : process.env.MORALIS_KEY,
}).then(() =>{
    app.listen(port, () => {
        console.log("Listenting For API calls")
})
}) 