/* eslint-disable quotes */
const fs = require('fs')
const path = require('path')

// 文件路径
const basePath = '/Users/xqk/FE/wot-design-uni/src/uni_modules/wot-design-uni/styles/theme'
const baseScssPath = path.join(basePath, 'base.scss')
const lightScssPath = path.join(basePath, 'light.scss')
const variableScssPath = '/Users/xqk/FE/wot-design-uni/src/uni_modules/wot-design-uni/styles/variable.scss'

/**
 * 解析base.scss文件，提取基础变量和对应的值
 */
function parseBaseVariables() {
  const content = fs.readFileSync(baseScssPath, 'utf8')
  const variables = new Map()

  // 匹配CSS变量定义：--wot-variable-name: value;
  const regex = /--wot-([\w-]+):\s*([^;]+);/g
  let match

  while ((match = regex.exec(content)) !== null) {
    const varName = match[1]
    const value = match[2].trim()
    variables.set(varName, value)
  }

  console.log(`✅ 解析base.scss: 找到 ${variables.size} 个基础变量`)
  return variables
}

/**
 * 解析light.scss文件，提取语义变量和对应的基础变量引用
 */
function parseSemanticVariables() {
  const content = fs.readFileSync(lightScssPath, 'utf8')
  const variables = new Map()

  // 匹配CSS变量定义：--wot-variable-name: var(--wot-base-variable);
  const regex = /--wot-([\w-]+):\s*var\(--wot-([\w-]+)\);/g
  let match

  while ((match = regex.exec(content)) !== null) {
    const varName = match[1]
    const baseVarName = match[2]
    variables.set(varName, baseVarName)
  }

  console.log(`✅ 解析light.scss: 找到 ${variables.size} 个语义变量`)
  return variables
}

/**
 * 生成SCSS变量声明
 */
function generateScssVariables(baseVariables, semanticVariables) {
  let scssContent = ''

  // 添加导入语句
  scssContent += "@import './mixin/function';\n"
  scssContent += "@import './theme/index';\n\n"

  // 生成基础变量
  scssContent += '/* ================================ 基础变量 ================================ */\n\n'

  // 按分类组织基础变量
  const categories = {
    基础颜色: ['base-black', 'base-white'],
    蓝色系列: [],
    亮蓝系列: [],
    粉色系列: [],
    红色系列: [],
    橘红色系列: [],
    橙色系列: [],
    黄色系列: [],
    绿色系列: [],
    青色系列: [],
    紫色系列: [],
    靛色系列: [],
    冷灰系列: [],
    中性灰系列: [],
    暖灰系列: [],
    遮罩系列: [],
    基础数字: [],
    字重系列: [],
    透明度系列: []
  }

  // 分类基础变量
  for (const [varName] of baseVariables) {
    if (varName.startsWith('blue-')) categories['蓝色系列'].push(varName)
    else if (varName.startsWith('lightblue-')) categories['亮蓝系列'].push(varName)
    else if (varName.startsWith('pink-')) categories['粉色系列'].push(varName)
    else if (varName.startsWith('red-')) categories['红色系列'].push(varName)
    else if (varName.startsWith('volcano-')) categories['橘红色系列'].push(varName)
    else if (varName.startsWith('orange-')) categories['橙色系列'].push(varName)
    else if (varName.startsWith('yellow-')) categories['黄色系列'].push(varName)
    else if (varName.startsWith('green-')) categories['绿色系列'].push(varName)
    else if (varName.startsWith('cyan-')) categories['青色系列'].push(varName)
    else if (varName.startsWith('purple-')) categories['紫色系列'].push(varName)
    else if (varName.startsWith('grape-')) categories['靛色系列'].push(varName)
    else if (varName.startsWith('coolgrey-')) categories['冷灰系列'].push(varName)
    else if (varName.startsWith('neutralgrey-')) categories['中性灰系列'].push(varName)
    else if (varName.startsWith('warmgrey-')) categories['暖灰系列'].push(varName)
    else if (varName.startsWith('opac-')) categories['遮罩系列'].push(varName)
    else if (varName.startsWith('n') && (/^n\d/.test(varName) || varName === 'nFull')) categories['基础数字'].push(varName)
    else if (varName.startsWith('font-weight-')) categories['字重系列'].push(varName)
    else if (varName === 'disable-opacity') categories['透明度系列'].push(varName)
  }

  // 生成基础变量声明
  for (const [categoryName, varNames] of Object.entries(categories)) {
    if (varNames.length === 0) continue

    scssContent += `/* ${categoryName} */\n`
    for (const varName of varNames) {
      const value = baseVariables.get(varName)
      if (value) {
        scssContent += `$-${varName}: var(--wot-${varName}, ${value}) !default;\n`
      }
    }
    scssContent += '\n'
  }

  // 生成语义变量
  scssContent += '/* ================================ 语义变量 ================================ */\n\n'

  // 按分类组织语义变量
  const semanticCategories = {
    主色系列: [],
    危险色系列: [],
    成功色系列: [],
    警告色系列: [],
    文字色系列: [],
    图标色系列: [],
    边框色系列: [],
    填充色系列: [],
    分割线系列: [],
    反馈色系列: [],
    透明度填充: [],
    分类色系列: [],
    圆角系列: [],
    文字字号系列: [],
    内边距系列: [],
    间距系列: [],
    边框宽度系列: [],
    图标尺寸系列: []
  }

  // 分类语义变量
  for (const [varName] of semanticVariables) {
    if (varName.startsWith('primary-')) semanticCategories['主色系列'].push(varName)
    else if (varName.startsWith('danger-')) semanticCategories['危险色系列'].push(varName)
    else if (varName.startsWith('success-')) semanticCategories['成功色系列'].push(varName)
    else if (varName.startsWith('warning-')) semanticCategories['警告色系列'].push(varName)
    else if (varName.startsWith('text-')) semanticCategories['文字色系列'].push(varName)
    else if (varName.startsWith('icon-') && !varName.match(/^icon-(extra-small|small|main|large|extra-large)$/))
      semanticCategories['图标色系列'].push(varName)
    else if (varName.startsWith('border-') && varName.match(/^border-(extra-Strong|Strong|main|light|white)$/))
      semanticCategories['边框色系列'].push(varName)
    else if (varName.startsWith('filled-')) semanticCategories['填充色系列'].push(varName)
    else if (varName.startsWith('divider-')) semanticCategories['分割线系列'].push(varName)
    else if (varName.startsWith('feedback-')) semanticCategories['反馈色系列'].push(varName)
    else if (varName.startsWith('opacfilled-')) semanticCategories['透明度填充'].push(varName)
    else if (varName.includes('classifyapplication-')) semanticCategories['分类色系列'].push(varName)
    else if (varName.startsWith('radius-')) semanticCategories['圆角系列'].push(varName)
    else if (varName.startsWith('size-')) semanticCategories['文字字号系列'].push(varName)
    else if (varName.startsWith('padding-')) semanticCategories['内边距系列'].push(varName)
    else if (varName.startsWith('spacing-')) semanticCategories['间距系列'].push(varName)
    else if (varName.startsWith('stroke-')) semanticCategories['边框宽度系列'].push(varName)
    else if (varName.match(/^icon-(extra-small|small|main|large|extra-large)$/)) semanticCategories['图标尺寸系列'].push(varName)
  }

  // 生成语义变量声明
  for (const [categoryName, varNames] of Object.entries(semanticCategories)) {
    if (varNames.length === 0) continue

    scssContent += `/* ${categoryName} */\n`
    for (const varName of varNames) {
      const baseVarName = semanticVariables.get(varName)
      if (baseVarName) {
        scssContent += `$-${varName}: var(--wot-${varName}, $-${baseVarName}) !default;\n`
      }
    }
    scssContent += '\n'
  }

  return scssContent
}

/**
 * 主函数
 */
function main() {
  console.log('🚀 开始生成SCSS变量文件...')

  try {
    // 解析文件
    const baseVariables = parseBaseVariables()
    const semanticVariables = parseSemanticVariables()

    // 生成SCSS内容
    const scssContent = generateScssVariables(baseVariables, semanticVariables)

    // 写入文件
    fs.writeFileSync(variableScssPath, scssContent, 'utf8')

    console.log('✅ 成功生成variable.scss文件')
    console.log('📊 统计信息:')
    console.log(`   - 基础变量: ${baseVariables.size} 个`)
    console.log(`   - 语义变量: ${semanticVariables.size} 个`)
    console.log(`   - 总计: ${baseVariables.size + semanticVariables.size} 个SCSS变量`)
    console.log(`📁 文件位置: ${variableScssPath}`)
  } catch (error) {
    console.error('❌ 生成失败:', error.message)
    process.exit(1)
  }
}

// 执行脚本
if (require.main === module) {
  main()
}

module.exports = { main, parseBaseVariables, parseSemanticVariables, generateScssVariables }
