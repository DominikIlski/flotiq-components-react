function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useEffect } from 'react';
import Code from '../Code/Code';
import Delimiter from '../Delimiter/Delimiter';
import File from '../File/File';
import Header from '../Header/Header';
import List from '../List/List';
import Paragraph from '../Paragraph/Paragraph';
import Quote from '../Quote/Quote';
import Table from '../Table/Table';
import Warning from '../Warning/Warning';
import YouTubeEmbed from '../YouTubeEmbed/YouTubeEmbed';

const Content = ({
  blocks,
  highlight,
  headerProps,
  paragraphProps,
  youTubeEmbedProps,
  fileProps,
  quoteProps,
  tableProps,
  codeProps,
  warningProps,
  delimiterProps
}) => {
  useEffect(() => {
    if (highlight) {
      highlight.highlightAll();
    }
  }, [highlight]);
  return /*#__PURE__*/React.createElement("div", null, blocks.map(block => {
    switch (block.type) {
      case 'header':
        return /*#__PURE__*/React.createElement(Header, _extends({
          level: block.data.level,
          text: block.data.text,
          anchor: block.data.anchor,
          alignement: block.tunes?.alignmentTuneTool?.alignment
        }, headerProps, {
          key: block.id
        }));

      case 'paragraph':
        return /*#__PURE__*/React.createElement(Paragraph, _extends({
          text: block.data.text,
          alignement: block.tunes?.alignementTuneTool?.alignement
        }, paragraphProps, {
          key: block.id
        }));

      case 'list':
        return /*#__PURE__*/React.createElement(List, {
          items: block.data.items,
          style: block.data.style,
          key: block.id
        });

      case 'image':
        return /*#__PURE__*/React.createElement(File, _extends({
          url: block.data.url,
          caption: block.data.caption,
          fileName: block.data.fileName,
          extension: block.data.extension,
          stretched: block.data.stretched
        }, fileProps, {
          key: block.id
        }));

      case 'quote':
        return /*#__PURE__*/React.createElement(Quote, _extends({
          text: block.data.text,
          caption: block.data.caption
        }, quoteProps, {
          key: block.id
        }));

      case 'youtubeEmbed':
        return /*#__PURE__*/React.createElement(YouTubeEmbed, _extends({
          url: block.data.url,
          key: block.id
        }, youTubeEmbedProps));

      case 'table':
        return /*#__PURE__*/React.createElement(Table, _extends({
          content: block.data.content,
          withHeadings: block.data.withHeadings
        }, tableProps, {
          key: block.id
        }));

      case 'code':
        return /*#__PURE__*/React.createElement(Code, _extends({
          code: block.data.code
        }, codeProps, {
          key: block.id
        }));

      case 'warning':
        return /*#__PURE__*/React.createElement(Warning, _extends({
          title: block.data.title,
          message: block.data.message
        }, warningProps, {
          key: block.id
        }));

      case 'delimiter':
        return /*#__PURE__*/React.createElement(Delimiter, delimiterProps);

      default:
        return null;
    }
  }));
};

export default Content;