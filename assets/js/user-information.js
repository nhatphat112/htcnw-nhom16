jQuery(document).ready(function(){
    data = localStorage.getItem("user-list")
    console.log(data)
    if(data!=null&&data!=null){
        dataObject = JSON.parse(data)
        console.log(dataObject)
    }
    body = jQuery("#body")
    count = 0
    dataObject.forEach(element => {
        count = count+1
        body.append(`  <tr>
            <td>${count}</td>
            <td>${element.fullName}</td>
            <td>${element.email}</td>
            <td>${element.password}</td>
        </tr>`)
    });
})