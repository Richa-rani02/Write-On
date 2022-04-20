import { useState } from "react";

export const ColorPicker = ({ palleteActive, setPalleteActive, setNotes, notes }) => {

  const colorsData = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC"
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1"
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1"
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1"
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD"
    },
     {
      primaryColor: "#f0abfc",
      secondaryColor: "#fae8ff"
    }, 
    {
      primaryColor: "#fdba74",
      secondaryColor: "#ffedd5"
    },
     {
      primaryColor: "#f9a8d4",
      secondaryColor: "#fce7f3"
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
            backgroundColor: color.primaryColor,
          }} onClick={() => chooseColor(color)}
        >

        </div>
      ))}
    </div>
  )
}