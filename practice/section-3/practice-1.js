'use strict';

function createUpdatedCollection(collectionA, objectB) {
  
  
  var  collectionB = objectB.value;
  for (var i = 0;i < collectionA.length;i++)
  {

    for (var j = 0;j<collectionB.length;j++)
    {
      if (collectionA[i].key == collectionB[j])
      {
        collectionA[i].count --;
      }
    }
  }
  return collectionA;
}
