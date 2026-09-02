---
title: "Good abstractions remove work"
description: "A useful abstraction should make the system easier to reason about, not just give the complexity a proper noun."
pubDate: 2026-08-28
tags: ["architecture", "design"]
noteNumber: "L–002"
featured: true
draft: false
---

I've become suspicious of abstractions that mostly create vocabulary.

If using an abstraction means I now need to understand the original problem **and** six new concepts invented to wrap it, the abstraction may have moved the complexity rather than removed it.

## The test I keep coming back to

After the abstraction exists, is there less that the next engineer needs to keep in their head?

Not fewer lines of code. Less **mental state**.

Those aren't the same thing.

A good abstraction should make the common path boring and keep the exceptional path visible.

If it does that, keep it.

If it only makes the diagram prettier, I'm less convinced.
