var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "  Note  This JMM Professional Enhancement Program will be held on Thursday, January 5 between 9 am - 11 am and Saturday, January 7 between 9 am - 11 am in Salon CD on the fourth floor of the Boston Marriott Copley Place.    PreTeXt is a document authoring system that allows you to convert the source of your document into a variety of output formats, including fully accessible webpages, PDF, Epub, Jupyter Notebooks, and braille. This “write once, read anywhere” approach has made it a popular choice for authors of Open Educational Resources, but PreTeXt can also be used to create other kinds of mathematical documents as well. Recent updates make this process much easier; there has never been a better time to get started with PreTeXt.  Participants of this PEP will be introduced to the fundamentals of authoring documents with PreTeXt and gain the technical skills required to work with it. Specifically, participants will learn how to:    Use GitHub Codespaces to create an editable PreTeXt document in their web browser.  Write and structure content using PreTeXt markup.  Add content to the document, including mathematics, graphics, interactive exercises, and more.  Build accessible and interactive webpages as well as a static PDF from the same PreTeXt source.  Easily deploy the interactive webpages online (for free).    We will also share tips for converting existing documents into PreTeXt.  Prior to the PEP, participants should have some familiarity with LaTeX or other markup languages. No previous experience working with PreTeXt or HTML\/XML is assumed. Participants should bring a laptop that can connect to JMM's provided wifi: no prior installations will be required as we will use PreTeXt's new GitHub Codespace-powered online authoring service.  "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Setting up your GitHub account",
  "body": " Setting up your GitHub account  To create a GitHub account, follow the instructions on GitHub's signup page.   Be sure to note your GitHub username and password in your password manager (or however you usually keep track of login credentials) so you can log in again at the Joint Mathematics Meetings.  "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Apply for your GitHub Education discount",
  "body": " Apply for your GitHub Education discount  Educators and non-profit researchers can get many of GitHub's paid features for free.  Apply at Education.GitHub.com to unlock these features (in our experience, applications are usually processed quickly for .edu email addresses).  "
},
{
  "id": "section-3",
  "level": "1",
  "url": "section-3.html",
  "type": "Section",
  "number": "1.3",
  "title": "And that's it!",
  "body": " And that's it!  Even just a couple months ago, the process to get started writing PreTeXt involved several more steps. (Raise your hand if you don't care what a PATH variable is!)  The community is streamlining this experience daily, and we look forward to sharing how easy writing in PreTeXt is when we meet you at the JMM!  "
},
{
  "id": "sec-setting-up-codespaces",
  "level": "1",
  "url": "sec-setting-up-codespaces.html",
  "type": "Section",
  "number": "2.1",
  "title": "Setting up Codespaces",
  "body": " Setting up Codespaces  A Codespace is an authoring environment that lives in the cloud , that is, a virtual machine hosted by GitHub that has all of the software needed to create great accessible documents, accessible with just a web browser.  This coding environment uses a web version of Virtual Studio Code, an open-source editor, along with the PreTeXt community's custom plugins and software to get started authoring quickly.  Follow the instructions at to get started. Let this run for a few minutes in the background while you review the rest of this section.  "
},
{
  "id": "p-20",
  "level": "2",
  "url": "sec-setting-up-codespaces.html#p-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Codespace "
},
{
  "id": "sec-principles",
  "level": "1",
  "url": "sec-principles.html",
  "type": "Section",
  "number": "2.2",
  "title": "PreTeXt Principles",
  "body": " PreTeXt Principles  A more detailed monograph on PreTeXt's philosophy is availabe in the PreTeXt Guide.   PreTeXt Principles   PreTeXt is a markup language that captures the structure of textbooks and research papers.  PreTeXt is human-readable and human-writable.  PreTeXt documents serve as a single source which can be easily converted to multiple other formats, current and future.  PreTeXt respects the good design practices which have been developed over the past centuries.  PreTeXt makes it easy for authors to implement features which are both common and reasonable.  PreTeXt supports online documents which make use of the full capabilities of the Web.  PreTeXt output is styled by selecting from a list of available templates, relieving the author of the burden involved in micromanaging the output format.  PreTeXt is free: the software is available at no cost, with an open license. The use of PreTeXt does not impose any constraints on documents prepared with the system.  PreTeXt is not a closed system: documents can be converted to latex and then developed using standard latex tools.  PreTeXt recognizes that scholarly documents involve the interaction of authors, publishers, scholars, curators, instructors, students, and readers, with each group having its own needs and goals.  PreTeXt recognizes the inherent value in producing material that is accessible to everyone.    "
},
{
  "id": "list-principles",
  "level": "2",
  "url": "sec-principles.html#list-principles",
  "type": "List",
  "number": "2.2.1",
  "title": "PreTeXt Principles",
  "body": " PreTeXt Principles   PreTeXt is a markup language that captures the structure of textbooks and research papers.  PreTeXt is human-readable and human-writable.  PreTeXt documents serve as a single source which can be easily converted to multiple other formats, current and future.  PreTeXt respects the good design practices which have been developed over the past centuries.  PreTeXt makes it easy for authors to implement features which are both common and reasonable.  PreTeXt supports online documents which make use of the full capabilities of the Web.  PreTeXt output is styled by selecting from a list of available templates, relieving the author of the burden involved in micromanaging the output format.  PreTeXt is free: the software is available at no cost, with an open license. The use of PreTeXt does not impose any constraints on documents prepared with the system.  PreTeXt is not a closed system: documents can be converted to latex and then developed using standard latex tools.  PreTeXt recognizes that scholarly documents involve the interaction of authors, publishers, scholars, curators, instructors, students, and readers, with each group having its own needs and goals.  PreTeXt recognizes the inherent value in producing material that is accessible to everyone.   "
},
{
  "id": "sec-xml",
  "level": "1",
  "url": "sec-xml.html",
  "type": "Section",
  "number": "2.3",
  "title": "PreTeXt is XML",
  "body": " PreTeXt is XML  Since PreTeXt uses the XML markup language, all content is structured in terms of elements . The root pretext element nests many other elements inside of it. This is accomplished by surrounding everything with a starting <pretext>  tag and an ending <\/pretext> tag. (Folks with HTML experience will find this pattern familiar, akin to the HTML root element.)   is a very simple PreTeXt \/XML document. (The first line is boilerplate that lets various programs know the rest of the file is XML, and the third-to-last line is an example of a comment that won't appear in the output.)   Source of a simple PreTeXt book project.   <?xml version=\"1.0\" encoding=\"UTF-8\"?> <pretext> <article> <title>Hello world!<\/title> <p>Welcome to PreTeXt!<\/p> <!-- TODO: find something more to say... --> <\/article> <\/pretext>    "
},
{
  "id": "p-24",
  "level": "2",
  "url": "sec-xml.html#p-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elements tag "
},
{
  "id": "listing-simple",
  "level": "2",
  "url": "sec-xml.html#listing-simple",
  "type": "Listing",
  "number": "2.3.1",
  "title": "",
  "body": " Source of a simple PreTeXt book project.   <?xml version=\"1.0\" encoding=\"UTF-8\"?> <pretext> <article> <title>Hello world!<\/title> <p>Welcome to PreTeXt!<\/p> <!-- TODO: find something more to say... --> <\/article> <\/pretext>   "
},
{
  "id": "sec-divisions",
  "level": "1",
  "url": "sec-divisions.html",
  "type": "Section",
  "number": "2.4",
  "title": "Books and Divisions",
  "body": " Books and Divisions  There are several documents you can write in PreTeXt , such as <article> s and <slideshow> s. This tutorial will focus on <book> s.  A <book> typically includes <frontmatter> , and <backmatter> .  Between <frontmatter> , and <backmatter> are either several <chapter> s or <part> s. If used, <part> s are subdivided into <chapter> s. Then <chapter> s subdivide into <section> s, and <section> s can have <subsection> s.  Each of these subdivisions needs a <title> , and may have an <introduction> or <conclusion> .   puts some of these elements together for a simple PreTeXt project (information on the other elements will come in later sections).   Source of a simple PreTeXt book project.   <?xml version=\"1.0\" encoding=\"UTF-8\"?> <pretext xml:lang=\"en-US\"> <!-- (author configurations go in docinfo) --> <docinfo> <macros> \\newcommand{\\R}{\\mathbb R} <\/macros> <\/docinfo> <book xml:id=\"my-great-book\"> <title>My Great Book<\/title> <subtitle>An example to get you started<\/subtitle> <frontmatter xml:id=\"frontmatter\"> <titlepage> <author> <personname>You<\/personname> <department>Your department<\/department> <institution>Your institution<\/institution> <\/author> <date> <today \/> <\/date> <\/titlepage> <\/frontmatter> <chapter xml:id=\"chapter-welcome\"> <title>Welcome!<\/title> <introduction> <p>This chapter is about the real numbers <m>\\R<\/m><\/p> <\/introduction> <section xml:id=\"section-getting-started\"> <title>Let's get started<\/title> <p>Can you solve <m>ax^2+bx+c=0<\/m>?<\/p> <\/section> <section xml:id=\"section-learning-more\"> <title>But wait, there's more!<\/title> <p>Did you know that <me>x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}<\/me>?<\/p> <\/section> <\/chapter> <backmatter xml:id=\"backmatter\"> <title>Backmatter<\/title> <colophon> <p> This book was authored in <pretext \/>. <\/p> <\/colophon> <\/backmatter> <\/book> <\/pretext>    "
},
{
  "id": "listing-book-source",
  "level": "2",
  "url": "sec-divisions.html#listing-book-source",
  "type": "Listing",
  "number": "2.4.1",
  "title": "",
  "body": " Source of a simple PreTeXt book project.   <?xml version=\"1.0\" encoding=\"UTF-8\"?> <pretext xml:lang=\"en-US\"> <!-- (author configurations go in docinfo) --> <docinfo> <macros> \\newcommand{\\R}{\\mathbb R} <\/macros> <\/docinfo> <book xml:id=\"my-great-book\"> <title>My Great Book<\/title> <subtitle>An example to get you started<\/subtitle> <frontmatter xml:id=\"frontmatter\"> <titlepage> <author> <personname>You<\/personname> <department>Your department<\/department> <institution>Your institution<\/institution> <\/author> <date> <today \/> <\/date> <\/titlepage> <\/frontmatter> <chapter xml:id=\"chapter-welcome\"> <title>Welcome!<\/title> <introduction> <p>This chapter is about the real numbers <m>\\R<\/m><\/p> <\/introduction> <section xml:id=\"section-getting-started\"> <title>Let's get started<\/title> <p>Can you solve <m>ax^2+bx+c=0<\/m>?<\/p> <\/section> <section xml:id=\"section-learning-more\"> <title>But wait, there's more!<\/title> <p>Did you know that <me>x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}<\/me>?<\/p> <\/section> <\/chapter> <backmatter xml:id=\"backmatter\"> <title>Backmatter<\/title> <colophon> <p> This book was authored in <pretext \/>. <\/p> <\/colophon> <\/backmatter> <\/book> <\/pretext>   "
},
{
  "id": "sec-paragraphs",
  "level": "1",
  "url": "sec-paragraphs.html",
  "type": "Section",
  "number": "2.5",
  "title": "Paragraphs, Lists, and Blocks",
  "body": " Paragraphs, Lists, and Blocks  Within each division (chapter, section, etc., see ) of your book, you likely want some content (e.g. what you're reading right now!).  Written content is usually structured as paragraphs , <p> for short. If you've ever written HTML , this tag may be familiar to you, but be warned: while PreTeXt is XML ( ), PreTeXt is not HTML ! There is some overlap: you can emphasize words or phrases with <em> for instance. However, while HTML uses the full word code for its tag, PreTeXt uses the shortened <c> tag.  Note that these elements are all semantic : they express the meaning of content, not its presentation. For example, the word semantic was a <term> we just defined, while we merely emphasized meaning with <em> . The presentation of these concepts may vary by output format, likely using some combination of boldface, italics, or underlining.   Heads up!  We'll talk about customizing presentation later, but it's important to remember that the PreTeXt community separates such publication decisions away from the work of authoring content.   For users coming from LaTeX, rest assured your mathematical formulas work in PreTeXt . Inline mathmode is invoked with <m>ax^2+bx+c=0<\/m> , while display mathematics like is available via <me>x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}<\/me> . (Users from LaTeX will also appreciate that quotes are surrounded with <q> in PreTeXt to handle the different way quotation marks are handled in LaTeX vs most other markup languages.)  You may also have lists withinn paragraphs, ordered <ol> and unordered <ul> , nested as needed. Each list item is represented by <li> .   A single item.    An item with an ordered list.   First item.    Second item.        Of course, often you have important blocks of content to include, such as <definition> s or <claim> s.     PreTeXt is an uncomplicated XML language for describing scholarly documents.      PreTeXt is the language that will replace LaTeX for authors.    Left to the reader.    Such content is automatically numbered appropriately. Each of the blocks above is structured with a <statement> , and additionally features a <proof> .  Content is often knowled . A knowl is a piece of context-independent information that is useful to transclude elsewhere in the HTML build of your document. For example, in the HTML build for this document, the above proof is knowled by default, and clicking the referenced Claim in the previous paragraph expands its knowl to reveal the claim for the reader.   Because this document was edited directly on GitHub using Codespaces, and served with GitHub pages, finding its source is simple: head to its repository and find the corresponding source file . Check the link out to see exactly how each claim, list, etc. in this chapter was marked up!    "
},
{
  "id": "p-32",
  "level": "2",
  "url": "sec-paragraphs.html#p-32",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "paragraphs "
},
{
  "id": "p-33",
  "level": "2",
  "url": "sec-paragraphs.html#p-33",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "semantic "
},
{
  "id": "p-41",
  "level": "2",
  "url": "sec-paragraphs.html#p-41",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "blocks "
},
{
  "id": "def-pretext",
  "level": "2",
  "url": "sec-paragraphs.html#def-pretext",
  "type": "Definition",
  "number": "2.5.1",
  "title": "",
  "body": "   PreTeXt is an uncomplicated XML language for describing scholarly documents.   "
},
{
  "id": "claim-pretext",
  "level": "2",
  "url": "sec-paragraphs.html#claim-pretext",
  "type": "Claim",
  "number": "2.5.2",
  "title": "",
  "body": "  PreTeXt is the language that will replace LaTeX for authors.    Left to the reader.   "
},
{
  "id": "p-46",
  "level": "2",
  "url": "sec-paragraphs.html#p-46",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "knowl "
},
{
  "id": "note-1",
  "level": "2",
  "url": "sec-paragraphs.html#note-1",
  "type": "Note",
  "number": "2.5.3",
  "title": "",
  "body": " Because this document was edited directly on GitHub using Codespaces, and served with GitHub pages, finding its source is simple: head to its repository and find the corresponding source file . Check the link out to see exactly how each claim, list, etc. in this chapter was marked up!   "
},
{
  "id": "sec-figures",
  "level": "1",
  "url": "sec-figures.html",
  "type": "Section",
  "number": "2.6",
  "title": "Figures and Diagrams",
  "body": " Figures and Diagrams   Photograph taken from AIM Press Release on braille, provided as a JPEG in the project assets directory.   Photograph of a hand tracing over braille code. A cartoon thought bubble contains the quadratic formula in standard mathematical notation, matching the contents of the braille code in the photograph.     Electronics Diagram generated with Tikz code   A pile of electronic components wired together      Contour Plot generated from Asymptote code       Work Cone generated from Asymptote code       Polynomial approximations of generated from SageMath code       An implicitly defined 3D surface generated with SageMath code      "
},
{
  "id": "figure-braille",
  "level": "2",
  "url": "sec-figures.html#figure-braille",
  "type": "Figure",
  "number": "2.6.1",
  "title": "",
  "body": " Photograph taken from AIM Press Release on braille, provided as a JPEG in the project assets directory.   Photograph of a hand tracing over braille code. A cartoon thought bubble contains the quadratic formula in standard mathematical notation, matching the contents of the braille code in the photograph.   "
},
{
  "id": "figure-tikz-electronics",
  "level": "2",
  "url": "sec-figures.html#figure-tikz-electronics",
  "type": "Figure",
  "number": "2.6.2",
  "title": "",
  "body": " Electronics Diagram generated with Tikz code   A pile of electronic components wired together    "
},
{
  "id": "figure-asymptote-contour-plot",
  "level": "2",
  "url": "sec-figures.html#figure-asymptote-contour-plot",
  "type": "Figure",
  "number": "2.6.3",
  "title": "",
  "body": " Contour Plot generated from Asymptote code     "
},
{
  "id": "figure-asymptote-workcone",
  "level": "2",
  "url": "sec-figures.html#figure-asymptote-workcone",
  "type": "Figure",
  "number": "2.6.4",
  "title": "",
  "body": " Work Cone generated from Asymptote code     "
},
{
  "id": "figure-sage-polynomial-approximation",
  "level": "2",
  "url": "sec-figures.html#figure-sage-polynomial-approximation",
  "type": "Figure",
  "number": "2.6.5",
  "title": "",
  "body": " Polynomial approximations of generated from SageMath code     "
},
{
  "id": "figure-sage-implicit-surface",
  "level": "2",
  "url": "sec-figures.html#figure-sage-implicit-surface",
  "type": "Figure",
  "number": "2.6.6",
  "title": "",
  "body": " An implicitly defined 3D surface generated with SageMath code     "
},
{
  "id": "sec-interactives",
  "level": "1",
  "url": "sec-interactives.html",
  "type": "Section",
  "number": "2.7",
  "title": "Interactives",
  "body": " Interactives   Right Triangle Paradox powered by Geogebra     Graph of powered by Desmos     Intersection of two planes powered by CalcPlot3D     Fourier: Making Waves powered by PhET Interactive Simulations    "
},
{
  "id": "figure-geogebra",
  "level": "2",
  "url": "sec-interactives.html#figure-geogebra",
  "type": "Figure",
  "number": "2.7.1",
  "title": "",
  "body": " Right Triangle Paradox powered by Geogebra   "
},
{
  "id": "figure-8",
  "level": "2",
  "url": "sec-interactives.html#figure-8",
  "type": "Figure",
  "number": "2.7.2",
  "title": "",
  "body": " Graph of powered by Desmos   "
},
{
  "id": "figure-intersecting-planes",
  "level": "2",
  "url": "sec-interactives.html#figure-intersecting-planes",
  "type": "Figure",
  "number": "2.7.3",
  "title": "",
  "body": " Intersection of two planes powered by CalcPlot3D   "
},
{
  "id": "figure-phet-fourier",
  "level": "2",
  "url": "sec-interactives.html#figure-phet-fourier",
  "type": "Figure",
  "number": "2.7.4",
  "title": "",
  "body": " Fourier: Making Waves powered by PhET Interactive Simulations   "
},
{
  "id": "sec-exercises",
  "level": "1",
  "url": "sec-exercises.html",
  "type": "Section",
  "number": "2.8",
  "title": "Authoring an Exercise",
  "body": " Authoring an Exercise  Manually-authored exercise What is ? We're being a bit tricky here... , where is the concatenation operator.  Using WebWork   Compute  The sum is .              was taken from Linear Algebra for Team-Based Inquiry Learning .  Generated by CheckIt  Consider the following system of linear equations.    Explain how to find a simpler system or vector equation that has the same solution set.       Explain how to describe this solution set using set notation.   The solution set is .   Runestone-powered True\/False Question  This statement is true or false.   Feedback goes here.   Runestone-powered Matching Problem  A multiple choice question     right answer 1    answer specific feedback      right answer 1    answer specific feedback      wrong answer 1    answer specific feedback      wrong answer 2    answer specific feedback     Runestone-powered Parsons Problem  Rearrange the blocks in alphebetical order       A    B    C    D         Runestone-powered Matching Problem  Match the letters with their order in the alphabet    A  1    B  2    C  3    "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "sec-exercises.html#exercise-1",
  "type": "Checkpoint",
  "number": "2.8.1",
  "title": "Manually-authored exercise.",
  "body": "Manually-authored exercise What is ? We're being a bit tricky here... , where is the concatenation operator. "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "sec-exercises.html#exercise-2",
  "type": "Checkpoint",
  "number": "2.8.2",
  "title": "Using WebWork.",
  "body": "Using WebWork   Compute  The sum is .             "
},
{
  "id": "exercise-checkit",
  "level": "2",
  "url": "sec-exercises.html#exercise-checkit",
  "type": "Checkpoint",
  "number": "2.8.3",
  "title": "Generated by CheckIt.",
  "body": "Generated by CheckIt  Consider the following system of linear equations.    Explain how to find a simpler system or vector equation that has the same solution set.       Explain how to describe this solution set using set notation.   The solution set is .  "
},
{
  "id": "true-false",
  "level": "2",
  "url": "sec-exercises.html#true-false",
  "type": "Checkpoint",
  "number": "2.8.4",
  "title": "Runestone-powered True\/False Question.",
  "body": "Runestone-powered True\/False Question  This statement is true or false.   Feedback goes here.  "
},
{
  "id": "some-matching",
  "level": "2",
  "url": "sec-exercises.html#some-matching",
  "type": "Checkpoint",
  "number": "2.8.5",
  "title": "Runestone-powered Matching Problem.",
  "body": "Runestone-powered Matching Problem  A multiple choice question     right answer 1    answer specific feedback      right answer 1    answer specific feedback      wrong answer 1    answer specific feedback      wrong answer 2    answer specific feedback    "
},
{
  "id": "parsons",
  "level": "2",
  "url": "sec-exercises.html#parsons",
  "type": "Checkpoint",
  "number": "2.8.6",
  "title": "Runestone-powered Parsons Problem.",
  "body": "Runestone-powered Parsons Problem  Rearrange the blocks in alphebetical order       A    B    C    D        "
},
{
  "id": "matching",
  "level": "2",
  "url": "sec-exercises.html#matching",
  "type": "Checkpoint",
  "number": "2.8.7",
  "title": "Runestone-powered Matching Problem.",
  "body": "Runestone-powered Matching Problem  Match the letters with their order in the alphabet    A  1    B  2    C  3   "
},
{
  "id": "sec-not-just-html-not-just-pdf",
  "level": "1",
  "url": "sec-not-just-html-not-just-pdf.html",
  "type": "Section",
  "number": "2.9",
  "title": "Not Just HTML, Not Just PDF",
  "body": " Not Just HTML, Not Just PDF  This document is available in HTML format at , and the same document is available in a PDF format at .  Obtaining these formats are as easy as running pretext build web and pretext build print respectively. PreTeXt supports other types of output as well, including Jupyter notebooks, ePub, and tacticle braille code.  You're encouraged to view authoring in PreTeXt as an investment : you may not need the braille output today, but the little extra thought and care required to author in PreTeXt will allow you to provide this version of your document to a blind student tomorrow.  "
},
{
  "id": "sec-wrapup",
  "level": "1",
  "url": "sec-wrapup.html",
  "type": "Section",
  "number": "2.10",
  "title": "Wrapping Up",
  "body": " Wrapping Up  Go check back on the Codespace you created in . If it's up and running, you're ready to move on to the next section!  "
},
{
  "id": "sec-build-and-generate",
  "level": "1",
  "url": "sec-build-and-generate.html",
  "type": "Section",
  "number": "3.1",
  "title": "Build and Generate",
  "body": " Build and Generate  Inside the VS Code window you opened through codespaces, have a .ptx file open. You can build your entire project in a few different ways.   Click the green triangle in the top-right corner of the window (hovering will show Build (select target) ). A window will pop up asking for a target to build. To start just select web .    In the Explorer panel on the left-hand side of the window, you can expand the PreTeXt Commands menu and select the Build option.    You can type pretext build web from the terminal (this uses the CLI directly).    You can use the keyboard shortcut CTRL+ALT+b (or perhaps CMD instead of CTRL if you have a Mac).     If your documentment contains some more complicated elements, you might need to generate them for them to show up. The elements that require this are (depending on what your build target is):  <latex-image>  <sagemath>  <asymptote>  <youtube> (for thumbnail previews)  <webwork>  <codelense>    You can generate assets in much the same way you run a build. There is a button on the top-right of the window, and option in the PreTeXt Commands menu, you can type pretext generate in the terminal, or use the keyboard shortcut CTRL+ALT+g .   Note that generating assets requires additional software. If you started the default codespace, then this is not necessarily installed. You can fix this by entering the following command in the terminal:  sudo bash .\/.devcontainer\/postCreateCommand.sh  Alternatively, when you create a codespace, you can click the three dots next to the + and select the devcontainer that has pretext-full in its name.  Once you install this software once, you should be good to go as long as your codespace exists.   "
},
{
  "id": "p-86",
  "level": "2",
  "url": "sec-build-and-generate.html#p-86",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "target "
},
{
  "id": "p-91",
  "level": "2",
  "url": "sec-build-and-generate.html#p-91",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "generate "
},
{
  "id": "note-2",
  "level": "2",
  "url": "sec-build-and-generate.html#note-2",
  "type": "Note",
  "number": "3.1.1",
  "title": "",
  "body": " Note that generating assets requires additional software. If you started the default codespace, then this is not necessarily installed. You can fix this by entering the following command in the terminal:  sudo bash .\/.devcontainer\/postCreateCommand.sh  Alternatively, when you create a codespace, you can click the three dots next to the + and select the devcontainer that has pretext-full in its name.  Once you install this software once, you should be good to go as long as your codespace exists.  "
},
{
  "id": "sec-previewing",
  "level": "1",
  "url": "sec-previewing.html",
  "type": "Section",
  "number": "3.2",
  "title": "Previewing",
  "body": " Previewing  You can check the output of what you built using the View command. Again, you can access this in multiple ways: top-right icon or PreTeXt Commands menu. When you use either of these, you will get a choice for your viewer. We currently suggest using Live Preview , although on codespace this requires a few extra steps:   When the side preview opens, it will ask you if you want to open in an external browser. Click Open in browser .    Now close that new tab that opens, and also close the side panel in VS Code that opened.    Finally select View again, and it should just work. You can drag the VS Code tab to un-split the window to make it easier to view.     You can also experiment with the CLI view command, by selecting that from the pop-up menu, or by typing pretext view web in the terminal. This should pop up a new browser tab with the preview. The only reason we caution against this currently is that the local server that gets started to preview the files will keep running as long as your codespace is active, and we don't understand how this affects resource use.  When you make edits to your source files, you will need to build again, and then refresh the preview window to see the changes.  "
},
{
  "id": "p-96",
  "level": "2",
  "url": "sec-previewing.html#p-96",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "View "
},
{
  "id": "sec-saving",
  "level": "1",
  "url": "sec-saving.html",
  "type": "Section",
  "number": "3.3",
  "title": "Saving your work",
  "body": " Saving your work  Using codespaces will keep all your files in the cloud on GitHub's server. As long as you don't delete your codespace, your files will be saved there. However, you will want to push these files to your git repository on GitHub to make this save perminent. This has the benefit of allowing collaborators to access your files as well (your codespace is unique to your account).  There is a lot to learn about git, but luckily using VS Code lets you do everything you need using menus (you don't need to use the command line, unless you want to). Everything can be controlled using the Source Control view: it should be third from the top on the very left of the window, an icon with splitting paths, and likely a badge showing how many files you have changed.  Here are the basic concepts you need to understand.   The program git keeps track of all the changes you make to files inside of your repository (in this case, the folder containing your project).    Once you have edited your files and are happy with all of them, you tell git to track the set of changes as a commit . This creates a handy breakpoint you could return to if you want to go back to an earlier version.  There are two steps to creating a commit (which you can often do all at once in practice):   You stage the files you want to update in the commit.  You commit the stage files including a commit message .   Doing this in two steps can be helpful if you want to commit only some of the files that have changed.    Once you have one or more commits, you need to sync these changes with GitHub. To upload your changes, you push the repository. To download changes that you are someone else made, you pull the repository.     Now, how do we do these things in VS Code? Start by looking at the Source Control view. You will notice a list of files that were changed. You can click on any of these to see what the changes are (you will see a side-by-side view of the original and updated version).  If you are comfortable staging and committing in one step, you can simply write yourself a short message in the textbox above the big green Commit button, and click the button. If you want to stage first, click the + next to each file under changes to stage them.  The green button should now turn into a Sync button. When you click that, it will do a quick pull and then a push, to sync changes with GitHub.  The only small point about using git is that no all files will be tracked. This is on purpose, since temporary files really should not be remembered using this version control setting. Which files or types of files are ignored by git is controled by the .gitignore file in your repository.  In particular, we do not track the output of builds. Git is used to track progress on your source, which you build into output at any time. If you want others to be able to see the output of your work without building it themselves, you need to deploy your work.  "
},
{
  "id": "p-102",
  "level": "2",
  "url": "sec-saving.html#p-102",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "push git repository "
},
{
  "id": "p-103",
  "level": "2",
  "url": "sec-saving.html#p-103",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Source Control "
},
{
  "id": "p-104",
  "level": "2",
  "url": "sec-saving.html#p-104",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "git repository commit stage commit commit message push pull "
},
{
  "id": "sec-deploy",
  "level": "1",
  "url": "sec-deploy.html",
  "type": "Section",
  "number": "3.4",
  "title": "Deploy",
  "body": " Deploy  So you have worked tirelessly to prepare course notes or a book, built and previewed, synced changes using git, and now you are ready to share the results of your efforts with the world. It's time to deploy your project.  With our codespace setup this is simple. From the PreTeXt Commands menu, click on Deploy to GitHub . This will automatically take the most recent build of your web target and host it through GitHub Pages . Watch the output pane for a link to your published site. (It can take a few minutes for the site to get set up or updated; there should be another link to view the progress of the GitHub action that reports the progress.)  "
},
{
  "id": "p-116",
  "level": "2",
  "url": "sec-deploy.html#p-116",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "deploy "
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
  "id": "p-120",
  "level": "2",
  "url": "ch-help.html#p-120",
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
