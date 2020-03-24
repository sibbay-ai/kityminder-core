define(function(require, exports, module) {
    var kity = require('../core/kity');
    var utils = require('../core/utils');

    var Minder = require('../core/minder');
    var MinderNode = require('../core/node');
    var Command = require('../core/command');
    var Module = require('../core/module');
    var Renderer = require('../core/render');

    //     result["icon"] = "mchoice";
    // } else if (iconIndex === 62) {
    //     result["icon"] = "healthbubble";
    // } else if (iconIndex === 63) {
    //     result["icon"] = "text";
    // } else if (iconIndex === 41) {
    //     result["icon"] = "duration";

    Module.register('DiffIconsModule', function() {
        var minder = this;

        // jscs:disable maximumLineLength
 
        var NEW_PATH = "M576 448V192H448v256H192v128h256v256h128V576h256V448z";
        var CHANGE_PATH =
          "M450.602458 665.598073a62.463819 62.463819 0 0 0 122.879645 0L614.441984 102.399704A102.615282 102.615282 0 0 0 512.04228 0 105.256116 105.256116 0 0 0 409.642577 112.639674L450.602458 665.598073z m61.439822 153.599556a102.399704 102.399704 0 1 0 102.399704 102.399703 96.740773 96.740773 0 0 0-102.399704-102.399703z";
        var DELETE_PATH =
          "M852.901888 256.671744L597.38466987 512.18896213l256.6422528 256.6422528c23.6519424 23.6519424 23.69672533 61.84850773 0.1867776 85.35845547-23.494656 23.494656-61.6923136 23.44987307-85.344256-0.20097707L512.2260992 597.34644053 256.70888107 852.86475093c-23.50230187 23.50230187-61.7447424 23.412736-85.344256-0.1867776-23.62135893-23.62135893-23.7109248-61.86379947-0.20862294-85.36610133l255.51721814-255.51721813-256.63460694-256.6356992c-23.60715947-23.60715947-23.68907947-61.84086187-0.1933312-85.33661014 23.5175936-23.5175936 61.75238827-23.4356736 85.35845547 0.17148587l256.6356992 256.6356992 255.50957227-255.50957227c23.53943893-23.53943893 61.73709653-23.4061824 85.35845546 0.2162688 23.5995136 23.59842133 23.7338624 61.79607893 0.19442347 85.33551787z m0 0";
    

        // 类型图标的图形
        var DiffIconsIcon = kity.createClass("DiffIconsIcon", {
          base: kity.Group,

          constructor: function(diff) {
            this.callBase();
            this.setSize(20);
            this.setDiff(diff);
            this.create();
          },

          setSize: function(size) {
            this.width = this.height = size;
          },

          setDiff: function(diff) {
            this.diff = diff;
          },

          create: function() {
            var icons = {
              new: new kity.Path()
                .setPathData(NEW_PATH)
                .fill("#F81E1E")
                .scale(0.02),
              change: new kity.Path()
                .setPathData(CHANGE_PATH)
                .fill("#F81E1E")
                .scale(0.02),
              delete: new kity.Path()
                .setPathData(DELETE_PATH)
                .fill("#F81E1E")
                .scale(0.02)
            };
            this.path = icons[this.diff];
            this.rect = new kity.Rect(20, 20, -2, -6, 4).fill(
              "rgba(255, 255, 255, 0)"
            );
            this.addShapes([this.rect, this.path]);
          }

          // setValue: function(value) {
          //     var back = this.back,
          //         mask = this.mask,
          //         number = this.number;

          //     var color = PRIORITY_COLORS[value];

          //     if (color) {
          //         back.fill(color[1]);
          //         mask.fill(color[0]);
          //     }

          //     number.setContent(value);
          // }
        });

        /**
         * @command DiffIcons
         * @description 设置节点的优先级信息
         * @param {number} value 要设置的优先级（添加一个优先级小图标）
         *     取值为 0 移除优先级信息；
         *     取值为 1 - 9 设置优先级，超过 9 的优先级不渲染
         * @state
         *    0: 当前有选中的节点
         *   -1: 当前没有选中的节点
         */
        var DiffIconsCommand = kity.createClass('SetDiffIconsCommand', {
            base: Command,
            execute: function(km, value) {
                var node = km.getSelectedNode();
                node.setData("diff", value || null);
                node.render();
                node.getMinder().layout(300);
            },
            queryValue: function(km) {
                var node = km.getSelectedNode();
                return node && node.getData('diff');
            },

            queryState: function(km) {
                return km.getSelectedNodes().length === 1 ? 0 : -1;
            }
        });
        return {
            'commands': {
                'diff-icons': DiffIconsCommand
            },
            'renderers': {
                left: kity.createClass('DiffIconsRenderer', {
                    base: Renderer,

                    create: function(node) {
                        return new DiffIconsIcon(node.getData("diff"));
                    },

                    shouldRender: function(node) {
                        return node.getData("diff");
                    },

                    update: function(icon, node, box) {
                        var data = node.getData("diff");
                        var spaceLeft = node.getStyle('space-left'),
                            x, y;

                        x = box.left - icon.width - spaceLeft;
                        y = -icon.height / 2;

                        icon.setTranslate(x, y);

                        return new kity.Box({
                            x: x,
                            y: y,
                            width: icon.width,
                            height: icon.height
                        });
                    }
                })
            }
        };
    });
});