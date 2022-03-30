import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
const axios = require('axios');

const CurrentData = ({moreData}) => {

    useEffect(()=> {
        getCountrySpecificData()
    }, [])
    const [currentData, setCurrentData] = useState([])

    const getCountrySpecificData = async () => {
        try {
            const response = await axios.get(moreData)
            setCurrentData(response.data)
        } catch (error) {

        }
    }
    return (
        <>
            <Table>
                <tbody>
                    <tr>
                        <td>Country</td>
                        <td>{currentData.country}</td>
                    </tr>
                    <tr>
                        <td>Deceased</td>
                        <td>{currentData.deceased}</td>
                    </tr>
                    <tr>
                        <td>Infected</td>
                        <td>{currentData.infected}</td>
                    </tr>
                    <tr>
                        <td>Recovered</td>
                        <td>{currentData.recovered}</td>
                    </tr>
                    <tr>
                        <td>Tested</td>
                        <td>{currentData.tested}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default CurrentData