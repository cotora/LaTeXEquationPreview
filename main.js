const inputCode=document.getElementById("code");
const resultPreview=document.getElementById("preview");
inputCode.addEventListener("input",
(e)=>{
    const result="\\("+inputCode.value+"\\)";
    console.log(result);
    resultPreview.textContent=result;
    MathJax.typeset([resultPreview]);
});