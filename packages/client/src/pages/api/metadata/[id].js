export default function handler(req, res) {
  if (parseInt(req.query.id, 10) > 4200) throw new Error('You dey whine me')

  res.status(200).json({
    name: `HAZE #${req.query.id}`,
    description:
      '4200 The OG Haze Monkey Society The first residence of Hazron.',
    image:
      'https://gateway.pinata.cloud/ipfs/QmYCx7U26wfbvxb1r2a9UCzmRBCGtExPKquNGVAL85LUx1'
  })
}
