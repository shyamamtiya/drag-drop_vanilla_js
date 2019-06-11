// var list1,list2;
// function addToList2(){
//   list1=document.querySelectorAll('#list1 li');
//   if(list1){
//     for(let i=0;i<list1.length;i++){
//       list2=document.querySelector('#list2').append(list1[i]);
//     }
    
//   }
// }
// function addToList1(){
//   list2=document.querySelectorAll('#list2 li');
//   if(list2){
//     for(let i=0;i<list2.length;i++){
//     list1=document.querySelector('#list1').appendChild(list2[i]);
//   }
// } 
// }
// function addOneElementToList2(){
//   list1=document.querySelector('#list1 li');
//   if(list1){
//       list2=document.querySelector('#list2').append(list1);
//   }
// }
// function addOneElementToList1(){
//   list2=document.querySelector('#list2 li');
//   if(list2){
//     list1=document.querySelector('#list1').appendChild(list2);
// } 
// }

function drag(ev) {
  ev.target.style.border='3px dashed #ebebeb';
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if(ev.target.id ==='list1' || ev.target.id ==='list2'){
    ev.target.append(document.getElementById(data))
  }
  else{
    ev.target.insertAdjacentElement('afterend',document.getElementById(data))
  }
 
}
function allowDrop(ev) {
  ev.preventDefault();
}

function dragEnd(ev){
  ev.preventDefault();
  ev.target.style.border='1px solid #bebebe';
}