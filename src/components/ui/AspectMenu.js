// import { useState } from "react";

// export default function AspectMenu({ selected }) {
//     const [aspectRatio, setAspectRatio] = useState(3 / 4);
//     return (
//         <div className="absolute top-1/4 p-2 right-0 flex flex-col gap-4 -translate-y-2/4 opacity-50 justify-center items-center transition">
//             <div
//                 className="w-8 h-8 outline outline-2 outline-gray-400 cursor-pointer hover:outline-gray-800"
//                 onClick={() => {
//                     setAspectRatio(1 / 1);
//                 }}
//             />
//             <div
//                 className="w-6 h-8 outline outline-2 outline-gray-400 cursor-pointer hover:outline-gray-800"
//                 onClick={() => {
//                     setAspectRatio(3 / 4);
//                 }}
//             />
//             <div
//                 className="w-8 h-6 outline outline-2 outline-gray-400 cursor-pointer hover:outline-gray-800"
//                 onClick={() => {
//                     setAspectRatio(4 / 3);
//                 }}
//             />
//         </div>
//     );
// }
