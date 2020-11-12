
// Objects which contain the data for all music which is stored in variable musicData
var musicData = [
    {
    "albumName": "Wild",
    "albumImage": "assets/images/music-artwork/wild.png",
    "tracklist": ["01. And So, You Were!", "02. Elixir", "03. Bunny", "04. So", "05. Fiction", "06. Still Life", "07. Wild", "08. 11.12", "09. Kin", "10. Together At The Centre Of Creation"]
    },
    {
    "albumName": "Everyday",
    "albumImage": "assets/images/music-artwork/everyday.png",
    "tracklist": ["01. Awake", "02. Emily", "03. Someone Else", "04. Love Theme", "05. Pieces", "06. Gin Under The Sink", "07. Apollo", "08. Hearts", "09. Violet", "10. Affection"]
    },
    {
    "albumName": "U",
    "albumImage":  "assets/images/music-artwork/u.png",
    "tracklist": ["01. U", "02. To Have You Back", "03. Run", "04. Wait", "05. My Love (Interlude)", "06. Waves", "07. Too Late", "08. Foolish", "09. Seperate Ways", "10. For Sarah"]
    },
    {
    "albumName": "Last",
    "albumImage": "assets/images/music-artwork/last.png",
    "tracklist": ["01. Last (The Range)"]
    },
    {
    "albumName": "Wash",
    "albumImage": "assets/images/music-artwork/wash.png",
    "tracklist": ["01. We Stayed Up All Night", "02. Apart", "03. Sleepwalking", "04. Hush"]
    },
    {
    "albumName": "Holding On",
    "albumImage": "assets/images/music-artwork/holding-on.png",
    "tracklist": ["01. Holding On (Josef Salvat, Niia)"]
    },
    {
    "albumName": "Patterns",
    "albumImage": "assets/images/music-artwork/patterns.png",
    "tracklist": ["01. Trust In You", "02. Patterns (Lianne La Havas)", "03. Together", "04. I can't Keep Up (Will Heard)", "05. I can't Keep Up - Dub Remix (Will Heard)"]
    },
    {
    "albumName": "Tonight",
    "albumImage": "assets/images/music-artwork/tonight.png",
    "tracklist": ["01. Tonight", "02. I Have No Fear", "03. Never Stop", "04. Heartbeats"]
    },
    {
    "albumName": "Tourist",
    "albumImage": "assets/images/music-artwork/tourist.png",
    "tracklist": ["01. Placid Acid", "02. Forgive", "03. Jupiter", "04. Fires"]
    },
]

// This function hides the music info section until a user clicks on an album
$('.music-btn').click(function() {
        $('.hide-element').show();
    });

    $(document).ready(function(){
  // Add smooth scrolling to all links
  $("music-btn").on('click', function(event) {

    if (this.hash !== "#music-table") {
      // Prevent default anchor click behavior
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){

        window.location.hash = hash;
      });
    } 
  });
});

    // Event listeners used for when a user clicks on an album to invoke function to append data to music info section
document.getElementById("wild").addEventListener("click", () => {
    getWild("wild", "assets/images/music-artwork/wild.png", ["01. And So, You Were!", "02. Elixir", "03. Bunny", "04. So", "05. Fiction", "06. Still Life", "07. Wild", "08. 11.12", "09. Kin", "10. Together At The Centre Of Creation"]);
})
document.getElementById("everyday").addEventListener("click", () => {
    getEveryday("everyday", "assets/images/music-artwork/everyday.png", ["01. Awake", "02. Emily", "03. Someone Else", "04. Love Theme", "05. Pieces", "06. Gin Under The Sink", "07. Apollo", "08. Hearts", "09. Violet", "10. Affection"]);
})
document.getElementById("u").addEventListener("click", () => {
    getEveryday("u", "assets/images/music-artwork/u.png", ["01. U", "02. To Have You Back", "03. Run", "04. Wait", "05. My Love (Interlude)", "06. Waves", "07. Too Late", "08. Foolish", "09. Seperate Ways", "10. For Sarah"]);
})

function getWild(albumName, albumImage, tracklist) {
    musicData.forEach(function(value, index) {
        if (value["albumName"].toLowerCase() == albumName.toLowerCase()) {
            document.getElementById("album-name").innerText = value["albumName"];
        }
        if (value["albumImage"].toLowerCase() == albumImage.toLowerCase()) {
            document.getElementById("album-image").setAttribute('src', value["albumImage"]);
        } 
    })
        var trackList = document.getElementById("tracklist-parent"),
        h3 = document.createElement('h3'),
        clone;
        tracklist.forEach(function (value, index) {
            clone = h3.cloneNode();
            clone.textContent = value;
            trackList.appendChild(clone);
        })
}

function getEveryday(albumName, albumImage, tracklist) {
    musicData.forEach(function(value, index) {
        if (value["albumName"].toLowerCase() == albumName.toLowerCase()) {
            document.getElementById("album-name").innerText = value["albumName"];
        }
        if (value["albumImage"].toLowerCase() == albumImage.toLowerCase()) {
            document.getElementById("album-image").setAttribute('src', value["albumImage"]);
        } 
    })
        var trackList = document.getElementById("tracklist-parent"),
        h3 = document.createElement('h3'),
        clone;
        tracklist.forEach(function (value, index) {
            clone = h3.cloneNode();
            clone.textContent = value;
            trackList.appendChild(clone);
        })
}

function getU(albumName, albumImage, tracklist) {
    musicData.forEach(function(value, index) {
        if (value["albumName"].toLowerCase() == albumName.toLowerCase()) {
            document.getElementById("album-name").innerText = value["albumName"];
        }
        if (value["albumImage"].toLowerCase() == albumImage.toLowerCase()) {
            document.getElementById("album-image").setAttribute('src', value["albumImage"]);
        } 
    })
        var trackList = document.getElementById("tracklist-parent"),
        h3 = document.createElement('h3'),
        clone;
        tracklist.forEach(function (value, index) {
            clone = h3.cloneNode();
            clone.textContent = value;
            trackList.appendChild(clone);
        })
}



// Sources of guidance used 
// https://stackoverflow.com/questions/5886144/create-divs-from-array-elements
// https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2


