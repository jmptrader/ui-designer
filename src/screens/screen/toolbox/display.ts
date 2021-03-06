import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import sortable = require('sortable');

import {Textblock} from './widgets/textblock';
import {Header} from './widgets/header';
import {Articles} from './widgets/articles';
import {Logo} from './widgets/logo';

@inject(EventAggregator, Textblock, Header, Articles, Logo)
export class Toolbox {

  widgets;
  ea: EventAggregator;
  toolboxList: any[];

  constructor(evtAgg, textBlock, header, articles, logo) {
    this.widgets = [
      textBlock,
      header,
      articles,
      logo
    ];
    this.ea = evtAgg;
  }

  attached() {
    new sortable(this.toolboxList, {
      sort: false,
      group: {
        name: "form",
        pull: 'clone',
        put: false
      }
    });
  }

  printReport() {
    window.print();
  }

  clearReport() {
    this.ea.publish('clearReport');
  }
}
