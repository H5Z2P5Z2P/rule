/**
 * Sub-Store 脚本：为落地节点添加中转代理
 * 适用平台：sing-box
 * 使用方法：在 Sub-Store 的处理器中添加此脚本
 */

function operator(proxies, targetPlatform, context) {
  // 只在 sing-box 平台使用此脚本
  if (targetPlatform !== 'sing-box') {
    return proxies;
  }

  // 中转节点映射配置
  const relay = {
    '落地': '🚀 中转节点',
    // 其他的自己加，例如：
    // '终点': '🚀 中转节点',
    // 'endpoint': '🚀 中转节点'
  }

  // 处理每个代理节点
  proxies.forEach(proxy => {
    // 检查节点名称是否包含需要中转的关键词
    const relayKey = Object.keys(relay).find(key => proxy.name.includes(key))

    if (relayKey) {
      // 为匹配的节点添加 detour 字段
      proxy.detour = relay[relayKey]
      console.log(`为节点 ${proxy.name} 设置中转: ${relay[relayKey]}`)
    }
  })

  return proxies
}