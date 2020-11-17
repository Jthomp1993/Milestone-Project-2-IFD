// Objects which contain the data for all music which is stored in variable musicData
var musicData = [{
        "albumName": "Wild",
        "albumImage": "assets/images/music-artwork/wild.png",
        "tracklist": ["01. And So, You Were!", "02. Elixir", "03. Bunny", "04. So", "05. Fiction", "06. Still Life", "07. Wild", "08. 11.12", "09. Kin", "10. Together At The Centre Of Creation"],
        "buyNow": "https://music.apple.com/us/album/wild/1480919558"
    },
    {
        "albumName": "Everyday",
        "albumImage": "assets/images/music-artwork/everyday.png",
        "tracklist": ["01. Awake", "02. Emily", "03. Someone Else", "04. Love Theme", "05. Pieces", "06. Gin Under The Sink", "07. Apollo", "08. Hearts", "09. Violet", "10. Affection"],
        "buyNow": "https://music.apple.com/us/album/everyday/1447447773"
    },
    {
        "albumName": "U",
        "albumImage": "assets/images/music-artwork/u.png",
        "tracklist": ["01. U", "02. To Have You Back", "03. Run", "04. Wait", "05. My Love (Interlude)", "06. Waves", "07. Too Late", "08. Foolish", "09. Seperate Ways", "10. For Sarah"],
        "buyNow": "https://music.apple.com/us/album/u/1086160489"
    },
    {
        "albumName": "Last",
        "albumImage": "assets/images/music-artwork/last.png",
        "tracklist": ["01. Last (The Range)"],
        "buyNow": "https://music.apple.com/us/album/last-single/1515865411"
    },
    {
        "albumName": "Wash",
        "albumImage": "assets/images/music-artwork/wash.png",
        "tracklist": ["01. We Stayed Up All Night", "02. Apart", "03. Sleepwalking", "04. Hush"],
        "buyNow": "https://music.apple.com/us/album/wash-ep/1294071129"
    },
    {
        "albumName": "Holding On",
        "albumImage": "assets/images/music-artwork/holding-on.png",
        "tracklist": ["01. Holding On (Josef Salvat, Niia)"],
        "buyNow": "https://music.apple.com/us/album/holding-on-feat-josef-salvat-niia-single/1072287219"
    },
    {
        "albumName": "Patterns",
        "albumImage": "assets/images/music-artwork/patterns.png",
        "tracklist": ["01. Trust In You", "02. Patterns (Lianne La Havas)", "03. Together", "04. I can't Keep Up (Will Heard)", "05. I can't Keep Up - Dub Remix (Will Heard)"],
        "buyNow": "https://music.apple.com/us/album/patterns-ep/961815993"
    },
    {
        "albumName": "Tonight",
        "albumImage": "assets/images/music-artwork/tonight.png",
        "tracklist": ["01. Tonight", "02. I Have No Fear", "03. Never Stop", "04. Heartbeats"],
        "buyNow": "https://music.apple.com/us/album/tonight-ep/599526514"
    },
    {
        "albumName": "Tourist",
        "albumImage": "assets/images/music-artwork/tourist.png",
        "tracklist": ["01. Placid Acid", "02. Forgive", "03. Jupiter", "04. Fires"],
        "buyNow": "https://music.apple.com/us/album/tourist-ep/1530703105"
    },
];

$(document).ready(function () {

    // Add smooth scrolling to all links
    $(".music-btn").on('click', function (event) {

        // get the ID of this
        let thisAlbumId = $(this).attr("id").replace("-", " ");

        // helper function search the 'musicData' array
        // modified from: https://stackoverflow.com/a/12462387
        function searchData(key, albumArray) {
            for (var i = 0; i < albumArray.length; i++) {
                // compare the ID being clicked with the musicData value, both toLowerCase()
                if (albumArray[i].albumName.toLowerCase() === key.toLowerCase()) {
                    return albumArray[i];
                }
            }
        }
        var album = searchData(thisAlbumId, musicData);

        // call the 'getMusic' function, and pass the appropriate album details from 'musicData' array
        getMusic(album.albumName, album.albumImage, album.tracklist, album.buyNow);

        // This function hides the music info section until a user clicks on an album
        $('.hide-element').show();

        if (this.hash !== "#tourist") {
            // Prevent default anchor click behavior
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 2000, function () {
                window.location.hash = hash;
            });
        }
    });
});

function getMusic(albumName, albumImage, tracklist, buyNow) {
    // clear the current #tracklist-parent
    $("#tracklist-parent").empty();
    // all each relevant album details from the 'musicData' array
    $("#album-name").text(albumName);
    $("#album-image").attr("src", albumImage);
    $("#buy-now").attr("href", buyNow);
    tracklist.forEach((track) => {
        $("#tracklist-parent").append(`<h3>${track}</h3>`);
    });
}

// Sources of guidance used 
// https://stackoverflow.com/questions/5886144/create-divs-from-array-elements
// https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2
// https://stackoverflow.com/questions/17746737/how-to-append-string-to-a-href-with-jquery-or-javascript
// https://stackoverflow.com/questions/32772363/how-does-this-hash-work/32772416#32772416
// Johann, Tim and Cormac from tutor assitance



