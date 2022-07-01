import React, { useEffect, useState } from 'react';
import '../assets/styles/Main.css'
import axios from 'axios';

const MainInfo = () => {

    const [ historical, setHistorical ] = useState({})

    const [ lastest, setLastest ] = useState({})

    const x = async () => {
       await axios.get('http://localhost:3000/api/v1/lastest/')
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
    }
    useEffect(() => {
        /* axios.get('https://currencyappjecm.herokuapp.com/api/v1/lastest')
            .then(res => console.log(res.data))
            .catch(error => console.log(error)) */
            x()
    }, [])

    return (
        <div className='mainContainer'>
            <div>
                <h2>Historical</h2>
                {

                }
            </div>
            <div>
                <h2>Lastest</h2>
                {

                }
            </div>
            
        </div>
    );
};

export default MainInfo;