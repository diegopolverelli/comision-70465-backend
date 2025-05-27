const form = document.getElementById('registerForm');

// form.addEventListener('submit',evt=>{
//     evt.preventDefault();
//     const data = new FormData(form);
//     const obj = {}
//     data.forEach((value, key)=> obj[key]=value);
//     fetch('/api/sessions/register',{
//         method:'POST',
//         body:JSON.stringify(obj),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     }).then(result=>result.json()).then(json=>{
//         Swal.fire({
//             icon:"success",
//             text:"Usuario registrado :)"
//         })
//     }).catch(error=>console.log(error))
// })


form.addEventListener('submit',evt=>{
    // let error=false
    evt.preventDefault();
    const data = new FormData(form);
    const obj = {}
    data.forEach((value, key)=> obj[key]=value);
    fetch('/api/sessions/register',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(result=>{
        console.log(result.status)
        if(result.status>=400){
            error=true
            alert(`Error... ${result.statusText} :(`)
            throw new Error(result.statusText)
        }
        return result.json()
    }).then(json=>{
        Swal.fire({
            icon:"success",
            text:"Usuario registrado :)"
        })
    }).catch(error=>console.log(error))
})