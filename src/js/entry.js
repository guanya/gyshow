import './jquery-ui.min.js';
import './jqueryFullpage.js';
import ManageObj from './ManagePageComponent.js';

ManageObj
    .init('wrapper')
        .addPage('index')
            .addComponent({
                width: 428,
                height: 92,
                center: true,
                css: {
                    position: 'absolute',
                    top: -10,
                    left:106,
                    opacity: 0,
                    backgroundImage: 'url(./src/img/背景2.png)'
                },
                animateIn: {
                    top: 20,
                    left:106,
                    opacity: 1
                },
                animateOut: {
                    top: -10,
                    opacity: 0
                },
                delay: 200
            })                        
           
        .addPage()
            .addComponent({
                width: 500,
                height: 124,
                css: {
                    position: 'absolute',
                    opacity: 0,
                    top: 0,
                    backgroundImage: 'url(./src/img/背景第二页.png)'
                },
                animateIn: {
                    opacity: 1,
                    top: 20
                },
                animateOut: {
                    opacity: 0,
                    top: 0
                },
                delay: 200
            })
            .addComponent({
                width: 500,
                height: 50,
                text:'脚踏实地 竭尽全力',
                center: true,
                css: {
                    position: 'absolute',
                    top: 0,
                    opacity: 0,
                    lineHeight: '30px',
                    textAlign: 'center',
                    fontWeight: 900,
                    fontSize: '26px',
                    color: 'red'
                },
                animateIn: {
                    opacity: 1,
                    top: 100
                },
                animateOut: {
                    opacity: 0,
                    top: 0
                },
                delay: 600
            })
            .addComponent({
                width: 522,
                height: 336,
                text: '从我自学前端开始，我就告诉自己“要当一个有逼格的程序媛”，我的代码要不断超越昨天。要向公司里大牛学习，知识会让我强大起来，有一天我一定会成为一名优秀的前端工程师！',
                center: true,
                css: {
                    position: 'absolute',
                    opacity: 0,
                    top: 0,
                    left:145,
                    backgroundImage: 'url(./src/img/dialog.png)',
                    padding: '10px 15px 10px 15px',
                    textAlign: 'justify',
                    fontSize: '18px',
                    fontWeight: '900',
                    lineHeight: '25px'
                },
                animateIn: {
                    opacity: 1,
                    top: 170,
                    left:145
                },
                animateOut: {
                    opacity: 0,
                    top: 0,
                    left:145
                },
                delay: 1000
            })
            .addComponent({
                width: 300,
                height: 400,
                center: true,
                css: {
                    position: 'absolute',
                    bottom: -10,
                    opacity: 0,
                    backgroundImage: 'url(./src/img/25.png)'
                },
                animateIn: {
                    opacity: 1,
                    right: 0,
                    bottom: 12,
                },
                animateOut: {
                    bottom: -10,
                    opacity: 0
                },
                delay: 1400
            })         
        .addPage()
            .addComponent({
                width: 500,
                height: 124,
                css: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: 0,
                    backgroundImage: 'url(./src/img/背景3.png)'
                },
                animateIn: {
                    opacity: 1,
                    top: 20
                },
                animateOut: {
                    opacity: 0,
                    top: 0
                },
                delay: 200
            })  
            .addComponent({
                width: 516,
                height: 306,
                center: true,
                text: '自学前端课程柱状图',
                css: {
                    position: 'absolute',
                    opacity: 0,
                    top: 0,
                    lineHeight: '30px',
                    textAlign: 'center',
                    fontWeight: 900,
                    fontSize: '26px',
                    color: 'red'
                },
                animateIn: {
                    opacity: 1,
                    top: 120
                },
                animateOut: {
                    bottom: -10,
                    opacity: 0
                },
                delay: 600
            })  
            .addComponent({
                type: 'Bar',
                width: 500,
                height: 400,
                center: true,
                css: {
                    position: 'absolute',
                    opacity: 0,
                    bottom: 0,
                },
                animateIn: {
                    opacity: 1,
                    bottom: 190
                },
                animateOut: {
                    bottom: 0,
                    opacity: 0
                },
                data: [
                    ['Css2',0.05,'blue'],
                    ['Javascript', 0.3, 'orange'],
                    ['ajax\jsonp',0.05,'pink'],
                    ['Jquery', 0.1, 'red'],
                    ['Css3', 0.15, 'yellow'],
                    ['Es6',0.1,'green'],
                    ['H5', 0.15, 'purple'],                  
                    ['React', 0.1, 'red'],
                ],
                delay: 1000
            })  
        .addPage()

            .addComponent({
                width: 500,
                height: 124,
                css: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: 0,
                    backgroundImage: 'url(./src/img/背景4.png)'
                },
                animateIn: {
                    opacity: 1,
                    top: 20
                },
                animateOut: {
                    opacity: 0,
                    top: 0
                },
                delay: 200
            })   
            .addComponent({
                width: 500,
                height: 306,
                center: true,
                text: '做项目积累经验情况',
                css: {
                    position: 'absolute',
                    opacity: 0,
                    top: 0,
                    lineHeight: '30px',
                    textAlign: 'center',
                    fontWeight: 900,
                    fontSize: '26px',
                    color: 'red'
                },
                animateIn: {
                    opacity: 1,
                    top: 120
                },
                animateOut: {
                    bottom: -10,
                    opacity: 0
                },
                delay: 600
            })  
            .addComponent({
                type: 'Poly',
                width: 500,
                height: 500,
                center: true,
                css: {
                    position: 'absolute',
                    opacity: 0,
                    bottom: 0,
                },
                animateIn: {
                    opacity: 1,
                    bottom: 100
                },
                animateOut: {
                    bottom: 0,
                    opacity: 0
                },
                data: [
                    ['Js', 0.4, 'blue'],
                    ['jQ', 0.1, 'orange'],
                    ['H5', 0.2, 'red'],                   
                    ['Css3', 0.15, 'green'],
                    ['Es6',0.05,'purple'],
                    ['React', 0.1, 'red']
                ],
                delay: 1000
            })  
        .addPage()
            .addComponent({
                width: 500,
                height: 126,
                css: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: 0,
                    backgroundImage: 'url(./src/img/背景5.png)'
                },
                animateIn: {
                    opacity: 1,
                    top: 20
                },
                animateOut: {
                    opacity: 0,
                    top: 0
                },
                delay: 200
            })  
            .addComponent({
                width: 500,
                height: 306,
                center: true,
                text: '自学所用时间图',
                css: {
                    position: 'absolute',
                    opacity: 0,
                    top: 0,
                    lineHeight: '30px',
                    textAlign: 'center',
                    fontWeight: 900,
                    fontSize: '26px',
                    color: 'red'
                },
                animateIn: {
                    opacity: 1,
                    top: 120
                },
                animateOut: {
                    bottom: -10,
                    opacity: 0
                },
                delay: 600
            })  
            .addComponent({
                type: 'Pie',
                width: 500,
                height: 500,
                center: true,
                css: {
                    position: 'absolute',
                    opacity: 0,
                    bottom: 0,
                },
                animateIn: {
                    opacity: 1,
                    bottom: 100
                },
                animateOut: {
                    bottom: 0,
                    opacity: 0
                },
                data: [

                    ['Css2',0.05,'blue'],
                    ['Js', 0.3, 'orange'],
                    ['ajax\jsonp',0.05,'pink'],
                    ['Jquery', 0.1, 'red'],
                    ['Css3', 0.15, 'yellow'],
                    ['Es6',0.1,'green'],
                    ['H5', 0.15, 'red'],                  
                    ['React', 0.1, 'purple'],
                ],
                delay: 1000
            })  
        .addPage()
            .addComponent({
                name: 'back',
                width: 48,
                height: 26,
                center: true,
                css: {
                    position: 'absolute',
                    opacity: 0,
                    top: 0,
                    backgroundImage: 'url(./src/img/back.png)'
                },
                animateIn: {
                    opacity: 1,
                    top: 30
                },
                animateOut: {                
                    opacity: 0,
                    top: 0
                },
                event: {
                    click: () => {
                        console.log(ManageObj.oContainer)
                        console.log(ManageObj.oContainer.fullpage.moveTo);
                        ManageObj.oContainer.fullpage.moveTo(1);
                    }               
                },
                delay: 200
            })
            .addComponent({
                width: 128,
                height: 120,
                css: {
                    position: 'absolute',
                    top: 100,
                    right: 50,
                    opacity: 0,
                    backgroundImage: 'url(./src/img/share.png)'
                },
                animateIn: {
                    opacity: 1,
                    top: 0,
                    right: 0
                },
                animateOut: {
                    opacity: 0,
                    top: 100,
                    right: 0
                },
                delay: 600
            })
            .addComponent({
                name: 'shake',
                width: 428,
                height: 92,
                center: true,
                css: {
                    position: 'absolute',
                    opacity: 0,
                    top: 0,
                    backgroundImage: 'url(./src/img/背景6.1.png)'
                },
                animateIn: {
                    opacity: 1,
                    top: 150,
                },
                animateOut: {                    
                    opacity: 0,
                    top: 0
                },
                delay: 1000
            })
            .addComponent({
                width: 694,
                height: 154,
                center: true,
                css: {
                    position: 'absolute',
                    bottom: 180,
                    left: 0,
                    opacity: 0,
                    backgroundImage: 'url(./src/img/结束语.png)'
                },
                animateIn: {
                    opacity: 1,
                    left: '50%',
                },
                animateOut: {
                    left: 0,
                    opacity: 0
                },
                delay: 800
            })
    .load();










