requirejs.config({
  paths: {
    'text': 'https://s3.amazonaws.com/www.tweetmyjobs.com/enterprise/js/lib/text',
    'bootstrap': 'https://s3.amazonaws.com/www.tweetmyjobs.com/enterprise/js/lib/bootstrap.min',
    'datepicker': 'https://careerbeam-com.s3.amazonaws.com/js/lib/bootstrap-datepicker',
    'formhelper': 'https://s3.amazonaws.com/careerbeam-com/js/lib/bootstrap-formhelpers',
    'bootstrap_switch': 'https://careerbeam-com.s3.amazonaws.com/js/lib/bootstrap-switch',
    'jquery': 'https://s3.amazonaws.com/www.tweetmyjobs.com/enterprise/js/lib/jquery-1.9.1',
    'jquery_ujs': 'https://careerbeam-com.s3.amazonaws.com/js/lib/jquery-ujs',
    'jquery-ui': 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min',
    'truncate': 'https://careerbeam-com.s3.amazonaws.com/js/lib/jquery.truncate',
    'typeahead': 'https://careerbeam-com.s3.amazonaws.com/js/lib/typeahead-bundle',
    'ranked-list': 'https://careerbeam-com.s3.amazonaws.com/js/lib/ranked-list',
    //'ranked-list': 'widgets/ranked-list',
    'core_patches': 'https://careerbeam-com.s3.amazonaws.com/js/core_patches',
    'iframe-transport': 'https://careerbeam-com.s3.amazonaws.com/js/lib/jquery.iframe-transport',
    'remotipart': 'https://careerbeam-com.s3.amazonaws.com/js/lib/jquery.remotipart',
    'socket.io': 'https://careerbeam-com.s3.amazonaws.com/js/lib/socket.io',
    'easyrtc': 'https://careerbeam-com.s3.amazonaws.com/js/lib/easyrtc_20180628.js?v=2018062816',
    'easyrtc_lang': 'https://careerbeam-com.s3.amazonaws.com/js/lib/easyrtc_lang',
    'easyrtc_app': 'https://careerbeam-com.s3.amazonaws.com/js/lib/easyrtc_app',
    'easyrtc_ft': 'https://careerbeam-com.s3.amazonaws.com/js/lib/easyrtc_ft',
    'easyrtc_int': 'https://careerbeam-com.s3.amazonaws.com/js/lib/easyrtc_int',
    'js-cookies': 'https://careerbeam-com.s3.amazonaws.com/js/js.cookie',
    'moment': 'https://d31kswug2i6wp2.cloudfront.net/js/lib/moment',
    'moment-tz': 'https://d31kswug2i6wp2.cloudfront.net/js/lib/moment-timezone.min',
    'chat': '/javascripts/chat'
  },
  shim: {
    'jquery':{
      exports: '$'
    },
    'jquery_ujs': {
      deps: ['jquery']
    },
    'jquery-ui': {
      deps: ['jquery']
    },
    'truncate': {
      deps: ['jquery']
    },
    'bootstrap': {
      deps: ['jquery', 'jquery-ui'],
      exports: 'jQuery'
    },
    'datepicker': {
      deps: ['bootstrap']
    },
    'formhelper': {
      deps: ['bootstrap']
    },
    'bootstrap_switch': {
      deps: ['bootstrap']
    },
    'typeahead': {
      deps: ['bootstrap']
    },
    'ranked-list': {
      deps: ['jquery', 'jquery-ui']
    },
    'iframe-transport': {
      deps: ['jquery']
    },
    'remotipart': {
      deps: ['jquery', 'iframe-transport']
    },
    'easyrtc': {
      deps: ['socket.io']
    },
    'easyrtc_app': {
      deps: ['easyrtc']
    },
    'easyrtc_ft': {
      deps: ['easyrtc']
    },
    'easyrtc_lang': {
      deps: ['easyrtc']
    },
    'easyrtc_int': {
      deps: ['easyrtc']
    },
    'chat': {
      deps: ['socket.io', 'easyrtc', 'js-cookies', 'easyrtc_app']
    }

  },
  waitSeconds: 120,
  urlArgs: "v=" + (new Date()).toISOString().slice(0,14).replace(/[-T:]/g,"")
});

define(['jquery', 'js-cookies', 'jquery-ui', 'jquery_ujs', 'truncate', 'bootstrap', 'datepicker', 'formhelper', 'core_patches', 'typeahead', 'bootstrap_switch', 'ranked-list', 'iframe-transport', 'remotipart'], function ($, Cookies) {
  window.initPage = function(sel){
    setTimeout(function() {
      $("#flash .alert-success").fadeOut();
    }, 10000);
	};

	window.initPage('body');









});
