# Teach

Inspired (heavily) by @insou22's [teach-web project](https://github.com/insou22/teach-web) - I set out to build my own website that would be the central place for my students to go in order to: 
  * View tutorial slides - in advance or during the tutorial. 
  * View the topics for a particular tutorial.
  * Give feedback for a particular tutorial. 

This project is my first experience with a major fullstack project.

## The stack

The frontend makes use of:
  * React 
  * React-Router to allow SPA and route configurability.
  * [Material-UI](https://material-ui.com/) as a UI Framework
  * [Axios](https://github.com/axios/axios) as a HTTP Request Library
  
The backend makes use of: 
  * [Strapi](https://strapi.io/) as a headless CMS (why make a backend from scratch, when I can generate one?) 
 
The entire project is hosted on a digital ocean box. Learnt about reverse proxying and nginx config files (spoiler, they're a pain). 
  
