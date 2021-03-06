const fs = require('fs')//
const path = require('path')
const PUBLIC_PATH = path.resolve(__dirname,'../../docs')
console.log(PUBLIC_PATH)

function autoSideBar2(path) {
  var strRegex = "(.md)$"
  var re= new RegExp(strRegex)
  var time = []
  var childMap = []


  let children = []
  let t_path = PUBLIC_PATH + path
  fs.readdirSync(t_path).forEach((file) => { 
    if(file !== 'README.md'){
      childMap.push({
        child: file.replace(re,""),
        time: fs.statSync(t_path+file).birthtimeMs
      })
    }
  })
  childMap.sort((a, b) => {
    return parseInt(b.time) -parseInt(a.time)
  })
  childMap.forEach((item) => {
    children.push(item.child)
  })
  
  return children
}

module.exports = autoSideBar2