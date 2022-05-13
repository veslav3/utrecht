import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-article',
  styleUrl: 'index.scss',
  shadow: true,
})
export class Article {
  render() {
    return (
      <article class="utrecht-article">
        <slot></slot>
      </article>
    );
  }
}