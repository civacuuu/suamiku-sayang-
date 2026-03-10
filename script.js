const message = [
"Suamiku...",
"Aku tau aku udah bikin kamu kecewa.",
"Aku benar-benar minta maaf atas semuanya.",
"Aku ga pernah ada niatan bikin kamu ngerasa kaya ini.",
"Kamu itu sangat berarti buat Aku.",
"Aku gak mau kehilangan kamu.🥺",
"Aku sayang kamu, Suamiku.🥺❤️",
"Kasih aku kesempatan yaa dan Aku janji akan berusaha memperbaiki semuanya, please trust me🥺."
]

let index = 0
let charIndex = 0

const text = document.getElementById("text")

function ketik(){

if(index < message.length){

if(charIndex < message[index].length){

text.innerHTML += message[index].charAt(charIndex)
charIndex++

setTimeout(ketik,50)

}else{

text.innerHTML += "<br><br>"
index++
charIndex = 0

setTimeout(ketik,1000)

}

}else{

document.getElementById("tombol").style.display="block"

}

}

ketik()

function maafin(){

document.getElementById("akhir").innerHTML =
"Terima kasih udah maafin aku ❤️ love u suamiku."

}

function belum(){

document.getElementById("akhir").innerHTML =
"Aku ngerti kalo kamu masih kecewa. Aku benar-benar minta maaf. Aku akan tetap menunggu sampai Kamu siap memaafkan. Aku sayang Kamu❤️"

}

function createHeart(){

const heart=document.createElement("div")

heart.classList.add("heart")
heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"vw"
heart.style.fontSize=Math.random()*20+10+"px"
heart.style.animationDuration=Math.random()*3+3+"s"

document.querySelector(".hearts").appendChild(heart)

setTimeout(()=>{
heart.remove()
},5000)

}

setInterval(createHeart,300)