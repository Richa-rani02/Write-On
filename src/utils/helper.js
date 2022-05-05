export const isInList = (list, id) => {
  return (list?.some((ele) => ele._id === id))
}
export const isNotesPinned=(notesList)=>{
  return notesList.filter(note=>note.isPinned)
}

export const sortDate = (notesList, { sortByDate }) => {
  let updatedList = [...notesList];
  if (sortByDate === 'oldest') {
    return updatedList.sort((a, b) => new Date(a.createdTime) - new Date(b.createdTime))
  } else if (sortByDate === 'latest') {
    return updatedList.sort((a, b) => new Date(b.createdTime) - new Date(a.createdTime))
  }
  return updatedList;

}

export const sortPriority = (notesList, { sortByPriority }) => {
  let updatedList = [...notesList];
  if (sortByPriority) {
    return updatedList.filter(note => note.priority.toLowerCase() === sortByPriority.toLowerCase())
  }
  return updatedList;
}


export const searchNotes = (notesList, { search }) => {
  let updatedList = [...notesList];
  if (search) {
    return updatedList.filter(notes => notes.tags[0].toLowerCase().includes(search.toLowerCase()))
  }
  return updatedList;
}
export const filterTags=(notesList,{filterByTags})=>{
  let updatedList=[...notesList];
  if(!filterByTags.length) return updatedList;
 return updatedList.filter(notes=>filterByTags.includes(notes.tags[0].toLowerCase()))
}

const filterFunctions = [
  searchNotes,
  sortDate,
  sortPriority,
  filterTags,
];

export const getFilteredNotes = (notes, filters) => {
  return filterFunctions.reduce((acc, crr) => {
    return crr(acc, filters);
  }, notes);
}
