const distance = 10;

const onScroll = (el, cb, instance) => {
  const { clientHeight, scrollHeight, scrollTop } = el;
  const delta = scrollTop - el.lastScrollTop;

  el.lastScrollTop = scrollTop;

  // trigger only if full check has done and not disabled and scroll down
  if (delta < 0) return;

  let shouldTrigger = false;

  shouldTrigger = scrollHeight - (clientHeight + scrollTop) <= distance;

  if (shouldTrigger) {
    cb.call(instance);
  }
};

const InfinityScroll = {
  mounted(el, binding) {
    const { instance, value: cb } = binding;

    const handlerScroll = onScroll.bind(null, el, cb, instance);
    el.bindEvent = handlerScroll;

    el.addEventListener('scroll', handlerScroll);
  },

  unmounted(el) {
    const { bindEvent } = el;

    el.removeEventListener('scroll', bindEvent);
  },
};

export default {
  install(vue) {
    vue.directive('infinity-scroll', InfinityScroll);
  },
};
