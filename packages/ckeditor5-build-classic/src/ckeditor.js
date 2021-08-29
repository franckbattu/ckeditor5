/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
 import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Alignment,
	Autoformat,
	Autosave,
	BlockQuote,
	Bold,
	Essentials,
	FontColor,
	FontSize,
	Heading,
	HorizontalLine,
	HtmlEmbed,
	Image,
	ImageCaption,
	ImageResize,
	ImageToolbar,
	ImageUpload,
	Indent,
	Italic,
	Link,
	LinkImage,
	List,
	MediaEmbed,
	MediaEmbedToolbar,
	Paragraph,
	PasteFromOffice,
	SimpleUploadAdapter,
	Table,
	TableCaption,
	TableCellProperties,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Underline
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'|',
			'uploadImage',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};