var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "  PreTeXt is a document authoring system that allows you to convert the source of your document into a variety of output formats, including fully accessible webpages, PDF, Epub, Jupyter Notebooks, and braille. This “write once, read anywhere” approach has made it a popular choice for authors of Open Educational Resources, but PreTeXt can also be used to create other kinds of mathematical documents as well. Recent updates make this process much easier; there has never been a better time to get started with PreTeXt.  Participants of this workshop will be introduced to the fundamentals of authoring documents with PreTeXt and gain the technical skills required to work with it. Specifically, participants will learn how to:    Use GitHub Codespaces to create an editable PreTeXt document in their web browser.  Write and structure content using PreTeXt markup.  Add content to the document, including mathematics, graphics, interactive exercises, and more.  Build accessible and interactive webpages as well as a static PDF from the same PreTeXt source.  Easily deploy the interactive webpages online (for free).    We will also share tips for converting existing documents into PreTeXt.  Prior to the workshop, participants should have some familiarity with LaTeX or other markup languages. No previous experience working with PreTeXt or HTML\/XML is assumed. Participants should bring a laptop that can connect to JMM's provided wifi: no prior installations will be required as we will use PreTeXt's new GitHub Codespace-powered online authoring service.  "
},
{
  "id": "ch-pre-workshop",
  "level": "1",
  "url": "ch-pre-workshop.html",
  "type": "Chapter",
  "number": "1",
  "title": "Before you arrive...",
  "body": " Before you arrive...   Authoring in PreTeXt requires nothing more than a wifi connection and GitHub account. GitHub users also can share their content for free on GitHub Pages!    Setting up your GitHub account  To create a GitHub account, follow the instructions on GitHub's signup page.   Be sure to note your GitHub username and password in your password manager (or however you usually keep track of login credentials) so you can log in again durring the workshop.    Apply for your GitHub Education discount  Educators and non-profit researchers can get many of GitHub's paid features for free.  Apply at Education.GitHub.com to unlock these features (in our experience, applications are usually processed quickly for .edu email addresses).    And that's it!  Even just a last year, the process to get started writing PreTeXt involved several more steps. (Raise your hand if you don't care what a PATH variable is!)  The community is streamlining this experience daily, and we look forward to sharing how easy writing in PreTeXt is when we see you at the workshop   "
},
{
  "id": "ch-intro",
  "level": "1",
  "url": "ch-intro.html",
  "type": "Chapter",
  "number": "2",
  "title": "Write Once, Read Anywhere",
  "body": " Write Once, Read Anywhere    At the end of this chapter, you'll     Become aware of the eleven PreTeXt Principles.    Be able to identify several features of PreTeXt.    Have a working GitHub Codespaces environment to suitable for authoring and editing in PreTeXt.      Setting up Codespaces  A Codespace is an authoring environment that lives in the cloud , that is, a virtual machine hosted by GitHub that has all of the software needed to create great accessible documents, accessible with just a web browser.  This coding environment uses a web version of Virtual Studio Code, an open-source editor, along with the PreTeXt community's custom plugins and software to get started authoring quickly.  Follow the instructions at to get started. Let this run for a few minutes in the background while you review the rest of this section.    PreTeXt Principles  A more detailed monograph on PreTeXt's philosophy is availabe in the PreTeXt Guide.   PreTeXt Principles   PreTeXt is a markup language that captures the structure of textbooks and research papers.  PreTeXt is human-readable and human-writable.  PreTeXt documents serve as a single source which can be easily converted to multiple other formats, current and future.  PreTeXt respects the good design practices which have been developed over the past centuries.  PreTeXt makes it easy for authors to implement features which are both common and reasonable.  PreTeXt supports online documents which make use of the full capabilities of the Web.  PreTeXt output is styled by selecting from a list of available templates, relieving the author of the burden involved in micromanaging the output format.  PreTeXt is free: the software is available at no cost, with an open license. The use of PreTeXt does not impose any constraints on documents prepared with the system.  PreTeXt is not a closed system: documents can be converted to latex and then developed using standard latex tools.  PreTeXt recognizes that scholarly documents involve the interaction of authors, publishers, scholars, curators, instructors, students, and readers, with each group having its own needs and goals.  PreTeXt recognizes the inherent value in producing material that is accessible to everyone.      PreTeXt is XML  Since PreTeXt uses the XML markup language, all content is structured in terms of elements . The root pretext element nests many other elements inside of it. This is accomplished by surrounding everything with a starting <pretext>  tag and an ending <\/pretext> tag. (Folks with HTML experience will find this pattern familiar, akin to the HTML root element.)   is a very simple PreTeXt \/XML document. (The first line is boilerplate that lets various programs know the rest of the file is XML, and the third-to-last line is an example of a comment that won't appear in the output.)   Source of a simple PreTeXt book project.   <?xml version=\"1.0\" encoding=\"UTF-8\"?> <pretext> <article> <title>Hello world!<\/title> <p>Welcome to PreTeXt!<\/p> <!-- TODO: find something more to say... --> <\/article> <\/pretext>      Books and Divisions  There are several documents you can write in PreTeXt , such as <article> s and <slideshow> s. This tutorial will focus on <book> s.  A <book> typically includes <frontmatter> , and <backmatter> .  Between <frontmatter> , and <backmatter> are either several <chapter> s or <part> s. If used, <part> s are subdivided into <chapter> s. Then <chapter> s subdivide into <section> s, and <section> s can have <subsection> s.  Each of these subdivisions needs a <title> , and may have an <introduction> or <conclusion> .   puts some of these elements together for a simple PreTeXt project (information on the other elements will come in later sections).   Source of a simple PreTeXt book project.   <?xml version=\"1.0\" encoding=\"UTF-8\"?> <pretext xml:lang=\"en-US\"> <!-- (author configurations go in docinfo) --> <docinfo> <macros> \\newcommand{\\R}{\\mathbb R} <\/macros> <\/docinfo> <book xml:id=\"my-great-book\"> <title>My Great Book<\/title> <subtitle>An example to get you started<\/subtitle> <frontmatter xml:id=\"frontmatter\"> <titlepage> <author> <personname>You<\/personname> <department>Your department<\/department> <institution>Your institution<\/institution> <\/author> <date> <today \/> <\/date> <\/titlepage> <\/frontmatter> <chapter xml:id=\"chapter-welcome\"> <title>Welcome!<\/title> <introduction> <p>This chapter is about the real numbers <m>\\R<\/m><\/p> <\/introduction> <section xml:id=\"section-getting-started\"> <title>Let's get started<\/title> <p>Can you solve <m>ax^2+bx+c=0<\/m>?<\/p> <\/section> <section xml:id=\"section-learning-more\"> <title>But wait, there's more!<\/title> <p>Did you know that <me>x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}<\/me>?<\/p> <\/section> <\/chapter> <backmatter xml:id=\"backmatter\"> <title>Backmatter<\/title> <colophon> <p> This book was authored in <pretext \/>. <\/p> <\/colophon> <\/backmatter> <\/book> <\/pretext>      Paragraphs, Lists, and Blocks  Within each division (chapter, section, etc., see ) of your book, you likely want some content (e.g. what you're reading right now!).  Written content is usually structured as paragraphs , <p> for short. If you've ever written HTML , this tag may be familiar to you, but be warned: while PreTeXt is XML ( ), PreTeXt is not HTML ! There is some overlap: you can emphasize words or phrases with <em> for instance. However, while HTML uses the full word code for its tag, PreTeXt uses the shortened <c> tag.  Note that these elements are all semantic : they express the meaning of content, not its presentation. For example, the word semantic was a <term> , we just defined, while we merely emphasized meaning with <em> . The presentation of these concepts may vary by output format, likely using some combination of boldface, italics, or underlining.   Heads up!  We'll talk about customizing presentation later, but it's important to remember that the PreTeXt community separates such publication decisions away from the work of authoring content.   For users coming from LaTeX, rest assured your mathematical formulas work in PreTeXt . Inline mathmode is invoked with <m>ax^2+bx+c=0<\/m> , while display mathematics like is available via <me>x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}<\/me> . (Users from LaTeX will also appreciate that quotes are surrounded with <q> in PreTeXt to handle the different way quotation marks are handled in LaTeX vs most other markup languages.)  You may also have lists withinn paragraphs, ordered <ol> and unordered <ul> , nested as needed. Each list item is represented by <li> .   A single item.    An item with an ordered list.   First item.    Second item.        Of course, often you have important blocks of content to include, such as <definition> s or <claim> s.     PreTeXt is an uncomplicated XML language for describing scholarly documents.      PreTeXt is the language that will replace LaTeX for authors.    Left to the reader.    Such content is automatically numbered appropriately. Each of the blocks above is structured with a <statement> , and additionally features a <proof> .  Content is often knowled . A knowl is a piece of context-independent information that is useful to transclude elsewhere in the HTML build of your document. For example, in the HTML build for this document, the above proof is knowled by default, and clicking the referenced Claim in the previous paragraph expands its knowl to reveal the claim for the reader.   Because this document was edited directly on GitHub using Codespaces, and served with GitHub pages, finding its source is simple: head to its repository and find the corresponding source file . Check the link out to see exactly how each claim, list, etc. in this chapter was marked up!      Figures and Diagrams   Photograph taken from AIM Press Release on braille, provided as a JPEG in the project assets directory.   Photograph of a hand tracing over braille code. A cartoon thought bubble contains the quadratic formula in standard mathematical notation, matching the contents of the braille code in the photograph.     Electronics Diagram generated with Tikz code   A pile of electronic components wired together      Contour Plot generated from Asymptote code       Work Cone generated from Asymptote code       Polynomial approximations of generated from SageMath code       An implicitly defined 3D surface generated with SageMath code        Interactives   Right Triangle Paradox powered by Geogebra     Graph of powered by Desmos     Intersection of two planes powered by CalcPlot3D     Implicit Differentiation exercises powered by CheckIt      Authoring an Exercise  Manually-authored exercise What is ? We're being a bit tricky here... , where is the concatenation operator.  Using WebWork   Compute  The sum is .              was taken from Linear Algebra for Team-Based Inquiry Learning .  Generated by CheckIt  Consider the following system of linear equations.    Explain how to find a simpler system or vector equation that has the same solution set.       Explain how to describe this solution set using set notation.   The solution set is .   Runestone-powered True\/False Question  This statement is true or false.   Feedback goes here.   Runestone-powered Matching Problem  A multiple choice question     right answer 1    answer specific feedback      right answer 1    answer specific feedback      wrong answer 1    answer specific feedback      wrong answer 2    answer specific feedback     Runestone-powered Parsons Problem  Rearrange the blocks in alphebetical order, ignoring blocks beginning with a number.       A    B    C    D         Runestone-powered Matching Problem  Match the letters with their order in the alphabet    A  1    B  2    C  3      Not Just HTML, Not Just PDF  This document is available in HTML format at , and the same document is available in a PDF format at .  Obtaining these formats are as easy as running pretext build web and pretext build print respectively. PreTeXt supports other types of output as well, including Jupyter notebooks, ePub, and tacticle braille code.  You're encouraged to view authoring in PreTeXt as an investment : you may not need the braille output today, but the little extra thought and care required to author in PreTeXt will allow you to provide this version of your document to a blind student tomorrow.    Wrapping Up  Go check back on the Codespace you created in . If it's up and running, you're ready to move on to the next section!   "
},
{
  "id": "objectives-1",
  "level": "2",
  "url": "ch-intro.html#objectives-1",
  "type": "Objectives",
  "number": "2",
  "title": "",
  "body": "  At the end of this chapter, you'll     Become aware of the eleven PreTeXt Principles.    Be able to identify several features of PreTeXt.    Have a working GitHub Codespaces environment to suitable for authoring and editing in PreTeXt.    "
},
{
  "id": "p-17",
  "level": "2",
  "url": "ch-intro.html#p-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Codespace "
},
{
  "id": "list-principles",
  "level": "2",
  "url": "ch-intro.html#list-principles",
  "type": "List",
  "number": "2.2.1",
  "title": "PreTeXt Principles",
  "body": " PreTeXt Principles   PreTeXt is a markup language that captures the structure of textbooks and research papers.  PreTeXt is human-readable and human-writable.  PreTeXt documents serve as a single source which can be easily converted to multiple other formats, current and future.  PreTeXt respects the good design practices which have been developed over the past centuries.  PreTeXt makes it easy for authors to implement features which are both common and reasonable.  PreTeXt supports online documents which make use of the full capabilities of the Web.  PreTeXt output is styled by selecting from a list of available templates, relieving the author of the burden involved in micromanaging the output format.  PreTeXt is free: the software is available at no cost, with an open license. The use of PreTeXt does not impose any constraints on documents prepared with the system.  PreTeXt is not a closed system: documents can be converted to latex and then developed using standard latex tools.  PreTeXt recognizes that scholarly documents involve the interaction of authors, publishers, scholars, curators, instructors, students, and readers, with each group having its own needs and goals.  PreTeXt recognizes the inherent value in producing material that is accessible to everyone.   "
},
{
  "id": "p-21",
  "level": "2",
  "url": "ch-intro.html#p-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elements tag "
},
{
  "id": "listing-simple",
  "level": "2",
  "url": "ch-intro.html#listing-simple",
  "type": "Listing",
  "number": "2.3.1",
  "title": "",
  "body": " Source of a simple PreTeXt book project.   <?xml version=\"1.0\" encoding=\"UTF-8\"?> <pretext> <article> <title>Hello world!<\/title> <p>Welcome to PreTeXt!<\/p> <!-- TODO: find something more to say... --> <\/article> <\/pretext>   "
},
{
  "id": "listing-book-source",
  "level": "2",
  "url": "ch-intro.html#listing-book-source",
  "type": "Listing",
  "number": "2.4.1",
  "title": "",
  "body": " Source of a simple PreTeXt book project.   <?xml version=\"1.0\" encoding=\"UTF-8\"?> <pretext xml:lang=\"en-US\"> <!-- (author configurations go in docinfo) --> <docinfo> <macros> \\newcommand{\\R}{\\mathbb R} <\/macros> <\/docinfo> <book xml:id=\"my-great-book\"> <title>My Great Book<\/title> <subtitle>An example to get you started<\/subtitle> <frontmatter xml:id=\"frontmatter\"> <titlepage> <author> <personname>You<\/personname> <department>Your department<\/department> <institution>Your institution<\/institution> <\/author> <date> <today \/> <\/date> <\/titlepage> <\/frontmatter> <chapter xml:id=\"chapter-welcome\"> <title>Welcome!<\/title> <introduction> <p>This chapter is about the real numbers <m>\\R<\/m><\/p> <\/introduction> <section xml:id=\"section-getting-started\"> <title>Let's get started<\/title> <p>Can you solve <m>ax^2+bx+c=0<\/m>?<\/p> <\/section> <section xml:id=\"section-learning-more\"> <title>But wait, there's more!<\/title> <p>Did you know that <me>x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}<\/me>?<\/p> <\/section> <\/chapter> <backmatter xml:id=\"backmatter\"> <title>Backmatter<\/title> <colophon> <p> This book was authored in <pretext \/>. <\/p> <\/colophon> <\/backmatter> <\/book> <\/pretext>   "
},
{
  "id": "p-29",
  "level": "2",
  "url": "ch-intro.html#p-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "paragraphs "
},
{
  "id": "p-30",
  "level": "2",
  "url": "ch-intro.html#p-30",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "semantic "
},
{
  "id": "p-38",
  "level": "2",
  "url": "ch-intro.html#p-38",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "blocks "
},
{
  "id": "def-pretext",
  "level": "2",
  "url": "ch-intro.html#def-pretext",
  "type": "Definition",
  "number": "2.5.1",
  "title": "",
  "body": "   PreTeXt is an uncomplicated XML language for describing scholarly documents.   "
},
{
  "id": "claim-pretext",
  "level": "2",
  "url": "ch-intro.html#claim-pretext",
  "type": "Claim",
  "number": "2.5.2",
  "title": "",
  "body": "  PreTeXt is the language that will replace LaTeX for authors.    Left to the reader.   "
},
{
  "id": "p-43",
  "level": "2",
  "url": "ch-intro.html#p-43",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "knowl "
},
{
  "id": "note-1",
  "level": "2",
  "url": "ch-intro.html#note-1",
  "type": "Note",
  "number": "2.5.3",
  "title": "",
  "body": " Because this document was edited directly on GitHub using Codespaces, and served with GitHub pages, finding its source is simple: head to its repository and find the corresponding source file . Check the link out to see exactly how each claim, list, etc. in this chapter was marked up!   "
},
{
  "id": "figure-braille",
  "level": "2",
  "url": "ch-intro.html#figure-braille",
  "type": "Figure",
  "number": "2.6.1",
  "title": "",
  "body": " Photograph taken from AIM Press Release on braille, provided as a JPEG in the project assets directory.   Photograph of a hand tracing over braille code. A cartoon thought bubble contains the quadratic formula in standard mathematical notation, matching the contents of the braille code in the photograph.   "
},
{
  "id": "figure-tikz-electronics",
  "level": "2",
  "url": "ch-intro.html#figure-tikz-electronics",
  "type": "Figure",
  "number": "2.6.2",
  "title": "",
  "body": " Electronics Diagram generated with Tikz code   A pile of electronic components wired together    "
},
{
  "id": "figure-asymptote-contour-plot",
  "level": "2",
  "url": "ch-intro.html#figure-asymptote-contour-plot",
  "type": "Figure",
  "number": "2.6.3",
  "title": "",
  "body": " Contour Plot generated from Asymptote code     "
},
{
  "id": "figure-asymptote-workcone",
  "level": "2",
  "url": "ch-intro.html#figure-asymptote-workcone",
  "type": "Figure",
  "number": "2.6.4",
  "title": "",
  "body": " Work Cone generated from Asymptote code     "
},
{
  "id": "figure-sage-polynomial-approximation",
  "level": "2",
  "url": "ch-intro.html#figure-sage-polynomial-approximation",
  "type": "Figure",
  "number": "2.6.5",
  "title": "",
  "body": " Polynomial approximations of generated from SageMath code     "
},
{
  "id": "figure-sage-implicit-surface",
  "level": "2",
  "url": "ch-intro.html#figure-sage-implicit-surface",
  "type": "Figure",
  "number": "2.6.6",
  "title": "",
  "body": " An implicitly defined 3D surface generated with SageMath code     "
},
{
  "id": "figure-geogebra",
  "level": "2",
  "url": "ch-intro.html#figure-geogebra",
  "type": "Figure",
  "number": "2.7.1",
  "title": "",
  "body": " Right Triangle Paradox powered by Geogebra   "
},
{
  "id": "figure-8",
  "level": "2",
  "url": "ch-intro.html#figure-8",
  "type": "Figure",
  "number": "2.7.2",
  "title": "",
  "body": " Graph of powered by Desmos   "
},
{
  "id": "figure-intersecting-planes",
  "level": "2",
  "url": "ch-intro.html#figure-intersecting-planes",
  "type": "Figure",
  "number": "2.7.3",
  "title": "",
  "body": " Intersection of two planes powered by CalcPlot3D   "
},
{
  "id": "figure-checkit",
  "level": "2",
  "url": "ch-intro.html#figure-checkit",
  "type": "Figure",
  "number": "2.7.4",
  "title": "",
  "body": " Implicit Differentiation exercises powered by CheckIt   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "ch-intro.html#exercise-1",
  "type": "Checkpoint",
  "number": "2.8.1",
  "title": "Manually-authored exercise.",
  "body": "Manually-authored exercise What is ? We're being a bit tricky here... , where is the concatenation operator. "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "ch-intro.html#exercise-2",
  "type": "Checkpoint",
  "number": "2.8.2",
  "title": "Using WebWork.",
  "body": "Using WebWork   Compute  The sum is .             "
},
{
  "id": "exercise-checkit",
  "level": "2",
  "url": "ch-intro.html#exercise-checkit",
  "type": "Checkpoint",
  "number": "2.8.3",
  "title": "Generated by CheckIt.",
  "body": "Generated by CheckIt  Consider the following system of linear equations.    Explain how to find a simpler system or vector equation that has the same solution set.       Explain how to describe this solution set using set notation.   The solution set is .  "
},
{
  "id": "true-false",
  "level": "2",
  "url": "ch-intro.html#true-false",
  "type": "Checkpoint",
  "number": "2.8.4",
  "title": "Runestone-powered True\/False Question.",
  "body": "Runestone-powered True\/False Question  This statement is true or false.   Feedback goes here.  "
},
{
  "id": "some-matching",
  "level": "2",
  "url": "ch-intro.html#some-matching",
  "type": "Checkpoint",
  "number": "2.8.5",
  "title": "Runestone-powered Matching Problem.",
  "body": "Runestone-powered Matching Problem  A multiple choice question     right answer 1    answer specific feedback      right answer 1    answer specific feedback      wrong answer 1    answer specific feedback      wrong answer 2    answer specific feedback    "
},
{
  "id": "parsons",
  "level": "2",
  "url": "ch-intro.html#parsons",
  "type": "Checkpoint",
  "number": "2.8.6",
  "title": "Runestone-powered Parsons Problem.",
  "body": "Runestone-powered Parsons Problem  Rearrange the blocks in alphebetical order, ignoring blocks beginning with a number.       A    B    C    D        "
},
{
  "id": "matching",
  "level": "2",
  "url": "ch-intro.html#matching",
  "type": "Checkpoint",
  "number": "2.8.7",
  "title": "Runestone-powered Matching Problem.",
  "body": "Runestone-powered Matching Problem  Match the letters with their order in the alphabet    A  1    B  2    C  3   "
},
{
  "id": "ch-workflow",
  "level": "1",
  "url": "ch-workflow.html",
  "type": "Chapter",
  "number": "3",
  "title": "Codespace Workflow",
  "body": " Codespace Workflow   Once you create content in PreTeXt, it is time to build it, perhaps generate assets (if your project has such assets), view the result to make sure it looks good, and when you are ready, deploy your web output to a live webpage for others to marvel at.  In this chapter we will walk through the steps to do this inside a codespace environment.    Build and Generate  Inside the VS Code window you opened through codespaces, have a .ptx file open. You can build your entire project in a few different ways.   Click the PreTeXt button in the VS Code status bar (just left of center on the bottom of the window), or use the keyboard shortcut CTRL+ALT+p , to bring up the PreTeXt Commands menu. Select Build from the menu. This will bring up a list of build targets. Select web from the list. This will build your entire project, and put the output in the build\/web folder.    You can type pretext build web from the terminal (this uses the CLI directly). If you don't see a terminal window at the bottom of the screen, you can open it with CTRL+` .    You can use the keyboard shortcut CTRL+ALT+b . This will build the project using the last build target you used. If you haven't built yet, it will use the default build target, which is web .      All shortcuts listed in this guide assume you are using Windows or Linux. If you are using a Mac, you will need to use CMD instead of CTRL .   If your documentment contains some more complicated elements, you might need to generate them for them to show up. The elements that require this are (depending on what your build target is):  <latex-image>  <sagemath>  <asymptote>  <youtube> (for thumbnail previews)  <webwork>  <codelense>    You can generate assets in much the same way you run a build. The PreTeXt command menu has a Generate choice that you select, and then select your target (different target formats have different requirements for what is generated). You can also type pretext generate in the terminal, or use the keyboard shortcut CTRL+ALT+g .   Note that generating assets requires additional software, like latex or Sage. Depending on your codespace setup, you can likely fix erorrs by entering the following command in the terminal:  sudo bash .\/.devcontainer\/postCreateCommand.sh   Once you install this software once, you should be good to go as long as your codespace exists.     Previewing  You can check the output of what you built using the View command. Again, you can access this in multiple ways. If you use the PreTeXt Commands menu ans select view , you will get a choice for your viewer. We currently suggest using Live Preview , although on codespace this requires a few extra steps:   When the side preview opens, it will ask you if you want to open in an external browser. Click Open in browser . If you don't see the pop-up, you can clicke on Port: 3000 in the bottom status bar of VS Code and select Open in browser from the pop-up menu.    Now close the new tab that opens, and also close the side panel in VS Code that opened.    Finally select View again, and it should just work. You can drag the VS Code tab to un-split the window to make it easier to view.     You can also experiment with the CLI view command, by selecting that from the pop-up menu, or by typing pretext view web in the terminal. This should pop up a new browser tab with the preview. The only reason we caution against this currently is that the local server that gets started to preview the files will keep running as long as your codespace is active, and we don't understand how this affects resource use.  When you make edits to your source files, you will need to build again, and then refresh the preview window to see the changes.    Saving your work  Using codespaces will keep all your files in the cloud on GitHub's server. As long as you don't delete your codespace, your files will be saved there. However, you will want to push these files to your git repository on GitHub to make this save perminent. This has the benefit of allowing collaborators to access your files as well (your codespace is unique to your account).  There is a lot to learn about git, but luckily using VS Code lets you do everything you need using menus (you don't need to use the command line, unless you want to). Everything can be controlled using the Source Control view: it should be third from the top on the very left of the window, an icon with splitting paths, and likely a badge showing how many files you have changed.  Here are the basic concepts you need to understand.   The program git keeps track of all the changes you make to files inside of your repository (in this case, the folder containing your project).    Once you have edited your files and are happy with all of them, you tell git to track the set of changes as a commit . This creates a handy breakpoint you could return to if you want to go back to an earlier version.  There are two steps to creating a commit (which you can often do all at once in practice):   You stage the files you want to update in the commit.  You commit the stage files including a commit message .   Doing this in two steps can be helpful if you want to commit only some of the files that have changed.    Once you have one or more commits, you need to sync these changes with GitHub. To upload your changes, you push the repository. To download changes that you are someone else made, you pull the repository.     Now, how do we do these things in VS Code? Start by looking at the Source Control view. You will notice a list of files that were changed. You can click on any of these to see what the changes are (you will see a side-by-side view of the original and updated version).  If you are comfortable staging and committing in one step, you can simply write yourself a short message in the textbox above the big green Commit button, and click the button. If you want to stage first, click the + next to each file under changes to stage them.  The green button should now turn into a Sync button. When you click that, it will do a quick pull and then a push, to sync changes with GitHub.  The only small point about using git is that no all files will be tracked. This is on purpose, since temporary files really should not be remembered using this version control setting. Which files or types of files are ignored by git is controled by the .gitignore file in your repository.  In particular, we do not track the output of builds. Git is used to track progress on your source, which you build into output at any time. If you want others to be able to see the output of your work without building it themselves, you need to deploy your work.    Deploy  So you have worked tirelessly to prepare course notes or a book, built and previewed, synced changes using git, and now you are ready to share the results of your efforts with the world. It's time to deploy your project.  With our codespace setup this is simple. From the PreTeXt Commands menu, click on Deploy . This will automatically take the most recent build of your web target and host it through GitHub Pages . Watch the output pane for a link to your published site. (It can take a few minutes for the site to get set up or updated; there should be another link to view the progress of the GitHub action that reports the progress.)   "
},
{
  "id": "p-81",
  "level": "2",
  "url": "ch-workflow.html#p-81",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "build generate assets view deploy "
},
{
  "id": "note-2",
  "level": "2",
  "url": "ch-workflow.html#note-2",
  "type": "Note",
  "number": "3.1.1",
  "title": "",
  "body": " All shortcuts listed in this guide assume you are using Windows or Linux. If you are using a Mac, you will need to use CMD instead of CTRL .  "
},
{
  "id": "p-88",
  "level": "2",
  "url": "ch-workflow.html#p-88",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "generate "
},
{
  "id": "note-3",
  "level": "2",
  "url": "ch-workflow.html#note-3",
  "type": "Note",
  "number": "3.1.2",
  "title": "",
  "body": " Note that generating assets requires additional software, like latex or Sage. Depending on your codespace setup, you can likely fix erorrs by entering the following command in the terminal:  sudo bash .\/.devcontainer\/postCreateCommand.sh   Once you install this software once, you should be good to go as long as your codespace exists.  "
},
{
  "id": "p-92",
  "level": "2",
  "url": "ch-workflow.html#p-92",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "View "
},
{
  "id": "p-98",
  "level": "2",
  "url": "ch-workflow.html#p-98",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "push git repository "
},
{
  "id": "p-99",
  "level": "2",
  "url": "ch-workflow.html#p-99",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Source Control "
},
{
  "id": "p-100",
  "level": "2",
  "url": "ch-workflow.html#p-100",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "git repository commit stage commit commit message push pull "
},
{
  "id": "p-112",
  "level": "2",
  "url": "ch-workflow.html#p-112",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "deploy "
},
{
  "id": "ch-exercises",
  "level": "1",
  "url": "ch-exercises.html",
  "type": "Chapter",
  "number": "4",
  "title": "Practice Activities",
  "body": " Practice Activities   Let's get our hands dirty and try writing some PreTeXt. If you have some ideas of what you want to try, go for it. Otherwise, try to implement as many of the following as you can.     Basic PreTeXt   Paragraph contents   Write a paragraph of text that includes an emphasized word, a quoted word, and inline math using a variable like or .    Write the definition of a term inside a paragraph (not as a numbered definition). The defined word should be clear when you ready it. For example: a slark is a hybrid of a sloth and a shark.    Write a paragraph that includes a math equation on a displayed line. Like this: .     Lists and Paragraphs   Write a numbered list of your favorite three animals and an unnumbered list of your three favorite numbers (in no particular order). Put text introducing the lists between them.    You can use the <ol> tag for ordered lists, and <ul> for unordered lists. Each item should be inside <li> s.    For the content around the lists, you will want them to be in <p> tags. Note also that the list themselves must be nested in these paragraphs. You can't have lists floating on their own.    <p> Here is my list of animals: <ol> <li>Shark<\/li> <li>Sloth<\/li> <li>Slork<\/li> <\/ol> <\/p> <p> My favorite numbers, in no particular order, happen to be: <ul> <li>1<\/li> <li>2<\/li> <li>3<\/li> <\/ul> <\/p>      Create the following table using the pretext tabular environment.     1  2  3    4  5  6     <tabular> <col right=\"medium\" \/><col right=\"medium\" \/><col \/> <row bottom=\"medium\"> <cell>1<\/cell> <cell>2<\/cell> <cell>3<\/cell> <\/row> <row> <cell>4<\/cell> <cell>5<\/cell> <cell>6<\/cell> <\/row> <\/tabular>    Create the same table using a latex array environment.    <me> \\begin{array}{c|c|c} 1 \\amp 2 \\amp 3 \\\\ \\hline 4 \\amp 5 \\amp 6 \\end{array} <\/me>      Blocks    Write a numbered definition. Don't forget to highlight the word that is being defined.    Oh no! You just realized that your definition is actually more of an axiom. What are you going to do!?!?      Write a lemma. Since it is probably obvious, you can leave off the proof.    Write a theorem, and include a proof. The proof should use (and reference) the lemma (which means you need to go back and identify the lemma some how).    What other types of mathematical statements might you want to include now? Maybe you put a remark or a note or a corollary? What would you want to do? What can you do?      Write a numbered example.    Sometimes an example is of a problem you would ask students to solve. You might include a hint or solution for such examples. Give an example of such a thing, with a hint and solution.      Write an activity that you would want your students to try. Give your activity a hint.    Sometimes an activity has multiple parts. You could give each part as an item on a numbered list, but that would not allow parts to have their own hint\/answer\/solution.  Instead, you can make each part its own <task> . Try writing a multi-part activity, some parts having hints, others having a solution.    Exercises can appear at the end of a section, in an <exercises> division, or they can be checkpoint exercises that show up in the middle of a section.    Write a checkpoint exercise. Up to you whether it gets parts (i.e. tasks).     What we learned  You can do lots of things in PreTeXt .     Write a summary box like the one above. You might say that such a box assembles the concepts you have discussed...      Challenges  Want to push yourself a bit? Try some of these bonus activities    Replicated the following:       Table of Values        1  1    2  4    3  9          Create the folowing images using TikZ            Use two image environments, each containing a latex-image environment. To display the images side by side, use the sidebyside environment. To get the sizes and spacing even and uniform, you will need to set @widths and @margins in the sidebyside environment.  Remember that the < and > symbols are restricted. For lines, it is eaisest to use latex or stealth as your arrow style. If you must use < and > in your TikZ code, you must replace the symbols with &lt; and &gt; respectively.    <sidebyside widths=\"33% 33%\" margins=\"11%\" valign=\"middle\"> <image width=\"25%\" xml:id=\"tikz_quick_eg\"> <latex-image> \\begin{tikzpicture} \\draw[fill=red,opacity=0.2] (0,0) circle (1.15); \\draw[fill=blue,opacity=0.2] (1,0) circle (1.15); \\end{tikzpicture} <\/latex-image> <\/image> <image width=\"33%\" xml:id=\"image_tikz_eg\"> <latex-image> \\begin{tikzpicture} \\\\ Shade the enclosed area first \\draw[color=white,fill=green,opacity=0.33] (1,0) -- (1,{cos(1 r)+2}) -- plot[domain= 1:3] ({\\x},{cos(\\x r)+2}) -- (3,{cos(3 r)+2}) -- (3,0) -- (1,0); \\\\ Draw the axes \\draw[latex-latex] (-1,0) -- (5,0); \\draw[latex-latex] (0,-1) -- (0,4); \\\\ Plot the function \\draw [thick,domain=-1:4.5] plot ({\\x},{cos(\\x r)+2}); \\node [thick,above right] at (4.5,{cos(4.5 r) + 2}){$f$}; \\\\ Draw the boundaries \\draw[red] (1,3) -- (1,-0.25) node [below] {$a$}; \\draw[red] (3,3) -- (3,-0.25) node [below] {$b$}; \\\\ Label the area \\draw[&lt;- , very thick] (2,0.5) -- (2.2,-1) node[below] {area between $f$ and $x$-axis over $[a,b]$}; \\end{tikzpicture} <\/latex-image> <\/image> <\/sidebyside>      Adapting existing content    Nest the following PreTeXt elements in order to produce the Graphing a Derivative subsection of OpenStax Calculus Volume 1 Section 3.2 .   <caption>The derivative <m>f'(x)<\/m> is positive everywhere because the function <m>f(x)<\/m> is increasing.<\/caption> <caption>The derivative <m>f'(x)\\lt 0<\/m> where the function <m>f(x)<\/m> is decreasing and <m>f'(x)\\gt 0<\/m> where <m>f(x)<\/m> is increasing...<\/caption> <description>The function f(x) = the square root of x is graphed as is its derivative f'(x) = 1\/(2 times the square root of x).<\/description> <description>Two functions are graphed here: f(x) and f'(x). The function f(x) is the same as the above graph, that is, roughly sinusoidal, starting at (-4, 3), decreasing to a local minimum at (-2, 2), then increasing to a local maximum at (3, 6), and getting cut off at (7, 2). The function f'(x) is an downward-facing parabola with vertex near (0.5, 1.75), y-intercept (0, 1.5), and x-intercepts (-1.9, 0) and (3, 0).<\/description> <description>The function f(x) = x squared - 2x is graphed as is its derivative f'(x) = 2x - 2.<\/description> <description>The function f(x) is roughly sinusoidal, starting at (-4, 3), decreasing to a local minimum at (-2, 2), then increasing to a local maximum at (3, 6), and getting cut off at (7, 2).<\/description> <example><\/example> <exercise><\/exercise> <figure><\/figure> <figure><\/figure> <image source=\"solution-image.jpg\"><\/image> <image source=\"fx-sqrt-x.jpg\"><\/image> <image source=\"exercise-image.jpg\"><\/image> <image source=\"fx-x2-2x.jpg\"><\/image> <p>We have already discussed how to graph a function...<\/p> <p>In Example 3.12 we found that for <m>f(x)=x^2-2x,f'(x)=2x-2<\/m>...<\/p> <p>Sketch the graph of <m>f(x)=x^2-4<\/m>...<\/p> <p>In Example 3.11 we found that for <m>f(x)=\\sqrt{x},f'(x)=1\/2\\sqrt{x}<\/m>...<\/p> <p>The solution is shown in the following graph. Observe that...<\/p> <p>Use the following graph of <m>f(x)<\/m> to sketch a graph of <m>f'(x)<\/m>.<\/p> <solution><\/solution> <statement><\/statement> <statement><\/statement> <subsection><\/subsection> <title>Graphing a Derivative<\/title> <title>Sketching a Derivative Using a Function<\/title>        Consider the following concerning the first two pages (leading up until the Units header) of Elements of Abstract and Linear Algebra .    Consider how this content might be scaffolded in terms of paragraphs, theorems, statements, proofs, and so on (not necessarily in PreTeXt terms).    Nest the following PreTeXt elements in order to reproduce this portion of Elements .   <definition><\/definition> <example><\/example> <introduction><\/introduction> <li><p>If <m>a,b,c\\in R<\/m>... (associative)<\/p><\/li> <li><p><m>(-a)\\cdot b=a\\cdot(-b)=-(a\\cdot b)<\/m>.<\/p><\/li> <li><p>If <m>a,b,c\\in R<\/m>... (distribuative)<\/p><\/li> <li><p><m>(na)\\cdot(mb)=(nm)(a\\cdot b)<\/m>...<\/p><\/li> <li><p><m>a\\cdot \\underline{0}=\\underline{0}\\cdot=\\underline{0}<\/m>...<\/p><\/li> <li><p><m>R<\/m> has a multiplicative identity...<\/p><\/li> <li><p>Let <m>\\underline{n}=n\\underline{1}<\/m>. For example...<\/p><\/li> <li><p>If <m>a,b\\in R<\/m>... (commutative)<\/p><\/li> <p>Suppose <m>R<\/m> is an additive abelian group...<\/p> <p>The next two theorems show that ring mulitplication...<\/p> <p>Suppose <m>R<\/m> is a ring and <m>a,b\\in R<\/m>.<\/p> <p>Suppose <m>a,b\\in R<\/m> and <m>n,m\\in \\mathbf Z<\/m>.<\/p> <p>Rings are additive abelian groups with a second operation...<\/p> <p>The basic commutative rings in mathematics are the integers <m>\\mathbf Z<\/m>...<\/p> <p>Recall that, since <m>R<\/m> is an additive abelien group...<\/p> <p>If 1,2,3 are satisfied...<\/p> <p><ol><\/ol><\/p> <p><ol><\/ol><\/p> <p><ol><\/ol><\/p> <section><\/section> <statement><\/statement> <statement><\/statement> <statement><\/statement> <theorem><\/theorem> <title>Rings<\/title> <theorem><\/theorem> <statement><\/statement>       "
},
{
  "id": "exploration-1",
  "level": "2",
  "url": "ch-exercises.html#exploration-1",
  "type": "Practice",
  "number": "4.1.1",
  "title": "Paragraph contents.",
  "body": " Paragraph contents   Write a paragraph of text that includes an emphasized word, a quoted word, and inline math using a variable like or .    Write the definition of a term inside a paragraph (not as a numbered definition). The defined word should be clear when you ready it. For example: a slark is a hybrid of a sloth and a shark.    Write a paragraph that includes a math equation on a displayed line. Like this: .   "
},
{
  "id": "exploration-2",
  "level": "2",
  "url": "ch-exercises.html#exploration-2",
  "type": "Practice",
  "number": "4.1.2",
  "title": "Lists and Paragraphs.",
  "body": " Lists and Paragraphs   Write a numbered list of your favorite three animals and an unnumbered list of your three favorite numbers (in no particular order). Put text introducing the lists between them.    You can use the <ol> tag for ordered lists, and <ul> for unordered lists. Each item should be inside <li> s.    For the content around the lists, you will want them to be in <p> tags. Note also that the list themselves must be nested in these paragraphs. You can't have lists floating on their own.    <p> Here is my list of animals: <ol> <li>Shark<\/li> <li>Sloth<\/li> <li>Slork<\/li> <\/ol> <\/p> <p> My favorite numbers, in no particular order, happen to be: <ul> <li>1<\/li> <li>2<\/li> <li>3<\/li> <\/ul> <\/p>   "
},
{
  "id": "exploration-3",
  "level": "2",
  "url": "ch-exercises.html#exploration-3",
  "type": "Practice",
  "number": "4.1.3",
  "title": "",
  "body": "  Create the following table using the pretext tabular environment.     1  2  3    4  5  6     <tabular> <col right=\"medium\" \/><col right=\"medium\" \/><col \/> <row bottom=\"medium\"> <cell>1<\/cell> <cell>2<\/cell> <cell>3<\/cell> <\/row> <row> <cell>4<\/cell> <cell>5<\/cell> <cell>6<\/cell> <\/row> <\/tabular>    Create the same table using a latex array environment.    <me> \\begin{array}{c|c|c} 1 \\amp 2 \\amp 3 \\\\ \\hline 4 \\amp 5 \\amp 6 \\end{array} <\/me>   "
},
{
  "id": "exploration-4",
  "level": "2",
  "url": "ch-exercises.html#exploration-4",
  "type": "Practice",
  "number": "4.2.1",
  "title": "",
  "body": "  Write a numbered definition. Don't forget to highlight the word that is being defined.    Oh no! You just realized that your definition is actually more of an axiom. What are you going to do!?!?   "
},
{
  "id": "exploration-5",
  "level": "2",
  "url": "ch-exercises.html#exploration-5",
  "type": "Practice",
  "number": "4.2.2",
  "title": "",
  "body": "  Write a lemma. Since it is probably obvious, you can leave off the proof.    Write a theorem, and include a proof. The proof should use (and reference) the lemma (which means you need to go back and identify the lemma some how).    What other types of mathematical statements might you want to include now? Maybe you put a remark or a note or a corollary? What would you want to do? What can you do?   "
},
{
  "id": "exploration-6",
  "level": "2",
  "url": "ch-exercises.html#exploration-6",
  "type": "Practice",
  "number": "4.2.3",
  "title": "",
  "body": "  Write a numbered example.    Sometimes an example is of a problem you would ask students to solve. You might include a hint or solution for such examples. Give an example of such a thing, with a hint and solution.   "
},
{
  "id": "exploration-7",
  "level": "2",
  "url": "ch-exercises.html#exploration-7",
  "type": "Practice",
  "number": "4.2.4",
  "title": "",
  "body": "  Write an activity that you would want your students to try. Give your activity a hint.    Sometimes an activity has multiple parts. You could give each part as an item on a numbered list, but that would not allow parts to have their own hint\/answer\/solution.  Instead, you can make each part its own <task> . Try writing a multi-part activity, some parts having hints, others having a solution.   "
},
{
  "id": "exploration-8",
  "level": "2",
  "url": "ch-exercises.html#exploration-8",
  "type": "Practice",
  "number": "4.2.5",
  "title": "",
  "body": "  Write a checkpoint exercise. Up to you whether it gets parts (i.e. tasks).   "
},
{
  "id": "exploration-9",
  "level": "2",
  "url": "ch-exercises.html#exploration-9",
  "type": "Practice",
  "number": "4.2.6",
  "title": "",
  "body": "  Write a summary box like the one above. You might say that such a box assembles the concepts you have discussed...   "
},
{
  "id": "investigation-1",
  "level": "2",
  "url": "ch-exercises.html#investigation-1",
  "type": "Challenge",
  "number": "4.3.1",
  "title": "",
  "body": "  Replicated the following:       Table of Values        1  1    2  4    3  9       "
},
{
  "id": "investigation-2",
  "level": "2",
  "url": "ch-exercises.html#investigation-2",
  "type": "Challenge",
  "number": "4.3.2",
  "title": "",
  "body": "  Create the folowing images using TikZ            Use two image environments, each containing a latex-image environment. To display the images side by side, use the sidebyside environment. To get the sizes and spacing even and uniform, you will need to set @widths and @margins in the sidebyside environment.  Remember that the < and > symbols are restricted. For lines, it is eaisest to use latex or stealth as your arrow style. If you must use < and > in your TikZ code, you must replace the symbols with &lt; and &gt; respectively.    <sidebyside widths=\"33% 33%\" margins=\"11%\" valign=\"middle\"> <image width=\"25%\" xml:id=\"tikz_quick_eg\"> <latex-image> \\begin{tikzpicture} \\draw[fill=red,opacity=0.2] (0,0) circle (1.15); \\draw[fill=blue,opacity=0.2] (1,0) circle (1.15); \\end{tikzpicture} <\/latex-image> <\/image> <image width=\"33%\" xml:id=\"image_tikz_eg\"> <latex-image> \\begin{tikzpicture} \\\\ Shade the enclosed area first \\draw[color=white,fill=green,opacity=0.33] (1,0) -- (1,{cos(1 r)+2}) -- plot[domain= 1:3] ({\\x},{cos(\\x r)+2}) -- (3,{cos(3 r)+2}) -- (3,0) -- (1,0); \\\\ Draw the axes \\draw[latex-latex] (-1,0) -- (5,0); \\draw[latex-latex] (0,-1) -- (0,4); \\\\ Plot the function \\draw [thick,domain=-1:4.5] plot ({\\x},{cos(\\x r)+2}); \\node [thick,above right] at (4.5,{cos(4.5 r) + 2}){$f$}; \\\\ Draw the boundaries \\draw[red] (1,3) -- (1,-0.25) node [below] {$a$}; \\draw[red] (3,3) -- (3,-0.25) node [below] {$b$}; \\\\ Label the area \\draw[&lt;- , very thick] (2,0.5) -- (2.2,-1) node[below] {area between $f$ and $x$-axis over $[a,b]$}; \\end{tikzpicture} <\/latex-image> <\/image> <\/sidebyside>   "
},
{
  "id": "activity-1",
  "level": "2",
  "url": "ch-exercises.html#activity-1",
  "type": "Activity",
  "number": "4.4.1",
  "title": "",
  "body": "  Nest the following PreTeXt elements in order to produce the Graphing a Derivative subsection of OpenStax Calculus Volume 1 Section 3.2 .   <caption>The derivative <m>f'(x)<\/m> is positive everywhere because the function <m>f(x)<\/m> is increasing.<\/caption> <caption>The derivative <m>f'(x)\\lt 0<\/m> where the function <m>f(x)<\/m> is decreasing and <m>f'(x)\\gt 0<\/m> where <m>f(x)<\/m> is increasing...<\/caption> <description>The function f(x) = the square root of x is graphed as is its derivative f'(x) = 1\/(2 times the square root of x).<\/description> <description>Two functions are graphed here: f(x) and f'(x). The function f(x) is the same as the above graph, that is, roughly sinusoidal, starting at (-4, 3), decreasing to a local minimum at (-2, 2), then increasing to a local maximum at (3, 6), and getting cut off at (7, 2). The function f'(x) is an downward-facing parabola with vertex near (0.5, 1.75), y-intercept (0, 1.5), and x-intercepts (-1.9, 0) and (3, 0).<\/description> <description>The function f(x) = x squared - 2x is graphed as is its derivative f'(x) = 2x - 2.<\/description> <description>The function f(x) is roughly sinusoidal, starting at (-4, 3), decreasing to a local minimum at (-2, 2), then increasing to a local maximum at (3, 6), and getting cut off at (7, 2).<\/description> <example><\/example> <exercise><\/exercise> <figure><\/figure> <figure><\/figure> <image source=\"solution-image.jpg\"><\/image> <image source=\"fx-sqrt-x.jpg\"><\/image> <image source=\"exercise-image.jpg\"><\/image> <image source=\"fx-x2-2x.jpg\"><\/image> <p>We have already discussed how to graph a function...<\/p> <p>In Example 3.12 we found that for <m>f(x)=x^2-2x,f'(x)=2x-2<\/m>...<\/p> <p>Sketch the graph of <m>f(x)=x^2-4<\/m>...<\/p> <p>In Example 3.11 we found that for <m>f(x)=\\sqrt{x},f'(x)=1\/2\\sqrt{x}<\/m>...<\/p> <p>The solution is shown in the following graph. Observe that...<\/p> <p>Use the following graph of <m>f(x)<\/m> to sketch a graph of <m>f'(x)<\/m>.<\/p> <solution><\/solution> <statement><\/statement> <statement><\/statement> <subsection><\/subsection> <title>Graphing a Derivative<\/title> <title>Sketching a Derivative Using a Function<\/title>    "
},
{
  "id": "activity-2",
  "level": "2",
  "url": "ch-exercises.html#activity-2",
  "type": "Activity",
  "number": "4.4.2",
  "title": "",
  "body": "  Consider the following concerning the first two pages (leading up until the Units header) of Elements of Abstract and Linear Algebra .    Consider how this content might be scaffolded in terms of paragraphs, theorems, statements, proofs, and so on (not necessarily in PreTeXt terms).    Nest the following PreTeXt elements in order to reproduce this portion of Elements .   <definition><\/definition> <example><\/example> <introduction><\/introduction> <li><p>If <m>a,b,c\\in R<\/m>... (associative)<\/p><\/li> <li><p><m>(-a)\\cdot b=a\\cdot(-b)=-(a\\cdot b)<\/m>.<\/p><\/li> <li><p>If <m>a,b,c\\in R<\/m>... (distribuative)<\/p><\/li> <li><p><m>(na)\\cdot(mb)=(nm)(a\\cdot b)<\/m>...<\/p><\/li> <li><p><m>a\\cdot \\underline{0}=\\underline{0}\\cdot=\\underline{0}<\/m>...<\/p><\/li> <li><p><m>R<\/m> has a multiplicative identity...<\/p><\/li> <li><p>Let <m>\\underline{n}=n\\underline{1}<\/m>. For example...<\/p><\/li> <li><p>If <m>a,b\\in R<\/m>... (commutative)<\/p><\/li> <p>Suppose <m>R<\/m> is an additive abelian group...<\/p> <p>The next two theorems show that ring mulitplication...<\/p> <p>Suppose <m>R<\/m> is a ring and <m>a,b\\in R<\/m>.<\/p> <p>Suppose <m>a,b\\in R<\/m> and <m>n,m\\in \\mathbf Z<\/m>.<\/p> <p>Rings are additive abelian groups with a second operation...<\/p> <p>The basic commutative rings in mathematics are the integers <m>\\mathbf Z<\/m>...<\/p> <p>Recall that, since <m>R<\/m> is an additive abelien group...<\/p> <p>If 1,2,3 are satisfied...<\/p> <p><ol><\/ol><\/p> <p><ol><\/ol><\/p> <p><ol><\/ol><\/p> <section><\/section> <statement><\/statement> <statement><\/statement> <statement><\/statement> <theorem><\/theorem> <title>Rings<\/title> <theorem><\/theorem> <statement><\/statement>    "
},
{
  "id": "ch-publication",
  "level": "1",
  "url": "ch-publication.html",
  "type": "Chapter",
  "number": "5",
  "title": "Publishing",
  "body": " Publishing    By publishing , we mean here the process of finalizing the presentation and look of the output you get from PreTeXt. We stress again the philosophical distinction between author and publisher in PreTeXt , since there is great value in focusing on just one of these two types of tasks at a time.  Another aspect of the publishing process is that of creating the physical book and making it available in bookstores, or making the the web version available on your own website. The latter can be done automatically through GitHub pages using the pretext deploy function, but perhaps you also want to have a separate landing page that links to a version of the book you are celling on Amazon.com. However, these steps are beyond the scope of this guide (as for suggestions on the PreTeXt-support group if you would like some assistance getting started with these steps).  For this chapter we will assume you are trying to produce a single version of your book and want to control the presentation and look of that version. You can still produce this version in multiple formats (web, pdf, epub), and which you want to produce might change what you do slightly.    The publication file   PreTeXt controls publisher options in a publication file . The default location of this file is in the folder publication and is itself called publication.ptx . Open this file and take a look.  What you will see is more XML , but a different set of tags than what you would write in your PreTeXt source. The version of the publication file that came with your codespace was (at the one time) the almost complete list of options with default values provided. This should make it easy to modify values and experiment with different settings.  As new settings are introduced, you can find documentation ins the Publication File Reference part of the guide.   Eventually you may want to have different versions of your document, and you can do this with different publication files. In we will consider how to manage multiple publication files easily.   Next we will dive deeper into the different sorts of things that can be configured with this file.    Showing and Hiding things  We have seen that some blocks , like proofs, solutions, examples, are sometimes hidden behind a knowl : when you click on the title, the content expands to reveal itself. Most of the blocks can be knowled or not.  To edit these settings, look for the element <html> , and inside that <knowl\/> . This element has a number of attributes (the PreTeXt guide marks attributes with the @ symbol, by the way). You can specify whether elements should be knowled or not by changing the value of the attributes between yes and no.  Whether exercises are knowled depends on the type of exercises. PreTeXt distinguishes five types of exercise-like elements, since they have hints\/answers\/solutions that you might want to hide:   inline, which show up as checkpoints ; these are exercises mixed with other content in a divisions.    divisional; these are exercises that belong to an <exercises> division.    project; these are the entire project-like element like <activity> , <investigation> etc.    worksheet; essentially a project but its a division itself, and can contain spacing for students to work in when printed.    readingquestions; these are questions in a <reading-questions> division. These were exercises designed to get a text box that students can type short answers to questions at the end of a section.     You can control whether the entire exercise-like element is knowled, but their hints\/answers\/solutions are always knowled (no spoilers!). The only solution you can can choose to not knowl is that of an example, and that is controlled by these knowl switches.  You can, however, control which parts of exercises show up at all. This is set in a different section of the publication file: publication\/common\/exercise-inline (that is, in the <common> block in the <exercise-inline> element). You can replace exercise-inline by any of the five exercise types. Then as attributes, specify yes or no for the statement , hint , answer , solution .  This controls what shows up in the output, in all formats, at the position that the exercise was authored. There are also ways to redisplay any parts of these exercises later, to give a list of all solutions in the back of the book, say. See Exercises and Solutions from the guide.    Numbering  There are a few settings that control how things are numbered. Most of these live inside the <numbering> element of the publication file.   The <division\/> element and its attributes says how deep the numbering goes (i.e., do you put numbers on subsubsection?). This is set as a natural number as the value of the level attribute.    Also in this element you can specify whether parts are structural or decorative . This essentially says whether chapter number should restart in each part.    You can also set the number of the first chapter here using the chapter-start attribute.    There are four different types of elements that can be numbered independently: blocks , projects , equations , and footnotes . You can control how specific the numbering are for each of these by giving the corresponding element a level attribute.       Formatting  While there are some ways to control the look of the pdf, that is beyond the scope of this guide. Web output can be controlled more easily, selecting from a small number of predefined styles.  This is a feature that is currently under active development, so we will not say much here, but instead refer you again to the Publication File Reference part of the guide.   "
},
{
  "id": "p-147",
  "level": "2",
  "url": "ch-publication.html#p-147",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "publishing author publisher "
},
{
  "id": "p-149",
  "level": "2",
  "url": "ch-publication.html#p-149",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "version formats "
},
{
  "id": "p-150",
  "level": "2",
  "url": "ch-publication.html#p-150",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "publication file "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "ch-publication.html#remark-1",
  "type": "Remark",
  "number": "5.1.1",
  "title": "",
  "body": " Eventually you may want to have different versions of your document, and you can do this with different publication files. In we will consider how to manage multiple publication files easily.  "
},
{
  "id": "p-155",
  "level": "2",
  "url": "ch-publication.html#p-155",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "blocks knowl "
},
{
  "id": "p-156",
  "level": "2",
  "url": "ch-publication.html#p-156",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "attributes "
},
{
  "id": "p-166",
  "level": "2",
  "url": "ch-publication.html#p-166",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "structural decorative blocks projects equations footnotes "
},
{
  "id": "ch-project",
  "level": "1",
  "url": "ch-project.html",
  "type": "Chapter",
  "number": "6",
  "title": "Managing Your Project",
  "body": " Managing Your Project   File and directory structure  Here we describe the file and directory structure of a project. PreTeXt allows a fair amount of flexibility in how you structure the project, but we believe the following are best practices.   source folder  Contains all your .ptx files that hold the content of your document. A new book starts with just a single file, but later we will see how to modularize the source to make organizing it easier.    publication folder  Contains your publication.ptx file or files, which define the publication-specific information about your document, as we saw in     assets folder  Put any images or other static files that you will include in your document here. This does not include images that you describe inside your source (like <latex-image> ). You can have subfolders as you like, and if you refer to these files in your source, you do not use assets as part of the file name ( PreTeXt knows where to look, since this is specified in the publication.ptx file.)    generated-assets folder  This is a folder that PreTeXt automatically creates and fills with assets that it generates from your source. You shouldn't edit anything in this folder. It is not tracked by git by default.    output folder  Another folder created by PreTeXt . It will contain the results of pretext build . In general, you should not touch anything in this folder. Not tracked by git by default.    project.ptx file  This is the project manifest file, which you use to manage the different builds of your project. We will describe how to use this in more detail below.     There are a few other files that you might see in a project, such as requirements.txt and .gitignore . Don't worry about these for now.  When your project grows, you will likely want to separate your main.ptx source file (inside the source folder) into multiple .ptx files. For example, you might want a single file per chapter, and even a separate file for each section. You can do this by using the <xi:include> tag. For example, if you have a file source\/chapter1.ptx that contains the first chapter of your book, you can include it in your main.ptx file like this:  <xi:include href=\".\/chapter1.ptx\" \/>  In the top level tag of the file in which you use <xi:include> (in this case, main.ptx ), you must add the following attribute:  xmlns:xi=\"http:\/\/www.w3.org\/2001\/XInclude\"    Then in the chapter1.ptx file, you would start with the standard <?xml version=\"1.0\" encoding=\"UTF-8\"?> followed by the top-level tag <chapter> . There can only be one top level tag in this file. A second chapter would need to be its own file and <xi:include> it separately.  More information can be found in the Modular Source Files section of the guide.    Project.ptx  You will likely want to build your source file into multiple output formats. How do you tell PreTeXt what outputs you want? You keep track of this, and some other information, in your project.ptx file.  The project.ptx file is a project manifest file. It is used to manage the different builds of your project. It is a .ptx file, but it is not part of the content of your document. It is used to tell PreTeXt how to build your document.  For now, take a look at the project.ptx file in this project. You will see that there are multiple targets each with a name , and a specified <format> , <source> , <publication> (file), and <output-dir> (directory). The <source> and <publication> are probably the same for all targets, but they don't have to be.  For a complete description of this file and its use, see .    Versions    Building subsets    Codespaces, GitHub, and GitHub Pages   "
},
{
  "id": "p-173",
  "level": "2",
  "url": "ch-project.html#p-173",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "project manifest "
},
{
  "id": "p-185",
  "level": "2",
  "url": "ch-project.html#p-185",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "project manifest "
},
{
  "id": "p-186",
  "level": "2",
  "url": "ch-project.html#p-186",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "targets name "
},
{
  "id": "ch-converting-to-pretext",
  "level": "1",
  "url": "ch-converting-to-pretext.html",
  "type": "Chapter",
  "number": "7",
  "title": "Converting To PreTeXt",
  "body": " Converting To PreTeXt   Suppose you have materials written in another format, such as MS Word or latex , and would like to convert these to PreTeXt . Alas, there is not a perfect way to make this happen, but what follows is some general advice to get you started. We would love to hear what sort of workflow you would like to see so we can improve this experience.   Your goal in doing a conversion should be to move all your materials into PreTeXt and then always work from the PreTeXt source, converting back to other formats as needed. It is simply not feasible to keep converting to PreTeXt , since this process is not automatic.     Using Pandoc  If you have a number of individual documents that you would like to convert, from pretty much any format, consider trying Pandoc . This command-line tool can read in lots of different formats and output in lots of different formats. Unfortunately, PreTeXt is not a default output format, so you need to use a custom writer .  The pretext-tools VS Code extension has a shortcut for using the custom writer and pandoc, assuming you have pandoc installed (which you will if you use a codespace). You will need to upload the file you want to convert, either by dragging it to the Explorer menu in VS Code. Then open the Command Pallet with CTRL+SHIFT+P and start typing pretext: convert file to pretext and select the item to shows up. You will be prompted for the name of the file you want to convert. The file will be converted and opened in a new tab. You can then copy\/paste the contents into your main documents.  You can also use Pandoc outside of VS Code. Install pandoc from their website. Then download the this writer and put it somewhere you will remember. Documentation for how to use this tool is available on its GitHub repository .    Using the community  If you have a mostly complete project, written entirely in not-too-customized latex , David Farmer has volunteered to help you convert the entire project to likely 90% correct working PreTeXt . See for details.    By hand  If you have some familiarity with Regex, you can use VS Code's find\/replace tools to clean up text that you copied\/pasted into your document. For example, if you entered \\$(.*?)\\$ in the search bar (with the .* setting selected), and put <m>$1<\/m> in the replace box, you can easily replace all math in your document with the correct syntax.   "
},
{
  "id": "warning-1",
  "level": "2",
  "url": "ch-converting-to-pretext.html#warning-1",
  "type": "Warning",
  "number": "7.0.1",
  "title": "",
  "body": " Your goal in doing a conversion should be to move all your materials into PreTeXt and then always work from the PreTeXt source, converting back to other formats as needed. It is simply not feasible to keep converting to PreTeXt , since this process is not automatic.  "
},
{
  "id": "p-190",
  "level": "2",
  "url": "ch-converting-to-pretext.html#p-190",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "writer "
},
{
  "id": "ch-help",
  "level": "1",
  "url": "ch-help.html",
  "type": "Appendix",
  "number": "A",
  "title": "Getting Help",
  "body": " Getting Help  Here we collect a number of useful resources to help you when you are stuck. The official PreTeXt site has lots of resources, but we understand it can be overwhelming.   Official documentation  Note that the official PreTeXt Guide can be hard to use because there is so much stuff in it. Additionally, some of the documentation is out of date. Still, if you know where to look, it is a great resource.  Here are some sections that we find especially helpful:    Basics Reference : A listing of the main elements of PreTeXt including snippets of the code that create them. This is one of the few places in the guide that has examples of the markup.     Publication File Reference : When you are ready to start changing how your output looks, you can use the publication file , which is described in this part of the guide.     PreTeXt Schema : The official list of elements and where they can go is given in the PreTeXt Schema, which is described here. Also you can check out the schema browser to actually view the schema.     Getting PreTeXt : If you want to install PreTeXt on your own computer, this early part of the guide gives you directions. It should be updated with information on CodeSpaces soon as well, if you need a refresher.   Finally, note that the search in PreTeXt now works really well, and searching for a feature will usually get you pointed in the right spot.    Examples  The Examples page on the PreTeXt site contains a number of useful live examples. Links are provided to web, pdf, and source (on GitHub). For some of the examples, there is also an annotated version available. We find these especially helpful since you can view source to see exactly how each bit of the example was marked up in code.  Here are some of the most useful such examples:    Sample Book : This annotated sample book contains a section on interactive exercises . The PreTeXt developers use this book for testing, so you can see the latest (sometimes experimental) features available.     Sample Article : Not particularly well organized (it is also a proving ground for developers) but this contains almost every variation of every feature of PreTeXt . Using the search and view source makes this an invaluable resource.       Community Support  There is a very active google group for support: pretext-support . You should also subscribe to the low-traffic pretext-announce to get updates.  This spring we will host daily virtual drop-in sessions to support authoring and devlopement of PreTeXt. Information will be posted to the pretext-announce google group.   "
},
{
  "id": "p-197",
  "level": "2",
  "url": "ch-help.html#p-197",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "publication file "
},
{
  "id": "appendix-2",
  "level": "1",
  "url": "appendix-2.html",
  "type": "Appendix",
  "number": "B",
  "title": "Copyright and Licensing",
  "body": " Copyright and Licensing  copyright 2023 Steven Clontz and Oscar Levin.  This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit CreativeCommons.org   "
},
{
  "id": "appendix-3",
  "level": "1",
  "url": "appendix-3.html",
  "type": "Appendix",
  "number": "C",
  "title": "Acknowledgement",
  "body": " Acknowledgement  We would like to thank the American Institute of Mathematics for sponsoring us to present this Professional Enhancement Program at the 2023 Joint Mathematics Meeting.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
