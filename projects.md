---
layout: page
title: Projects
permalink: /projects/
---

This is a selection of some programming and software engineering projects I
have been involved in, it is by no means an exhaustive list.

## Professional projects
The descriptions of these projects are intentionally vague in order to protect proprietary information.

### At Sandia National Labs
Presented in chronological order.

#### IBM Requisite Pro Plugin
Created a Java tool that interfaced with the IBM Requisite Pro requirements management suite that analyzed requirements and processed various attributes in order to ensure that the database was internally consistent. Included a full Swing GUI with customizable runtime settings, and export functionality to text formats.

#### Java Algorithm Visualization
Interactive graph representations of an algorithm's execution displayed in a Swing GUI with actions bound to toolbars, mouse and keyboard, and context sensitive actions. Also developed an Eclipse Rich Client Platform (RCP) port. 

#### Python Web Application for Code Generation
Created a Python web application using CherryPy for HTTP server development, SQLAlchemy for ORM functionality from a SQLite database to Python objects, and Jinja2 for the HTML templating engine. This tool interfaced with existing XML documents that were used to populate the database and describe the data model that was then exported to Excel, Word, PDF, and C++ classes. This tool implemented a custom version control system to track changes to individual elements over a period of time.

#### C++ Tool Development
Created 2 separate Clang C++ command line standalone tools using the LibTooling library. These tools replaced legacy tools that were written for IBM's Rational Rose modeling tool. Some of the functionality included inheritance hierarchy analysis, AST matching algorithms, and source-to-source code transformations.


## Computer science courses taken

### The University of New Mexico - Graduate 
* Machine Learning (CS 529)
* Database Management (CS 564)
* Big Data (CS 591 Special Topic)
* Robust Artificial Life (CS 591 Special Topic)
* Digital Image Processing (CS 523)
* Advanced Functional Programming (CS 591 Special Topic)
* Software Foundations (CS 558)

### The University of New Mexico - Upper level undergrad 
* Artificial Intelligence (CS 427)
* Complex Adaptive Systems (CS 423)
* Advanced Functional Programming (CS 491 Special Topic)
* Software Engineering (CS 460)

### Machine learning
[Stock market price prediction using linear and polynomial regression models (Poster PDF)]({{ site.docurl }}/ml_poster.pdf)

### Software foundations
[Lambda calculus parser and interpreter. Implements unification, constraint-based typing, and step-by-step evaluation relation. (40 page PDF)]({{ site.docurl }}/foundations.pdf)

### Complex adaptive systems
[Generating fractals with genetic algorithms (Poster PDF)]({{ site.docurl }}/cas_poster.pdf)

### Databases
[Magic the gathering database application](http://cs.unm.edu/~lnunno/cs564/mtg-db/index.php)

### Advanced declarative programming
[Bootstrap 3 Blaze HTML library extension](http://lnunno.github.io/blaze-bootstrap3/)

### Image processing

<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner">
    <div class="item active">
      <img src="{{ site.imageurl }}/daubechies4.png">
      <div class="carousel-caption">
        Daubechies 4 wavelet
      </div>
    </div>
    <div class="item">
      <img src="{{ site.imageurl }}/laplacianPyramid.png">
      <div class="carousel-caption">
        Laplacian pyramid
      </div>
    </div>
    <div class="item">
      <img src="{{ site.imageurl }}/mirror.png">
      <div class="carousel-caption">
        Mirror (before)
      </div>
    </div>
    <div class="item">
      <img src="{{ site.imageurl }}/mirrorPanorama.png">
      <div class="carousel-caption">
        Mirror panorama
      </div>
    </div>
    <div class="item">
      <img src="{{ site.imageurl }}/laplacianPyramid.png">
      <div class="carousel-caption">
        Laplacian pyramid
      </div>
    </div>
  </div>
  <!-- Controls -->
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
</div>