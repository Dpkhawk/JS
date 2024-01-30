const divTag=document.getElementById("divTag")
divTag.addEventListener("click",displayTag);
function displayTag(e) {
    alert("Clicked on div");
    console.log(e.currentTarget.tagName);
}