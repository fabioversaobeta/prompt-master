# Prompt Master

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

A [Claude Code](https://claude.com/claude-code) mod that **rewrites your prompt before you send it**. It adds a row of buttons right above the message box:

- **✨ Prompt Master**: rewrites the current draft and puts the result back in the box so you can review it before sending.
- **Auto: on/off**: automatically rewrites every prompt sent with Enter (skips `/` commands and prompts under 4 words). Off by default.
- **Undo**: restores your original draft after a rewrite.

<!-- TODO: add a screenshot of the button row, e.g.
<p align="center"><img src="docs/button-row.png" width="600" /></p> -->

## How it works

The rewrite uses the `sonnet` model (the `MODEL` constant in `hooks/register.tsx`), keeps the language of your draft and does not invent requirements. If it fails or takes longer than 30 s, your prompt is sent exactly as you wrote it.

## Installation

From a Claude Code terminal session:

```
/plugin install prompt-master --marketplace fabioversaobeta/prompt-master
```

Or from a shell:

```bash
claude plugin install prompt-master --marketplace fabioversaobeta/prompt-master
```

In the desktop app: click **+** next to the message box, then Plugins → Add marketplace with `fabioversaobeta/prompt-master`, then Add plugin.

To develop from a local folder:

```bash
claude --plugin-dir <path>/prompt-master
```

## License

MIT
