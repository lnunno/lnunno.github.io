---
layout: post
title: "Reflecting on my systems programming experience"
date: 2026-08-24
---

_This was completely written by me and no AI was used for the content below._

I have sort of a weird dichotomy of experience where I've flirted with systems programming at many points but I've been primarily frontend leaning at Palantir over the last 7 years, however upon reflection I have an interesting path when it comes to system programming. I often enjoy it, it scratches a different itch that I have in my brain that's less user facing but sometimes it's cool to see something go way faster than a sluggish web UI or a bloated JVM/Python program; something that truly utilizes the full power of your machine and goes brrr.

## A tough start

I distinctly remember despairing my first data structures and algorithms class, it was all in C and I was a middling programmer at best. I had taken one intro to programming class at UNM. It was in Java, and the complexity of that language was a lot to dive into. The first day being "oh yeah this thing starts with `public static void main(String[] args)`, we'll explain that later...". C on the other hand was extremely low level and I was struggling in the beginning, manually parsing all the command line arguments we had for each project was very different from what I was used to as was caring about the low level types and the sizes of numbers, etc.

My first project was about doing Monte Carlo simulations of poker hands to calculate the probability of each hand. This should be something I was good at/interested in! I regularly played poker with my friends. However, I kept getting results that made no sense and corrupted results and really no idea why. I can't remember the exact debugging steps but the end cause was that either I had an array of cards and I was off by 1 with the size of the deck or I was not zero indexing and was going slightly out of bounds each time I'd access the ends of the deck, corrupting the memory of my program without segmentation fault, truly the worst outcome.

I do remember I fixed one constant and the whole program worked. It was the night before the project was due, crisis averted. I was seriously questioning my competence at this whole programming thing and wondering if business school & IT was more my speed.

## Confidence gained

> [Lisp] is the only computer language that is beautiful. - Neal Stephenson

> I'd rather write programs to write programs than write programs. -D. Sites

> What I cannot create I do not understand. - R. Feynman

[Lance Williams](https://www.cs.unm.edu/~williams/) at UNM and his [CS 357: Declarative and functional programming](https://www.cs.unm.edu/~williams/cs357s17.html) (and his other courses I took with him) was incredibly inspiring to me throughout my college years. Going from something abstract, high level, and hard to wrap my head around beginning with Java and its leaky abstractions to low level C which I was starting to get more confident in because I could reasonably understand how it worked to something high level, mathematical, and in many ways philosophical like Lisp and Haskell was a paradigm shift to me in many ways.

"How is this related to systems programming?" you may be asking. At first it's not obvious but it introduced the concept of writing programs that write programs and this concept really hooked me. Writing Lisp functions that are indistinguishable from the what's built-in to the language is a paradigm shift coming from languages that have these concrete immovable concepts, you can't change how classes work in Java, you can't in new primitive types, etc.

This extended into writing parsers and interpreters in Haskell. I took a types and programming languages course that was very abstract and theoretical but we ended up implementing a [full lambda calculus language]({{ site.docurl }}/foundations.pdf) parsed and interpreted in Haskell and I'd go on to write a [BASIC interpreter](https://github.com/lnunno/haskell-basic) and a [brainfuck interpreter](https://github.com/lnunno/haskell-brainf--k) during my course work.

## Getting paid for systems programming

At Sandia Labs, one of the teams I was on was building software frameworks for an image processing pipeline. Here I got deep on C++ and learned a lot of the modern semantics with the smart pointer types (`unique_ptr`, `shared_ptr`, etc) and got experience with RAII (Resource Acquisition Is Initialization) for managing memory in a simpler way.

## Re-igniting my interest for systems programming

You can see I've experimented with other system programming languages over the years, I went to a few conferences and took classes on Go and Rust and played with them a bit [go-snake](https://github.com/lnunno/go-snake), [rust-exercises](https://github.com/lnunno/rust-exercises).

Recently I ported over the Go snake [to Rust](https://github.com/lnunno/rust-snake) and my BASIC Haskell interpreter [to Rust](https://github.com/lnunno/rust-basic). Rust scratches that functional programming itch a bit and it seems quite good for building an interpreter.

![alt text](../assets/images/posts/image-6.png)

I'm not sure where my re-ignited interest might lead, but it's interesting to reflect on my history with it and recognize it as a tool that could be useful in the future depending on the opportunity.
