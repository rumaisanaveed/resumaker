// "use client";
// import React, { useContext, useState } from "react";
// import Button from "./buttons/Button";
// import { BsHouseDoor } from "react-icons/bs";
// import { CiGrid41 } from "react-icons/ci";
// import { FaArrowRightLong } from "react-icons/fa6";
// import FormContext from "../context/FormContext";
// import { FaArrowLeft } from "react-icons/fa";
// import { ColorPicker } from "antd";

// export const FormSectionHeader = () => {
//   const [color, setColor] = useState("#aa16ff");
//   const { activeFormStep, setActiveFormStep } = useContext(FormContext);

//   const handleFormNextStep = () => {
//     if (activeFormStep < 6) {
//       setActiveFormStep((prevStep) => prevStep + 1);
//     }
//   };

//   const handleFormPrevStep = () => {
//     if (activeFormStep > 1) {
//       setActiveFormStep((prevStep) => prevStep - 1);
//     }
//   };

//   const handleValueChange = (value) => {
//     console.log(value);
//   };

//   return (
//     <div className="flex items-center justify-between">
//       <div className="flex items-center gap-3">
//         <Button className="py-2 px-4">
//           <BsHouseDoor style={{ fontSize: "25px" }} />
//         </Button>
//         <Button className="bg-white rounded border-gray-200 border shadow text-black flex items-center gap-1 py-2">
//           <CiGrid41
//             style={{
//               color: "black",
//             }}
//           />
//           <p className="text-black">Theme</p>
//           <div className="pl-2">
//             <ColorPicker
//               defaultValue="#aa16ff"
//               onChangeComplete={handleValueChange}
//               value={color}
//               onChange={(value) => setColor(value)}
//             />
//           </div>
//         </Button>
//       </div>

//       <div className="flex items-center gap-2">
//         {activeFormStep > 1 && (
//           <Button className="py-3 px-4" onClick={handleFormPrevStep}>
//             <FaArrowLeft style={{ fontSize: "23px" }} />
//           </Button>
//         )}
//         <Button
//           className="flex items-center gap-2"
//           onClick={handleFormNextStep}
//           type="button"
//         >
//           <p>Next</p>
//           <FaArrowRightLong />
//         </Button>
//       </div>
//     </div>
//   );
// };

"use client";
import React, { useContext, useState } from "react";
import Button from "./buttons/Button";
import { BsHouseDoor } from "react-icons/bs";
import { CiGrid41 } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import FormContext from "../context/FormContext";
import { FaArrowLeft } from "react-icons/fa";
import { ColorPicker } from "antd";

export const FormSectionHeader = () => {
  const [color, setColor] = useState("#aa16ff"); // Default color
  const { activeFormStep, setActiveFormStep } = useContext(FormContext);

  const handleFormNextStep = () => {
    if (activeFormStep < 6) {
      setActiveFormStep((prevStep) => prevStep + 1);
    }
  };

  const handleFormPrevStep = () => {
    if (activeFormStep > 1) {
      setActiveFormStep((prevStep) => prevStep - 1);
    }
  };

  // Handle color change
  const handleColorChange = (value) => {
    const { r, g, b } = value.metaColor; // Extracting the RGB values
    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)}`; // Converting RGB to hex
    setColor(hex);
    console.log("Selected Color (Hex):", hex);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Button className="py-2 px-4">
          <BsHouseDoor style={{ fontSize: "25px" }} />
        </Button>
        <Button className="bg-white rounded border-gray-200 border shadow text-black flex items-center gap-1 py-2">
          <CiGrid41
            style={{
              color: "black",
            }}
          />
          <p className="text-black">Theme</p>
          <div className="pl-2">
            <ColorPicker
              format="hex"
              defaultValue={color}
              value={color} // Controlled component
              onChange={handleColorChange} // Handle color change
            />
          </div>
        </Button>
      </div>

      <div className="flex items-center gap-2">
        {activeFormStep > 1 && (
          <Button className="py-3 px-4" onClick={handleFormPrevStep}>
            <FaArrowLeft style={{ fontSize: "23px" }} />
          </Button>
        )}
        <Button
          className="flex items-center gap-2"
          onClick={handleFormNextStep}
          type="button"
        >
          <p>Next</p>
          <FaArrowRightLong />
        </Button>
      </div>
    </div>
  );
};
