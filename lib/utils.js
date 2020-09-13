export const getBaseUrlFromRequest = (req) => {
  const { host } = req.headers
  return `http://${host}`
}
