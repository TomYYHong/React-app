//import { Fragment } from "react";
import { MouseEvent, useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //return <h1>ListGroup</h1>;
  //let selectdIndex = 0;
  //Hook
  const [selectdIndex, setSelectdIndex] = useState(-1);

  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectdIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            //onClick={handleClick}
            onClick={() => {
              setSelectdIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

//   return (
//     //Using div will have an additional element in the DOM
//     //<Fragment> <> equal to Fragment
//     //Using div will have an additional element in the DOM
//     <>
//       <h1>ListGroup</h1>
//       {
//         /* {items.length === 0 ? <p>Not item found</p> : null} */
//         //   message
//         // getMessage()
//         items.length === 0 && <p>No item Found</p>
//       }
//       <ul className="list-group">
//         {/* <li className="list-group-item">An item</li>
//         <li className="list-group-item">A second item</li>
//         <li className="list-group-item">A third item</li>
//         <li className="list-group-item">A fourth item</li>
//         <li className="list-group-item">And a fifth one</li> */}

//         {items.map((item, index) => (
//           <li
//             //className="list-group-element"
//             className={
//               selectdIndex === index
//                 ? "list group item active"
//                 : "list group item"
//             }
//             key={item}
//             //onClick={() => console.log(item,)}
//             //onClick={(event) => console.log(item, index)}
//             //onClick={(event) => console.log(event)}
//             onClick={handleClick}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

//const items: any[] = [];

//const message = items.length === 0 ? <p>Not item found</p> : null;

//   const getMessage = () => {
//     return items.length === 0 ? <p>Not item found msg</p> : null;
//   };

//   if (items.length === 0) {
//     return (
//       <>
//         <h1>List</h1>
//         <p>Not item Found</p>
//       </>
//     );
//   }
