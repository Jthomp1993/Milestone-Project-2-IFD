// Objects which contain the data for all music which is stored in variable musicData
var musicData = [
    {
    "albumName": "Wild",
    "albumImage": "assets/images/music-artwork/wild.png",
    "tracklist": ["And So, You Were!", "Elixir", "Bunny", "So", "Fiction", "Still Life", "Wild", "11.12", "Kin", "Together At The Centre Of Creation"]
    },
    {
    "albumName": "Everyday",
    "albumImage": "assets/images/music-artwork/everyday.png",
    "tracklist": ["Awake", "Emily", "Someone Else", "Love Theme", "Pieces", "Gin Under The Sink", "Apollo", "Hearts", "Violet", "Affection"]
    },
    {
    "albumName": "U",
    "albumImage":  "assets/images/music-artwork/u.png",
    "tracklist": ["U", "To Have You Back", "Run", "Wait", "My Love (Interlude)", "Waves", "Too Late", "Foolish", "Seperate Ways", "For Sarah"]
    },
    {
    "albumName": "Last",
    "albumImage": "assets/images/music-artwork/last.png",
    "tracklist": ["Last (The Range)"]
    },
    {
    "albumName": "Wash",
    "albumImage": "assets/images/music-artwork/wash.png",
    "tracklist": ["We Stayed Up All Night", "Apart", "Sleepwalking", "Hush"]
    },
    {
    "albumName": "Holding On",
    "albumImage": "assets/images/music-artwork/holding-on.png",
    "tracklist": ["Holding On (Josef Salvat, Niia)"]
    },
    {
    "albumName": "Patterns",
    "albumImage": "assets/images/music-artwork/patterns.png",
    "tracklist": ["Trust In You", "Patterns (Lianne La Havas)", "Together", "I can't Keep Up (Will Heard)", "I can't Keep Up - Dub Remix (Will Heard)"]
    },
    {
    "albumName": "Tonight",
    "albumImage": "assets/images/music-artwork/tonight.png",
    "tracklist": ["Tonight", "I Have No Fear", "Never Stop", "Heartbeats"]
    },
    {
    "albumName": "Tourist",
    "albumImage": "assets/images/music-artwork/tourist.png",
    "tracklist": ["Placid Acid", "Forgive", "Jupiter", "Fires"]
    },
]


document.getElementById("wild").addEventListener("click", () => {
    getWild("wild", "assets/images/music-artwork/wild.png");
})

function getWild(albumName, albumImage) {
    musicData.forEach(function(value, index) {
        if (value["albumName"].toLowerCase() == albumName.toLowerCase()) {
            document.getElementById("album-name").innerText = value["albumName"];
        }
        if (value["albumImage"].toLowerCase() == albumImage.toLowerCase()) {
            document.getElementById("album-image").setAttribute('src', value["albumImage"]);
        }
    })
}