var recipes = {cookies: 'heyo'}


function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{key:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object,key){
  object = Object.assign({},object)
  delete object.key
  return object
}



