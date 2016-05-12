var $ = require('jquery');
var React = require('react');
var Header = require('./header.react');
var SalonStore = require('../stores/SalonStore');
var SalonActions = require('../actions/SalonActions');

var ENTER_KEY_CODE = 13;

var UserBlock = React.createClass({
    render: function() {
        var username;
        if ('en' === this.props.locale) {
            username = 'Jonathan Burke Jr.';
        } else if ('cn' === this.props.locale) {
            username = '张三';
        }

        console.log(this.props.locale);

        return (
            <div className="user-block">
                <img className="img-circle" src="http://placehold.it/100x100/39CCCC/ffffff" alt="User Image" />
                <span className="username">
                    <a href="#">{username}</a>
                </span>
                <span className="description">Shared publicly - 7:30 PM Today</span>
            </div>
        );
    }
});

var BoxTools = React.createClass({
    render: function() {
        return (
            <div className="box-tools">
                <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="Mark as read">
                    <i className="fa fa-circle-o"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="collapse">
                    <i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove">
                    <i className="fa fa-times"></i>
                </button>
            </div>
        );
    }
});

var BoxHeader = React.createClass({
    render: function() {
        return (
            <div className="box-header with-border">
                <UserBlock locale={this.props.locale} />
                <BoxTools />
            </div>
        );
    }
});

var BoxBody = React.createClass({
    render: function() {
        return (
            <div className="box-body">
                <img className="img-responsive pad" src="http://placehold.it/2000x600/DD4B39/ffffff" alt="Photo" />
                <p>I took this photo this morning. What do you guys think?</p>
                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"></i> Share</button>&nbsp;
                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
                <span className="pull-right text-muted">127 likes - 3 comments</span>
            </div>
        );
    }
});

var BoxComment = React.createClass({
    render: function() {
        return (
            <div className="box-comment">
                <img className="img-circle img-sm" src="http://placehold.it/50x50/DD4B39/ffffff" alt="User Image" />
                <div className="comment-text">
                    <span className="username">
                        Maria Gonzales
                        <span className="text-muted pull-right">8:03 PM Today</span>
                    </span>
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                </div>
            </div>
        );
    }
});

var BoxFooter = React.createClass({
    render: function() {
        return (
            <div className="box-footer box-comments">
                <BoxComment />
            </div>
        );
    }
});

var BoxPostFooter = React.createClass({
    getInitialState: function() {
        return {
            value: this.props.value || ''
        };
    },
    render: function() {
        return (
            <div className="box-footer">
                <form action="javascript:void(0);" method="post">
                    <img className="img-responsive img-circle img-sm" src="http://placehold.it/128x128/DD4B39/ffffff" alt="Alt Text" />
                    <div className="img-push">
                        <input
                            type="text" 
                            className="form-control input-sm" 
                            placeholder="Press enter to post comment" 
                            onKeyDown={this._onKeyDown}
                            value={this.state.value}
                            onChange={this._onChange}
                        />
                    </div>
                </form>
            </div>
        );
    },
    _onKeyDown: function(event) {
        if (event.keyCode == ENTER_KEY_CODE) {
            this._save();
        }
    },
    _save: function() {
        this.props.onSave(this.state.value);
        this.setState({
            value: ''
        });
    },
    _onChange: function(event) {
        this.setState({
            value: event.target.value
        });
    },
});

var BoxWidget = React.createClass({
    render: function() {
        return (
            <div className="box box-widget">
                <BoxHeader locale={this.props.locale} />
                <BoxBody />
                <BoxFooter />
                <BoxPostFooter onSave={this._onSave} />
            </div>
        );
    },
    _onSave: function(text) {
        // SalonActions.updateText();
        SalonActions.changeLocale('cn');
    }
});

var Content = React.createClass({
    render: function() {
        return (
            <section className="content">
                <div className="row">
                    <BoxWidget locale={this.props.locale} />
                </div>
            </section>
        );
    }
});

function getSalonState() {
    return SalonStore.getAll();
}

var Salon = React.createClass({
    getInitialState: function() {
        return getSalonState();
    },
    componentDidMount: function() {
        SalonStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        // todo:
        // SalonStore.removeChangeListener(this._onChange);
    },
    render: function() {
        var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
        var window_height = $(window).height();
        $(".content-wrapper, .right-side").css('min-height', window_height - neg);

        return (
            <div>
                <Header title='Services' smalltitle='Salon' icon='briefcase' menu='Services' submenu='Salon' />
                <Content locale={this.state.locale} />
            </div>
        );
    },
    _onChange: function() {
        this.setState(getSalonState());
    }
});

module.exports = Salon;