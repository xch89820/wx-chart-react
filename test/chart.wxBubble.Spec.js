/* global module, wx, window: false, document: false, describe, it, assert, wx */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import WxBubbleReact from '../src/bubble.jsx'

describe('WxBubbleReact component test', () => {
    it('Draw an WxBubbleReact', () => {
        let props = {
            id :'multiBubble',
            width: 700,
            height: 400,
            title: '数据量/覆盖度统计',
            yScaleOptions: {
                position: 'left',
                title: '覆盖率（%）'
            },
            legends:[{
                text: '北京',
                key: 'bj',
                rKey: 'bjz',
                fillStyle: '#3385ff',
                strokeStyle: '#3385ff'
            }, {
                text: '上海',
                key: 'sh',
                rKey: 'shz'
            }, {
                text: '南京',
                key: 'nj',
                rKey: 'njz'
            }],
            tooltip: {
                model: 'axis'
            }
        };

        // We want to render it actually
        let body = document.body;
        let DIV = document.createElement('div');
        body.appendChild(DIV);
        const wxElement = ReactDOM.render(<WxBubbleReact {...props}></WxBubbleReact>, DIV);
        wxElement.update([{
            bj: 10,
            sh: 20,
            nj: 10,
            bjz: 20,
            shz: 25,
            njz: 31,
            label: '一月'
        }, {
            bj: 40,
            sh: 115,
            nj: 12,
            bjz: 31,
            shz: 25,
            njz: 33,
            label: '二月'
        }, {
            bj: 35,
            sh: 34.5,
            nj: 16,
            bjz: 35,
            shz: 30,
            njz: 40,
            label: '三月'
        }, {
            bj: 56,
            sh: 22,
            nj: 21,
            bjz: 70,
            shz: 21,
            njz: 33,
            label: '四月'
        }, {
            bj: 71,
            sh: 56,
            nj: 32,
            bjz: 57,
            shz: 55,
            njz: 35,
            label: '五月'
        }]);
    });
    // afterEach(() => {
    //     // Unmount all element
    //     ReactDOM.unmountComponentAtNode(document.body);
    // });
});