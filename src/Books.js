// import React, { Component } from 'react';

// const Books = ({product,loading}) => {
   
//     return ( 

//         <>
//         {
// loading?<h1>...loading</h1>:(

// <div>
// {
//     product.map(item=>{
//         return(<tr className="TableRow">
//         <td className="SecondaryText">{item.bookID}</td>
//         <td className="PrimaryText">{(item.authors).slice(0,10)}</td>
//         <td className="SecondaryText">{item.price}</td>
//         <td className="PrimaryText">{item.title}</td>
//         <td className="SecondaryText">{item.average_rating} </td>
//         </tr>
//         )

//     })
// }


// </div>



// )

//         }
        
        
        
//         </>



//      );
// }
 
// export default Books;

// import DataTable from 'ReactDataComponents';
// import React, { Component } from 'react';
// const Books = () => {var DataTable = ReactDataComponents.DataTable;

//     // Generate random data
//     var names = [ 'Carlos', 'Juan', 'Jesus', 'Alberto', 'John' ];
//     var cities = [ 'Chicago', 'Tampico', 'San Francisco', 'Mexico City', 'Boston', 'New York' ];
//     var addresses = [ '333 West Wacker Drive', '1931 Insurgentes Sur', '1 Lombard Street', '55 Av Hidalgo'];
    
//     var data = [];
//     for (var i = 0; i < 1000; i++) {
//       data.push({
//         id: i,
//         name: names[~~(Math.random() * names.length)],
//         city: cities[~~(Math.random() * cities.length)],
//         address: addresses[~~(Math.random() * addresses.length)]
//       });
//     }
    
//     var columns = [
//       { title: 'Name', prop: 'name'  },
//       { title: 'City', prop: 'city' },
//       { title: 'Address', prop: 'address' }
//     ];
//     return (
//         ReactDOM.render((
//             <DataTable
//               className="container"
//               keys="id"
//               columns={columns}
//               initialData={data}
//               initialPageLength={5}
//               initialSortBy={{ prop: 'name', order: 'descending' }}
//               pageLengthOptions={[ 5, 20, 50 ]}
//             />
//           ), document.getElementById("root"))  );
// }
 
// export default Books;





