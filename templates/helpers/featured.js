// populates the two homepage content boxes

module.exports = function(articles) {
  if (articles.length >= 2) {

    var top = buildTop(articles[0]);


    var bottom = buildBottom(articles[1]);

    return top + bottom;
  }

}

var buildTop = function(article) {
    if (!article.metadata.thumb) {
        return noPictureFeature(article);
    } else {
        return '<!-- Feature 1 --> \
            <article id="first" class="container box style1 right blog"> \
            <a href="' + article.url + '"> \
            <div class="image full" style="background-image: url('+ article.url + article.metadata.thumb +') "></div> \
            <div class="inner"> \
                <header> \
                    <h2>' + article.metadata.title + '</h2> \
                </header> \
                <p>'+ article.intro + '</p> \
            </div></a> \
        </article>';
    }
}

var buildBottom = function(article) {
    if (!article.metadata.thumb) {
        return noPictureFeature(article);
    } else {
        return '<!-- Feature 2 --> \
        <article class="container box style1 left blog"> \
            <a href="' + article.url + '"> \
            <div class="image full" style="background-image: url('+ article.url + article.metadata.thumb +') "></div> \
            <div class="inner"> \
                <header> \
                    <h2>' + article.metadata.title + '</h2> \
                </header> \
                <p>'+ article.intro + '</p> \
            </div></a> \
        </article>'
    }
}

var noPictureFeature = function(article) {
    return '<!-- Feature 2 --> \
        <article class="container box style1 blog"> \
            <a href="' + article.url + '"> \
            <div class="inner"> \
                <header> \
                    <h2>' + article.metadata.title + '</h2> \
                </header> \
                <p>'+ article.intro + '</p> \
            </div></a> \
        </article>';
}