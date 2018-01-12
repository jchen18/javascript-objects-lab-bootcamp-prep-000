var recipes = {cookies: 'heyo'}


function updateObjectWithKeyAndValue(object, key, value){
  object2 = {}
  Object.assign({},object,{key:value})
  object2 = object 
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object,key){
  var object2 = Object.assign({},object)
  return delete object2.key
}

function destructivelyDeleteFromObjectByKey(object, key){
  return delete object.key
}




