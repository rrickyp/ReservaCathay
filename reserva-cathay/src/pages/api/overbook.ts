import nextCors from 'nextjs-cors';

export default async function handler(req:any, res:any) {
  await nextCors(req, res, {
    // Options
    methods: ['GET', 'POST'],
    origin: '*',
    optionsSuccessStatus: 200, 
  });

  if (req.method === 'POST') {
    const api  = "https://developers.cathaypacific.com/hackathon-apigw/airport/customers/"+req.body.id+"/details"
    const response = await fetch(api, {
        headers: {
          'apikey': 'VbSxbHCBHW3zmK2OHNuhmNrQqH2BHMPw',
        }
      });
    const data = await response.json();
    const gender = data.data.traveler.gender
    const purpose = data.data.purposeOfVisit;
    res.status(200).json(data);
  } else {
    res.status(405).send('Method not allowed');
  }
}