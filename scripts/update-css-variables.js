#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// 要处理的文件路径
const themePath = '/Users/xqk/FE/wot-design-uni/src/uni_modules/wot-design-uni/components/styles/theme'
const filePaths = fs
  .readdirSync(themePath)
  .filter((file) => file.endsWith('.scss'))
  .map((file) => path.join(themePath, file))

/**
 * 替换CSS变量前缀
 * @param {string} content - 文件内容
 * @returns {object} - 包含替换后内容和替换次数的对象
 */
function replaceCSSVariables(content) {
  let replacementCount = 0

  // 替换CSS变量定义：--variable-name: 改为 --wot-variable-name:
  const updatedContent = content
    .replace(/--([a-zA-Z][a-zA-Z0-9_-]*)(\s*:)/g, (match, variableName, colon) => {
      // 如果已经是 --wot- 开头，则不替换
      if (variableName.startsWith('wot-')) {
        return match
      }
      replacementCount++
      return `--wot-${variableName}${colon}`
    })
    // 替换CSS变量引用：var(--variable-name) 改为 var(--wot-variable-name)
    .replace(/var\(\s*--([a-zA-Z][a-zA-Z0-9_-]*)(\s*[,)])/g, (match, variableName, suffix) => {
      // 如果已经是 --wot- 开头，则不替换
      if (variableName.startsWith('wot-')) {
        return match
      }
      replacementCount++
      return `var(--wot-${variableName}${suffix}`
    })

  return {
    content: updatedContent,
    count: replacementCount
  }
}

/**
 * 处理单个文件
 * @param {string} filePath - 文件路径
 */
function processFile(filePath) {
  try {
    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
      console.error(`❌ 文件不存在: ${filePath}`)
      return
    }

    // 读取文件内容
    const originalContent = fs.readFileSync(filePath, 'utf8')
    console.log(`📖 正在处理文件: ${path.basename(filePath)}`)

    // 替换CSS变量
    const result = replaceCSSVariables(originalContent)

    // 如果有替换，则写回文件
    if (result.count > 0) {
      fs.writeFileSync(filePath, result.content, 'utf8')
      console.log(`✅ 已替换 ${result.count} 个CSS变量`)
    } else {
      console.log('ℹ️  没有找到需要替换的CSS变量')
    }
  } catch (error) {
    console.error(`❌ 处理文件 ${filePath} 时出错:`, error.message)
  }
}

/**
 * 主函数
 */
function main() {
  console.log('🚀 开始批量替换CSS变量前缀...')
  console.log('📝 将所有 --variable-name 改为 --wot-variable-name\n')

  let totalReplacements = 0

  // 处理每个文件
  filePaths.forEach((filePath, index) => {
    console.log(`\n[${index + 1}/${filePaths.length}] 处理文件:`)

    try {
      const originalContent = fs.readFileSync(filePath, 'utf8')
      const result = replaceCSSVariables(originalContent)

      if (result.count > 0) {
        fs.writeFileSync(filePath, result.content, 'utf8')
        console.log(`📖 文件: ${path.basename(filePath)}`)
        console.log(`✅ 替换了 ${result.count} 个CSS变量`)
        totalReplacements += result.count
      } else {
        console.log(`📖 文件: ${path.basename(filePath)}`)
        console.log('ℹ️  没有找到需要替换的CSS变量')
      }
    } catch (error) {
      console.error(`❌ 处理文件失败: ${error.message}`)
    }
  })

  console.log('\n' + '='.repeat(50))
  console.log('🎉 批量替换完成!')
  console.log(`📊 总共替换了 ${totalReplacements} 个CSS变量`)
  console.log(`📁 处理了 ${filePaths.length} 个文件`)

  if (totalReplacements > 0) {
    console.log('\n💡 提示: 请检查替换结果，确保所有变量都正确更新。')
  }
}

// 执行主函数
if (require.main === module) {
  main()
}

module.exports = {
  replaceCSSVariables,
  processFile,
  main
}
