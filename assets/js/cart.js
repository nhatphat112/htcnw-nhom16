let soluong = localStorage.getItem("totalqty");
let arrCart = JSON.parse(localStorage.getItem("myCart"));
console.log(arrCart);
document.querySelector(".cartno").innerText = soluong;
let strHeader = `   <tr>
                        <th>Name</th>
                        <th>Picture</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                        <th><th>
                    </tr>`;
let strdata = "";
total = 0;
arrCart.forEach(item => {
    strdata += `<tr>
                    <td>
                        ${item.sp.tensp}
                    </td>
                    <td>
                        <img src="${item.sp.hinhsp[0]}" alt="" width="50px" height="50px">
                    </td>
                    <td>${item.sp.price}$</td>
                    <td>
                        <button>+</button>
                        <input type="number" value="${item.qty}" name="txtqty" id="txtqty" style="width: 40px; text-align: center;">
                        <button>-</button>
                    </td>
                    <td>${item.sp.price * item.qty}$</td>
                    <td>
                        <button id="delete" onclick="deletecart()">Delete</button>
                    </td>
                </tr>`
    total += item.sp.price * item.qty
});
let strfooter = `   <tr>
                        <td colspan="4" style="text-align: center">Total</td>
                        <td colspan="2" id="Total">

                        </td>
                    </tr>`
document.querySelector("#tbcart").innerHTML = strHeader + strdata + strfooter;
document.querySelector("#Total").innerHTML = total + "$";
