// const select=document.querySelectorAll('.currency');
// let btn=document.getElementById('btn')
// let input=document.getElementById('input')
// fetch(`https://api.frankfurter.app/currencies`)
// .then(res=>res.json())
// .then(dis=>displayResult(dis))

// function displayResult(dis)
// {
//     let curr=Object.entries(dis)
//     for(let i=1;i<curr.length;i++)
//     {
//         let opt=`<option value=${curr[i][0]}>${curr[i][0]}</option>`
//         select[0].innerHTML+=opt;
//         select[1].innerHTML+=opt;
//     }
// }
// btn.addEventListener('click',()=>
// {
//     let curr1=select[0].value
//     let curr2=select[1].value;
//     let inp=input.value;
//     if(curr1==curr2)
//     alert("enter different currencies");
// else
// convert(curr1,curr2,inp);
// })
// function convert(curr1,curr2,inp)
// {
//     const host=`api.frankfurter.app`;
//     fetch(`https://${host}/latest?amount=${inp}&from=${curr1}&to=${curr2}`)
//     .then(res=>res.json())
//     .then(data=>
//         document.getElementById('result').value=Object.values(data.rates)[0])
// }
const select=document.querySelectorAll('.currency')
let btn=document.getElementById('btn')
let input=document.getElementById('input')
fetch(`https://api.frankfurter.app/currencies`)
.then(res=>res.json())
.then(dis=>display(dis))

function display(dis)
{
    let curr=Object.entries(dis);
    for(let i=1;i<curr.length;i++)
    {
        let opt=`<option value=${curr[i][0]}>${curr[i][0]}</option>`
        select[0].innerHTML+=opt;
        select[1].innerHTML+=opt;
    }
}
btn.addEventListener('click',()=>
{
    let curr1=select[0].value;
    let curr2=select[1].value;
    let inp=input.value;
    if(curr1==curr2)
    alert("enter different currencies")
else
convert(curr1,curr2,inp);
})
function convert(curr1,curr2,inp)
{
    const host=`api.frankfurter.app`;
    fetch(`https://${host}/latest?amount=${inp}&from=${curr1}&to=${curr2}`)
    .then(res=>res.json())
    .then(data=>document.getElementById('result').value=Object.values(data.rates)[0])
}