import type { NextPage } from 'next'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown,
  faArrowUp,
  faDownload,
  faEllipsisVertical,
  faMars,
  faSearch,
  faUsers,
  faVenus,
} from '@fortawesome/free-solid-svg-icons'
import {
  Button, ButtonGroup, Card, Dropdown, ProgressBar,
} from 'react-bootstrap'
import { Bar, Line } from 'react-chartjs-2'
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'
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
import { FlightPredTable } from '@components/FlightPredTable';

import { DatePicker, Select } from 'antd';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

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
    marginLeft: "20px"
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
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                  )
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
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'black',
                  borderColor: 'black',
                  data: [1, 18, 9, 17, 34, 22, 11],
                }],
              }}
            />
          </div>
        </Card>
      </div>

      {/* <div className="col-sm-6 col-lg-3">
        <Card text="white" className="mb-4" style={{backgroundColor: '#00645A'}}>
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div className="fs-6 fw-semibold">
                CX3284
                <span className="ms-2 fw-normal" style={{fontSize: "13px"}}>
                  (23.6%
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                  )
                </span>
              </div>
              <div style={{fontSize: "13px"}}>05:40:00PM, Today</div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-white shadow-none p-0"
                id="dropdown-chart4"
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
          <div className="mt-3 mx-3" style={{ height: '40px' }}>
            <Bar
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                      drawBorder: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
                datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'rgba(255,255,255,.2)',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                  barPercentage: 0.6,
                }],
              }}
            />
          </div>
        </Card>
      </div> */}

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
    

    {/* header section for model 1 */}


    <div className='row'>
      <div>
        <h6 style={{fontSize: "20px"}}>Analyze Dataset</h6>
        <p style={{marginTop: "-8px", fontSize: "15px"}}>Current Training Dataset used for generating tickets.</p>
      </div>
        <FlightPredTable data={        
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
                <h4 className="mb-0">Optimal Customer Number</h4>
                <div className="small text-black-50">Flight CX118: From HKG-SIN</div>
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
                  <label className="btn btn-outline-secondary" htmlFor="option1">Day</label>
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
                  <label className="btn btn-outline-secondary" htmlFor="option3">Year</label>
                </ButtonGroup>
                {/* <Button variant="primary">
                  <FontAwesomeIcon icon={faDownload} fixedWidth />
                </Button> */}
              </div>
            </div>
            <div
              style={{
                height: '300px',
                marginTop: '40px',
              }}
            >
              <Line
                data={{
                  labels: ['270', '280', '290', '300', '310', '320', '330'],
                  datasets: [{
                    label: 'CX118',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    borderColor: 'rgba(13, 202, 240, 1)',
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
                  }, {
                    label: 'CX218',
                    borderColor: 'rgba(25, 135, 84, 1)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [
                      25,
                      26,
                      88,
                      12,
                      11,
                      21,
                      11,
                    ],
                  }, {
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
                        text: 'Number of flights with x tickets', // Add your X-Axis label here
                        color: '#333', // You can customize the color
                      },
                      grid: {
                        drawOnChartArea: false,
                      },
                    },
                    y: {
                      title: {
                        display: true,
                        text: 'Number of tickets', // Add your X-Axis label here
                        color: '#333', // You can customize the color
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
      {/* <div className='col-lg-4 col-md-4'>
            <div className="table-responsive">
              <table className="table border mb-0">
                <thead className="table-light fw-semibold">
                  <tr className="align-middle">
                    <th className="text-center">Flights</th>
                    <th>Extra Tickets</th>
                    <th aria-label="Action" />
                  </tr>
                </thead>
                <tbody>
                  <tr className="align-middle">
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">CX118</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            329 Tickets - 91 Flights
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="success" now={91} />
                    </td>
                    <td>
                      <div className="small text-black-50">Extra Tickets</div>
                      <div className="fw-semibold">12</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 text-black-50 shadow-none p-0"
                          id="action-user1"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">CX218</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            290 Tickets - 88 Flights
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="info" now={84} />
                    </td>
                    <td>
                      <div className="small text-black-50">Extra Tickets</div>
                      <div className="fw-semibold">18</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 text-black-50 shadow-none p-0"
                          id="action-user2"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">CX917</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            294 Tickets - 72 Flights
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="warning" now={74} />
                    </td>
                    <td>
                    <div className="small text-black-50">Extra Tickets</div>
                      <div className="fw-semibold">15</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 text-black-50 shadow-none p-0"
                          id="action-user3"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">CX623</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            294 Tickets - 99 Flights
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="danger" now={98} />
                    </td>
                    <td>
                    <div className="small text-black-50">Extra Tickets</div>
                      <div className="fw-semibold">21</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 text-black-50 shadow-none p-0"
                          id="action-user4"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">CX547</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            284 Tickets - 57 Flights
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="info" now={62} />
                    </td>
                    <td>
                    <div className="small text-black-50">Extra Tickets</div>
                      <div className="fw-semibold">14</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 text-black-50 shadow-none p-0"
                          id="action-user5"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">CX711</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            302 Tickets - 71 Flights
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="success" now={74} />
                    </td>
                    <td>
                    <div className="small text-black-50">Extra Tickets</div>
                      <div className="fw-semibold">17</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 text-black-50 shadow-none p-0"
                          id="action-user6"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
      </div> */}
    </div>

    <div className='row'>
      <div>
          <h6 style={{fontSize: "20px"}}>Calculate Ticket Number</h6>
          <p style={{marginTop: "-8px", fontSize: "15px"}}>Manually calculate ticket number for a flight for testing.</p>
      </div>
      <div>
      <label>
        No Shows:
        <input type="text" id="noshows" style={inputStyle} />
      </label>

      <label>
        Google Trends:
        <input type="text" id="gtrends" style={inputStyle} />
      </label>

      <label>
        Third-Party Trends:
        <input type="text" id="tptrends" style={inputStyle} />
      </label>

      <label>
        Social Trends:
        <input type="text" id="strends" style={inputStyle} />
      </label>
      <button type="button" style={buttonStyle}>
        Calculate Tickets
      </button>
    </div>
    </div>


  </AdminLayout>
)}

export default Home
