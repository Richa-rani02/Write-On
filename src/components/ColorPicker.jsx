import { useState } from "react";

export const ColorPicker = ({ palleteActive, setPalleteActive, setNotes, notes }) => {

  const colorsData = [
    {
      primaryColor: "#ECF3FC",
      secondaryColor: "#5D93E1"
    },
    {
      primaryColor: "#FEFAF1",
      secondaryColor: "#F9D288"
    },
    {
      primaryColor: "#F2FAF1",
      secondaryColor: "#5DC250"
    },
    {
      primaryColor: "#FDF1F1",
      secondaryColor: "#F48687"
    },
    {
      primaryColor: "#F3F0FD",
      secondaryColor: "#B964F7"
    },
     {
      primaryColor: "#fae8ff",
      secondaryColor: "#f0abfc"
    }, 
    {
      primaryColor: "#ffedd5",
      secondaryColor:"#fdba74"
    },
     {
      primaryColor: "#fce7f3",
      secondaryColor: "#f472b6"
    }
  ];

  const chooseColor = (color) => {
    setNotes({ ...notes, Color:{tagColor:color.secondaryColor,bgColor:color.primaryColor} });
    setPalleteActive(prev => !prev)
  }

  return (
    <div className={`${palleteActive ? 'absolute' : 'hidden'} color-pallete-grid gap-1 bg-white grid grid-rows-[repeat(2,27px)] grid-cols-[repeat(4,27px)] p-3 z-3 top-[100%] left-[50%] border border-solid border-gray-200`}>
      {colorsData.map((color) => (
        <div className="rounded-full"
          style={{
            backgroundColor: color.secondaryColor,
          }} onClick={() => chooseColor(color)}
        >

        </div>
      ))}
    </div>
  )
}