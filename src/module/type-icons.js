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

    Module.register('TypeIconsModule', function() {
        var minder = this;

        // jscs:disable maximumLineLength
        var HEALTHBUBBLE_PATH = "M841.5 631.1c-43.2-115.2-162.5-240.7-187.8-265l-0.9-0.9c-3-2.7-6.2-5.5-9.8-8.4-2.7-2.9-5.2-5.4-7.5-7.8 7.7 6.4 17.5 10.4 28.4 10.4 17.4 0 32.3-10.1 39.7-24.6 25.9 5.2 93.8 20 102.7 57.2 2.1 8.8 10 14.7 18.7 14.7 1.5 0 3-0.2 4.5-0.5 10.3-2.5 16.7-12.8 14.2-23.2-11.2-46.5-62.6-68-101.7-78.7 18.5-17.3 35.1-39.3 37-54.6 1.3-10.2-5.8-19-16-20.7-10.2-1.7-20 5.6-22.1 15.7-2.1 10-26.2 34.6-40.3 44.7-8.1-11.6-21.5-19.3-36.7-19.3-13.4 0-25.3 6-33.5 15.4 4.7-7 9.7-11.8 12.2-14 1.8-1.6 5.2-4.2 9.6-7.7 48.8-38.4 95.3-70.6 104.9-100.3 2.7-8.2 4.5-13.5 5.8-17 1.9-5.4 7.5-21.2-6.9-28.5-2.9-3.1-8.1-6.8-16.4-6.8-6.5 0-13 2.2-21.3 5-13.8 4.7-33 10-45.4 4.8-10.4-4.4-20.4-11.5-30.9-19-19.6-13.9-41.8-29.8-72.9-32-24.7-1.8-44.8 6.6-64 14.7-17.1 7.2-33.2 14-54.9 14h-0.1c-21.1-0.4-44.1-3.5-64.4-6.2-19.1-2.6-35.6-4.8-48.9-4.8-5.6 0-10.3 0.4-13.4 1.1-2-1.6-5.1-5.4-9.1-11.3-3.1-4.6-7.9-11.6-17.7-11.6-5.5 0-10.9 2.7-14.2 7.1-5.8 7.7-5.5 9 4.2 43.2l1.4 4.9c0.3 1.1 0.6 3.1 1.1 5.8 3.4 19.2 11.5 56.8 33 80.2 3 3.8 6.3 7.9 9.9 12.3 16.5 20.3 37.7 46.5 48.3 74.5-5.2 1.1-10.4 1.9-15.6 3.1-9.5 2.1-15.5 11.6-13.4 21.1 2.1 9.5 11.6 15.4 21.1 13.3 4.8-1.1 9.6-1.9 14.4-2.8-0.3 9.2-2.3 18.5-6.6 27.6-2.7 3.9-5.4 7-8 9.2-89.3 75.6-152.9 170-188.8 265.9-35.6 94.9-38.1 133.8-37.6 165.4 0.7 43.3 2.5 158.2 207.3 161.2 182.7 2.7 205.9 2 319.5 0.7 204.5-2.2 206.2-118.3 206.9-162 0.1-31.8-2.4-70.7-38-165.5zM359.1 204.4c-3.4-4.2-6.6-8.2-10.4-12.9-14.3-15.6-21.4-50.4-24.5-67.3 1.4-0.1 2.9-0.3 4.3-0.6 1.3-0.3 3.7-0.6 8-0.6 11 0 27.1 2.2 44.2 4.5 21.2 2.8 45.3 6.1 68.4 6.5h2.5c27.1 0 48.3-8.9 67-16.8 16.9-7.1 31.1-13.2 47.7-12 21.2 1.5 37.6 13.2 55 25.5 11.6 8.3 23.6 16.8 37.6 22.7 20.2 8.6 47 3.9 64.8-1.9-0.1 0.3-0.2 0.7-0.3 1-5.1 15.7-36.4 38.8-93.1 83.5-4.9 3.9-8.6 6.8-10.6 8.5-5.9 5-20.3 16-28.7 37.3-51.7-8.1-112.2-7.2-175.7 2.6-12.1-36-37.7-57.2-56.2-80z m267.6 135.2c-3.1-3.8-5-7.3-5.9-12.3 0.1 0 0.2 0.1 0.4 0.1 1.2 4.4 3 8.5 5.5 12.2z m217.1 456.3c-0.7 43.8-1.9 122.2-172 124.1-99.8 1.1-112.5 2.4-318.6-0.7-170.6-2.5-171.9-80-172.5-123.4-0.4-28.3 1.9-63.4 35.4-152.5C249.9 553.2 310 463.7 394.7 392c5.2-4.4 10.3-10.2 15.1-17.3 0.4-0.6 0.8-1.3 1.2-2 8.6-17.2 11.7-34.2 11-50.6 58.9-8.9 115.4-9.8 162.9-2.5 0 1.4-0.2 2.6-0.1 4 1.7 26.4 12.7 37.3 24.3 48.8 2.7 2.7 5.6 5.6 8.8 9 0.6 0.6 1.2 1.2 1.8 1.7 3.6 3 6.9 5.8 9.5 8.2 14 13.3 137.8 141 179.4 252.1 33.3 89.2 35.6 124.2 35.2 152.5zM520.9 627.3v-98.2c22.3 4.6 42.4 15.1 58.6 32.9l22.4-27.3c-20.5-21.3-47.3-35.6-81-40v-41.9h-19.5v0.4h-17.1v39.9c-53.8 4-91.2 36.8-91.2 82.9 0 55.1 45.5 70.4 91.2 82.9v108.9c-35.4-4-61.2-22-78.2-42.1l-22.4 28.7c22.4 25.5 55.4 44.4 100.6 47.1v40.2h29.5v-0.3h7.1v-41c63.8-7.4 87.8-47.5 87.8-86.4 0-55.7-43.8-73.8-87.8-86.7z m-36.6-9.2c-30.5-9-52.7-19.7-52.7-44.4 0-26 20.9-44.8 52.7-47.1v91.5zM520.9 767v-98.6c28 9.1 49.2 21.5 49.2 48.4 0.1 20.1-12.3 43.7-49.2 50.2z";
        var MCHOICE_PATH = "M511.974401 0c-282.75527 0-511.974401 229.219131-511.974401 511.974401 0 282.757318 229.219131 511.974401 511.974401 511.974401 282.757318 0 511.974401-229.217083 511.974401-511.974401C1023.948803 229.219131 794.729672 0 511.974401 0zM805.63063 379.174385 474.510162 710.296901c0 0-0.004096 0.004096-0.010239 0.010239-15.265029 15.269125-38.541433 17.652877-56.31104 7.157402-3.290971-1.945503-6.393536-4.333351-9.219635-7.157402-0.002048-0.004096-0.006144-0.006144-0.006144-0.006144l-190.642884-190.642884c-18.095223-18.095223-18.095223-47.4375 0-65.536819 18.095223-18.095223 47.4375-18.095223 65.532723 0l157.884714 157.884714 298.362298-298.362298c18.097271-18.095223 47.439548-18.095223 65.534771 0C823.725854 331.738933 823.725854 361.079162 805.63063 379.174385z";
        var TEXT_DATA = "M253.866667 883.285333l159.288889-113.066666 259.100444-448.170667 24.775111-44.032 52.508445-90.808889a2.588444 2.588444 0 0 0-0.924445-3.640889l-136.433778-78.648889a2.588444 2.588444 0 0 0-1.991111-0.213333 2.616889 2.616889 0 0 0-1.621333 1.265778l-52.465778 90.737778a136.433778 136.433778 0 0 0-1.607111 4.010666L272.227556 688.981333 253.866667 883.285333z m241.749333-56.746666a69.688889 69.688889 0 0 1-32.142222 30.065777L243.342222 1012.821333l-8.632889 2.318223a70.030222 70.030222 0 0 1-53.077333-6.997334 69.589333 69.589333 0 0 1-32.512-42.666666l-2.218667-8.504889 25.372445-268.344889a69.802667 69.802667 0 0 1 9.713778-42.439111l282.851555-489.244445c1.493333-3.384889 3.171556-6.712889 5.048889-9.984l52.451556-90.709333A102.058667 102.058667 0 0 1 584.419556 8.533333a102.001778 102.001778 0 0 1 77.610666 10.183111l136.391111 78.648889a102.186667 102.186667 0 0 1 37.347556 139.591111L807.822222 285.297778 495.616 826.538667z";
        var DURATION_DATA = "M512.00494408 276.07464599c9.29937744 0 17.23425293 3.28271508 23.84417701 9.87780763 6.56048608 6.60003662 9.87780761 14.52008057 9.87780762 23.82934546v188.3111577l91.39196777 91.10522437c6.47149682 6.50115991 9.73937964 14.47558594 9.73937965 23.99249244 0 9.4921875-3.26788354 17.47650171-9.73937965 23.97766161-6.47644019 6.45666528-14.47064185 9.71466065-23.96777343 9.71466065-9.50701904 0-17.47650171-3.25799537-23.96777344-9.71466065l-101.13629151-101.15112305c-6.45666528-6.49621583-9.7245481-14.4607544-9.7245481-23.95294189V309.78674317c0-9.31420898 3.30743408-17.23425293 9.87780762-23.83428955 6.62475562-6.59509253 14.54479957-9.87780761 23.84417701-9.87780763h-0.03955055z m0-67.43408178c-41.08337403 0-80.39190697 8.03869628-117.84155296 24.10125732-37.45459008 16.05761695-69.72308349 37.60290551-96.76098633 64.64080762-27.05767846 27.04284692-48.61779785 59.2915647-64.65563989 96.77087451-16.05761695 37.49414063-24.07653833 76.76806641-24.10125732 117.84649634-0.02966309 41.05865502 8.02386474 80.36224389 24.10125732 117.85638452 16.05761695 37.474365 37.61773705 69.70825195 64.65563989 96.77087378 27.00823974 27.00823974 59.25695825 48.58319068 96.76098633 64.64575171 37.49908471 16.04772949 76.78784203 24.09136987 117.84155296 24.09136987 41.04382348 0 80.33752417-8.04364038 117.8316648-24.09136987 37.51391625-16.06256104 69.75769067-37.63751197 96.76098633-64.64575171 27.03790283-27.05767846 48.59802222-59.30145288 64.66552735-96.77087378 16.06750512-37.49414063 24.12597633-76.79772949 24.09136986-117.85638452-0.01977563-41.07842993-8.04364038-80.35235572-24.09136986-117.84649634-16.04772949-37.47930908-37.60784888-69.73297095-64.66552735-96.77087451-27.02801538-27.03790283-59.30639625-48.58319068-96.76098633-64.64080762-37.44964599-16.06256104-76.75323487-24.10620141-117.8316648-24.10620142z m0-67.42913843c50.39758301 0 98.45672632 9.78881836 144.18237257 29.35656762 45.72070289 19.56774926 85.13305664 45.89868141 118.24200464 79.02246094 33.09411645 33.09411645 59.42504859 72.50152612 79.00268531 118.22717238C873.00964332 413.53833031 882.78857422 461.61230445 882.78857422 512c0 50.39758301-9.77398682 98.44189477-29.35656762 144.18237328-19.57763672 45.73059106-45.90856958 85.16271972-79.00268531 118.246948-33.11389136 33.11389136-72.52130103 59.44482422-118.24200464 79.01257349C610.46166969 872.99975586 562.4025271 882.78857422 512 882.78857422c-50.39758301 0-98.46661377-9.79376244-144.18237328-29.34667945-45.72070289-19.56774926-85.13800072-45.89868141-118.25683547-79.01257349-33.08917237-33.08422828-59.41021704-72.51141357-79.00268602-118.246948C150.99035668 610.44189477 141.21142578 562.39758301 141.21142578 512c0-50.38769555 9.77398682-98.46166969 29.35656762-144.18237328 19.58752417-45.72564698 45.90856958-85.13305664 79.00268531-118.22717238 33.11389136-33.12377953 72.53118921-59.45471167 118.25683618-79.02246094C413.53338623 150.99530006 461.60241699 141.21142578 512 141.21142578z";
        
        // 类型图标的图形
        var TypeIconsIcon = kity.createClass('TypeIconsIcon', {
            base: kity.Group,

            constructor: function(_type) {
                this.callBase();
                this.setSize(20);
                this.setType(_type);
                this.create();
            },

            setSize: function(size) {
                this.width = this.height = size;
            },

            setType: function(_type) {
                this._type = _type;
            },

            create: function() {
                var icons = {
                    "healthbubble": new kity.Path().setPathData(HEALTHBUBBLE_PATH).fill('#f4ea2a').scale(0.02),
                    "mchoice": new kity.Path().setPathData(MCHOICE_PATH).fill('#f4ea2a').scale(0.02),
                    "text": new kity.Path().setPathData(TEXT_DATA).fill('#f4ea2a').scale(0.02),
                    "duration": new kity.Path().setPathData(DURATION_DATA).fill('#f4ea2a').scale(0.02),
                };
                console.log('type', this._type);
                console.log('path', icons[this._type]);
                this.path = icons[this._type];
                this.rect = new kity.Rect(20, 20, -2, -6, 4).fill(
                    "rgba(255, 255, 255, 0)"
                );
                this.addShapes([this.rect, this.path]);
            },

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
         * @command TypeIcons
         * @description 设置节点的优先级信息
         * @param {number} value 要设置的优先级（添加一个优先级小图标）
         *     取值为 0 移除优先级信息；
         *     取值为 1 - 9 设置优先级，超过 9 的优先级不渲染
         * @state
         *    0: 当前有选中的节点
         *   -1: 当前没有选中的节点
         */
        var TypeIconsCommand = kity.createClass('SetTypeIconsCommand', {
            base: Command,
            execute: function(km, value) {
                var node = km.getSelectedNode();
                node.setData("icon", value || null);
                node.render();
                node.getMinder().layout(300);
            },
            queryValue: function(km) {
                var node = km.getSelectedNode();
                return node && node.getData('icon');
            },

            queryState: function(km) {
                return km.getSelectedNodes().length === 1 ? 0 : -1;
            }
        });
        return {
            'commands': {
                'type-icons': TypeIconsCommand
            },
            'renderers': {
                left: kity.createClass('TypeIconsRenderer', {
                    base: Renderer,

                    create: function(node) {
                        return new TypeIconsIcon(node.getData("icon"));
                    },

                    shouldRender: function(node) {
                        return node.getData("icon");
                    },

                    update: function(icon, node, box) {
                        var data = node.getData("icon");
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