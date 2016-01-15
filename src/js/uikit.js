import $ from 'jquery';
import UIkit from './api/global';
import internalAPI from './api/internal';
import eventAPI from './api/event';
import componentAPI from './api/component';
import webcomponentAPI from './api/webcomponent';
import supports from './supports/index';
import * as util from './util/index';

window.UIkit3 = UIkit;

UIkit.version = '3.0.0';
UIkit.options = {};

UIkit.supports = supports;
UIkit.util     = supports;

UIkit.$doc  = $(document);
UIkit.$win  = $(window);
UIkit.$html = $('html');

// add touch identifier class
UIkit.$html.addClass(UIkit.supports.touch ? 'uk-touch' : 'uk-notouch');

internalAPI(UIkit);
eventAPI(UIkit);
componentAPI(UIkit);
webcomponentAPI(UIkit);

// core components
require('./core/grid')(UIkit);

export default UIkit;