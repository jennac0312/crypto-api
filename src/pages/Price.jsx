import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'  

const Price = () => {
    // from coinapi.io
    const API_KEY = "B39430B3-F8A4-4E64-BDB8-70AF82637499"

    // grabbing currency symbol from url params
    const params = useParams()
    const symbol = params.symbol

    //  using the other 2 variables to create url
    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${API_KEY}`;

    // state to hold coin data
    const [ coin, setCoin ] = useState("null") //why a string?? 
    
    // function to fetch coin data and store in coin state
    const getCoin = async() => {
        try{
            const response = await fetch(url)
            const data = await response.json()
            setCoin(data)
            console.log(data)
        } catch(e) {
            console.error(e)
        }
    }

    // run get coin when component mounts
    useEffect(() => {
        getCoin()
    }, [])

    // loaded function for when data is fetched
    const loaded = () => {
        return (
            <div>
                <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
                <h2>{coin.rate}</h2>
            </div>
        )
    }

    // function for when data doesnt exist
    const loading = () => {
        return <h1>Loading...</h1>
    }
 
    // conditionally render
    return coin && coin.rate ? loaded() : loading()

}

export default Price
