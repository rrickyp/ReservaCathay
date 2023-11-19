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

  PredictAir.AI predicts the right number of seats to overbook for a flight not only based on historical data, but also Google Trends, 3rd Party Trends, and Social Media Trends. All the data is fed into a trained model which computes the optimal number of tickets to allocated to a flight.
  
  <img src="reserva-cathay/public/assets/screenshots/code1.png" width="500"/>

  We have implemented the Computation Feature from the model in a Steamlit application present at the link here: <a href="https://predictair-6zecwapboym66l2kxrh2o6.streamlit.app/" target="_blank">Link</a>
  

### Model 2: RewardRight.AI
<img alt="Screenshot 2023-11-19 at 8 06 38 AM" src="https://github.com/rrickyp/ReservaCathay/assets/86021138/032194a7-8938-4dd7-998e-2099b386b812" width="500" />

  RewardRight.AI personalizes the compensation provided to overbooked passengers to reduce customer dissatisfaction by grouping factors such as nationality, age, purpose of trips to web-scrape more information about users from similar user patterns online. These are used to identify common trends for that demographic of people.  This data, including data already present from Cathay website on the passenger, and the current available user options, will be fed into our own GPT model for determining the best-personalized compensation offers that the flyer will be most pleased to receive.
  
## Airport Staff
<img src="reserva-cathay/public/assets/screenshots/overbook.png" width="500"/><img src="reserva-cathay/public/assets/screenshots/overbook2.png" width="500"/>

### Overbooked
  Airport Staff will input the name of the overbooked passenger and it will call Model 2 to provide 3 personalized offers, and let the customer choose 1. This data will be fed back into the system as well as the system will monitor if the user rebooks with Cathay to adjust the model and the options in the future to identify the best compensation offers to maximize customer satisfaction.


## About PredictAirModel [Code Implementation & Hosted Website]

1. Go to predictAir-main folder 
```bash
cd predictAir-main
```

The model is a feed-forward neural network with an input layer, a series of computational layers + dropout layers, and 1 output layer. 

The model has been saved and used to host on Streamlit with a simple interface to allow the staff to test the model and get quick results for review.
<br></br>
<img width="1470" alt="Screenshot 2023-11-19 at 7 43 44 AM" src="https://github.com/rrickyp/ReservaCathay/assets/86021138/393f0e65-3831-4881-b174-f5dbb42d66b0">

