// var imgList = document.querySelectorAll('img')
// var explore = document.querySelector('.explore-content')
// var btnList = document.querySelectorAll('button')

// var arr = []
// imgList.forEach(item=>{
// 	arr.push({
// 		src: item.src,
// 		type: item.getAttribute('type')
// 	})
// })

// btnList.forEach(btn=>{
// 	btn.addEventListener('click',e=>{
// 		let type = e.currentTarget.getAttribute('type')
// 		let filterData = arr.filter(food=>{
// 			return food.type == type
// 		})

// 		render(filterData)
// 	})
// })

// function render(list){
// 	explore.innerHTML = ''
// 	list.forEach(item=>{
// 		let imgElement = document.createElement('img')
// 		imgElement.src = item.src
// 		imgElement.setAttribute('type', item.type)
//         let divElement = document.createElement('div')
//         let div1Element = document.createElement('div')
//         let div2Element = document.createElement('div')
//         let div3Element = document.createElement('div')
//         divElement.classList.add('.single-explore-img')
//         div1Element.classList.add('.single-explore-item')
//         div2Element.classList.add('.col-md-4')
//         div3Element.classList.add('.row')

//         divElement.append(imgElement)
//         div1Element.append(divElement)
//         div2Element.append(div1Element)
//         div3Element.append(div2Element)
// 		explore.append(div3Element)
// 	})
// }

//shopping
// let sp = {masp:"SP0001", tensp:"Keyboard DareU EK87 490", hinhsp:"assets/images/explore/e2-Pioneer-DJ-DM-50D-W-White-7630.jpg", price:"400"}

const arrSP = [
    {masp:"SP0001",typesp:"keyboard", tensp:"Keyboard DareU EK87 490", hinhsp:["assets/images/explore/key-board-DareU-EK87-490.jpeg",
    "assets/images/explore/e3-IMMERSE-GV60-STREAMING-MIC.png","assets/images/explore/key-board-DareU-EK87-490.jpeg"], price:"47"},
    {masp:"SP0002",typesp:"loudspeaker", tensp:"Pioneer DJ DM 50D W-White", hinhsp:["assets/images/explore/e2-Pioneer-DJ-DM-50D-W-White-7630.jpg","assets/images/explore/e2-Pioneer-DJ-DM-50D-W-White-7630.jpg",
    "assets/images/explore/e2-Pioneer-DJ-DM-50D-W-White-7630.jpg"], price:"400"},
    {masp:"SP0003",typesp:"mic", tensp:"IMMERSE GV60 STREAMING MIC", hinhsp:["assets/images/explore/e3-IMMERSE-GV60-STREAMING-MIC.png",
    "assets/images/explore/e3-IMMERSE-GV60-STREAMING-MIC.png","assets/images/explore/e3-IMMERSE-GV60-STREAMING-MIC.png"], price:"600"},
    {masp:"SP0004",typesp:"mouse", tensp:"Pauroty Gaming Mouse RGB Wired Ergonomic", hinhsp:["assets/images/explore/e4-Pauroty-Gaming-Mouse-RGB-Wired-Ergonomic.jpg",
    "assets/images/explore/e4-Pauroty-Gaming-Mouse-RGB-Wired-Ergonomic.jpg","assets/images/explore/e4-Pauroty-Gaming-Mouse-RGB-Wired-Ergonomic.jpg"], price:"25"},
    {masp:"SP0005",typesp:"loudspeaker", tensp:"KRK Rokit 7 g4", hinhsp:["assets/images/explore/krk.png","assets/images/explore/krk.png",
    "assets/images/explore/krk.png"], price:"700"},
    {masp:"SP0006",typesp:"loudspeaker", tensp:"Edfifier W820NB White Bluetooth", hinhsp:["./assets/images/explore/e6-Edfifier-W820NB-White-Bluetooth.jpg",
    "./assets/images/explore/e6-Edfifier-W820NB-White-Bluetooth.jpg","./assets/images/explore/e6-Edfifier-W820NB-White-Bluetooth.jpg"], price:"1000"},
];

var str = "";
for (let i = 0; i < arrSP.length; i++){
    var obj = JSON.stringify(arrSP[i]);
    str += `
    <div class="col-md-4 col-sm-6" id="product" type="${arrSP[i].typesp}">
        <div class="single-explore-item">
            <div class="single-explore-img">
                <img src="${arrSP[i].hinhsp[0]}" type="${arrSP[i].typesp}" height="25" alt="explore image">
                <div class="single-explore-img-info">
                    <button onclick="window.location.href='#'">best rated</button>
                    <div class="single-explore-image-icon-box">
                        <ul>
                            <li>
                                <div class="single-explore-image-icon">
                                    <i class="fa fa-arrows-alt"></i>
                                </div>
                            </li>
                            <li>
                                <div class="single-explore-image-icon">
                                    <i class="fa fa-bookmark-o"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="single-explore-txt bg-theme-1">
                <h2><a href="#">${arrSP[i].tensp}</a></h2>
                <p class="explore-rating-price">
                    <span class="explore-price-box">
                        Price
                        <span class="explore-price">${arrSP[i].price}$</span>
                    </span>
                        <a href="#">Keyboard</a>
                </p>
                <div class="explore-open-close-part">
                    <div class="row">
                        <div class="col-sm-9">
                            <button onclick=\'addCart(\`${obj}\`)\'>Add Cart</button>
                            <button onclick=\'showdetail(\`${obj}\`)\'>Detail</button>
                        </div>
                        <div class="col-sm-3">
                            <div class="explore-map-icon">
                                <a href="#"><i data-feather="heart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

let soluong = localStorage.getItem("totalqty");
if(soluong == null){
    soluong = 0;
}
document.querySelector(".cartno").innerText = soluong;
let arrCart = localStorage.getItem("myCart");
if(arrCart == null){
    arrCart = [];
}else{
    arrCart = JSON.parse(localStorage.getItem("myCart"));
}
console.log(arrCart);

function addCart(objSP){
    console.log(objSP);
    objSP = JSON.parse(objSP);
    var item;
    var qtyitem = 0;
    var flag = false;
    console.log("current"+ objSP.masp);
    for (let i = 0; i < arrCart.length; i++){
        if(arrCart[i].sp.masp == objSP.masp){
            console.log("spi"+ arrCart[i].sp.masp);
            arrCart[i].qty ++;
            var flag = true;
            break;
        }
    }
    if(flag == false){
        let cartitem = {sp: objSP, qty:1};
        arrCart.push(cartitem);
    }

    soluong++;
    document.querySelector(".cartno").innerText = soluong;
    localStorage.setItem("totalqty", soluong + "");
    localStorage.setItem("myCart", JSON.stringify(arrCart))
}
function directCart(){
    location.href = "cart.html";
}


function showdetail(objSP){
    console.log(objSP);
    window.localStorage.setItem("sanpham", objSP)
    location.href = "detail.html";
}

//hiển thị list product in menu
document.querySelector('.explore-content').innerHTML = str;


//Lọc sản phẩm
var imgList = document.querySelectorAll('#product')
var explore = document.querySelector('.explore-content')
var btnList = document.querySelectorAll('#button_cat')
function activeButton(btnActive){
    btnList.forEach(btn=>{
        btn.classList.remove('active')
    })
    btnActive.classList.add('active')
}

btnList.forEach(btn=>{
    btn.addEventListener('click', e=>{
        activeButton(e.currentTarget)
        let type = e.currentTarget.getAttribute('type')
        imgList.forEach(img=>{
            let foodType = img.getAttribute('type')
            if(type == 'all' || foodType == type){
                img.classList.remove('hide')
            }else{
                img.classList.add('hide')
            }
        })
    })
})