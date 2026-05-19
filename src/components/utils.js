/**
 * Merge className prop with internal classes using BEM pattern
 */
export function mergeClasses(baseClass, variants = {}, className = '') {
  const classes = [baseClass];

  Object.entries(variants).forEach(([key, value]) => {
    if (value) {
      classes.push(`${baseClass}--${key}`);
    }
  });

  if (className) {
    classes.push(className);
  }

  return classes.join(' ');
}

/**
 * Merge multiple class strings, filtering out falsy values
 */
export function classNames(...args) {
  return args.filter(Boolean).join(' ');
}
