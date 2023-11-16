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
var imgList = document.querySelectorAll('#product')
var explore = document.querySelector('.explore-content')
var btnList = document.querySelectorAll('button')
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