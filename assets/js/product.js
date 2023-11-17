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
    {masp:"SP0001",typesp:"keyboard", tensp:"Keyboard DareU EK87 490", hinhsp:["assets/images/explore/ek87-1.jpg",
    "assets/images/explore/ek87-4.jpg","assets/images/explore/ek87-3.jpg"], price:"47", mota:"EK87 Gaming Keyboard already have Keys Combination Function that can be activated by pressing FN key. You can change the modes of rainbow lighting, turn on or turn off the rainbow lighting, speed up or down, and many more function."},
    {masp:"SP0002",typesp:"loudspeaker", tensp:"Pioneer DJ DM 50D W-White", hinhsp:["assets/images/explore/e2-Pioneer-DJ-DM-50D-W-White-7630.jpg","assets/images/explore/dj-w-white-1.jpg",
    "assets/images/explore/dj-w-white-2.jpg"], price:"400", mota:"DJs looking for a pair of studio speakers will be thrilled with the white Pioneer DJ DM-50D, a pair of high-quality studio monitors with DSP that include a DJ/Production switch, providing two distinct performance articulations for their respective applications—all from a single set of speakers."},
    {masp:"SP0003",typesp:"mic", tensp:"IMMERSE GV60 STREAMING MIC", hinhsp:["assets/images/explore/e3-IMMERSE-GV60-STREAMING-MIC.png",
    "assets/images/explore/mic-2.png","assets/images/explore/mic-3.png"], price:"600", mota:"GV60 sets itself apart from other streaming microphones by incorporating all the core features streamers and content creators want: high-resolution sample rate, versatile pickup patterns, real-time monitoring, and plug & play for ease of use."},
    {masp:"SP0004",typesp:"mouse", tensp:"Pauroty Gaming Mouse RGB Wired", hinhsp:["assets/images/explore/mouse-1.jpg",
    "assets/images/explore/mouse-3.jpg","assets/images/explore/mouse-2.jpg"], price:"25", mota:"Help you reduce hand fatigue during long gaming sessions. The matte texture is delicate, sweat-proof, and dust-proof, especially suitable for professional computer gamers. 🔮【Customizable RGB Backlight】The bottom light button of the wired gaming mouse enables you to quickly switch among 7 lighting modes."},
    {masp:"SP0005",typesp:"loudspeaker", tensp:"KRK Rokit 7 g4", hinhsp:["assets/images/explore/krk-1.jpg","assets/images/explore/krk-2.jpg",
    "assets/images/explore/krk-3.jpg"], price:"700", mota:"The ROKIT 7 G4 was built from high-grade materials, and it shows. The extreme rigidity and impressive tensile strength-to-weight ratio of its Kevlar drivers ensure low-distortion sound reproduction across the entire frequency range. Its enclosure minimizes unwanted resonance, giving you spot-on low-end performance."},
    {masp:"SP0006",typesp:"loudspeaker", tensp:"Edfifier W820NB White Bluetooth", hinhsp:["./assets/images/explore/tainghe-1.jpg",
    "./assets/images/explore/tainghe-3.jpg","./assets/images/explore/tainghe-2.jpg"], price:"1000", mota:"The W820NB headphones have hybrid ANC technology that reduces noise by up to 38dB. This amplifies your music listening experience while cutting out unwanted noise."},
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