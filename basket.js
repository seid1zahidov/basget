function getproducts(){
    let basket = JSON.parse(localStorage.getItem('basket'))
    
    let bos = ''



    basket.forEach(item => {
        bos += `
        <div id = "tel" class="box d-flex justify-content-evenly align-items-center">
            <div class="col-lg-2">
            <img src="${item.img}" alt="">
            </div>
            <div class="col-lg-3">
            <h5>Mehsulun${item.name} adi</h5>
            </div>
            <div class="col-lg 2 align-items-center">
            <h6>qiymet${item.price}</h6>
            <i class="fa-solid fa-trash-can w-75 text-end yx"></i>
            </div>
            <div class="col-lg-2">
            <span >count</span>
            </div>
         </div>
         
        `
        document.getElementById('listr').innerHTML = bos
        removeal()
    })
}
getproducts();

function clear(){
    let basket = JSON.parse(localStorage.getItem('basket'));
    basket.length = 0;
    localStorage.setItem('basket',JSON.stringify(basket));
    getproducts()
}

let btn = document.getElementById('btn')

function removeal(){
    let basket = JSON.parse(localStorage.getElementById('tel'))
    basket.remove()
}







