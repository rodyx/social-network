export const httpClient = ({method = 'GET',data, params}) => {
  return new Promise(resolve => {
    setTimeout( resolve, Math.random() * 3500, data)
  })
}