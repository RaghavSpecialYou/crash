import React, { useState } from "react";

const initialArray = [
  { id: 1, balloon: "dark" },
  { id: 2, balloon: "light" },
  { id: 3, balloon: "color" },
];

const style = {
  color: "red",
  backgroundColor: "black",
};

const App = () => {
  const updateArray = initialArray;
  const [show, setShow] = useState(true);
  console.log(show);
  return (
    <>
      <p
        onClick={() => {
          setShow(false);
        }}
      >
        there are {updateArray.length} balloons
      </p>
      {updateArray.map((updateArr) => (
        <ListSubapp
          key={updateArr.id}
          updateArr={updateArr}
          style={style}
          propass="text"
        />
      ))}
    </>
  );
};

const ListSubapp = ({ updateArr, style }) => {
  return (
    <>
      <li style={style}>{updateArr.balloon}</li>
    </>
  );
};

// const App = () => {
//   const updateArray = initialArray;
//   return (
//     <>
//       {updateArray.map((updateArr) => (
//         <li key={updateArr.id} style={style}>
//           {updateArr.balloon}
//         </li>
//       ))}
//     </>
//   );
// };

export default App;
