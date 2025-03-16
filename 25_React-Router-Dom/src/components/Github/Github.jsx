import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    
    const data = useLoaderData()

    // Approach 1
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Ramavtar-Nagar')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='m-4 text-center bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git Avatar" width={300} />
    </div>
  )
}

export default Github

// Approach 2
export const githubUserLoader = async () => {
    const response = await fetch('https://api.github.com/users/Ramavtar-Nagar')
    return response.json()
} 