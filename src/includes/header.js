import React from 'react' 
import { gql } from 'apollo-boost' 
import { useQuery } from '@apollo/react-hooks'  

const GET_DATABASE_UDPATE = gql`
{
    allUpdates(last: 1) {
        edges {
            node {
                date
            }
        }
    }
}
`

export default function DatabaseDetail() {
    
    const { loading, error, data } = useQuery(GET_DATABASE_UDPATE) 

    if (loading) return <p>last update...</p> 

    let date_data = data.allUpdates.edges[0].node.date.split('-')
    let new_date = date_data[2] + '/' + date_data[1] + '/' + date_data[0]

    return (
        <div>
            <p className = "text-right" style = {{ color: '#945050', display: 'inline-block' }}>
                last updated on {new_date} - <p style = {{ color: '#945050', display: 'inline-block' }}>
                <a style = {{ color: '#ff6e6e'}} href = " https://www.ecdc.europa.eu/en/publications-data/download-todays-data-geographic-distribution-covid-19-cases-worldwide">Data Source</a>
              </p>
            </p>
        </div>
    )
}