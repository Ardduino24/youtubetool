// YouTube URL video ID parser

function ExtractYouTubeVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

function RenderYoutubeVid(VideoId)
{
  document.getElementById("SearchVideo").style.display = "none";
  document.getElementById("container").style.display = "block";
    const frame = document.getElementById('vid-container');
    frame.setAttribute("width", "700");
    frame.setAttribute("height", "500");
    frame.setAttribute("loading", "lazy");
    frame.setAttribute("scrolling", "no");
    frame.setAttribute("fetchpriority", "high");
    frame.setAttribute("allowfullscreen", "true");
    frame.setAttribute("referrerpolicy", "no-referrer");
    frame.setAttribute("sandbox", "allow-scripts allow-same-origin");

    const url = new URL("https://www.youtube-nocookie.com/embed/" + VideoId);
    url.searchParams.set("autoplay", "1");
    url.searchParams.set("controls", "1");
    url.searchParams.set("rel", "0");
    url.searchParams.set("color", "blue");
    frame.setAttribute("src", url.href);


}

function Search()
{
    let iD = ExtractYouTubeVideoId(document.getElementById("search").value)

    if (iD) {
        RenderYoutubeVid(iD);
    } else
    {
        alert("Invalid YouTube video link! Please find a valid YouTube video link!");
    }
}
