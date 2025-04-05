import { useState } from "react";
import "../Css/Grid.css";

export default function Grid() {
  const [color, setColor] = useState();
  const [selected, setSelected] = useState([]);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const handleColor = async (index) => {
  console.log("Clicked index:", index);

  if (!selected.includes(index)) {
    console.log("Adding index:", index);
    setSelected((prev) => [...prev, index]); // Add the clicked index
    setColor("red");
  } else {
  
      console.log("Starting removal sequence...");

      let indexPosition = selected.indexOf(index); // Find where the index is in selected
      console.log("Index position in selected:", indexPosition);

      for (let i = indexPosition; i >=0; i--) {
        console.log("Removing index:", selected[i]);

        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 sec

        setSelected((prev) => prev.filter((item) => item !== selected[i])); 
   
    }
  }
};

  
  console.log("selected", selected);
  return (
    <div className="App">
      <div className="grid-container">
        {arr.map((item, index) => (
          <div
            className="item"
            style={{
              backgroundColor: selected.includes(index) ? color : "",
            }}
            onClick={() => handleColor(index)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
