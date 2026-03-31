# llms.txt

Wot UI is an AI-friendly component library. This page explains how to use llms.txt so tools like VSCode, Cursor, TRAE, and Antigravity can better understand the Wot UI documentation.

[llms.txt](https://llmstxt.org/) is a text file designed for large language models. It is similar to robots.txt in form, but its purpose is different. While robots.txt tells search crawlers what they can index, llms.txt provides structured documentation information for AI tools, helping them better understand and retrieve component docs, examples, and best practices.

## Available Resources

We provide two llms.txt routes for AI tools:

- [llms.txt](https://wot-ui.cn/llms.txt) - A structured overview of all components and documentation links
- [llms-full.txt](https://wot-ui.cn/llms-full.txt) - A fuller document with implementation details and examples

## Use in AI Tools

### Cursor

Open the `Indexing & Docs` settings in Cursor, add `llms.txt` to `Docs`, and then use `@Docs` to include it in your project context.

[Learn more about @Docs in Cursor](https://cursor.com/docs/agent/tools/search)

### TRAE

Open the `Context / Document Set` settings in TRAE, add `llms.txt` to your document set, and use `#Docs` to bring it into context.

[Learn more about #Docs in TRAE](https://docs.trae.ai/ide/number-sign)

### Other Tools

Any tool that supports the `llms.txt` standard, or can ingest documentation from a URL, can use these files. You can add them to your tool's document set, rules, or knowledge source to help AI better understand Wot UI.

### context7

If you do not want to use llms.txt, you can also read the component library docs through [context7](https://github.com/upstash/context7).

[Learn more about context7](https://github.com/upstash/context7)

## Further Reading

- [Skills](/en-US/guide/skills)
- [llms.txt: Help AI Better Understand Your Docs](https://juejin.cn/post/7500981295105015847)