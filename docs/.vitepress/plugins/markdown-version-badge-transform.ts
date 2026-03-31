import { Plugin } from 'vite'

const VERSION_MARK_RE = /\^\((\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?)\)/g
const INLINE_CODE_RE = /`[^`]*`/g

function isTableLine(line: string) {
  const trimmed = line.trim()
  return trimmed.startsWith('|') && trimmed.includes('|')
}

function replaceVersionMarkerOutsideInlineCode(line: string) {
  const ranges: Array<{ start: number; end: number }> = []
  for (const match of line.matchAll(INLINE_CODE_RE)) {
    ranges.push({
      start: match.index || 0,
      end: (match.index || 0) + match[0].length
    })
  }

  return line.replace(VERSION_MARK_RE, (full, version, offset) => {
    const insideInlineCode = ranges.some((range) => offset >= range.start && offset < range.end)
    if (insideInlineCode) return full
    return `<Badge type="tip" text="v${version}" />`
  })
}

export function MarkdownVersionBadgeTransform(): Plugin {
  return {
    name: 'md-version-badge-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('.md')) return
      if (!id.includes('/docs/')) return
      if (!/\^\([^)]+\)/.test(code)) return

      const lines = code.split('\n')
      let inFence = false

      const transformed = lines.map((line) => {
        const trimmed = line.trim()
        if (trimmed.startsWith('```')) {
          inFence = !inFence
          return line
        }
        if (inFence) return line
        if (!isTableLine(line)) return line
        if (line.includes('<Badge')) return line
        return replaceVersionMarkerOutsideInlineCode(line)
      })

      return {
        code: transformed.join('\n')
      }
    }
  }
}
