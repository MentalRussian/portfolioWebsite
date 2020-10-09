const page = document.querySelectorAll('.page')
const links  = document.querySelectorAll('a') 


console.log(links)


for (let i = 0; i < page.length; i++) {
    page[i].addEventListener("mouseenter", function() {
        var id = page[i].id;
        id.toLowerCase();
        var navlink=document.getElementById(id.toLowerCase());     
        navlink.classList.add("active")

    });
}

for (let i = 0; i < page.length; i++) {
    page[i].addEventListener("mouseleave", function() {
        var id = page[i].id;
        var navlink=document.getElementById(id.toLowerCase());   
        navlink.classList.remove("active")
    });
}