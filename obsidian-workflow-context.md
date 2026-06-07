# Obsidian + Claude Code Workflow Setup — Context Handoff

## Who I am

I'm a biosecurity researcher starting a fellowship at the Institute for Progress (IFP). I work on biosecurity and innovation policy. My background involves technical research memos, writing, and some coding (Python). I have used Claude Code a bit but am not deeply experienced with it yet.

## What I want to build

A unified knowledge management and research workflow centered on **Obsidian as the brain**, with Claude Code as the agent layer. I want to avoid having too many separate systems — everything should feed into one place.

### The four layers, in priority order:

1. **Professional project workflow** — research + writing for IFP biosecurity work and other projects. Mix of independent writing and collaborative writing that goes through Google Docs (active co-editing with colleagues, not just comments).

2. **Reading list + note-taking system** — a place to capture things I find online (articles, papers, blog posts), queue them for reading, take notes, and have those notes link to each other and to my projects. I want a curated biosecurity/innovation reading list as a specific output of this.

3. **Daily notes system** — I have something now but it's not good enough. Want a proper daily note template with task carry-forward and an end-of-day wrap.

4. **Coding workflow** — some Python, data analysis, Jupyter notebooks. Lower priority to set up but needs to be part of the system eventually.

## Key decisions already made

- **Obsidian is the canonical home** for all notes, drafts, and research. Not Notion, not plain folders.
- **GitHub for vault storage and sync**, not Google Drive (Google Drive corrupts Obsidian's `.obsidian/` folder with metadata conflicts). Use the `obsidian-git` community plugin for auto-sync. May add Obsidian Sync ($5/mo) later if mobile friction is annoying.
- **Google Docs is a publishing layer only**, not the source of truth. Workflow: write in Obsidian → push to GDocs for collaborator review → pull comments back → update canonical Obsidian version. Need a script for the Obsidian→GDocs conversion.
- **Mobile use** (iPhone with Obsidian app): for capture and reading only, not for running agents. Templates sync automatically via obsidian-git since they're just markdown files.
- **Claude Code runs inside the vault directory** and has scoped file access. Claude's outputs (plans, memory) live in `~/.claude/`; my knowledge lives in the vault proper.

## Recommended vault structure (not yet built)

```
~/vault/
├── CLAUDE.md                          ← vault-level Claude instructions
├── .claude/                           ← skills, hooks, settings
├── projects/
│   ├── ifp-biosecurity/
│   │   ├── memo.md                    ← canonical document
│   │   ├── CLAUDE.md                  ← project-level style + instructions
│   │   ├── TODO.md                    ← cross-session state, open decisions
│   │   ├── research/                  ← sub-agent outputs, background notes
│   │   └── drafts/                    ← in-progress text not yet in memo
│   └── other-project/
├── reading/
│   ├── inbox/                         ← things captured to read
│   ├── notes/                         ← notes on what I've read
│   └── lists/
│       └── biosecurity.md             ← curated reading list (Claude-maintained)
├── daily/                             ← daily notes
├── templates/                         ← note templates (sync to mobile automatically)
├── private/                           ← sensitive notes, denied to Claude
└── archive/
```

## Reading system design

Each reading inbox item is a markdown note with frontmatter:

```yaml
---
title: "Article title"
url: https://...
tags: [biosecurity, to-read]
status: unread   # → reading → done
date-added: 2026-06-06
---
```

Notes and annotations go in the body of the same file. When done, flip `status: done`.

The biosecurity reading list (`reading/lists/biosecurity.md`) is a **view** Claude maintains from tagged notes — not a manually managed separate thing.

Capture method: **Obsidian Web Clipper** browser extension (clips directly into `reading/inbox/`).

## Agent / Claude Code principles

- Run Claude Code from the vault root so it has full context
- Claude should default to **background sub-agents** (not foreground), so the main session stays responsive
- Sub-agents write to `research/` and `drafts/` only — never to `memo.md` directly
- **Never let Claude rename files** (breaks wikilinks)
- **Never give Claude write access to `private/`** — explicitly deny in CLAUDE.md
- Keep sub-agent outputs short (a few thousand tokens max), with a TL;DR at the top and a timestamp
- End-of-session `/wrap` prompt: "Summarize today's session. Update TODO.md. Flag anything that contradicts existing decisions." Review and approve before committing.
- Periodically retire long main sessions (context degrades) — have Claude write up TODO before retiring

## The /wrap daily pattern (high value, implement early)

At end of each work session:
```
"Summarize today's session. Update any project TODO files that changed.
Flag anything that contradicts existing decisions. Seed tomorrow's daily note."
```
Claude writes the summary → you review → approve → git commit. Next morning Claude picks up exactly where you left off.

## Google Docs integration (needs to be built)

Need two scripts:
1. `md_to_gdocs.py` — converts a markdown file to a Google Doc for collaborator review
2. `gdocs_comments_to_md.py` — pulls comments off a downloaded Google Doc and formats them for Claude to walk through

This is a good **first Claude Code task** — bounded, immediately useful, and teaches you the workflow.

## What to build in what order

**This week — foundation:**
- [ ] Create vault directory structure above
- [ ] Initialize as git repo, push to GitHub
- [ ] Install `obsidian-git` plugin, configure auto-commit
- [ ] Write vault-level `CLAUDE.md` (see starting template below)
- [ ] Set up first real project folder: `projects/ifp-biosecurity/`
- [ ] Install Obsidian Web Clipper in browser
- [ ] Start using conversationally — don't automate yet, just notice friction

**Week 2 — reading system + GDocs:**
- [ ] Build `md_to_gdocs.py` and `gdocs_comments_to_md.py`
- [ ] Set up reading inbox workflow with Web Clipper
- [ ] Write daily note template
- [ ] Implement `/wrap` end-of-session habit

**Later — agent orchestration:**
- [ ] Global sub-agent definitions for common research tasks
- [ ] `/deep-research` workflow for literature synthesis
- [ ] Biosecurity reading list as auto-maintained Claude output
- [ ] Slop-check hook on drafting tasks (like Damon's setup)

## Starting CLAUDE.md template for vault root

```markdown
# Vault Instructions

## Who I am
Biosecurity researcher and fellow at IFP. Projects involve technical research memos,
policy writing, and Python data analysis.

## Vault structure
- projects/ — active research projects. Each has its own CLAUDE.md.
- reading/ — reading inbox, notes, curated lists
- daily/ — daily notes
- templates/ — note templates, do not modify
- private/ — DO NOT READ OR WRITE HERE

## Core rules
- Never rename files (breaks Obsidian wikilinks)
- Never write directly to any memo.md — that is my document. Write to drafts/ or research/ only.
- Never touch the private/ folder
- Default to background sub-agents, not foreground
- Keep sub-agent outputs under 2000 tokens with a TL;DR at the top and a timestamp
- When in doubt about scope, ask rather than act

## Reading system
- New reading captures go in reading/inbox/ with the frontmatter template
- Notes on completed reading go in the same file, status flipped to done
- reading/lists/biosecurity.md is a curated list you help maintain from tagged notes

## Git discipline
- Commit after any substantive set of changes with a clear commit message
- Never commit to private/ contents
```

## Reference posts worth reading

- **Damon Binder's workflow** (the post that started this conversation): https://defensesindepth.bio/how-i-currently-use-ais-for-research/ — good model for the professional project layer, honest about Claude's failure modes
- **ClaudeCodeLab Obsidian guide**: https://claudecode-lab.com/en/blog/claude-code-obsidian-integration/ — practical, includes the three mistakes that trash your vault
- **Starmorph integration guide**: https://blog.starmorph.com/blog/obsidian-claude-code-integration-guide — five strategies, community-tested
- **Blake Crosley MCP + hybrid retrieval**: https://blakecrosley.com/guides/obsidian — deep technical reference for when vault gets large
- **GitHub: AgriciDaniel/claude-obsidian**: self-organizing second brain plugin, supports PARA/Zettelkasten/LYT methodologies

## Open questions to think through before next session

- What methodology do I want for note organization? PARA (Projects/Areas/Resources/Archive) is the most popular and maps well to this structure. Zettelkasten is more powerful for knowledge-building but more friction. Worth deciding before building templates.
- How much do I want Claude to proactively suggest connections between reading notes and project research, vs. doing that myself?
- What does a "good" daily note look like for me specifically? Worth sketching by hand before templating it.
