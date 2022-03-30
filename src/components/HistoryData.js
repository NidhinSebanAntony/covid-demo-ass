import { Table } from "react-bootstrap"
import { useEffect, useState } from "react"

const axios = require('axios');

const HistoryData = ({historyData}) => {
    useEffect(()=> {
        getHistoryData()
    }, [])
    const [histData, setHistData] = useState([])
    const [loading, setLoading] = useState(false)

    const getHistoryData = async () => {
        try {
            setLoading(true)
            const response = await axios.get(historyData)
            console.log(response.data)
            setHistData(response.data)
            setLoading(false)
        } catch (error) {

        }
    }

    console.log(histData)
    return (
        <>
            {loading && <h1>Loading ...</h1>}
            {!loading && <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Total Infected</th>
                        <th>Total Deceased</th>
                        <th>Total Tested</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        histData.map((item, index) => { 
                            return(
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{item.infected}</td>
                                    <td>{item.deceased}</td>
                                    <td>{item.tested}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>}
        </>
    )
}

export default HistoryData