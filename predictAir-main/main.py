import streamlit as st
import numpy as np
import tensorflow as tf

model = tf.keras.models.load_model('PredictAirInference')

st.title('Model Inference')
st.write('Enter input values and click "Calculate"')

st.sidebar.header('Input Data')
input1 = st.sidebar.number_input('Average number of past no shows for this flight', value=0.0)
input2 = st.sidebar.number_input('Google trends', value=0.0)
input3 = st.sidebar.number_input('Third Party trends', value=0.0)
input4 = st.sidebar.number_input('Social Media trends', value=0.0)

calculate_button = st.sidebar.button('Calculate')

def run_inference(input1, input2, input3, input4):
    input_data = np.array([[input1, input2, input3, input4]])
    predictions = model.predict(input_data)
    return predictions

if calculate_button:
    predictions = run_inference(input1, input2, input3, input4)
    st.header('Predictions')
    st.write(str(predictions[0][0]) + ' number of tickets')

   
