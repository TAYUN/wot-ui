/*
 * @Author: weisheng
 * @Date: 2026-03-16 14:06:54
 * @LastEditTime: 2026-03-16 16:14:23
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: /wot-design-uni/src/uni_modules/wot-design-uni/components/wd-form/adapters/zod.ts
 * 记得注释
 */
import type { FormSchema, FormSchemaIssue } from '../types'

type ZodLikeIssue = {
  path?: PropertyKey[]
  message?: string
  code?: string
  received?: string
}

type ZodLikeSafeParseResult = {
  success: boolean
  error?: {
    issues?: ZodLikeIssue[]
  }
}

type ZodLikeSchema = {
  safeParse: (model: Record<string, any>) => ZodLikeSafeParseResult
}

type ZodAdapterOptions = {
  isRequired?: FormSchema['isRequired']
}

function normalizeIssues(result: ZodLikeSafeParseResult): FormSchemaIssue[] {
  if (result.success || !result.error?.issues) return []
  return result.error.issues
    .filter((issue) => Array.isArray(issue.path) && issue.path.length > 0 && issue.message)
    .map((issue) => ({
      path: (issue.path as PropertyKey[]).map((item) => (typeof item === 'number' ? item : String(item))),
      message: issue.message as string
    }))
}

export function zodAdapter(schema: ZodLikeSchema, options: ZodAdapterOptions = {}): FormSchema {
  const formSchema: FormSchema = {
    validate(model) {
      return normalizeIssues(schema.safeParse(model))
    }
  }
  if (options.isRequired) {
    formSchema.isRequired = options.isRequired
  }
  return formSchema
}
