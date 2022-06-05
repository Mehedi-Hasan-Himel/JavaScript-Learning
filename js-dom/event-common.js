// Using Function.
function handleJustFunctionClick() {
  const clickingMethod = document.getElementById("clicking-method");
  clickingMethod.innerText = "Set bu using function";
}

// Direct.
document.getElementById("handle-event").addEventListener('click',function(){
   const p = document.getElementById('clicking-method');
    p.innerText = 'set by direct add event listener'
});



