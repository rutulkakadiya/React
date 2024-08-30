import React from 'react'

export default function Array() {
    let arr = [1, 2, 3]
    console.log(arr);

    return (
        <>
            {
                arr.map((e, i) => {
                    return(
                        <div key={i}>
                            <p>{e}</p>
                        </div>
                    )
                })
            }
        </>
    )
}
