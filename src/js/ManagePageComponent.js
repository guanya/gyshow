import '../less/pageComponent.less';
import ComponentBaseFactory from './ComponentBase.js';
import ComponentPolyLineFactory from './ComponentPolyLine.js';
import ComponentPieFactory from './ComponentPie.js';
import ComponentBarFactory from './ComponentBar.js';

let ManageObj = {
    init (name) {
        this.oContainer = $('<div/>').addClass(name); //先创建一个容器
        this.oContainer.appendTo($('body')).hide(); 
        return this;       
    },
    addPage (name) {
        this.oPage = $('<div class="section"/>').addClass(name); //创建分页
        this.oPage.appendTo(this.oContainer);
        this.addBottomComponent();
        return this;
    },
    addComponent(config = {type: 'Bar'}) { //创建组件，在基础组件上有高级组件
        let Component = null;
        switch (config.type) {
            case "Poly": 
                    Component = ComponentPolyLineFactory(config);
                break;
            case "Pie": 
                    Component = ComponentPieFactory(config);
                break;
            case "Bar":
                    Component = ComponentBarFactory(config);
                break;
            case "base":
            default:
                    Component = ComponentBaseFactory(config);   
        }
        this.oPage.append(Component);
        return this;
    },
    addBottomComponent () { //最底部的样式
        this.addComponent({
            height: 40,
            text: '关艳前端学习展示',
            css: {
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                textAlign: 'center',
                lineHeight: '20px',
                color: '#fff',
                background: '#000',
                opacity: 0,
            },
            animateIn: {
                opacity: 0.5,
                bottom: 0, 
            },
            animateOut: {
                opacity: 0,
                bottom: -50,
            }
        })
    },
    load () {
        this.oContainer.show();
        this.oContainer.fullpage({ //分页要调用的方法，必须和section一起用，才能产生分页效果
            onLeave (index, nextIndex, direction) {
                $('.section').eq(index - 1).trigger('onLeave');  //插件自带的方法，监控分页
            },
            afterLoad (achorLink, index) {
                $('.section').eq(index - 1).trigger('onLoad');
            }
        });
        $('.section').on('onLeave', (e) => {
            $(e.target).find('.ComponentBase').trigger('cpLeave');
        });
        $('.section').on('onLoad', (e) => {
            $(e.target).find('.ComponentBase').trigger('cpLoad');
        })
        $('.section').eq(0).trigger('onLoad');
    }
}

export default ManageObj;  //es6写法的导出