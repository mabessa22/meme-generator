const imageFileInput = document.querySelector("#imageFileInput");
const topTextInput = document.querySelector("#topTextInput");
const bottomTextInput = document.querySelector("#bottomTextInput");
const canvas = document.querySelector("#meme");

let image;

imageFileInput.addEventListener("change", () =>{//whenever user pics a new image
    const imageDataUrl = URL.createObjectURL(imageFileInput.files[0]);//image represented in text

    image = new Image();
    image.src = imageDataUrl;

    image.addEventListener("load", () => {//actual loading of the picture
        updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);}, {once: true});
    });
    
    topTextInput.addEventListener("change", () => {//one can change the texts whenever
        updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
    });

    bottomTextInput.addEventListener("change", () => {//one can change the texts whenever
        updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
    });


function updateMemeCanvas(canvas, image, topText, bottomText){//main function
    const ctx = canvas.getContext("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width / 10);//font size calculation
    const yOffset = height/25; //the space between the top place in the image and the text apo juu

    
//update Canvas background, this is the area te picture will show
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0);
    
    //prepare text
    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(fontSize / 4);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";//display text in center of image
    ctx.lineJoin = "round";
    ctx.font = `${fontSize}px sans-serif`;//this is same as 15px

    //top text
    ctx.textBaseline = "top";
    ctx.strokeText(topText, width / 2, yOffset);// this will output but the text will be dark
    ctx.fillText(topText,width / 2, yOffset);//the white color which is the fill
    
    //bottom text
    ctx.textBaseline = "bottom";
    ctx.strokeText(bottomText, width / 2, height - yOffset);// this will output but the text will be dark
    ctx.fillText(bottomText,width / 2, height - yOffset);//the white color which is the fill
    
}