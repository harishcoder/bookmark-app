var btn = document.getElementById('button');
var inpsite = document.getElementById('input1');
var inpurl = document.getElementById('input2');
var outsite = document.getElementById('output1');
var outurl = document.getElementById('output2');


function deleteitem(url){
    var bookmarks = JSON.parse(localStorage.getItem('book'));
    for(var i = 0;i<bookmarks.length;i++){
        if(bookmarks[i].url === url)
            {
               bookmarks.splice(i , 1); 
            }
        
    }
    localStorage.setItem("book", JSON.stringify(bookmarks));
    fetchbookmark();
    
}

function fetchbookmark()
    {
        var bookmarks = JSON.parse(localStorage.getItem('book'));
        var bookmarkshow = document.getElementById('bookpart');
        bookmarkshow.innerHTML = '';
        
        for(var i=0;i<bookmarks.length;i++)
            {
                site = bookmarks[i].name;
                url = bookmarks[i].url;
                console.log(site);
                bookmarkshow.innerHTML += '<div class = "show">'
                                            + '<h1>' + site + '</h1>'
                                            + '<button class ="button1"><a href = "' +url+'"+  target="_blank"> visit </a></button>' 
                                            + '<button onclick = "deleteitem(\''+url+'\')" class ="button2"><a href = "#"> Delete </a></button>'     
                                            + '</div>';
            }

    }

btn.addEventListener('click',function(e){
    e.preventDefault();
var sitename = inpsite.value;
var urlname = inpurl.value;

var bookmark={
    name:sitename,
    url:urlname
}
console.log(bookmark);
    
    
if (localStorage.getItem('book') === null){
    
    var bookmarks = [];
    bookmarks.push(bookmark);
    localStorage.setItem("book", JSON.stringify(bookmarks));
    
}  
    else{
        var bookmarks = JSON.parse(localStorage.getItem('book'));
        bookmarks.push(bookmark);
        localStorage.setItem('book',JSON.stringify(bookmarks));
    }
    fetchbookmark();
});




