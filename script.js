async function pickApod(){
  const tglApod = document.getElementById('inputDate').value;
  const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${tglApod}&api_key=WehyEeAgq0dFN6woC4J4XCay9CSYzseGLW1Zu4Xu`,{method:'GET'})
	.then(response => response.json())
  .then((data)=>{
    document.getElementById('imgApod').src=data.hdurl;
    document.getElementById('aut').innerHTML=data.copyright;
    document.getElementById('dateApod').innerHTML=data.date
    document.getElementById('explain').innerHTML=data.explanation;
  })
	.catch(err => console.error(err));
}