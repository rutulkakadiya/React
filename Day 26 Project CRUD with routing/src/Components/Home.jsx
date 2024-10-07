import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home({ data }) {

  return (
    <div>
      <h1>Home</h1>
      <Link to={"/Create"}>Create</Link>
      <Link to={"/Delete"}>Delete</Link>
      <Link to={"/Update"}>Update</Link>

      <table>
        <thead>
          <tr>
            <td>No.</td>
            <td>Name</td>
            <td>Subject</td>
          </tr>
        </thead>

        <tbody>
          {
            data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.subject}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}
