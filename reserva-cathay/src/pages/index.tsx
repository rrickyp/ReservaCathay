import type { NextPage } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faDownload,
  faEllipsisVertical,
  faMars,
  faSearch,
  faUsers,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  ButtonGroup,
  Card,
  Dropdown,
  ProgressBar,
} from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import {
  faCcAmex,
  faCcApplePay,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { AdminLayout } from '@layout';
import dayjs from 'dayjs';
import  {Table}  from '@components/Table';

import { DatePicker, Select } from 'antd';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Filler
);

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const Home: NextPage = () => {
  const inputStyle = {
    width: '100px', // Adjust the width as needed
    marginRight: '10px', // Add margin between input boxes
    marginLeft: '5px'
  };
  const buttonStyle = {
    backgroundColor: '#00645A',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: "0px"
  };
  const handleCalculateTickets = () => {
    // Open the link in a new tab
    window.open("https://predictair-6zecwapboym66l2kxrh2o6.streamlit.app/", "_blank");
  };
  return (
  <AdminLayout>
      <DatePicker defaultValue={dayjs()} />
      {/* create selection */}
      <Select defaultValue="CX4432" style={{ width: 120, marginLeft: 5}}>
        <Select.Option value="CX4432">CX118</Select.Option>
        <Select.Option value="CX7894">CX218</Select.Option>
        <Select.Option value="CX3284">CX346</Select.Option>
      </Select>
      <div style={{marginBottom: "20px"}}></div>
    <div className="row">
    <div>
      <h4>AI Model 1 Info: CathayPredictAir</h4>
      <p style={{marginTop: "-8px"}}>Recent run: For Flight CX118 at 03:00:00AM, Today.</p>
    </div>
      <div>
        <h6 style={{fontSize: "20px"}}>Trend Analysis</h6>
        <p style={{marginTop: "-8px", fontSize: "15px"}}>For Flight CX118.</p>
      </div>
      <div className="col-sm-6 col-lg-4">
        <Card style={{backgroundColor: "#00645A"}} text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div className="fs-6 fw-semibold">
                Google Trends
                <span className="ms-2 fw-normal" style={{fontSize: "13px"}}>
                  (81.4%
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                  )
                </span>
              </div>
              <div style={{fontSize: "13px"}}>Google data to analyze route flight traffic</div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-white shadow-none p-0"
                id="dropdown-chart1"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Details</Dropdown.Item>
                <Dropdown.Item href="#/action-2">PredictAir Data</Dropdown.Item>
                <Dropdown.Item href="#/action-3">SmartRate Data</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
          <div className="mt-3 mx-3" style={{ height: '70px' }}>
            <Line
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 30,
                    max: 89,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                    tension: 0.4,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                  label: 'Route Traffic',
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [41, 43, 54, 55, 72, 78, 82],
                }],
              }}
            />
          </div>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-4">
        <Card text="black" className="mb-4" style={{backgroundColor: "#F1F1F1"}}>
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div className="fs-6 fw-semibold">
                Third-Party Trends
                <span className="ms-2 fw-normal" style={{fontSize: "13px"}}>
                  (40.9%
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />)
                </span>
              </div>
              <div style={{fontSize: "13px"}}>Third-Party Data to analyze route flight traffic.</div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-black shadow-none p-0"
                id="dropdown-chart2"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Details</Dropdown.Item>
                <Dropdown.Item href="#/action-2">PredictAir Data</Dropdown.Item>
                <Dropdown.Item href="#/action-3">SmartRate Data</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
          <div className="mt-3 mx-3" style={{ height: '70px' }}>
            <Line
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: -9,
                    max: 39,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ],
                datasets: [
                  {
                    label: "My First dataset",
                    backgroundColor: "black",
                    borderColor: "black",
                    data: [1, 18, 9, 17, 34, 22, 11],
                  },
                ],
              }}
            />
          </div>
        </Card>
      </div>
      <div className="col-sm-6 col-lg-4">
        <Card text="white" className="mb-4" style={{backgroundColor: "#00645A"}}>
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div className="fs-6 fw-semibold">
                Social Trends
                <span className="ms-2 fw-normal" style={{fontSize: "13px"}}>
                  (62.7%
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                  )
                </span>
              </div>
              <div style={{fontSize: "13px"}}>Hashtags, etc from Social Sites</div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-black shadow-none p-0"
                id="dropdown-chart3"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Details</Dropdown.Item>
                <Dropdown.Item href="#/action-2">PredictAir Data</Dropdown.Item>
                <Dropdown.Item href="#/action-3">SmartRate Data</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
          <div className="mt-3 mx-3" style={{ height: '70px' }}>
            <Line
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                elements: {
                  line: {
                    borderWidth: 2,
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                  label: 'Instagram',
                  backgroundColor: '#C0DEDB ',
                  borderColor: 'white',
                  data: [34, 17, 80, 45, 34, 12, 84],
                  fill: true,
                },
                {
                  label: 'Facebook',
                  backgroundColor: '#f1f1f1 ',
                  borderColor: 'black',
                  data: [21, 32, 44, 62, 71, 55, 76],
                  fill: true,
                }
              ],
              }}
            />
          </div>
        </Card>
      </div>
    </div>
    
    <div className='row'>
      <div>
        <h6 style={{fontSize: "20px"}}>Analyze Dataset</h6>
        <p style={{marginTop: "-8px", fontSize: "15px"}}>Current Training Dataset used for generating tickets.</p>
      </div>
        <Table columns={['No Shows','Google Trends','Third-Party Trends','Social Trends','Calculated Extra Tickets']} data={        
          [["15","0.2","0.3","0.1","15"],
          ["8","0.5","0.5","0.5","8"],
          ["12","0.4","0.6","0.5","12"],
          ["5","0.8", "0.5", "0.5","2"],
          ["11","0.8","0.7","0.5","7"]
          ]} />
    </div>

    <div className='row'>
      <div>
        <h6 style={{fontSize: "20px"}}>Recent Result</h6>
        <p style={{marginTop: "-8px", fontSize: "15px"}}>Analyze results for recent model run for: Flight CX118</p>
      </div>
      <div className='col-lg-12 col-md-12'>
        <Card className="mb-4">
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div>
                <h4 className="mb-0">Optimal Number of Tickets</h4>
                <div className="small text-black-50">
                  Flight CX118: From HKG-SIN
                </div>
              </div>
              <div className="d-none d-md-block">
                <ButtonGroup aria-label="Toolbar with buttons" className="mx-3">
                  <input
                    className="btn-check"
                    id="option1"
                    type="radio"
                    name="options"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="option1"
                  >
                    Day
                  </label>
                  <input
                    className="btn-check"
                    id="option2"
                    type="radio"
                    name="options"
                    autoComplete="off"
                    defaultChecked
                  />
                  <label
                    className="btn btn-outline-secondary active"
                    htmlFor="option2"
                  >
                    Month
                  </label>
                  <input
                    className="btn-check"
                    id="option3"
                    type="radio"
                    name="options"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="option3"
                  >
                    Year
                  </label>
                </ButtonGroup>
              </div>
            </div>
            <div
              style={{
                height: "300px",
                marginTop: "40px",
              }}
            >
              <Line
                data={{
                  labels: ['270', '280', '290', '300', '310', '320', '330'],
                  datasets: [{
                    label: 'CX118',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    borderColor: 'rgba(25, 135, 84, 1)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [
                      18,
                      41,
                      52,
                      72,
                      21,
                      91,
                      42
                    ],
                    fill: true,
                  },  {
                    label: 'Borderline',
                    borderColor: 'rgba(220, 53, 69, 1)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 1,
                    borderDash: [8, 5],
                    data: [                  
                      45,
                      45,
                      45,
                      45,
                      45,
                      45,
                      45,
                    ],
                  }],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      title: {
                        display: true,
                        text: "Number of flights with x tickets", // Add your X-Axis label here
                        color: "#333", // You can customize the color
                      },
                      grid: {
                        drawOnChartArea: false,
                      },
                    },
                    y: {
                      title: {
                        display: true,
                        text: "Number of tickets", // Add your X-Axis label here
                        color: "#333", // You can customize the color
                      },
                      beginAtZero: false,
                      max: 100,
                      ticks: {
                        maxTicksLimit: 5,
                        stepSize: Math.ceil(250 / 5),
                      },
                    },
                  },
                  elements: {
                    line: {
                      tension: 0.4,
                    },
                    point: {
                      radius: 0,
                      hitRadius: 10,
                      hoverRadius: 4,
                      hoverBorderWidth: 3,
                    },
                  },
                }}
              />
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>

    <div className='row'>
      <div>
          <h6 style={{fontSize: "20px"}}>Calculate Ticket Number</h6>
          <p style={{marginTop: "-8px", fontSize: "15px"}}>Manually calculate ticket number for a flight for testing.</p>
      </div>
      <div>
      <button type="button" style={buttonStyle} onClick={handleCalculateTickets}>
        Calculate Tickets
      </button>
    </div>
    </div>


  </AdminLayout>
)}

export default Home;
