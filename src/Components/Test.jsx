// import React, { useState, useRef } from "react";
// import "./Test.scss";
// import left from "../images/arrowLeft.svg";
// import right from "../images/arrowRight.svg";

// const Test = () => {
//   const newref = useRef(null);
//   const [divIndex, setDivIndex] = useState(0);
//   const [leftClick, setLeftClick] = useState(false);
//   const [rightClick, setRightClick] = useState(false);

//   const leftArrow = () => {
//     console.log("leftClick");
//     if (divIndex > 0) {
//       const ind = divIndex - 1;
//       setDivIndex(ind);
//       newref.current.style.transform = `translate3d(-${ind * 220}px,0,0)`;
//     } else {
//       setDivIndex(0);
//     }
//   };

//   const rightArrow = () => {
//     console.log("rightClick");
//     if (divIndex < 2) {
//       const ind = divIndex + 1;
//       setDivIndex(ind);
//       newref.current.style.transform = `translate3d(-${ind * 220}px,0,0)`;
//     } else {
//       setDivIndex(2);
//     }
//   };

//   React.useEffect(() => {
//     console.log("div: ",divIndex, "right:", divIndex + 1, "left:", divIndex - 1)
//     if (divIndex > 1) {
//       setRightClick(true);
//     } else {
//       setRightClick(false);
//     }
//     if (divIndex > 0) {
//       setLeftClick(true);
//     } else {
//       setLeftClick(false);
//     }
//   });

//   return (
//     <div className="test">
//       <div className="container">
//         <h2>Client Testimonials</h2>
//         <div className="arrow">
//           <p>Take a look at what our clients have to say about our work</p>
//           <div className="arrowbox">
//             <img
//               src={left}
//               className={`left ${leftClick ? "active" : ""}`}
//               alt="left"
//               onClick={leftArrow}
//             />
//             <img
//               src={right}
//               className={`right ${rightClick ? "lost" : ""}`}
//               alt="right"
//               onClick={rightArrow}
//             />
//           </div>
//         </div>
//         <div className="slider">
//           <div className="slide " ref={newref}>
//             <div className="testBox">
//               <p>
//                 “Lorem ipsum is a placeholder text commonly used to demonstrate
//                 the visual form of a document or a typeface without relying on
//                 meaningful content”
//               </p>
//               <h5>Saurabh Nayyar</h5>
//               <p className="detail">Docbel Health</p>
//             </div>
//             <div className="testBox">
//               <p>
//                 “Lorem ipsum is a placeholder text commonly used to demonstrate
//                 the visual form of a document or a typeface without relying on
//                 meaningful content”
//               </p>
//               <h5>Rohit Onkar</h5>
//               <p className="detail">Research & Ranking</p>
//             </div>
//             <div className="testBox">
//               <p>
//                 “Lorem ipsum is a placeholder text commonly used to demonstrate
//                 the visual form of a document or a typeface without relying on
//                 meaningful content”
//               </p>
//               <h5>Saurabh Nayyar</h5>
//               <p className="detail">Docbel Health</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test;
