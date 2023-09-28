var arr=[];
var cheak=document.getElementById('cheakForm');
console.log("hallo")

cheak.addEventListener('click',(e)=>{
  var cheak=false;
    for(let i=0;i<arr.length;i++){
        if (e.target.id == arr[i]) {
            cheak = true;
          }
    }
    
    if (cheak) {
        let number = arr.indexOf(e.target.id);
        document.getElementById('select').innerText=arr.length-1;
        arr.splice(number, 1);

        console.log(arr)
      }
     else{
        if(e.target.id ===''){
        
        }
        else{
            document.getElementById('select').innerText=arr.length+1;
            arr.push(e.target.id);

            console.log(arr)
        }
     }
})

document.getElementById('remove').addEventListener('click',(e)=>{
    
   
    if(arr.length===0){
        var toast = new bootstrap.Toast(document.getElementById('liveToast'));
        toast.show();
    }else{
        window.location.href=`/delete/?id=${arr}`
    }
})

document.getElementById('add').addEventListener('click',()=>{
    const desc= document.getElementById('floatingTextarea').value;
    const date=document.getElementById('floatingInputGrid').value;
     const catogery= document.getElementById('floatingSelectGrid').value;
   if(desc==="")
   {
      document.getElementById('warning').innerText="Your Description Field Empty";
      var toast = new bootstrap.Toast(document.getElementById('liveToast1'));
        toast.show();
   }
   else if(date===""){
    document.getElementById('warning').innerText="Please Select Date ";
    var toast = new bootstrap.Toast(document.getElementById('liveToast1'));
      toast.show();
   }
   else if(catogery==="Choose a Catogery"){
    document.getElementById('warning').innerText="Choose Catogery";
    var toast = new bootstrap.Toast(document.getElementById('liveToast1'));
      toast.show();
   }else if(((desc!="") && (date!="")) && catogery!="Choose a Catogery"){
    alert("done")
    var toast = new bootstrap.Toast(document.getElementById('liveToast2'));
    toast.show();
   }
})

document.getElementsByClassName('ed').addEventListener('click',(e)=>{
  alert("hallo")
   document.getElementById('todoTitle').innerText='UPDATE TODO'
})
