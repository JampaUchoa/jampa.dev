---
title: >
    The Tech Spec's Tech Spec
subtitle: "Why you need a tech spec: In tech spec format"
excerpt: 'Yo dawg. I put a tech spec about tech specs so you can read about tech specs while you read a tech spec'
coverImage: '/assets/blog/tech-spec/og-image.jpg'
date: '2023-01-24T05:35:07.322Z'
hidden: false
---

### Pitch

The purpose of this tech spec is to create a high-level document showing the importance of tech specs, we begin by starting a small introduction to show what the document will be about and then dive into sections.


### State of art

Currently, there is not much awareness that tech specs have value in their intros that show the context behind the problem and put people on the same page. 

Most companies do not have a formal process before creating software, and sometimes engineers are too distant from the context of the problem. They do not understand that the value added by software is not a "high-level distributed fail-safe queue of invoicing processing implementation with 3rd parties", but actually "have a way for people to buy our stuff".

Rushing without a plan generates rewrites as progress goes on, sometimes due to overengineering or new requirements. If we want to avoid those things we start doing things "by committee" where it takes a long time to deliver software due to setbacks creating plenty of meetings, going even slower.

Senior engineers might do fine without tech specs since they have more of a muscle memory, even so, they are not immune to missing their mark because wrong assumptions were made.


### Problem 

The software development process can be messy and disorganized, so people need to overcompensate in different ways. This can generate the need for more meetings to realign constantly, and the need to report to stakeholders more to avoid more unexpected setbacks. Even if we can get alignment, the roadmap is now busted as tasks took way more time than expected.

It is easy to assume at the beginning of the project that the time to deliver will be just coding and deploying:
```
TimeToDeliver = TimeCoding + TimeDeploying
```
But in reality, the setbacks add to the delivery time:
```
TimeToActuallyDeliver = TimeCoding + 
    TimeInMeetingsCheckingAndAssigningTasks + 
    TimeInMeetingsRealigningWithTeam + 
    TimeInMeetingsRealigningWithStakeholders + 
    TimeToReworkStuffThatWasNotRight + ... 
```

### Proposed outcome

We should have in the end a document showing that tech specs lead to a proposed end goal or a solution. The tech spec could fix the scenarios above if one engineer could take time investigating before actually coding, they would only need a few hours to do it, and this will have great benefits:



* Getting agreement between stakeholders
* Defining the task well and estimating better
* Having clearly defined tasks and responsibilities among developers
* Reduces the necessity of meetings to realign

In the end, the solution is delivered faster with the bonus of having documentation started. Working with tech specs helps in "measuring twice and cutting once". 


### Proposed solution 1

One way we can use to bring awareness to people on how to build a tech spec would be a blog post telling them what is and having a template of its areas, we could grab some documents from the internet or just hack it with ChatGPT.

We could go over the headers (Intro, State of Art, Problem) and in the proposed solution parts we would show the pros and cons. This will have the advantage of the document doing its purpose with fewer words but at the same time would be very boring.


### Proposed solution 2 - Chosen

We could start with the above solution but write a blog post in tech spec format talking about tech specs, this would be nice, and totally not confusing at all. At the same time, this has caveats of maybe not getting the points across but it is peak comedy, despite not being a technical document the fanbase of 0 viewers will get it because they are very smart.


### High-level architecture

Create a tech spec with the following topics and motivation:


* Pitch (so people know what the doc would be about)
* State of art (so people get on the page and understand the necessity)
* Problem (So it shows why solving in the first place)
* Proposed solutions (Balances on different strategies and future tech debt).
* Tasks (we can have those to estimate and also divide the responsibilities)


### Tasks

Here we list the tasks, since this document will be made by one person we will not divide the work, but we could. We could also divide by tools or responsibilities. 

We can also give estimates that this article will overall expect this to take 2 late nights and some caffeine. We also here could assign points to the tasks if we would use SCRUM.

Tasks:

* Research about specs
* Set on a structure
* Write a first draft
* Insert comedy
* Create a clickbait title
* Publish it!