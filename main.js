var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

loadImage()

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event)
{
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
}

function loadImage()
{
    images = ["https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?cs=srgb&dl=pexels-fox-225157.jpg&fm=jpg", "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/dslr-camera/desktop/DSLR_P1_900x420.jpg.img.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAntAj5LNymswse1qBSYqWFBiqF8Q4DvCe9A&usqp=CAU"]
    ImgDivList = []

    for(var i = 0; i < images.length; i++)
    {
        ImgDivList.push("<img class='img' src='" + images[i] + "'/><br><br>");
    }

    document.getElementById("images").innerHTML = ImgDivList;

}