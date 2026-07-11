---
title: "Securing Web LLMs: Lessons from Red-Teaming Enterprise AI"
description: "What I learned probing Web LLM attack surfaces with Burp Suite at HPE — prompt injection, insecure output handling, and the mitigations that actually work."
date: 2026-07-11
tags: ["AI Security", "LLM", "Cybersecurity"]
draft: true
---

> **Draft — Rohan: replace the outline below with your own war stories and specifics before publishing.**

Large language models are being bolted onto web products faster than security teams can threat-model them. During my time at HPE I spent months on exactly this problem: understanding how Web LLM integrations break, and what defenses hold up.

## The attack surface nobody scopes

- Prompt injection: direct vs. indirect (content the model reads, not the user types)
- Insecure output handling — when the model's answer becomes code, SQL, or HTML
- Excessive agency: LLMs wired to tools and APIs with too much permission

## What I tested and how

*(Outline: Burp Suite workflows for LLM endpoints, the Web LLM attack labs, how enterprise chatbots differ from consumer ones.)*

## Mitigations that actually held up

*(Outline: privilege separation for tool calls, output encoding, NIST-aligned control mapping, why "just add a system prompt" fails.)*

## Takeaways

*(Outline: 3–5 crisp lessons for teams shipping LLM features.)*
