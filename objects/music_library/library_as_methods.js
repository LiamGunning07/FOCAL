const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },


/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
printPlaylists: function () {
  for(const playlistId in library.playlists) {
       const playlist = library.playlists[playlistId];
       console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
       }
  },


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
printTracks: function() {
       for(const trackId in library.tracks) {
       const track = library.tracks[trackId];
       console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
       }
},


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
printPlaylist: function(playlistId) {
  const playlist = library.playlists[playlistId];

  if (playlist) {
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length}tracks`);
    playlist.tracks.forEach(trackId => {
      const track = library.tracks[trackId];
      console.log(`  ${track.id}: ${track.name} by ${track.artist} (${track.album})`);
      });
       } else {
       console.log("Playlist not found");
       }
},



// adds an existing track to an existing playlist
addTrackToPlaylist: function(trackId, playlistId) {
const playlist = library.playlists[playlistId];
const track = library.tracks[trackId];
     
if (playlist && track) {
playlist.tracks.push(trackId);
console.log(`Track ${track.name} added to playlist ${playlist.name}`);
} else {
console.log("Invalid track or playlist");
}},


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
generateUid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},


// adds a track to the library
addTrack: function(name, artist, album) {
const trackId = generateUid();
library.tracks[trackId] = {
id : trackId,
name : name,
artist : artist,
album : album
};
console.log(`${trackId} added to tracks`);
},


// adds a playlist to the library
addPlaylist: function(name) {
const playlistId = generateUid();
library.playlists[playlistId] = {
id: playlistId,
name: name,
tracks:[]
};
console.log(`New playlist ${name} created.`)
},



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
printSearchResults: function(query) {
let results = {};
for (let trackId in library.tracks) {
let track = library.tracks[trackId];
if (track.name.includes(query) || track.artist.includes(query) || track.album.includes(query)) {
results[trackId] = track;
}
}
console.log(results);
}
};

library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
library.addTrackToPlaylist("t01","p02");
library.addTrack("Last Night", "Morgan Wallen", "One Thing At a Time");
library.addPlaylist("Chillin");
library.printSearchResults("Code")
