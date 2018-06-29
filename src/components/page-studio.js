/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { localize } from '../pwa-helpers/localize-mixin.js';

import { i18next } from '../i18next.js';

import {
  SharedStyles,
  HeaderStyles,
  SectionStyles,
} from './app-shared-styles.js';

class PageStudio extends localize(i18next)(PageViewElement) {
  _render(props) {
    // prettier-ignore
    return html`
      ${SharedStyles}
      ${HeaderStyles}
      ${SectionStyles}
      <style>
        :host {
          --app-section-background-color: var(--qiskit-studio-color);
          --app-section-color: #222222;
        }
      </style>

      <header>
        <img src="images/qiskit-logo.gif" alt="${i18next.t('pages.studio.altLogo')}">
        <div>
          <h1>${i18next.t('pages.studio.headerTitle')}</h1>
          <h2>${i18next.t('pages.studio.headerSubTitle')}</h2>
          <p>${i18next.t('pages.studio.headerDescription')}</p>
          <iframe
              src="https://ghbtns.com/github-btn.html?user=Qiskit&repo=qiskit-studio&type=star&count=true"
              frameborder="0"
              scrolling="0"
              width="100px"
              height="20px">
          </iframe>
        </div>
      </header>

      <section class="colored">
        <div class="limited-width">
          <h3>Title</h3>
          <div class="content">
            content
          </div>
        </div>
      </section>

      <section>
        <div class="limited-width">
          <h3>Title</h3>
          <div class="content">
            content
          </div>
        </div>
      </section>

      <section class="colored">
        <div class="limited-width">
          <h3>Title</h3>
          <div class="content">
            content
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('page-studio', PageStudio);
