import './lazyload/lzInstance';
import Alpine from 'alpinejs';
import AsyncAlpine from 'async-alpine';
import { accordion, tippyFocusfix, tippyMenu, tippySubmenu } from './components';
import focus from '@alpinejs/focus';
import collapse from '@alpinejs/collapse';
import tooltip from '@ryangjchandler/alpine-tooltip';

Alpine.plugin(tooltip);
Alpine.plugin(focus);
Alpine.plugin(collapse);

Alpine.data(...tippyFocusfix);
Alpine.data(...tippyMenu);
Alpine.data(...tippySubmenu);
Alpine.data('accordion', accordion);

AsyncAlpine.init(Alpine).start();

if (process?.env?.NODE_ENV === 'development') window.Alpine = Alpine;

Alpine.start();
