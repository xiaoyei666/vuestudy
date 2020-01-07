
import './style.css';
import banner from './banner.jpg';
import _ from 'lodash/lodash';

function component() {
  let element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  //添加类样式
  element.classList.add('hello');
  //加入图片
  var img=new Image();
  img.src=banner;
  element.appendChild(img);
  
  return element;
}

document.body.appendChild(component());