// Fonctionnalité 1
document.getElementsByTagName("footer")[0].addEventListener("click", function() {
	console.log("Clique !");
});

// Fonctionnalité 1-bis
let index = 0;
document.getElementsByTagName("footer")[0].addEventListener("click", function() {
	console.log(`Clique numero ${index}`);
	index++;
});

// Fonctionnalité 2

let hamburger = document.getElementById("navbarHeader");
hamburger.classList.toggle("collapse", false);


// Fonctionnalité 3
document.querySelectorAll('.card-body  > .d-flex > .btn-group > .btn-outline-secondary').forEach((btn)=>{
    btn.addEventListener('click', function(){
        this.classList.add('btn-danger')
    })
});

// Fonctionnalité 4
document.querySelectorAll('.card-body  > .d-flex > .btn-group > .btn-outline-secondary')[1].addEventListener('click', function(){
    this.classList.toggle('btn-success')
    this.classList.remove('btn-danger')
    console.log(this);
})

// Fonctionnalité 5
document.querySelector(".navbar").addEventListener('dblclick', function(){
    document.getElementsByTagName('link')[0].href = '';
})