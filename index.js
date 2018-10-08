const fs = require('fs')
const path = require('path')

module.exports = (bundler)  => {
    const options = bundler.options
    const {outDir, rootDir} = options
    const {name , version} = require(`${rootDir}/package.json`)
    const manifestPath = path.join(outDir, "manifest.json")
    const manifest = {
        manifest_version: 2,
        name,
        version
    }
    fs.writeFileSync(manifestPath, JSON.stringify(manifest))
}
