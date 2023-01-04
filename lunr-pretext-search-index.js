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
  "body": " Paragraphs, Lists, and Blocks  Within each division (chapter, section, etc., see ) of your book, you likely want some content (e.g. what you're reading right now!).  Written content is usually structured as paragraphs , <p> for short. If you've ever written HTML , this tag may be familiar to you, but be warned: while PreTeXt is XML ( ), PreTeXt is not HTML ! There is some overlap: you can emphasize words or phrases with <em> for instance. However, while HTML uses the full word code for its tag, PreTeXt uses the shortened <c> tag.  Note that these elements are all semantic : they express the meaning of content, not its presentation. For example, the word semantic was a <term> we just defined, while we merely emphasized meaning with <em> . The presentation of these concepts may vary by output format, likely using some combination of boldface, italics, or underlining.   Heads up!  We'll talk about customizing presentation later, but it's important to remember that the PreTeXt community separates such publication decisions away from the work of authoring content.   For users coming from LaTeX, rest assured your mathematical formulas work in PreTeXt . Inline mathmode is invoked with <m>ax^2+bx+c=0<\/m> , while display mathematics like is available via <me>x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}<\/me> . (Users from LaTeX will also appreciate that quotes are surrounded with <q> in PreTeXt to handle the different way quotation marks are handled in LaTeX vs most other markup languages.)  You may also have lists withinn paragraphs, ordered <ol> and unordered <ul> , nested as needed. Each list item is represented by <li> .   A single item.    An item with an ordered list.   First item.    Second item.        Of course, often you have important blocks of content to include, such as <definition> s or <claim> s.     PreTeXt is an uncomplicated XML language for describing scholarly documents.      PreTeXt is the language that will replace LaTeX.    Left to the reader.    Such content is automatically numbered appropriately. Each of the blocks above is structured with a <statement> , and additionally features a <proof> .  Content is often knowled . A knowl is a piece of context-independent information that is useful to transclude elsewhere in the HTML build of your document. For example, in the HTML build for this document, the above proof is knowled by default, and clicking the referenced Claim in the previous paragraph expands its knowl to reveal the claim for the reader.   Because this document was edited directly on GitHub using Codespaces, and served with GitHub pages, finding its source is simple: head to its repository and find the corresponding source file . Check the link out to see exactly how each claim, list, etc. in this chapter was marked up!    "
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
  "body": "  PreTeXt is the language that will replace LaTeX.    Left to the reader.   "
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
  "body": " Figures and Diagrams  TODO   Photograph taken from AIM Press Release on braille.   Photograph of a hand tracing over braille code. A cartoon thought bubble contains the quadratic formula in standard mathematical notation, matching the contents of the braille code in the photograph.     Sage polynomial approximations of      "
},
{
  "id": "figure-braille",
  "level": "2",
  "url": "sec-figures.html#figure-braille",
  "type": "Figure",
  "number": "2.6.1",
  "title": "",
  "body": " Photograph taken from AIM Press Release on braille.   Photograph of a hand tracing over braille code. A cartoon thought bubble contains the quadratic formula in standard mathematical notation, matching the contents of the braille code in the photograph.   "
},
{
  "id": "figure-sage-polynomial-approximation",
  "level": "2",
  "url": "sec-figures.html#figure-sage-polynomial-approximation",
  "type": "Figure",
  "number": "2.6.2",
  "title": "",
  "body": " Sage polynomial approximations of     "
},
{
  "id": "sec-interactives",
  "level": "1",
  "url": "sec-interactives.html",
  "type": "Section",
  "number": "2.7",
  "title": "Interactives",
  "body": " Interactives  TODO  "
},
{
  "id": "sec-exercises",
  "level": "1",
  "url": "sec-exercises.html",
  "type": "Section",
  "number": "2.8",
  "title": "Exercises",
  "body": " Exercises  TODO  "
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
  "id": "sec-intro-conclusion",
  "level": "1",
  "url": "sec-intro-conclusion.html",
  "type": "Section",
  "number": "2.10",
  "title": "Conclusion",
  "body": " Conclusion  Go check back on your Codespace. If it's up and running, you're ready to move on to the next section!  "
},
{
  "id": "section-14",
  "level": "1",
  "url": "section-14.html",
  "type": "Section",
  "number": "3.1",
  "title": "Basic PreTeXt",
  "body": " Basic PreTeXt   Static Exercises   The following examples discuss the different kinds of static exercises you can write.    Create an exercise with multiple parts, each with a separate solution.   This requires the use of task environments inside an exercise or project-like environment. For the syntax to be valid, begin with an introduction , then use a separate task for each part of the question. Each task should consist of a single statement and solution .   <exercise> <introduction> <p> <em>Anything relevent to all parts of the problem goes here.<\/em> <\/p> <\/introduction> <task> <statement> <p> <em>The first question<\/em> <\/p> <\/statement> <solution> <p> <em>The first solution<\/em> <\/p> <\/solution> <\/task> <task> <statement> <p> <em>The second question<\/em> <\/p> <\/statement> <solution> <p> <em>The second solution<\/em> <\/p> <\/solution> <\/task> <\/exercise>     WebWork Exercises   The exercises below illustrate the different kinds of interactive exercises you can write.    Write an interactive WebWork Exercise that generates two random numbers, and asks the user to enter the sum of those numbers.   This example is taken directly from .    All perl and setup must happen between the <setup><pg-setup>...<\/pg-setup><\/setup> tags, as in any WebWork problem.    Format statements as usual in PreTeXt     To reference the perl variable $a in the statement , type <var name=\"$a\"> .    To create an answer blank, where the answer is the perl variable $a , type <var name=\"$a\" width=\"5\" > . Here, @width controls the width of the answer blank.     <exercise> <webwork> <setup> <pg-code> $a = Compute(random(1,5,1)); $b = Compute(random(6,9,1)); $c = Compute(\"$a+$b\"); <\/pg-code> <\/setup> <statement> <p>Compute <m><var name=\"$a\"\/> + <var name=\"$b\"\/><\/m>.<\/p> <instruction>Type your answer without using the <c>+<\/c> sign.<\/instruction> <p>The sum is <var name=\"$c\" width=\"2\"\/>.<\/p> <\/statement> <solution> <p><m><var name=\"$a\"\/> + <var name=\"$b\"\/> = <var name=\"$c\"\/><\/m>.<\/p> <\/solution> <\/webwork> <\/exercise>    Write a WebWork problem with a popup list and a single select list. WebWork multiple select lists are not currently compatible with PreTeXt    For the PreTeXt syntax, see in the documentation.  For the setup portion of the webwork code, follow the WebWork documentation at and . Note that you only need to follow the yellow (Setup) portion of the WebWork instructions. The other sections are managed by PreTeXt.   <exercise> <webwork> <setup> <pg-code> $color_question = PopUp( [\"?\",\"Red\",\"Blue\",\"Green\"], \"Blue\" ); $linearfunction=RadioButtons(['\\(3(x-2)+1\\)','\\(2x(x+1)-3\\)','\\(2\\)'], '\\(2x(x+1)-3\\)'); <\/pg-code> <\/setup> <statement> <p> Select the best color from the list <var name=\"$color_question\" form=\"popup\"\/> <\/p> <p> Which of the following is <em>not<\/em> a linear function. <\/p> <p> <var name=\"$linearfunction\" width=\"buttons\"\/> <\/p> <\/statement> <\/webwork> <\/exercise>    Write a WebWork Exercise that asks for roots of quadratic functions, such that the functions generated have varying numbers of roots.   You can use perl control structures in the <setup><pg-setup>...<\/pg-setup><\/setup> portion of the code.  If you are comparing magnitudes, you must replace with a &lt; b and with c &gt; d .   <exercise> <webwork> <setup> <pg-code> $a = random(0.1,0.5,0.01); $b = random(0.5,3.5,0.25); $c = random(1,9,0.2); $disc = $b*$b-4*$a*$c; $f = Compute(\"$a*x^2 + $b*x + $c\"); if ($disc &gt;= 0) { $root1 = Compute(\" (-$b + sqrt($b^2 - 4*$a*$c))\/(2*$a)\"); $root2 = Compute(\" (-$b - sqrt($b^2 - 4*$a*$c))\/(2*$a)\"); $roots = List(\"$root1,$root2\"); } else{ $roots = Compute(\"DNE\"); } <\/pg-code> <\/setup> <statement> <p> Let <m>f(x) = <var name=\"$a\"\/>x^2 + <var name=\"$b\"\/>x + <var name=\"$c\"\/><\/m>. Find all <m>x<\/m> such that <m>f(x) = 0<\/m>. <\/p> <instruction> If there is more than one answer, enter your answer as a comma separated list. If there are no answers, enter <m>DNE<\/m> <\/instruction> <p> Solutions = <var name=\"$roots\" width=\"20\"\/> <\/p> <\/statement> <\/webwork> <\/exercise>    Write a WebWork Exercise that asks for roots of quadratic functions, such that the functions generated always has real roots .   There are two ways to approach this problem. First, you can manually select the random seed to ensure that all quadratics have real roots.  But you can also use perl structures like do-while to check the discriminant of the quadratic generated, and to rerandomize the problem if no real roots exist.   <exercise> <webwork> <setup> <pg-code> do{ $a = random(0.1,0.5,0.01); $b = random(0.5,3.5,0.25); $c = random(1,9,0.2); $disc = $b*$b-4*$a*$c; } while ( 0 &gt; $disc ) ; $f = Compute(\"$a*x^2 + $b*x + $c\"); $root1 = Compute(\" (-$b + sqrt($b^2 - 4*$a*$c))\/(2*$a)\"); $root2 = Compute(\" (-$b - sqrt($b^2 - 4*$a*$c))\/(2*$a)\"); $roots = List($root1,$root2); <\/pg-code> <\/setup> <statement> <p> Let <m>f(x) = <var name=\"$a\"\/>x^2 + <var name=\"$b\"\/>x + <var name=\"$c\"\/><\/m>. Find all <m>x<\/m> such that <m>f(x) = 0<\/m>. <\/p> <instruction> If there is more than one answer, enter your answer as a comma separated list. <\/instruction> <p> Solutions = <var name=\"$roots\" width=\"20\"\/> <\/p> <\/statement> <\/webwork> <\/exercise>      Create the folowing images using TikZ            Use two image environments, each containing a latex-image environment. To display the images side by side, use the sidebyside environment. To get the sizes and spacing even and uniform, you will need to set @widths and @margins in the sidebyside environment.  Remember that the < and > symbols are restricted. For lines, it is eaisest to use latex or stealth as your arrow style. If you must use < and > in your TikZ code, you must replace the symbols with &lt; and &gt; respectively.    <sidebyside widths=\"33% 33%\" margins=\"11%\" valign=\"middle\"> <image width=\"25%\" xml:id=\"tikz_quick_eg\"> <latex-image> \\begin{tikzpicture} \\draw[fill=red,opacity=0.2] (0,0) circle (1.15); \\draw[fill=blue,opacity=0.2] (1,0) circle (1.15); \\end{tikzpicture} <\/latex-image> <\/image> <image width=\"33%\" xml:id=\"image_tikz_eg\"> <latex-image> \\begin{tikzpicture} \\\\ Shade the enclosed area first \\draw[color=white,fill=green,opacity=0.33] (1,0) -- (1,{cos(1 r)+2}) -- plot[domain= 1:3] ({\\x},{cos(\\x r)+2}) -- (3,{cos(3 r)+2}) -- (3,0) -- (1,0); \\\\ Draw the axes \\draw[latex-latex] (-1,0) -- (5,0); \\draw[latex-latex] (0,-1) -- (0,4); \\\\ Plot the function \\draw [thick,domain=-1:4.5] plot ({\\x},{cos(\\x r)+2}); \\node [thick,above right] at (4.5,{cos(4.5 r) + 2}){$f$}; \\\\ Draw the boundaries \\draw[red] (1,3) -- (1,-0.25) node [below] {$a$}; \\draw[red] (3,3) -- (3,-0.25) node [below] {$b$}; \\\\ Label the area \\draw[&lt;- , very thick] (2,0.5) -- (2.2,-1) node[below] {area between $f$ and $x$-axis over $[a,b]$}; \\end{tikzpicture} <\/latex-image> <\/image> <\/sidebyside>      Create the following interactive JSXGraph graphic     See for the pretext reference.  It is important to note that JessieCode has a different syntax than classic JSXGraph, but has the benefit of being able to write the code directly in the PreTeXt file.  You can see several examples of JessieCode syntax by going to and scrolling down to \"Element functions\", and by reading .  Generally, a line of JessieCode can be found by finding the relevant JSXGraph object and attributes, and rewriting this as a function of the same name followed by properties in <<...>>. For example, b1.create('point',[1,2], {name:'X', size:4}); becomes point(1,2) << name:'X', size:4 >> ; . In PreTeXt, < and > is replaced by &lt; and &gt; , and the code gets a bit messy.  Many, but not all, features of JSXGraph are available in JessieCode. You can find a collection of examples written using classic JSXGraph, and the full JSXGraph Documentation . With a bit of experimentation, it is often possible to translate most JSXGraph code into JessieCode.    <interactive platform=\"jsxgraph\" width=\"50%\"> <slate xml:id=\"jsxgraph-slope-via-tangent\" surface=\"jessiecode\" axis=\"true\" grid=\"true\" > \/\/ Set the graph window. \/\/ The order of values is [xmin, ymax, xmax, ymin] \/\/ keepaspectratio=true forces the x and y scales to be equal $board.setBoundingBox( [ -5, 10, 7, -6 ] , keepaspectratio=false) ; \/\/ Create the slider xslider = slider( \/\/ Specify slider location [0.5,-3], [5.5,-3], \/\/ Specify smallest\/starting\/largest value for slider [-5,1,7]) &lt;&lt; name:\"a\", snapWidth:0.01 &gt;&gt; ; \/\/ Define a function and its tangent line at the current slider value \/\/ This will allow us to reference them in several places f1 = function(x) { return 1\/5*(x+3)*(x-2)*(x-5)-1; } ; tangentline = function(x) { x0 = xslider.Value(); m = (f1(x0+0.00001) - f1(x0))\/0.00001; return m*(x-x0) + f1(x0) ; } ; \/\/ Graph the function and its tangent line f1Graph = functiongraph( f1 ) &lt;&lt; strokeColor:\"blue\" &gt;&gt;; tangentGraph = functiongraph( tangentline ) &lt;&lt; strokeColor:\"black\", dash:3 &gt;&gt;; \/\/ Display the equation of the current tangent line text( 1.5,5.5,function() { x0 = xslider.Value(); m = (f1(x0+0.00001) - f1(x0))\/0.00001; y0 = f1(x0); return \"y = \"+ trunc(m,2) + \" ( x- \" + trunc(x0,2) + \" ) + \" + trunc(y0,2) ; } ) &lt;&lt; color:\"black\", fontSize:16 &gt;&gt; ; \/\/ Graph the lines from the point to the x and y axis line( [function() {return xslider.Value();} , function() {return f1(xslider.Value());}],[0,function() {return f1(xslider.Value());}] ) &lt;&lt; color:\"red\", straightFirst:false, straightLast:false, dash:1 &gt;&gt; ; line( [function() {return xslider.Value();} , function() {return f1(xslider.Value());}],[function() {return xslider.Value();}, 0 ] ) &lt;&lt; color:\"red\", straightFirst:false, straightLast:false, dash:1 &gt;&gt; ; \/\/ Draw a dot at the current point on the function point( function() {return xslider.Value();} , function() {return f1(xslider.Value());}) &lt;&lt; name:\"(a,f(a))\", color:\"red\" &gt;&gt; ; \/\/ Label the x and y values of the current point text( -0.75, function() {return f1(xslider.Value());}, \"f(a)\") &lt;&lt; color:\"red\" &gt;&gt; ; text( function() {return xslider.Value();} , -0.25 , \"a\") &lt;&lt; color:\"red\" &gt;&gt; ; <\/slate> <\/interactive>      Create the following table using the pretext tabular environment.     1  2  3    4  5  6     <tabular> <col right=\"medium\" \/><col right=\"medium\" \/><col \/> <row bottom=\"medium\"> <cell>1<\/cell> <cell>2<\/cell> <cell>3<\/cell> <\/row> <row> <cell>4<\/cell> <cell>5<\/cell> <cell>6<\/cell> <\/row> <\/tabular>    Create the same table using a latex array environment.    <me> \\begin{array}{c|c|c} 1 \\amp 2 \\amp 3 \\\\ \\hline 4 \\amp 5 \\amp 6 \\end{array} <\/me>    "
},
{
  "id": "exploration-1",
  "level": "2",
  "url": "section-14.html#exploration-1",
  "type": "Exploration",
  "number": "3.1.1",
  "title": "Static Exercises.",
  "body": " Static Exercises   The following examples discuss the different kinds of static exercises you can write.    Create an exercise with multiple parts, each with a separate solution.   This requires the use of task environments inside an exercise or project-like environment. For the syntax to be valid, begin with an introduction , then use a separate task for each part of the question. Each task should consist of a single statement and solution .   <exercise> <introduction> <p> <em>Anything relevent to all parts of the problem goes here.<\/em> <\/p> <\/introduction> <task> <statement> <p> <em>The first question<\/em> <\/p> <\/statement> <solution> <p> <em>The first solution<\/em> <\/p> <\/solution> <\/task> <task> <statement> <p> <em>The second question<\/em> <\/p> <\/statement> <solution> <p> <em>The second solution<\/em> <\/p> <\/solution> <\/task> <\/exercise>   "
},
{
  "id": "exploration-2",
  "level": "2",
  "url": "section-14.html#exploration-2",
  "type": "Exploration",
  "number": "3.1.2",
  "title": "WebWork Exercises.",
  "body": " WebWork Exercises   The exercises below illustrate the different kinds of interactive exercises you can write.    Write an interactive WebWork Exercise that generates two random numbers, and asks the user to enter the sum of those numbers.   This example is taken directly from .    All perl and setup must happen between the <setup><pg-setup>...<\/pg-setup><\/setup> tags, as in any WebWork problem.    Format statements as usual in PreTeXt     To reference the perl variable $a in the statement , type <var name=\"$a\"> .    To create an answer blank, where the answer is the perl variable $a , type <var name=\"$a\" width=\"5\" > . Here, @width controls the width of the answer blank.     <exercise> <webwork> <setup> <pg-code> $a = Compute(random(1,5,1)); $b = Compute(random(6,9,1)); $c = Compute(\"$a+$b\"); <\/pg-code> <\/setup> <statement> <p>Compute <m><var name=\"$a\"\/> + <var name=\"$b\"\/><\/m>.<\/p> <instruction>Type your answer without using the <c>+<\/c> sign.<\/instruction> <p>The sum is <var name=\"$c\" width=\"2\"\/>.<\/p> <\/statement> <solution> <p><m><var name=\"$a\"\/> + <var name=\"$b\"\/> = <var name=\"$c\"\/><\/m>.<\/p> <\/solution> <\/webwork> <\/exercise>    Write a WebWork problem with a popup list and a single select list. WebWork multiple select lists are not currently compatible with PreTeXt    For the PreTeXt syntax, see in the documentation.  For the setup portion of the webwork code, follow the WebWork documentation at and . Note that you only need to follow the yellow (Setup) portion of the WebWork instructions. The other sections are managed by PreTeXt.   <exercise> <webwork> <setup> <pg-code> $color_question = PopUp( [\"?\",\"Red\",\"Blue\",\"Green\"], \"Blue\" ); $linearfunction=RadioButtons(['\\(3(x-2)+1\\)','\\(2x(x+1)-3\\)','\\(2\\)'], '\\(2x(x+1)-3\\)'); <\/pg-code> <\/setup> <statement> <p> Select the best color from the list <var name=\"$color_question\" form=\"popup\"\/> <\/p> <p> Which of the following is <em>not<\/em> a linear function. <\/p> <p> <var name=\"$linearfunction\" width=\"buttons\"\/> <\/p> <\/statement> <\/webwork> <\/exercise>    Write a WebWork Exercise that asks for roots of quadratic functions, such that the functions generated have varying numbers of roots.   You can use perl control structures in the <setup><pg-setup>...<\/pg-setup><\/setup> portion of the code.  If you are comparing magnitudes, you must replace with a &lt; b and with c &gt; d .   <exercise> <webwork> <setup> <pg-code> $a = random(0.1,0.5,0.01); $b = random(0.5,3.5,0.25); $c = random(1,9,0.2); $disc = $b*$b-4*$a*$c; $f = Compute(\"$a*x^2 + $b*x + $c\"); if ($disc &gt;= 0) { $root1 = Compute(\" (-$b + sqrt($b^2 - 4*$a*$c))\/(2*$a)\"); $root2 = Compute(\" (-$b - sqrt($b^2 - 4*$a*$c))\/(2*$a)\"); $roots = List(\"$root1,$root2\"); } else{ $roots = Compute(\"DNE\"); } <\/pg-code> <\/setup> <statement> <p> Let <m>f(x) = <var name=\"$a\"\/>x^2 + <var name=\"$b\"\/>x + <var name=\"$c\"\/><\/m>. Find all <m>x<\/m> such that <m>f(x) = 0<\/m>. <\/p> <instruction> If there is more than one answer, enter your answer as a comma separated list. If there are no answers, enter <m>DNE<\/m> <\/instruction> <p> Solutions = <var name=\"$roots\" width=\"20\"\/> <\/p> <\/statement> <\/webwork> <\/exercise>    Write a WebWork Exercise that asks for roots of quadratic functions, such that the functions generated always has real roots .   There are two ways to approach this problem. First, you can manually select the random seed to ensure that all quadratics have real roots.  But you can also use perl structures like do-while to check the discriminant of the quadratic generated, and to rerandomize the problem if no real roots exist.   <exercise> <webwork> <setup> <pg-code> do{ $a = random(0.1,0.5,0.01); $b = random(0.5,3.5,0.25); $c = random(1,9,0.2); $disc = $b*$b-4*$a*$c; } while ( 0 &gt; $disc ) ; $f = Compute(\"$a*x^2 + $b*x + $c\"); $root1 = Compute(\" (-$b + sqrt($b^2 - 4*$a*$c))\/(2*$a)\"); $root2 = Compute(\" (-$b - sqrt($b^2 - 4*$a*$c))\/(2*$a)\"); $roots = List($root1,$root2); <\/pg-code> <\/setup> <statement> <p> Let <m>f(x) = <var name=\"$a\"\/>x^2 + <var name=\"$b\"\/>x + <var name=\"$c\"\/><\/m>. Find all <m>x<\/m> such that <m>f(x) = 0<\/m>. <\/p> <instruction> If there is more than one answer, enter your answer as a comma separated list. <\/instruction> <p> Solutions = <var name=\"$roots\" width=\"20\"\/> <\/p> <\/statement> <\/webwork> <\/exercise>   "
},
{
  "id": "exploration-3",
  "level": "2",
  "url": "section-14.html#exploration-3",
  "type": "Exploration",
  "number": "3.1.3",
  "title": "",
  "body": "  Create the folowing images using TikZ            Use two image environments, each containing a latex-image environment. To display the images side by side, use the sidebyside environment. To get the sizes and spacing even and uniform, you will need to set @widths and @margins in the sidebyside environment.  Remember that the < and > symbols are restricted. For lines, it is eaisest to use latex or stealth as your arrow style. If you must use < and > in your TikZ code, you must replace the symbols with &lt; and &gt; respectively.    <sidebyside widths=\"33% 33%\" margins=\"11%\" valign=\"middle\"> <image width=\"25%\" xml:id=\"tikz_quick_eg\"> <latex-image> \\begin{tikzpicture} \\draw[fill=red,opacity=0.2] (0,0) circle (1.15); \\draw[fill=blue,opacity=0.2] (1,0) circle (1.15); \\end{tikzpicture} <\/latex-image> <\/image> <image width=\"33%\" xml:id=\"image_tikz_eg\"> <latex-image> \\begin{tikzpicture} \\\\ Shade the enclosed area first \\draw[color=white,fill=green,opacity=0.33] (1,0) -- (1,{cos(1 r)+2}) -- plot[domain= 1:3] ({\\x},{cos(\\x r)+2}) -- (3,{cos(3 r)+2}) -- (3,0) -- (1,0); \\\\ Draw the axes \\draw[latex-latex] (-1,0) -- (5,0); \\draw[latex-latex] (0,-1) -- (0,4); \\\\ Plot the function \\draw [thick,domain=-1:4.5] plot ({\\x},{cos(\\x r)+2}); \\node [thick,above right] at (4.5,{cos(4.5 r) + 2}){$f$}; \\\\ Draw the boundaries \\draw[red] (1,3) -- (1,-0.25) node [below] {$a$}; \\draw[red] (3,3) -- (3,-0.25) node [below] {$b$}; \\\\ Label the area \\draw[&lt;- , very thick] (2,0.5) -- (2.2,-1) node[below] {area between $f$ and $x$-axis over $[a,b]$}; \\end{tikzpicture} <\/latex-image> <\/image> <\/sidebyside>   "
},
{
  "id": "exploration-4",
  "level": "2",
  "url": "section-14.html#exploration-4",
  "type": "Exploration",
  "number": "3.1.4",
  "title": "",
  "body": "  Create the following interactive JSXGraph graphic     See for the pretext reference.  It is important to note that JessieCode has a different syntax than classic JSXGraph, but has the benefit of being able to write the code directly in the PreTeXt file.  You can see several examples of JessieCode syntax by going to and scrolling down to \"Element functions\", and by reading .  Generally, a line of JessieCode can be found by finding the relevant JSXGraph object and attributes, and rewriting this as a function of the same name followed by properties in <<...>>. For example, b1.create('point',[1,2], {name:'X', size:4}); becomes point(1,2) << name:'X', size:4 >> ; . In PreTeXt, < and > is replaced by &lt; and &gt; , and the code gets a bit messy.  Many, but not all, features of JSXGraph are available in JessieCode. You can find a collection of examples written using classic JSXGraph, and the full JSXGraph Documentation . With a bit of experimentation, it is often possible to translate most JSXGraph code into JessieCode.    <interactive platform=\"jsxgraph\" width=\"50%\"> <slate xml:id=\"jsxgraph-slope-via-tangent\" surface=\"jessiecode\" axis=\"true\" grid=\"true\" > \/\/ Set the graph window. \/\/ The order of values is [xmin, ymax, xmax, ymin] \/\/ keepaspectratio=true forces the x and y scales to be equal $board.setBoundingBox( [ -5, 10, 7, -6 ] , keepaspectratio=false) ; \/\/ Create the slider xslider = slider( \/\/ Specify slider location [0.5,-3], [5.5,-3], \/\/ Specify smallest\/starting\/largest value for slider [-5,1,7]) &lt;&lt; name:\"a\", snapWidth:0.01 &gt;&gt; ; \/\/ Define a function and its tangent line at the current slider value \/\/ This will allow us to reference them in several places f1 = function(x) { return 1\/5*(x+3)*(x-2)*(x-5)-1; } ; tangentline = function(x) { x0 = xslider.Value(); m = (f1(x0+0.00001) - f1(x0))\/0.00001; return m*(x-x0) + f1(x0) ; } ; \/\/ Graph the function and its tangent line f1Graph = functiongraph( f1 ) &lt;&lt; strokeColor:\"blue\" &gt;&gt;; tangentGraph = functiongraph( tangentline ) &lt;&lt; strokeColor:\"black\", dash:3 &gt;&gt;; \/\/ Display the equation of the current tangent line text( 1.5,5.5,function() { x0 = xslider.Value(); m = (f1(x0+0.00001) - f1(x0))\/0.00001; y0 = f1(x0); return \"y = \"+ trunc(m,2) + \" ( x- \" + trunc(x0,2) + \" ) + \" + trunc(y0,2) ; } ) &lt;&lt; color:\"black\", fontSize:16 &gt;&gt; ; \/\/ Graph the lines from the point to the x and y axis line( [function() {return xslider.Value();} , function() {return f1(xslider.Value());}],[0,function() {return f1(xslider.Value());}] ) &lt;&lt; color:\"red\", straightFirst:false, straightLast:false, dash:1 &gt;&gt; ; line( [function() {return xslider.Value();} , function() {return f1(xslider.Value());}],[function() {return xslider.Value();}, 0 ] ) &lt;&lt; color:\"red\", straightFirst:false, straightLast:false, dash:1 &gt;&gt; ; \/\/ Draw a dot at the current point on the function point( function() {return xslider.Value();} , function() {return f1(xslider.Value());}) &lt;&lt; name:\"(a,f(a))\", color:\"red\" &gt;&gt; ; \/\/ Label the x and y values of the current point text( -0.75, function() {return f1(xslider.Value());}, \"f(a)\") &lt;&lt; color:\"red\" &gt;&gt; ; text( function() {return xslider.Value();} , -0.25 , \"a\") &lt;&lt; color:\"red\" &gt;&gt; ; <\/slate> <\/interactive>   "
},
{
  "id": "exploration-5",
  "level": "2",
  "url": "section-14.html#exploration-5",
  "type": "Exploration",
  "number": "3.1.5",
  "title": "",
  "body": "  Create the following table using the pretext tabular environment.     1  2  3    4  5  6     <tabular> <col right=\"medium\" \/><col right=\"medium\" \/><col \/> <row bottom=\"medium\"> <cell>1<\/cell> <cell>2<\/cell> <cell>3<\/cell> <\/row> <row> <cell>4<\/cell> <cell>5<\/cell> <cell>6<\/cell> <\/row> <\/tabular>    Create the same table using a latex array environment.    <me> \\begin{array}{c|c|c} 1 \\amp 2 \\amp 3 \\\\ \\hline 4 \\amp 5 \\amp 6 \\end{array} <\/me>   "
},
{
  "id": "section-15",
  "level": "1",
  "url": "section-15.html",
  "type": "Section",
  "number": "3.2",
  "title": "Basic Principles and Frequently Asked Questions",
  "body": " Basic Principles and Frequently Asked Questions     Nesting Environments  All normal text should be contained inside p environments. Moreover, a p environment should only contain text, math, and lists.    Never Write  <p> The frog is a majestic creature: <image source=\"frog.gif\" width=\"100%\"> <\/image> <\/p>    Always Write  <p> The frog is a majestic creature: <\/p> <image source=\"frog.gif\" width=\"100%\"> <\/image>    Some environments have more complex rules about how they can be combined.  For example, the example , exercise , project , and task environments are essentially the only environments that can contain solution , hint , and answer sub-environments. However , these sub-environments are only allowed in a very specific format. If solutions are to be used, they must be paired with a statement (and optionally hint, answer) and no other divisions , not even a paragraph.    Never Write  <example> <p> A paragraph, ending in a question. <\/p> <solution> <p> A solution to the question in the paragraph. <\/p> <\/solution> <\/example>    Always Write  <example> <statement> <p> A paragraph, ending in a question. <\/p> <\/statement> <solution> <p> A solution to the question in the paragraph. <\/p> <\/solution> <\/example>      References  To reference content on the web, write <url href=\"\">Display Text\/<\/url> , or write <url href=\"\" \/> if you would like the full URL displayed, or  If you would like to reference text inside the PreTeXt document, place that text inside an environment, and include the attribute xml:id=\"REFNAME\" in its opening tag. To reference the element elsewhere in the document, type <xref ref=\"REFNAME\"\/>     Emphasizing Text   em  emphasizes , while alert  shoults .  To add a title without creating a new (sub*)section, use the paragraphs environment.  <paragraphs> <title>Title<\/title> <p> Paragraph text. <\/p> <\/paragraphs>    Summarizing Concepts  Use the assemblage environment to summarize content, such as a list of formulas. Assemblages are not numbered, so when you reference them you need to add text='custom' or text='title' . For example, you would need to type to any < xref text='title' ref=\"REFNAME\" \/>     Restrictions on Environments  By design, PreTeXt imposes a rigid framework on the logical environments that can be used. In fact, some use the name PreTeXt to refer to this framework itself (as distinguished from its current implementation).  This framework is intended to balance two conflicting goals:   Allow the author to focus on content as opposed to presentation    Facilitate the OER principles of Adapting and Remixing existing works.   These principles are in tension because many authors will instinctively use different categories and logical divisions as they author their books. However, when authors are given free rein to develop their own logical divisions, it becomes very difficult to \"remix\" (combine sections of) books written by different authors.  It is therefore necessary to draw the line somewhere. Over many years of careful work, the authors of PreTeXt have come up with one way of drawing this line, that can be made to work for a wide range of mathematical texts.    Principles for the (Current) Web Interfae  In theory, the PreTeXt language can compile into a variety of different web formats, each with a different philosophy of how to present information to the user. This is another reason why it is important to carefully follow the syntax as intended, rather than hacking together different elemnts based on their behavior.  At the same time, it will be valuable for an author to understand the core design principles of the current web format.     Collapsed Details Emphasizes Overall Structure . By default, many (even most) environments are collapsed (knowled) when a user first visits the section. This helps emphasize the overall structure of the material, and can almost act as an automatic summary of the section. As a student goes through the material, they expand the relevant element they are working on, deepening their knowledge of the material.     References Show a Web of Knowledge . Make regular use of the built in environments such as definition , theorem , example , and figure , and make sure you use unique identifiers with the @xml:id attribute.  Whenever you reference this attribute PreTeXt creates a link which, when you click on it, expands and displays the previous content (e.g. definition) in the current context. Students can also click on the \"show in context\" link to go back to the section where this was originally introduced.  This helps emphasize how the web of mathematical knowledge develops across larger divisions such as sections, chapters, and parts.      Mastering PreTeXt Syntax  When you use a more complex environment for the first time or in a new way, double check the PreTeXt schema .  The Content of the XML Representation Summary tells you what type of content the environment is allowed to contain. Be careful when reading the Schema, and refer to the abbreviations in the documentation .  For example, consider the entry for the exercise environment. Even though the exercise environment permits p and solution environments, they cannot be used at the same time, as they are in separate Groupings ( ) that are combined by a Choice |. If you want to use a solution in an exercise , the exercise must consist of a statement followed by zero or more hint , answer , or solution environments.  You can also use the Schema to see where an environment can be used, by looking at the Included in content model of elements section of the page. This will help you make sure that you are placing your environment in a valid location. For example the exercise environment can be used in (among other places) sections and subsections, but not inside of another exercise.    Uniquely Flexible Environments   task environments can be placed in example , exercise , and project-like environments. Task environments can contain text and images, but they can also contain solution environments, and can even contain nested task environments.   Note: PreTeXt does not have a general use \"details\" environment. The fn (footnote) environment is officially restricted to text only, even though it currently compiles correctly with content including images, display math, etc.  The task environment provides an alternative (and officially approved) approach to incorporating knowled text throughout examples and project-like environments: simply write the main content in the statement for the main content, the knowled content in the solution , and add an instruction to the reader to come up with the hidden content on their own.  Nested lists are available, since li elements can contain new list environments.     "
},
{
  "id": "section-16",
  "level": "1",
  "url": "section-16.html",
  "type": "Section",
  "number": "3.3",
  "title": "Interactive Activities",
  "body": " Interactive Activities    Create the following exercises using the native PreTeXt markup language (do not use the webwork environment).    Write a True\/False question.    Write a Multiple Choice question.    Write a Parson's Problem question.    Write a Matching question.    True\/False Question  A True\/false question   Feedback   Matching Problem  A multiple choice question     right answer 1    answer specific feedback      right answer 1    answer specific feedback      wrong answer 1    answer specific feedback      wrong answer 2    answer specific feedback     Parsons Problem  Rearrange the blocks in alphebetical order       A    B    C    D         Matching Problem  Match the letters with their order in the alphabet    A  1    B  2    C  3    "
},
{
  "id": "exploration-6",
  "level": "2",
  "url": "section-16.html#exploration-6",
  "type": "Exploration",
  "number": "3.3.1",
  "title": "",
  "body": "  Create the following exercises using the native PreTeXt markup language (do not use the webwork environment).    Write a True\/False question.    Write a Multiple Choice question.    Write a Parson's Problem question.    Write a Matching question.   "
},
{
  "id": "true-false",
  "level": "2",
  "url": "section-16.html#true-false",
  "type": "Checkpoint",
  "number": "3.3.1",
  "title": "True\/False Question.",
  "body": "True\/False Question  A True\/false question   Feedback  "
},
{
  "id": "some-matching",
  "level": "2",
  "url": "section-16.html#some-matching",
  "type": "Checkpoint",
  "number": "3.3.2",
  "title": "Matching Problem.",
  "body": "Matching Problem  A multiple choice question     right answer 1    answer specific feedback      right answer 1    answer specific feedback      wrong answer 1    answer specific feedback      wrong answer 2    answer specific feedback    "
},
{
  "id": "parsons",
  "level": "2",
  "url": "section-16.html#parsons",
  "type": "Checkpoint",
  "number": "3.3.3",
  "title": "Parsons Problem.",
  "body": "Parsons Problem  Rearrange the blocks in alphebetical order       A    B    C    D        "
},
{
  "id": "matching",
  "level": "2",
  "url": "section-16.html#matching",
  "type": "Checkpoint",
  "number": "3.3.4",
  "title": "Matching Problem.",
  "body": "Matching Problem  Match the letters with their order in the alphabet    A  1    B  2    C  3   "
},
{
  "id": "ch-help",
  "level": "1",
  "url": "ch-help.html",
  "type": "Appendix",
  "number": "A",
  "title": "Getting Help",
  "body": " Getting Help  Here we collect a number of useful resources to help you when you are stuck. The official PreTeXt site has lots of resources, but we understand it can be overwhelming.   Official documentation  Note that the official PreTeXt Guide can be hard to use because there is so much stuff in it. Additionally, some of the documentation is out of date. Still, if you know where to look, it is a great resource.  Here are some sections that we find especially helpful:    Basics Reference : A listing of the main elements of PreTeXt including snippets of the code that create them. This is one of the few places in the guide that has examples of the markup.     Publication File Reference : When you are ready to start changing how your output looks, you can use the publication file , which is described in this part of the guide.     PreTeXt Schema : The official list of elements and where they can go is given in the PreTeXt Schema, which is described here. Also you can check out the schema browser to actually view the schema.     Getting PreTeXt : If you want to install PreTeXt on your own computer, this early part of the guide gives you directions. It should be updated with information on CodeSpaces soon as well, if you need a refresher.   Finally, note that the search in PreTeXt now works really well, and searching for a feature will usually get you pointed in the right spot.    Examples  The Examples page on the PreTeXt site contains a number of useful live examples. Links are provided to web, pdf, and source (on GitHub). For some of the examples, there is also an annotated version available. We find these especially helpful since you can view source to see exactly how each bit of the example was marked up in code.  Here are some of the most useful such examples:    Sample Book : This annotated sample book contains a section on interactive exercises . The PreTeXt developers use this book for testing, so you can see the latest (sometimes experimental) features available.     Sample Article : Not particularly well organized (it is also a proving ground for developers) but this contains almost every variation of every feature of PreTeXt . Using the search and view source makes this an invaluable resource.       Community Support  There is a very active google group for support: pretext-support . You should also subscribe to the low-traffic pretext-announce to get updates.   "
},
{
  "id": "p-138",
  "level": "2",
  "url": "ch-help.html#p-138",
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
