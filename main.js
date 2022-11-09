const inputCode=document.getElementById("code");
const resultPreview=document.getElementById("preview");
inputCode.addEventListener("input",
(e)=>{
    const result="\\("+inputCode.value+"\\)";
    resultPreview.textContent=result;
    MathJax.typeset([resultPreview]);
});
