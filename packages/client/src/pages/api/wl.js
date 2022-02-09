import csvtojson from 'csvtojson'
import path from 'path'

export default function handler(req, res) {
  csvtojson()
    .fromFile(`public/presale-list.csv`)
    .then((jsonObj) => {
      res.status(200).json(jsonObj)
    })
}
