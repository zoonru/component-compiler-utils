import { Root } from 'postcss'

const postcssPluginTrim = () => {
  return {
    postcssPlugin: 'trim',
    Once(root: Root) {
      root.walk(({ type, raws }) => {
        if (type === 'rule' || type === 'atrule') {
          if (raws.before) raws.before = '\n'
          if (raws.after) raws.after = '\n'
        }
      })
    }
  }
}
postcssPluginTrim.postcss = true

export default postcssPluginTrim
