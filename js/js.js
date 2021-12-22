btn.addEventListener("click", function getAnswer (){
    if (f2.checked){
        right.classList.remove("hdn");
        wrong.classList.add("hdn");
    }else{
        right.classList.add("hdn");
        wrong.classList.remove("hdn");
    }

})