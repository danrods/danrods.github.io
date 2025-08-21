---
title: About Me
layout: default
css: /assets/css/about.css
---

{%   assign today = site.time | date: '%s' %}
{%   assign start = '01-01-1990 04:00:00' | date: '%s'  %}
{%   assign delta = today | minus: start  %}
{%   assign yearsSince = delta | divided_by: 31536000 %}

<div class ="card panel-primary">
<div class="card-header">

### About Me 
{: .panel-title}

</div>
<div class="card-body row">


<div class = "col-xs-12 col-sm-12 col-md-8 offset-md-2 col-lg-4 offset-lg-0">
![me](assets/images/profile_pic.jpg){: .img-fluid .img-thumbnail .rounded}
</div>


<div class = "col-xs-12 col-sm-12 col-md-12 col-lg-8">

Hi I'm Dan Rodrigues, a {{ yearsSince }} year old Engineering Lead at Tinybeans.
I graduted Magna Cum Laude from Stony Brook University in 2016.

Throughout my time at Stony Brook and in previous years at Suffolk County Community College I've learned many helpful algorithms and design patterns
in a slew of different languages.


##### Relevant Classes include:

-  Advanced Java/Data Structures
-  Operating Systems
-  System Fundamentals in MIPS Architecture
-  Advanced System Architecture in C 
-  Internet Programming with Servlets and JSP's
-  Principles of Programming Languages (Python/Prolog/SML)
-  Analysis of Algorithms
-  Android Programming
{: .list-unstyled .arrow-list}


For more information you can view my resume on the [resume](resume.htm) page

##### Favorite Quote :
> "Computer science is no more about computers than astronomy is about telescopes."
{: .blockquote .mb-0}
> Edsger W. Dijkstra 
{: .blockquote-footer}


##### Contact:
[danrodrigues114@gmail.com](mailto:danrodrigues114@gmail.com)


</div>


</div>
<div class="card-footer" markdown="1">
{::nomarkdown}
{% for acct in site.data.accts %}
	<a href="{{ acct.permalink }}" target="_blank" >
		<img class="logos" src="{{ acct.imgLink }}">
	</a>
{% endfor %}
{:/nomarkdown}
</div>


</div>