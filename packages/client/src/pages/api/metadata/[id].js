export default function handler(req, res) {
  if (parseInt(req.query.id, 10) > 4200) throw new Error('You dey whine me')

  res.status(200).json({
    name: 'Haze Monkey Society',
    description: '4200 Haze Monkey out to rule the world',
    image: 'ipfs://QmNdFVFJR3kgVuHqcV8ojMvviyUgxPqxShSMZPa7X5ypaz'
  })
}
