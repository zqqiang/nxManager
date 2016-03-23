var React = require('react');

var PswpContainer = React.createClass({
    render: function() {
        return (
            <div className="pswp__container">
	            <div className="pswp__item"></div>
	            <div className="pswp__item"></div>
	            <div className="pswp__item"></div>
	        </div>
        );
    }
});

var PswpTopBar = React.createClass({
    render: function() {
        return (

        );
    }
});

var PswpUI = React.createClass({
    render: function() {
        return (
            <div className="pswp__ui pswp__ui--hidden">
        		<PswpTopBar />
				<div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
	                <div className="pswp__share-tooltip"></div> 
	            </div>
	            <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
	            <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
	            <div className="pswp__caption">
	                <div className="pswp__caption__center"></div>
	            </div>
        	</div>
        );
    }
});

var Gallery = React.createClass({
    render: function() {
        return (
            <div className="pswp" tabindex="-1" role="dialog" aria-hidden="true">
				<div className="pswp__bg"></div>
				<div className="pswp__scroll-wrap">
					<PswpContainer />
					<PswpUI />
				</div>
			</div>
        );
    }
});

module.exports = Gallery;