const inputCode=document.getElementById("code");
const resultPreview=document.getElementById("preview");
inputCode.addEventListener("input",
(e)=>{
    resultPreview.textContent="\\\("+inputCode.value+"\\\)";
    MathJax.typeset([resultPreview]);
});