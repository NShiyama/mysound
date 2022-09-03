const myMusicList = [
    "Harleys in Hawaii - Taylor Swift",
    "Just Like Magic - Ariana Grande",
    "Summertime - Bridgit Mendler",
    "Supalonely - BENEE",
    "Down - Jay Sean ft. Lil Wayne",
    "Double Take - Dhruv",
    "Heat Waves - Glass Animals",
    "SUGAR - Brockhampton",
    "Toxic- Britney Spears",
];

const mixList = document.querySelector(".my-songs");
const button = document.querySelector(".show-list");
const total = document.querySelector(".text");

//create the remove/hide functionality when clickoing the button 
button.addEventListener("click", function() {
    mySongs(myMusicList);
    mixList.classList.remove("hide");
    button.classList.add("hide") ;
})

total.innerText = `my current top ${myMusicList.length} songs🎧`;

//function that turns the array into html list elements

const mySongs = function(songs) {
//this is how we are able to access each string in the list we made
songs.forEach(function (song, index) {
let li = document.createElement("li")
li.classList.add("song")
li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`
mixList.append(li)

});

};