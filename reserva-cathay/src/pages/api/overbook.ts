import nextCors from 'nextjs-cors';

export default async function handler(req:any, res:any) {
  await nextCors(req, res, {
    // Options
    methods: ['GET', 'POST'],
    origin: '*', //or the specific origin you want to give access to,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  // Your handler logic here...
  if (req.method === 'POST') {
    req.body.id = "510892B000014EBB";
    const api  = "https://developers.cathaypacific.com/hackathon-apigw/airport/customers/"+req.body.id+"/details"
    const response = await fetch(api, {
        headers: {
          'apikey': 'VbSxbHCBHW3zmK2OHNuhmNrQqH2BHMPw',
        }
      });
    const data = await response.json();
    const gender = data.data.traveler.gender
    const purpose = data.data.purposeOfVisit;
    console.log(gender)
    console.log(purpose)
    res.status(200).json(data);
  } else {
    res.status(405).send('Method not allowed');
  }
}