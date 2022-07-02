import React, { useEffect, useState } from 'react';
import '../assets/styles/Main.css'
import axios from 'axios';

const MainInfo = () => {

    const [ historical, setHistorical ] = useState([])

    const [ lastest, setLastest ] = useState([])

    useEffect(() => {
        axios.get('https://currencyappjecm.herokuapp.com/api/v1/lastest')
            .then(res => setLastest(res.data.info))
            .catch(error => console.log(error))   
    }, [])

    useEffect(() => {
        axios.get('https://currencyappjecm.herokuapp.com/api/v1/historical')
            .then(res => setHistorical(res.data.info))
            .catch(error => console.log(error))   
    }, [])

    return (
        <div>
            <p className='infoText'>Change base currency USD</p>
            <div className='mainContainer'>
                <div className='historicalContainer'>
                    <h2>Historical</h2>
                    {
                        historical.map(data => (
                            <ul className='listContainer' key={data.name}>
                                <li className='nameContainer'>
                                {data.name}
                                </li>
                                <li className='valueContainer'>
                                {data.value}
                                </li>
                            </ul>
                        ))
                    }
                </div>
                <div className='lastestContainer'>
                    <h2>Lastest</h2>
                    {
                        lastest.map(data => (
                            <ul className='listContainer' key={data.name}>
                                <li className='nameContainer'>
                                    {data.name}
                                </li>
                                <li className='valueContainer'>
                                    {data.value}
                                </li>
                            </ul>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MainInfo;