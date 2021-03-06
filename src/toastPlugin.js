import Toast from './toast'

function createToast({ Vue, message, propsData, onClose }) {
  let Constructor = Vue.extend(Toast); // 创建toast构造器
  let toast = new Constructor({ propsData }); // 实例化toast组件并传props
  toast.$slots.default = [message]; // 向slot里放数据
  toast.$mount(); // 挂载在内存中
  toast.$on('close', onClose);
  document.body.appendChild(toast.$el);
  return toast;
}

let currentToast;
export default {
  install(Vue, options) {
    Vue.prototype.$toast = (message, props) => { // 添加实例方法
      if (currentToast) {
        currentToast.close();
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: props,
        onClose: () => {
          currentToast = null
        }
      });
    }
  }
}
