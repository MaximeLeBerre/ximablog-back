import type { Schema, Attribute } from '@strapi/strapi';

export interface ParagraphParagraph extends Schema.Component {
  collectionName: 'components_paragraph_paragraphs';
  info: {
    displayName: 'paragraph';
    icon: 'feather';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'paragraph.paragraph': ParagraphParagraph;
    }
  }
}
