const fs = require('fs')
const path = require('path')

// 组件目录路径
const componentsBasePath = '/Users/xqk/FE/wot-design-uni/src/uni_modules/wot-design-uni/components'

/**
 * 解析组件variable.scss文件，提取CSS变量定义
 * @param {string} filePath - variable.scss文件路径
 * @returns {Map} 变量映射表
 */
function parseComponentVariables(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  文件不存在: ${filePath}`)
    return new Map()
  }

  const content = fs.readFileSync(filePath, 'utf8')
  const variables = new Map()

  // 匹配CSS变量定义：--wot-component-variable: value; 或 --wot-component-variable: var(--wot-other-variable);
  const regex = /--wot-(\w+(?:-\w+)*):\s*([^;]+);/g
  let match

  while ((match = regex.exec(content)) !== null) {
    const varName = match[1]
    const value = match[2].trim()
    variables.set(varName, value)
  }

  return variables
}

/**
 * 生成组件SCSS变量声明
 * @param {string} componentName - 组件名称
 * @param {Map} variables - 变量映射表
 * @returns {string} SCSS内容
 */
function generateComponentScssVariables(componentName, variables) {
  if (variables.size === 0) {
    return ''
  }

  let scssContent = ''

  // 添加组件头部注释
  scssContent += `/* ================================ ${componentName.toUpperCase()} 组件变量 ================================ */\n\n`

  // 按变量类型分类
  const categories = {
    颜色变量: [],
    尺寸变量: [],
    字体变量: [],
    间距变量: [],
    圆角变量: [],
    其他变量: []
  }

  // 分类变量
  for (const [varName] of variables) {
    const lowerVarName = varName.toLowerCase()
    if (lowerVarName.includes('color') || lowerVarName.includes('bg') || lowerVarName.includes('background')) {
      categories['颜色变量'].push(varName)
    } else if (lowerVarName.includes('size') || lowerVarName.includes('width') || lowerVarName.includes('height')) {
      categories['尺寸变量'].push(varName)
    } else if (lowerVarName.includes('fs') || lowerVarName.includes('font') || lowerVarName.includes('text')) {
      categories['字体变量'].push(varName)
    } else if (lowerVarName.includes('padding') || lowerVarName.includes('margin') || lowerVarName.includes('spacing')) {
      categories['间距变量'].push(varName)
    } else if (lowerVarName.includes('radius') || lowerVarName.includes('border-radius')) {
      categories['圆角变量'].push(varName)
    } else {
      categories['其他变量'].push(varName)
    }
  }

  // 生成SCSS变量声明
  for (const [categoryName, varNames] of Object.entries(categories)) {
    if (varNames.length === 0) continue

    scssContent += `/* ${categoryName} */\n`
    for (const varName of varNames) {
      const value = variables.get(varName)
      if (value) {
        // 处理var()引用的情况
        if (value.startsWith('var(--wot-')) {
          // 提取引用的变量名
          const refMatch = value.match(/var\(--wot-([\w-]+)\)/)
          if (refMatch) {
            const refVarName = refMatch[1]
            scssContent += `$-${varName}: var(--wot-${varName}, $-${refVarName}) !default;\n`
          } else {
            scssContent += `$-${varName}: var(--wot-${varName}, ${value}) !default;\n`
          }
        } else {
          // 直接值的情况
          scssContent += `$-${varName}: var(--wot-${varName}, ${value}) !default;\n`
        }
      }
    }
    scssContent += '\n'
  }

  return scssContent
}

/**
 * 处理单个组件
 * @param {string} componentName - 组件名称
 * @returns {string} 生成的SCSS内容
 */
function processComponent(componentName) {
  const componentDir = path.join(componentsBasePath, componentName)
  const variableScssPath = path.join(componentDir, 'variable.scss')

  console.log(`🔍 处理组件: ${componentName}`)

  const variables = parseComponentVariables(variableScssPath)

  if (variables.size === 0) {
    console.log('   ⚠️  未找到CSS变量')
    return ''
  }

  console.log(`   ✅ 找到 ${variables.size} 个CSS变量`)

  return generateComponentScssVariables(componentName, variables)
}

/**
 * 扫描所有组件目录
 * @returns {Array} 组件名称列表
 */
function scanAllComponents() {
  if (!fs.existsSync(componentsBasePath)) {
    console.error(`❌ 组件目录不存在: ${componentsBasePath}`)
    return []
  }

  const items = fs.readdirSync(componentsBasePath, { withFileTypes: true })
  return items.filter((item) => item.isDirectory() && item.name.startsWith('wd-')).map((item) => item.name)
}

/**
 * 批量处理所有组件
 * @param {string} outputPath - 输出文件路径
 */
function processAllComponents(outputPath) {
  console.log('🚀 开始批量处理所有组件...')

  const components = scanAllComponents()

  if (components.length === 0) {
    console.log('⚠️  未找到任何组件目录')
    return
  }

  console.log(`📦 找到 ${components.length} 个组件: ${components.join(', ')}`)

  let allScssContent = ''
  let processedCount = 0

  // 添加文件头部注释
  allScssContent += '/* ================================ 组件SCSS变量 ================================ */\n'
  allScssContent += '/* 此文件由 generate-component-scss-variables.js 自动生成，请勿手动修改 */\n\n'

  for (const componentName of components) {
    const scssContent = processComponent(componentName)
    if (scssContent) {
      allScssContent += scssContent
      processedCount++
    }
  }

  if (processedCount === 0) {
    console.log('⚠️  没有组件包含CSS变量')
    return
  }

  // 写入文件
  fs.writeFileSync(outputPath, allScssContent, 'utf8')

  console.log('✅ 批量处理完成')
  console.log('📊 统计信息:')
  console.log(`   - 处理组件数: ${processedCount}/${components.length}`)
  console.log(`📁 输出文件: ${outputPath}`)
}

/**
 * 处理单个组件并输出到文件
 * @param {string} componentName - 组件名称
 * @param {string} outputPath - 输出文件路径
 */
function processSingleComponent(componentName, outputPath) {
  console.log(`🚀 开始处理组件: ${componentName}`)

  const scssContent = processComponent(componentName)

  if (!scssContent) {
    console.log('❌ 未生成任何SCSS变量')
    return
  }

  // 添加文件头部注释
  let fileContent = '/* ================================ 组件SCSS变量 ================================ */\n'
  fileContent += `/* ${componentName} 组件变量，由 generate-component-scss-variables.js 自动生成 */\n\n`
  fileContent += scssContent

  // 写入文件
  fs.writeFileSync(outputPath, fileContent, 'utf8')

  console.log('✅ 处理完成')
  console.log(`📁 输出文件: ${outputPath}`)
}

/**
 * 主函数
 */
function main() {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    console.log('📖 使用说明:')
    console.log('  单个组件模式: node generate-component-scss-variables.js <component-name> [output-file]')
    console.log('  批量处理模式: node generate-component-scss-variables.js --all [output-file]')
    console.log('')
    console.log('📝 示例:')
    console.log('  node generate-component-scss-variables.js wd-button')
    console.log('  node generate-component-scss-variables.js wd-button ./output/button-variables.scss')
    console.log('  node generate-component-scss-variables.js --all')
    console.log('  node generate-component-scss-variables.js --all ./output/all-component-variables.scss')
    return
  }

  try {
    if (args[0] === '--all') {
      // 批量处理模式
      const outputPath = args[1] || path.join(__dirname, '../src/uni_modules/wot-design-uni/components/styles/component-variables.scss')
      processAllComponents(outputPath)
    } else {
      // 单个组件模式
      const componentName = args[0]
      const outputPath =
        args[1] || path.join(__dirname, `../src/uni_modules/wot-design-uni/components/${componentName}/${componentName}-variables.scss`)
      processSingleComponent(componentName, outputPath)
    }
  } catch (error) {
    console.error('❌ 处理失败:', error.message)
    process.exit(1)
  }
}

// 执行脚本
if (require.main === module) {
  main()
}

module.exports = {
  parseComponentVariables,
  generateComponentScssVariables,
  processComponent,
  processAllComponents,
  processSingleComponent,
  scanAllComponents
}
