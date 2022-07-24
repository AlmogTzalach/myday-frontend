import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/styles.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}

app.use(router)
app.use(store)
app.use(ElementPlus)
app.directive('click-outside', {
	mounted(el, binding, vnode) {
		el.clickOutsideEvent = function (event) {
			if (!(el === event.target || el.contains(event.target))) {
				binding.value(event, el)
			}
		}
		document.body.addEventListener('click', el.clickOutsideEvent)
	},
	unmounted(el) {
		document.body.removeEventListener('click', el.clickOutsideEvent)
	},
})

app.mount('#app')
