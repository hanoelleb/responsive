//changes at width 750


//section 1 headlines
//headlines changes width at 750

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function headlines() {
    var content = document.getElementById('content');

    var headlines = document.createElement('section');
    headlines.id = 'headlines';

    var head1 = document.createElement('div');
    head1.classList.add('headline');
    head1.classList.add('primary');
    head1.style.cssText = 'background-color: red; width: 50vw; height: 18vh';
    headlines.appendChild(head1);

    var head2 = document.createElement('div');
    head2.classList.add('headline');
    head2.classList.add('secondary');
    head2.style.cssText = 'background-color: orange; width: 50vw; height: 18vh';
    headlines.appendChild(head2);

    var head3 = document.createElement('div');
    head3.classList.add('headline');
    head3.classList.add('secondary');
    head3.style.cssText = 'background-color: gold; width: 50vw; height: 18vh';
    headlines.appendChild(head3);
    
    content.appendChild(headlines);	
}

function latestNews() {
    var content = document.getElementById('content');
    var news = document.createElement('section');
    news.id = 'news';

    var sectionHead = document.createElement('h2');
    sectionHead.innerHTML = 'Latest News >';
    news.appendChild(sectionHead);

    for (let i = 0; i < 8; i++) {
        var article = document.createElement('div');
	article.style.cssText = 'width: 23vw';

	var img = document.createElement('div');
	img.style.cssText = 'width: 100%; height: 20vh';
	img.style.backgroundColor = getRandomColor();
	article.appendChild(img);

        var title = document.createElement('span');
	title.style.width = '100%';
	title.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
	article.appendChild(title);

	news.appendChild(article);
    }
    content.appendChild(news);
}

function categories() {
    var content = document.getElementById('content');
    var categories = document.createElement('div');
    categories.id = 'categories';

    var sectionHead = document.createElement('h2');	
    sectionHead.innerHTML = 'More Categories >';
    categories.appendChild(sectionHead);

    for (let i = 0; i < 6; i++) {
        var catContainer = document.createElement('div');
	catContainer.style.cssText = 'width: 30vw; height: 80vh;';

	var catHead = document.createElement('h3');
	catHead.innerHTML = 'Lorem >';
	catContainer.appendChild(catHead);

	var img = document.createElement('div');
	img.style.cssText = 'width: 100%; height: 33%;';
	img.style.backgroundColor = getRandomColor();
	catContainer.appendChild(img);

	var catList = document.createElement('ul');
	
        for (let i = 0; i < 5; i++) {
	    var item = document.createElement('li');
	    item.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
	    catList.appendChild(item);
	}

	catContainer.appendChild(catList);

	categories.appendChild(catContainer);
    }

    content.appendChild(categories);
}

headlines();
//latest news
latestNews();
//categories
categories();
