Webcam.set({
    width: 350,
    height: 300,
    image_quality: "png",
    png_quality: 100
});
Camera = document.getElementById("camera")
Webcam.attach(Camera)

function captureImage() {
    Webcam.snap(function (data_url) {
        document.getElementById("result").innerHTML = "<img id='newimg' src='" + data_url + "'>"
    });
}
console.log("ml5b version", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/31QjCuUdK/model.json", model_loaded)

function model_loaded() {
    console.log("model_loaded")
}

function identify_image() {
    img = document.getElementById("newimg")
    classifier.classify(img, getResult)
}

function getResult(error, result) {
    if (error) {
        console.log(error)
    }
    else{
        console.log(result)
        document.getElementById("object_name1").innerHTML=result[0].label
        document.getElementById("object_accuracy").innerHTML=result[0].confidence.toFixed(3)
    }
}
