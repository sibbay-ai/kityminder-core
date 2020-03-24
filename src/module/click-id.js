/**
 * @fileOverview
 *
 * ClickID 所需的 ID 跳转
 *
 * @author: bqx619
 * @copyright: Sibbay, 2020
 */
define(function(require, exports, module) {
    var kity = require('../core/kity');
    var utils = require('../core/utils');

    var Minder = require('../core/minder');
    var MinderNode = require('../core/node');
    var Command = require('../core/command');
    var Module = require('../core/module');
    var Renderer = require('../core/render');

    Module.register('ClickIDModule', function() {

        var Click_PATH =
          "M16.614,10.224h-1.278c-1.668,0-3.07-1.07-3.599-2.556h4.877c0.707,0,1.278-0.571,1.278-1.278V3.834 c0-0.707-0.571-1.278-1.278-1.278h-4.877C12.266,1.071,13.668,0,15.336,0h1.278c2.116,0,3.834,1.716,3.834,3.834V6.39 C20.448,8.508,18.73,10.224,16.614,10.224z M5.112,5.112c0-0.707,0.573-1.278,1.278-1.278h7.668c0.707,0,1.278,0.571,1.278,1.278 S14.765,6.39,14.058,6.39H6.39C5.685,6.39,5.112,5.819,5.112,5.112z M2.556,3.834V6.39c0,0.707,0.573,1.278,1.278,1.278h4.877 c-0.528,1.486-1.932,2.556-3.599,2.556H3.834C1.716,10.224,0,8.508,0,6.39V3.834C0,1.716,1.716,0,3.834,0h1.278 c1.667,0,3.071,1.071,3.599,2.556H3.834C3.129,2.556,2.556,3.127,2.556,3.834z";


        /**
         * @command ClickID
         * @description 设置节点的备注信息
         * @param {string} ClickID 要设置的备注信息，设置为 null 则移除备注信息
         * @state
         *    0: 当前有选中的节点
         *   -1: 当前没有选中的节点
         */
        var ClickIDCommand = kity.createClass('ClickIDCommand', {
            base: Command,

            execute: function(minder, id) {
                var node = minder.getSelectedNode();
                node.setData('id', id);
                node.render();
                node.getMinder().layout(300);
            },

            queryState: function(minder) {
                return minder.getSelectedNodes().length === 1 ? 0 : -1;
            },

            queryValue: function(minder) {
                var node = minder.getSelectedNode();
                return node && node.getData('id');
            }
        });

        var ClickIDIcon = kity.createClass('ClickIDIcon', {
            base: kity.Group,

            constructor: function() {
                this.callBase();
                this.width = 24;
                this.height = 22;
                this.rect = new kity.Rect(24, 22, -2, -6, 4).fill(
                  "rgba(255, 255, 255, 0)"
                );
                this.path = new kity.Path()
                  .setPathData(Click_PATH)
                  .fill("#d4237a");
                this.addShapes([this.rect, this.path]);

                this.on('mouseover', function() {
                    this.rect.fill('rgba(255, 255, 200, .8)');
                }).on('mouseout', function() {
                    // this.rect.fill('transparent');
                    this.rect.fill("rgba(255, 255, 255, 0)");
                });

                this.setStyle('cursor', 'pointer');
            }
        });

        var ClickIDIconRenderer = kity.createClass('ClickIDIconRenderer', {
            base: Renderer,

            create: function(node) {
                var icon = new ClickIDIcon();
                icon.on('click', function() {
                    node.getMinder().fire('clickidrequest', {node: node, icon: icon});
                });
                // icon.on('mousedown', function(e) {
                //     e.preventDefault();
                //     node.getMinder().fire('editClickIDrequest');
                // });
                // icon.on('mouseover', function() {
                //     node.getMinder().fire('showClickIDrequest', {node: node, icon: icon});
                // });
                // icon.on('mouseout', function() {
                //     node.getMinder().fire('hideClickIDrequest', {node: node, icon: icon});
                // });
                return icon;
            },

            shouldRender: function(node) {
                return node.getData('id');
            },

            update: function(icon, node, box) {
                // var x = box.right + node.getStyle('space-right');
                // var y = box.cy;

                // icon.path.fill(node.getStyle('color'));
                // icon.setTranslate(x, y);

                // return new kity.Box(x, Math.round(y - icon.height / 2), icon.width, icon.height);
                var spaceRight = node.getStyle("space-right");

                icon.setTranslate(box.right + spaceRight + 2, -5);
                return new kity.Box({
                  x: box.right + spaceRight,
                  y: -11,
                  width: 24,
                  height: 22
                });

            }

        });

        return {
            renderers: {
                right: ClickIDIconRenderer
            },
            commands: {
                'click-id': ClickIDCommand
            }
        };
    });
});