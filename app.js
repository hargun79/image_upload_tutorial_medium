window.onload = function(e){
 var divimg=document.getElementById('image');
 fetch(`http://localhost:3000`)
    .then(res => res.json())
    .then(data =>{
    	for(let i=0;i<data.items.length;i++){
    	divimg.innerHTML+=`<img src="${data.items[i].img}" style="width: 100%; height: 635px;">`
     }
    }).catch((e)=>console.log(e))
}

const addPhoto=(e)=>{
e.preventDefault()
const input = document.getElementById('fileinput');
console.log(input.files[0]);
var formData = new FormData()
formData.append('image', input.files[0])
fetch('http://localhost:3000', {
  method: 'POST',
  body: formData
}).then(res => res.json())
.then(data => {
  alert("Picture uploaded successfully");
  window.location.reload();
})
.catch((e)=>console.log(e))
}

document.getElementById('upload_form').addEventListener('submit',addPhoto)