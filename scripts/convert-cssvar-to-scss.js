/*
 * @Author: weisheng
 * @Date: 2025-11-18 16:23:25
 * @LastEditTime: 2025-11-24 16:25:03
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: /wot-design-uni/scripts/convert-cssvar-to-scss.js
 * 记得注释
 */
const fs = require('fs')
const path = require('path')

const componentsBasePath = path.join(__dirname, '../src/uni_modules/wot-design-uni/components')

function parseCssVarFile(filePath, shortName) {
  if (!fs.existsSync(filePath)) return new Map()
  const content = fs.readFileSync(filePath, 'utf8')
  const rootMatch = content.match(/:root\s*\{([\s\S]*?)\}/)
  if (!rootMatch) return new Map()
  const block = rootMatch[1]
  const regex = /--([a-zA-Z0-9-]+):\s*([^;]+);/g
  const variables = new Map()
  let m
  while ((m = regex.exec(block)) !== null) {
    const name = m[1].trim()
    const value = m[2].trim()
    if (name.startsWith(`${shortName}-`)) variables.set(name, value)
  }
  return variables
}

function toScssLine(varName, value) {
  const wotName = `--wot-${varName}`
  let fallback = value
  const ref = value.match(/^var\(--([a-zA-Z0-9-]+)\)$/)
  if (ref) fallback = `$${ref[1]}`
  return `$${varName}: var(${wotName}, ${fallback}) !default;`
}

function generateScss(variables) {
  const items = Array.from(variables.entries())
  const categories = {
    颜色变量: [],
    尺寸变量: [],
    字体变量: [],
    间距变量: [],
    圆角变量: [],
    其他变量: []
  }

  for (const [name] of items) {
    const n = name.toLowerCase()
    if (n.includes('color') || n.includes('bg') || n.includes('background')) {
      categories['颜色变量'].push(name)
    } else if (n.includes('size') || n.includes('width') || n.includes('height')) {
      categories['尺寸变量'].push(name)
    } else if (n.includes('fs') || n.includes('font') || n.includes('text')) {
      categories['字体变量'].push(name)
    } else if (n.includes('padding') || n.includes('margin') || n.includes('spacing')) {
      categories['间距变量'].push(name)
    } else if (n.includes('radius') || n.includes('border-radius')) {
      categories['圆角变量'].push(name)
    } else {
      categories['其他变量'].push(name)
    }
  }

  let out = ''
  for (const [cat, names] of Object.entries(categories)) {
    if (!names.length) continue
    out += `/* ${cat} */\n`
    for (const name of names) {
      const value = variables.get(name)
      out += toScssLine(name, value) + '\n'
    }
    out += '\n'
  }
  return out
}

function processComponent(componentName, outputPath) {
  const cssVarPath = path.join(componentsBasePath, componentName, 'cssVar.css')
  const shortName = componentName.replace(/^wd-/, '')
  const vars = parseCssVarFile(cssVarPath, shortName)
  if (vars.size === 0) {
    console.log(`⚠️ 未找到变量: ${cssVarPath}`)
    return
  }
  let scss = ''
  scss += '/* ================================ 组件SCSS变量 ================================ */\n'
  scss += `/* ${componentName} 组件变量，由 convert-cssvar-to-scss.js 自动生成 */\n\n`
  scss += generateScss(vars)
  fs.writeFileSync(outputPath, scss, 'utf8')
  console.log('✅ 已生成', outputPath)
}

function main() {
  const args = process.argv.slice(2)
  if (args.length === 0) {
    console.log('用法: node scripts/convert-cssvar-to-scss.js <component> [output-file]')
    return
  }
  const componentName = args[0]
  const defaultOut = path.join(componentsBasePath, componentName, 'variable.scss')
  const outputPath = args[1] || defaultOut
  processComponent(componentName, outputPath)
}

if (require.main === module) main()
