head.load('/js/vendor/signet.js');

module.exports = site = {};
site.skel = require('./vendor/skel.js');

site.settings = {
	useFullScreenHeader: true,
	prefix: '/css/main',
	boxModel: 'border',
	useOrientation: true,
	containers: 1140,
	grid: {
		gutters: 40
	},
	breakpoints: {
		'widest': { range: '1680-', containers: 1140, hasStyleSheet: false },
		'wide':   { range: '1081-1680', containers: 960 },
		'normal': { range: '841-1080', containers: '95%' },
		'narrow': { range: '641-840', containers: '95%', grid: { gutters: 30 } },
		'mobile': { range: '-640', lockViewport: true, containers: '95%', grid: { collapse: true } }
	}
};

// Initialize skelJS
site.skel.init(site.settings);

(function() {
    var elm = document.getElementById('body'),
        url = '/images/lake_bg.jpg';
    if (elm) {
        elm.style.backgroundImage = "none";
        var tmp = new Image();
        tmp.onload = function() {
           elm.style.backgroundImage = "url('"+url+"')";
           // or insert some other special effect code here.
        };
        tmp.src = url;
    }
})();