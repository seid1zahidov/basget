if(localStorage.getItem('basket') === null){
    localStorage.setItem('basket',JSON.stringify([]))
}

let button = document.querySelectorAll('.btn_add')

for(let btn of button){
    btn.addEventListener('click',function(e){
        e.preventDefault();
        let basket  = JSON.parse(localStorage.getItem('basket'));
        let prod_id = e.target.parentElement.parentElement.id;
        let prod_img = e.target.parentElement.previousElementSibling.src;
        let prod_name = e.target.parentElement.children[0].innerHTML;
        let prod_price = e.target.previousElementSibling.innerHTML;
        console.log(prod_id);
        console.log(prod_img);
        console.log(prod_name);
        console.log(prod_price);


        let exitprod = basket.find(x => x.id == prod_id)
        if(exitprod == undefined){
            basket.push({
                id:prod_id,
                img: prod_img,
                name: prod_name,
                price: prod_price
            })
        }
        else{
            exitprod.Count += 1;
        }


        localStorage.setItem('basket',JSON.stringify(basket))
        countprodunt()
    })
}

function countprodunt(){
    let basget = JSON.parse(localStorage.getItem('basket'))
    document.getElementById('count').innerHTML = basget.length
}
countprodunt()