var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "meta_frontmatter",
  "level": "1",
  "url": "meta_frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   Steven Clontz  Department of Mathematics and Statistics  University of South Alabama    Oscar Levin  School of Mathematical Sciences  University of Northern Colorado   2023 January     This JMM Professional Enhancement Program will be held on Thursday, January 5 between 9 am - 11 am and Saturday, January 7 between 9 am - 11 am in Salon CD on the fourth floor of the Boston Marriott Copley Place.    PreTeXt is a document authoring system that allows you to convert the source of your document into a variety of output formats, including fully accessible webpages, PDF, Epub, Jupyter Notebooks, and braille. This “write once, read anywhere” approach has made it a popular choice for authors of Open Educational Resources, but PreTeXt can also be used to create other kinds of mathematical documents as well. Recent updates make this process much easier; there has never been a better time to get started with PreTeXt.  Participants of this PEP will be introduced to the fundamentals of authoring documents with PreTeXt and gain the technical skills required to work with it. Specifically, participants will learn how to:   Install all required free and open-source software  Create a new PreTeXt document  Write and structure content using PreTeXt markup.  Add content to the document, including mathematics, graphics, interactive exercises, and more.  Build accessible and interactive webpages as well as a static PDF from the same PreTeXt source.  Easily deploy the interactive webpages online (for free).   We will also share tips for converting existing documents into PreTeXt.  Prior to the PEP, participants should have some familiarity with LaTeX or other markup languages. No previous experience working with PreTeXt or HTML\/XML is assumed. Participants should bring a laptop that can connect to JMM's provided wifi: no prior installations will be required as we will use PreTeXt's new GitHub Codespace-powered online authoring service.      PreTeXtBook.org   http:\/\/pretextbook.org   copyright    We would like to thank the American Institute of Mathematics for sponsoring us to present this Professional Enhancement Program at the 2023 Joint Mathematics Meeting.   "
},
{
  "id": "sec_prejmm",
  "level": "1",
  "url": "sec_prejmm.html",
  "type": "Section",
  "number": "1",
  "title": "Before you arrive...",
  "body": " Before you arrive...   Authoring in PreTeXt requires nothing more than a wifi connection and GitHub account. GitHub users also can share their content for free on GitHub Pages! (The program description references CoCalc.com, another service that can be used to author PreTeXt, but workshop plans have been updated to focus primarily on GitHub workflows.)   Wifi will be available in our room at the JMM, so each participant will only need to bring their laptop. No installation of software is required    Setting up your GitHub account  To create a GitHub account, follow the instructions on GitHub's signup page.   Be sure to note your GitHub username and password in your password manager (or however you usually keep track of login credentials) so you can log in again at the Joint Mathematics Meetings.    And that's it!  Even just a couple months ago, the process to get started writing PreTeXt involved several more steps. But the community is streamlining this experience daily, and we look forward to sharing how easy writing in PreTeXt is when we meet you at the JMM in January!   "
},
{
  "id": "sec_intro",
  "level": "1",
  "url": "sec_intro.html",
  "type": "Section",
  "number": "2",
  "title": "Write Once, Read Anywhere",
  "body": " Write Once, Read Anywhere  words...  This document is available in HTML format at , and the same document is available in a PDF format at .  "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
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
