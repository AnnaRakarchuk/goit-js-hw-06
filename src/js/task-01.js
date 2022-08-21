const categoriesEL = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEL.length);

categoriesEL.forEach(function(category){
    console.log("Category:", category.firstElementChild.textContent);
    console.log("Elements:", category.lastElementChild.children.length);
})