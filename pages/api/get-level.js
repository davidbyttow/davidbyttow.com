export default function handler(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(
    JSON.stringify({
      title: 'Twisted Kingdom Test',
      scene: 'impossiblegames/assetbundles/dlc01_scene',
      deps: ['impossiblegames/assetbundles/dlc01_assets'],
    }),
  )
}
