const fs = require('fs')
const path = require('path')

const appDir = path.resolve(__dirname, '../app')
const outputFile = path.resolve(__dirname, '../components.json')

try {
  const files = fs.readdirSync(appDir)

  const components = files
    .filter((file) => fs.lstatSync(path.join(appDir, file)).isFile())
    .filter((file) => !file.includes('_layout') && !file.includes('index') && !file.includes('html'))
    .map((file) => path.parse(file).name)

  fs.writeFileSync(outputFile, JSON.stringify(components, null, 2))
} catch (e) {
  console.log(e)
}
