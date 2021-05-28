function clickbtn()
{
    var click=alert("username/password incorrect")
    if(click==true)
    {
        let buttonclear=document.querySelector('button');
        let input=document.querySelector('input');
        buttonclear.addEventListener('click', ()=>{
            input.forEach(input => input.value="");
        })
    }
    else{
        console.log("successfully logged in")
    }

}

function toggle(){
    var x=document.getElementById('pw');
    var y=document.getElementById('hide1');
    var z=document.getElementById('hide2');

    if (x.type==='password')
    {
        x.type="text";
        y.style.display="block";
        z.style.display="none";
    }
    else{
        x.type="password";
        y.style.display="none";
        z.style.display="block";
    }
}