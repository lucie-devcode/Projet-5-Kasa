// import { useState } from "react";
// import "./Collapse.scss";

// function Collapse({ title, content }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="collapse">
//       <button onClick={() => setOpen(!open)}>
//         {title}
//         <span className={open ? "rotate" : ""}>⌄</span>
//       </button>

//       {open && (
//         <div className="collapse-content">
//           {Array.isArray(content) ? (
//             <ul>
//               {content.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>{content}</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Collapse;
