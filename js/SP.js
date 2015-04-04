$(document).ready(function () {

    var updateFeed = function () {
        var initialQuery = $('#query').val();
        initialQuery = initialQuery.replace(" ", "");
        var queryTags = initialQuery.split(",");
        $('.social-feed-container').socialfeed({
            // FACEBOOK
            facebook: {
                accounts: queryTags,
                limit: 2,
                access_token: '150849908413827|a20e87978f1ac491a0c4a721c961b68c'
            },
            // GOOGLEPLUS
            google: {
                accounts: queryTags,
                limit: 2,
                access_token: 'AIzaSyDpNQcIwQf5TcKmI8B0rh3e4OodIywJP14'
            },
            // Twitter
            twitter: {
                accounts: queryTags,
                limit: 2,
                consumer_key: 'qzRXgkI7enflNJH1lWFvujT2P', // make sure to have your app read-only
                consumer_secret: '8e7E7gHuTwyDHw9lGQFO73FcUwz9YozT37lEvZulMq8FXaPl8O', // make sure to have your app read-only
            },
            // VKONTAKTE
            vk: {
                accounts: queryTags,
                limit: 2,
                source: 'all'
            },
            // INSTAGRAM
            instagram: {
                accounts: queryTags,
                limit: 2,
                client_id: '88b4730e0e2c4b2f8a09a6184af2e218'
            },

            // GENERAL SETTINGS
            length: 200,
            show_media: true,
            // Moderation function - if returns false, template will have class hidden
            moderation: function (content) {
                return (content.text) ? content.text.indexOf('fuck') == -1 : true;
            },
            //update_period: 5000,
            // When all the posts are collected and displayed - this function is evoked
            callback: function () {
                console.log('all posts are collected');
            }
        });
    };

    updateFeed();
    $('#button-update').click(function () {
        updateFeed();
    });

});