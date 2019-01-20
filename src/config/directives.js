// 注册通用的全局指令
import Vue from 'vue'
let handleScroll

Vue.directive('pl-sticky', {
  inserted (el, binding) {
    handleScroll = function (e) {
      const body = document.body
      const html = document.documentElement
      const docHeight = Math.max(
        body.offsetHeight,
        body.scrollHeight,
        html.clientHeight,
        html.offsetHeight,
        html.scrollHeight
      )

      const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop

      const resetEl = function () {
        el.style.position = ''
        el.style.bottom = ''
        el.style.width = ''
        el.style.left = ''
      }

      const arg = binding.arg ? binding.arg : 'top'
      const toSticky = function () {
        const elRect = el.getBoundingClientRect()
        el.style.width = elRect.width + 'px'
        el.style.left = elRect.left + 'px'
        el.style.position = 'fixed'
        el.style[arg] = '0'
      }

      if (binding.arg === 'bottom') {
        if (docHeight - scrollTop - window.innerHeight > binding.value) {
          toSticky()
        } else {
          resetEl()
        }
      } else {
        if (scrollTop > binding.value) {
          toSticky()
        } else {
          resetEl()
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    document.body.addEventListener('DOMSubtreeModified', handleScroll)
  },
  unbind () {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleScroll)
    document.body.addEventListener('DOMSubtreeModified', handleScroll)
  }
})

// 初始化元素的高度
let updateHeight
Vue.directive('pl-to-bottom', {
  inserted: function (el, binding) {
    updateHeight = function () {
      const rect = el.getBoundingClientRect()
      const top = rect.top + window.pageYOffset - document.documentElement.clientTop
      let diffHeight = window.innerHeight - top

      if (typeof binding.value === 'number') {
        diffHeight -= binding.value
      }

      if (binding.modifiers.fixed) {
        el.style.height = diffHeight + 'px'
      } else {
        el.style.minHeight = diffHeight + 'px'
      }
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
  },
  unbind () {
    window.removeEventListener('resize', updateHeight)
  }
})
