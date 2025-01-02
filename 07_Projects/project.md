# Projects
## Project 1 (Color Scheme Switcher) 
### Githhub 

#### [Project Link ]("https://github.com/mynk-nyon/JAVASCRIPT_PRACTICE_PROJECTS")

### Solution CODE of JavaScript
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
    }
  });
});
```