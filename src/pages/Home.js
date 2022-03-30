import { Table, Button } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
const axios = require('axios');

const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        getAllCountriesData()
    }, [])
    const [allCountries, setAllCountries] = useState([])
    const getAllCountriesData = async () => {
        try {
            const response = await axios.get('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true')
            console.log(response.data)
            setAllCountries(response.data)
        } catch (error) {

        }
    }
    console.log(allCountries)
    return (
        <>
            {allCountries && allCountries.length > 0 && <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Infected</th>
                        <th>Tested</th>
                        <th>Recovered</th>
                        <th>Deceased</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {allCountries.map((item, index) => {
                        return (
                            <tr>
                                <td>{index}</td>
                                <td>{item.infected}</td>
                                <td>{item.tested}</td>
                                <td>{item.recovered}</td>
                                <td>{item.deceased}</td>
                                <td>
                                    <Button variant="link" onClick={()=>navigate(`/country-specific-data`, { state: {moreData:item.moreData, historyData: item.historyData} })}>{item.country}</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>}
        </>
    )
}

export default Home