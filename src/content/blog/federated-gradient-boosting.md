---
title: "Federated Gradient Boosting in Practice: Detecting Bank Fraud Without Moving the Data"
description: "Behind the scenes of BoostFex, my IEEE Access submission — why gradient-boosted trees are awkward to federate, and how we made it work for transaction anomaly detection."
date: 2026-07-11
tags: ["Federated Learning", "Machine Learning", "Research"]
draft: true
---

> **Draft — Rohan: fill in the results, numbers, and figures from the paper before publishing.**

Banks want shared fraud models; regulators want data to stay put. Federated learning promises both — but nearly all the literature assumes neural networks, and in tabular fraud detection, gradient-boosted trees still win.

## Why trees are hard to federate

*(Outline: split-finding needs global statistics, histogram aggregation, privacy of split thresholds.)*

## The BoostFex architecture

*(Outline: client-side training vs. server-side aggregation, the modular pipeline — data handling / federation logic / evaluation.)*

## What the experiments showed

*(Outline: detection performance vs. centralized baseline, communication cost, where it breaks down.)*

## What I'd do differently

*(Outline: honest reflections — a section reviewers and interviewers love.)*
