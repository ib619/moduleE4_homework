function checkField(str, obj){
    return str in obj
}

let test_obj = {
    field: 404
}

console.log(checkField("field", test_obj))