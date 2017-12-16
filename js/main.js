(function (window) {

    var data = {},
        filter,
        entries,
        container,
        filter;


    function dataAsInteger(str) {

        return parseInt(this.getAttribute('data-' + str));

    }
    var sort = function (sortBy, sortType) {

        entries = [].slice.call(container.querySelectorAll(".entry"));
        sortType = sortType || 'asc';

        entries = entries.sort(function (a, b) {

            var contentA = dataAsInteger.call(a, sortBy);
            var contentB = dataAsInteger.call(b, sortBy);
            // return ((contentA > contentB) && sortType === 'asc') ? -1 : 1;

            return sortType === 'asc'? contentA - contentB : contentB - contentA;
        });

        entries.forEach(function (e) {
            container.appendChild(e);
        });
    };

    var buildList = function (entries) {

        var oldEntries = container.querySelectorAll('.entry');

        oldEntries.forEach(function (entry) {
            container.removeChild(entry);
        });

        entries.forEach(function (t) {
            if (t.data.thumbnail == '' || t.data.thumbnail == 'self') return;
            if (t.data.over_18) return;
            if (t.data.stickied) return;

            var entry = document.createElement('a');
            entry.classList.add('entry');
            entry.href = t.data.url;
            entry.target = "_blank";

            entry.setAttribute('data-score', t.data.score);
            entry.setAttribute('data-ups', t.data.ups);
            entry.setAttribute('data-downs', t.data.downs);
            entry.setAttribute('data-age', t.data.age);

            var figure = document.createElement('figure');
            figure.href = t.data.url;
            figure.target = "_blank";

            var thumbnail = document.createElement('img');
            thumbnail.src = t.data.thumbnail;
            figure.appendChild(thumbnail);

            var title = document.createElement('figcaption');
            title.innerHTML = t.data.title;
            figure.appendChild(title);

            var footer = document.createElement('footer');
            var itemUps = document.createElement('span');
            var itemDowns = document.createElement('span');
            var date = document.createElement('span');
            
            itemUps.innerHTML = '&#9786; (' + parseInt(t.data.ups) + ')';
            itemDowns.innerHTML = '&#9785; (' + parseInt(t.data.downs) + ')';

            date.innerHTML =  new Date(t.data.created * 1000).toLocaleDateString('de-DE');
                

            footer.appendChild(itemUps);
            footer.appendChild(itemDowns);
            footer.appendChild(date);
            ;
            container.appendChild(entry)
            entry.appendChild(figure);
            entry.appendChild(footer);
        });

    };

    var handleOnLoad = function (res) {
        entries = res.target.response.data.children;

        buildList(entries);
        sort('downs'); // Funktioniert irgendwie nicht
    };

    var getJSON = function (sub, cat, limit) {
        if (!sub || !cat) return false;
        var httpRequest = new XMLHttpRequest();
        httpRequest.onload = handleOnLoad;
        httpRequest.responseType = 'json';

        httpRequest.open('GET', 'https://www.reddit.com/r/' + sub + '/' + cat + '.json', true);
        httpRequest.send({ 'g': 'GLOBAL', limit: limit });
    };

    var init = function () {

        // define project vars once to increase performance
        container = document.querySelector('#container');
        filter = document.querySelector('#filter');

        filter.addEventListener('submit', function (e) {
            e.preventDefault();
            var formData = new FormData(filter),
                subreddit = formData.get('subreddit'),
                category = formData.get('category');
            limit = formData.get('limit');

            getJSON(subreddit, category, limit);

        });

        var toBeSorted = document.querySelector('#sort');
        toBeSorted.querySelectorAll('input[name="sort"]').forEach(function (radio) {
            radio.addEventListener('click', function () {
                if (this.checked) {

                    var myLabel = document.querySelector('label[for="' + this.getAttribute('id') + '"]')
                    if (myLabel.classList.contains('desc')) {
                        sort(this.value);
                        myLabel.classList.remove('desc');
                    } else {
                        sort(this.value, 'desc');
                        myLabel.classList.add('desc');
                    }

                }
            })
        });


        getJSON('memes', 'hot', '15');

        document.querySelector('#sort input[name="sort"]').click();
    };

    document.addEventListener('DOMContentLoaded', init);

})(window);