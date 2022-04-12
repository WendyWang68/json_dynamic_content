let pageTitleElement;
let outputGridElement;
let projectDisplayElement;

let songCollection = [
  {
    "itemTitle" : "Deep Blue by William Black",
    "category" : "pop",
    "id" : "william",
    "description" : "Deep Blue by William Black is a remix song, released in 2019. The song feels romantic and relaxing. It has beautiful lyrics, describing the beauty of eyes is like the deep ocean blue.",
    "image" : "https://picsum.photos/id/1041/400/300"
  },
  {
   "itemTitle" : "In Love by July",
   "category" : "piano",
   "id" : "julylove",
   "description" : "In Love by July is a piano soft music. It was released in 2012. The beautiful rhythm with the peaceful flow gives audience a superb feeling.",
   "image" : "https://picsum.photos/id/360/400/300"
 },
 {
    "itemTitle" : "The Sun of Spring by July",
    "category" : "piano",
    "id" : "julysun",
    "description" : "The Sun of Spring by July is a piano song. It was released in 2020. When listening to this soft piano music, I feel the embrace of spring and sunshine. The melody gives audience a warm and sweet feeling.",
    "image" : "https://picsum.photos/id/459/400/300"
  },
  {
     "itemTitle" : "Aurora by Roxanne Emery, K-391",
     "category" : "pop",
     "id" : "roxanne",
     "description" : "Aurora by Roxanne Emery, K-391 is a pop music, released in 2020. It has electronic sounds, mixed with other sound effects. The whole feel of the music is miraculous and fun.",
     "image" : "https://picsum.photos/id/1022/400/300"
   },
   {
      "itemTitle" : "City of Stars by La La Land",
      "category" : "piano",
      "id" : "lalaland",
      "description" : "City of Stars is a piano song in the movie La La Land. The piano melody is romantic, fun, and dreamy. The artists of the music are Emma Stone and Ryan Gosling. It was released in 2016.",
      "image" : "https://picsum.photos/id/249/400/300"
    },
    {
       "itemTitle" : "Magical by Loving Caliber",
       "category" : "pop",
       "id" : "caliber",
       "description" : "Magical is a pop song by Loving Caliber, released in 2019. Both the lyrics and rhythm makes you feel magical, just like the title of the music. It is really energetic and uplifting.",
       "image" : "https://picsum.photos/id/499/400/300"
     }
];

document.addEventListener("DOMContentLoaded", function(){

  pageTitleElement = document.getElementById("pageTitle");
  outputGridElement = document.getElementById("outputGrid");
  projectDisplayElement = document.getElementById("projectDisplay");

  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let urlSection = urlParams.get('section');
  let urlID = urlParams.get('id');

  if (urlSection != "item") {
    if (urlSection == "piano") {
      pageTitleElement.innerText = "Piano Music:";
    }
    else if (urlSection == "pop") {
      pageTitleElement.innerText = "Pop Music:";
    }

    for (let i = 0; i < songCollection.length; i++) {
      if (songCollection[i]["category"] == urlSection || urlSection == "" || urlSection == null){
        createProjectPreview(songCollection[i]);
      }
    }
  }
  else {
    for (let i = 0; i < songCollection.length; i++) {
      if (songCollection[i]["id"] == urlID) {
        createProjectPage(songCollection[i]);
      }
    }
  }
});

function createProjectPreview(incomingJSON){

  let newPreviewLink = document.createElement("A");
  newPreviewLink.href = "index.html?section=item&id=" + incomingJSON["id"];

  let newPreviewElement = document.createElement("DIV");
  newPreviewLink.appendChild(newPreviewElement);

  let newPreviewTitle = document.createElement("P");
  newPreviewTitle.classList.add("previewTitle");
  newPreviewTitle.innerText = incomingJSON["itemTitle"];
  newPreviewElement.appendChild(newPreviewTitle);

  let newPreviewThumbnail = document.createElement("IMG");
  newPreviewThumbnail.classList.add("thumbnail");
  newPreviewThumbnail.src = incomingJSON["image"];
  newPreviewElement.appendChild(newPreviewThumbnail);

  outputGridElement.appendChild(newPreviewLink);

}

function createProjectPage(incomingJSON) {

  let newProjectElement = document.createElement("DIV");

  let newProjectImage = document.createElement("IMG");
  newProjectImage.src = incomingJSON["image"];
  newProjectElement.appendChild(newProjectImage);

  let newProjectDescription = document.createElement("P");
  newProjectDescription.classList.add("description");
  newProjectDescription.innerText = incomingJSON["description"];
  newProjectElement.appendChild(newProjectDescription);

  projectDisplayElement.appendChild(newProjectElement);

}
