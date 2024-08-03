import React from 'react'

const page = ({params} : {
    params : {productid : "String"}
}) => {
  return (
    <div>
        <h1>Dynamic rounting for pruduct page{params.productid}</h1>
    </div>
  )
}

export default page