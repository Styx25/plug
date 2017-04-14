var cssId = 'myCss';
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://rawgit.com/Styx25/plug/master/javascript/style.css';
    link.media = 'all';
    head.appendChild(link);
}


document.write("test").classList.toggle("link");
