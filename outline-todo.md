# Outline and To Do list for PEP

## Things to do

Obviously we need to plan content and create an outline (see below).  Other things include:

[] Write this tutorial/guide for participants
[x] Improve pretext-tools (with code-chat)
[x] Get github codespaces working
  [x] Templates?
[] Check that pandoc-pretext is still working
[] Decide what sorts of interactive elements we want to explore.
  [] Parson's problems
  [] Multiple choice
  [] WeBWorK (server or locally authored)
  [] Embedded youtube
[] Do we want to suggest using PreTeXt for course materials?  Worksheets?
[] Contact participants to get them ready for the PEP
  [] Ask participants what they hope to get out of the workshop.  Are there any particular projects they hope to complete with PreTeXt?  Do they have materials they want to convert?
  [] Ask each participant to make a github account (with instructions).
  [] How familiar is each participant with the command line?  Should we do everything with the VSCode gui?
  [] Is everyone familiar with LaTeX?
  [] Are there output formats anyone is particularly interested in?
  [] Instructions for downloading pretext if they want to do things on their local machine.

## Outline

Each day is 2 hours (9-11am Thursday and Saturday).  

### Thursday

- Introductions.
  - Should participants introduce themselves?  Where they are from, what they want to get out of this?
- Brief overview of how PreTeXt works (what the parts are). 
  - Your source is plain text XML files that contains the content organized in tags that describe the semantic structure of the document.
  - When you "build" an output format, PreTeXt uses XSL stylesheets to transform your source into HTML or LaTeX files (or LaTeX and then builds that into PDF).
  - The PreTeXT-CLI (Command Line Interface) streamlines the process of invoking the stylesheets to do this build
  - The VS Code extension pretext-tools provides some visual shortcuts to avoid using the command line
  - GitHub CodeSpaces allows you to run VS Code with all the previous stuff set up directly in your browser.
- Jump in: everyone makes a repository on github, creates a new book, builds, views, and deploys.
- Discussion of PreTeXt philosophy, i.e., author vs publisher, semantic markup, consequences for accessibility
- Exploration of document structure.  Boxes in Boxes next to Boxes.
- Exercise: how would you describe the semantic structure of a particular section of a particular document?  Maybe provide a latex document and have everyone "convert" it to pretext by hand.

### Saturday

- Review and take stock.  Answer questions
- How to use the documentation (annotated version).
- What if you get stuck?
- Adding interactive content.
- Worksheets?
- Runestone? (Note that we are not ready to let just anyone upload just anything to runestone.academy, so this might be a distraction)
- Other output types
- Publisher options

## Email to participants

In Preparation for your PreTeXt PEP at JMM

We are looking forward to seeing you at the "Creating accessible and interactive documents with PreTeXt" Professional Enhancement Program, at JMM this week.  We will have two sessions: Thursday and Saturday mornings 9-11am in Salon CD on the fourth floor of the Boston Marriott Copley Place.

Please bring a laptop with you to the workshop.  We will do all our work online using GitHub's codespaces.  As such, you will not need any specific software (beyond a web browser) installed.  

If you do not already have one, please create a free account with GitHub: https://github.com/signup.  That's it, you will be ready to start writing in PreTeXt.

Finally, to help us tailor the workshop to your needs, please reply to this email with brief responses to the following questions about what you hope to get out of the PEP:

1. What do you hope to use PreTeXt for?
2. Is there a specific project that you are working on?  How far along are you?
3. How comfortable are you with LaTeX, GitHub, and even PreTeXt already?
4. Are there any specific skills you hope to learn at this PEP?

Thanks and see you soon.
Oscar and Steven.

