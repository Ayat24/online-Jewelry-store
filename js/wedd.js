
var weddingRow=document.querySelector('.weddingRow');
// ! Api
import { data } from "./data.js";
console.log(data);

function displyWeddingData(){
    var container2='';
    for(var i=0;i<data.wedding_rings.length;i++){
        container2 +=`
           <div class="col-lg-3 col-md-6">
                    <div class="card  mb-4 px-2 pb-2 text-center">
                        <img src="${data.wedding_rings[i].image_url}" class="card-img-top w-25 mt-3 mx-auto" alt="...">
                        <div class="card-body">
                            <p class="card-text">${data.wedding_rings[i].name}</p>
                            <h6 class="card-price">$ ${data.wedding_rings[i].price}</h6>
                            <a href="#" class="btn">Add To Cart</a>
                        </div>
                    </div>
                 </div>
        
        `
    }
    weddingRow.innerHTML=container2;
}
displyWeddingData();