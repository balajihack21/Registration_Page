let btn=document.getElementsByTagName("button")

btn[0].addEventListener("mouseover",(e)=>{
    e.target.style="padding:12px 26px;background-color:green;border:1px solid green;border-radius=10px"
})
btn[0].addEventListener("mouseout",(e)=>{
    e.target.style="padding:12px 24px;border-radius: 5px;background-color: #fd6228;border:1px solid #fd6228;"
})

btn[0].addEventListener("click",(e)=>{
    e.preventDefault()
    let form=e.target.parentNode
    let arr=form.children
    console.log(arr[1].value)
    console.log(arr[3].value)
    console.log(arr[5].value)
    console.log(arr[7].value)
    console.log(arr[8].value)
})