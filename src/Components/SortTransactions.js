// import React, { useState } from 'react'

// const SortTransactions = ({transactions}) => {
//     const [data, setData] = useState(transactions);

//     const [sortSetting, setSortSetting] = useState({key: null, direction: null})

//     const handleSort = (key) => {
//         let direction = 'ascending'
//         if (sortSetting.key === key && sortSetting.direction === 'ascending'){
//         direction = 'descending'
//         }
//     }

//     const sortedData = [...data].sort((a,b)=>{
//         if (a[key] < b[key]) return direction === 'ascending' ? -1:1
//         if (a[key] > b[key]) return direction === 'ascending' ? 1:-1
//         return 0
//     })

//     setData(sortedData)
//     setSortSetting({key, direction})
//   return (
//     <div></div>
//   )
// }

// export default SortTransactions