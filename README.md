## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started on macOS
1. Get [node.js](https://nodejs.org/en/). Check if the node.js is installed correctly by typing ``npm -version`` or ``npm -v``
2. Get [gulp.js](http://gulpjs.com/) via npm ``npm install gulp-cli -g`` (you might need to use ``sudo`` for that). Check if the node.js is installed correctly by typing ``gulp -version`` or ``gulp -v``
3. Install [git](https://git-scm.com/download/mac)
4. [Fork](https://help.github.com/articles/fork-a-repo/) this repository
5. [Copy url](https://help.github.com/articles/cloning-a-repository/) to this repository
6. Choose the directory where you want this project to be 
7. Go to the terminal cmd+space type terminal
8. ``cd`` to the chosen directory 
9. Type ``https://github.com/YOUR-USERNAME/YOUR-REPOSITORY``
10. When cloning completed type ``npm install`` to install all the node modules
11. Run project by typing ``gulp``

You can skip the steps straight to the 4th one if you already have Node, Git and Gulp installed.

List of optimisations:
- introduced Gulp build process automation (CSS minification, JS minification, CSS autoprefix, critical path CSS creation, images optimisation, watch process to watch any change in the project and execute previously mentioned tasks sequentially)
- decreased the number of pizzas generated to fit the screen (not sure why only two show up)
- added ``will-change: transform; transform: translateZ(0);`` to ``mover`` classs in css
- Declaring the elem variable (var elem;) in the initialisation of the for-loop will prevent it from being created every time the loop is executed.

