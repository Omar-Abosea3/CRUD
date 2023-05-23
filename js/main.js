// CRUD =>
// Create=>new product.
// Read
// Update
// Delete
// Search => de e7na lazem nedefhom ma3aha




// Create
var productName=document.getElementById('pn');
var productPrice=document.getElementById('pp');
var productCategory=document.getElementById('pc');
var productDesc=document.getElementById('pd');
var addBtn=document.getElementById('addBtn');
var mainIndex=0;

var allBroducts=[];
// function=>single responsebility => ya3ne mas2olah 3an 3amaleyah wa7dah bass.
if(localStorage.getItem("allBroducts")!=null){
    allBroducts=JSON.parse(localStorage.getItem("allBroducts"));
    displayAllProducts();
}
var product;
function addNewElement(){
     product={
      name:productName.value,
      price:productPrice.value,
      category:productCategory.value,
      desc:productDesc.value,
  }
  if(addBtn.innerHTML=="Add"){
    if(product.name != '' && product.price != '' && product.category != '' && product.desc != ''){
        allBroducts.push(product);
        clearProduct();
    }else{
        alert("Please fill all fields");
    }
    }else{
    if(product.name != '' && product.price != '' && product.category != '' && product.desc != ''){
        allBroducts.splice(mainIndex,1,product);
        clearProduct();
        resetAdd();
    }else{
        alert("Please fill all fields");
    }
  }
  localStorage.setItem("allBroducts",JSON.stringify(allBroducts));
  console.log(allBroducts);
// clearing after adding new object to array.
  displayAllProducts();
}
// clearing form
function clearProduct(){

// any property(may be attribute in html) => ba2der a3mel feha get value and set value.
    productName.value="";
    productPrice.value="";
    productCategory.value="";
    productDesc.value="";
}

// Read
function displayAllProducts(){
    // => ba3meloh 3alashan a5azen feh 2emet el innerHTML we azwed el gedeed 3aleha kol marah.
    // lazem a3aref el variable elly hay5azen el data elly hada5alha gowa el function 3alashan maykararsh el mo7tawayat beta3et el kartonah we kol marah yedef el gedeed bas mayerga3sh yegeeb el 2eyam koleha men el awel. 
    var cartoona="";
    for (let i = 0; i < allBroducts.length; i++) {
        cartoona+=`<tr class='overflow-x-scroll'>
        <td>${[i]}</td>
        <td>${allBroducts[i].name}</td>
        <td>${allBroducts[i].price}</td>
        <td>${allBroducts[i].category}</td>
        <td>${allBroducts[i].desc}</td>
        <td><button onclick="deleteBroduct(${i})" class="btn btn-outline-danger">Delete</button></td>
        <td><button onclick="updateProduct(${i})" class="btn btn-outline-warning">update</button></td>
    </tr>`
    }
    document.getElementById('table').innerHTML=cartoona;
}
// Delete
function deleteBroduct(index){
    allBroducts.splice(index,1);
    localStorage.setItem("allBroducts",JSON.stringify(allBroducts));
    displayAllProducts();

}
// Update
function updateProduct(index){
    mainIndex=index;
    addBtn.innerHTML="ubdate";
    productName.value=allBroducts[index].name;
    productPrice.value=allBroducts[index].price;
    productCategory.value=allBroducts[index].category;
    productDesc.value=allBroducts[index].desc;
}
// resetAdd
function resetAdd(){
    addBtn.innerHTML="Add";
}

// search
function searchBar(term){
    var cartoona="";
    for(var i=0;i<allBroducts.length;i++){
        if(allBroducts[i].name.toLowerCase().includes(term.toLowerCase())){
                cartoona+=`<tr>
                <td>${[i]}</td>
                <td>${allBroducts[i].name}</td>
                <td>${allBroducts[i].price}</td>
                <td>${allBroducts[i].category}</td>
                <td>${allBroducts[i].desc}</td>
                <td><button onclick="deleteBroduct(${i})" class="btn btn-outline-danger">Delete</button></td>
                <td><button onclick="updateProduct(${i})" class="btn btn-outline-warning">update</button></td>
            </tr>`
        }
    }
    document.getElementById('table').innerHTML=cartoona;
}
