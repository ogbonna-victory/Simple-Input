const btn =document.getElementById ("btn");
const p =document.getElementById ("text");
const input =document.getElementById ("input-text");

p.innerHTML=localStorage.getItem("value");
btn.addEventListener("click",(e) => {
    localStorage.setItem ("value", input.value);
    p.innerHTML=input.value
    p.innerHTML=localStorage.getItem("value");
})