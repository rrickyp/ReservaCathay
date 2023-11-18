# ReservaCathay <img src="reserva-cathay/public/assets/brand/logo.png" width="50"/>


## How to Install the Staff Application
1. Go to reserva-cathay folder 
```bash
cd reserva-cathay
```
2. Install all the dependencies
```bash
npm install
```
3. Start the project
```bash
npm run dev
```
## Technical Staff
### Model 1: PredictAir.AI
  <img src="reserva-cathay/public/assets/screenshots/model1.png" width="500"/> <img src="reserva-cathay/public/assets/screenshots/model1-1.png" width="500"/>

  PredictAir.AI predicts the right number of seats to overbook for a flight not only based on historical data, but also Google Trends, 3rd Party Trends, and Social Media Trends.
  
  <img src="reserva-cathay/public/assets/screenshots/code1.png" width="500"/>
  
  Computation of the tickets will be done in <a href="https://predictair-6zecwapboym66l2kxrh2o6.streamlit.app/" target="_blank">here</a>
  

### Model 2: RewardRight.AI
<img src="reserva-cathay/public/assets/screenshots/model2.png" width="500"/>

  RewardRight.AI personalizes the compensation for overbooked passengers by grouping Nationality, Age, Purpose of Trips to find the pattern, and input the pattern to GPT for determining the result.
  
## Airport Staff
<img src="reserva-cathay/public/assets/screenshots/overbook.png" width="500"/><img src="reserva-cathay/public/assets/screenshots/overbook2.png" width="500"/>

### Overbooked
  Airport Staff will input the name of the overbooked passenger and generate Model 2 to provide 3 personalized offers, and let the customer choose 1
