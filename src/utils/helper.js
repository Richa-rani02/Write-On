export const isInList = (list,id) => {
    return (list?.some((ele) => ele._id === id))
  }
