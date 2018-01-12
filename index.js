var recipes = {cookies: 'heyo'}

function updateObjectWithKeyAndValue(object, key, value){
  object.assign({},object,{key:value})[key]=value
  return object
}

