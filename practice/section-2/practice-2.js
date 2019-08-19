'use strict';

function countSameElements(collection) {
  var result = [];
  var map = new Map();
  var v,c;
  for (var i=0;i<collection.length;i++){
    if(collection[i].length==1){
      if (map.get(collection[i])==null){
        map.set(collection[i],1);
      }else{
        map.set(collection[i],map.get(collection[i])+1);
      }
    }else{
      v=collection[i][0];
      c=Number(collection[i][2]);
      if (map.get(v)==null){
        map.set(v,c);
      }else{
        map.set(v,map.get(v)+c);
      }
    }
    
  }
  map.forEach(function(key,value){
    result.push({key:value,count:key})
  });
  return result; 
}
