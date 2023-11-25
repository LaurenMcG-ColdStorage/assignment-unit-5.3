console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = []; // Create myCollection array
function addToCollection (collection, title, artist, yearPublished){ // Create addToCollection function with expected parameters.
  const recordDetails = {  // Creates new object names recordDetails
    albumTitle: title,     // Adds albumTitle as object attribute
    albumArtist: artist,   // Adds albumArtist as object attribute
    releaseDate: yearPublished, // Adds releaseDate as object attribute
  };
  collection.push(recordDetails);  //Updates the passed in array with the recordDetails object
  console.log(myCollection);
  return recordDetails;           //Returns object values
};

addToCollection(myCollection, "Jester's Dance", "In Flames", "1996");
addToCollection(myCollection, "White Crosses/Black Crosses", "Against Me!", "2010");
addToCollection(myCollection, "Brothers", "The Black Keys", "2010");
addToCollection(myCollection, "Panic", "Caravan Palace", "2012");
addToCollection(myCollection, "Imaginary Diseases", "Frank Zappa", "2006");
addToCollection(myCollection, "Predator's Potrait", "Soilwork", "2001");
addToCollection(myCollection, "Come Clarity", "In Flames", "2006");
console.log(myCollection);

function showCollection (collection){
  for (let collectionIndex of collection){
    console.log(`${collectionIndex.albumTitle} by ${collectionIndex.albumArtist}, published in ${collectionIndex.releaseDate}`)
  };
};
showCollection(myCollection);

function findByArtist(collection, artist){
  let results = [];
  for (let collectionIndex of collection){
    if(collectionIndex.albumArtist.toLowerCase() === artist.toLowerCase()){
      results.push(collectionIndex)
    };
  };
  return results;
};

console.log(findByArtist(myCollection, 'In flames'));
console.log(findByArtist(myCollection, 'ZZ Ward'));


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
