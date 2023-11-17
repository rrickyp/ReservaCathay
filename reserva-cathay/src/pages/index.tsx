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
import { AdminLayout } from '@layout'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

const Home: NextPage = () => (
  <AdminLayout>
    <div className="row">
      <div className="col-sm-6 col-lg-3">
        <Card style={{backgroundColor: "#00645A"}} text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div className="fs-6 fw-semibold">
                CX4432
                <span className="ms-2 fw-normal" style={{fontSize: "13px"}}>
                  (12.4%
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                  )
                </span>
              </div>
              <div style={{fontSize: "13px"}}>02:00:00PM, Today</div>
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
          <div className="mt-3 mx-3" style={{ height: '40px' }}>
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
                  label: 'My First dataset',
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [65, 59, 84, 84, 51, 55, 40],
                }],
              }}
            />
          </div>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-3">
        <Card text="black" className="mb-4" style={{backgroundColor: "#F1F1F1"}}>
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div className="fs-6 fw-semibold">
                CX7894
                <span className="ms-2 fw-normal" style={{fontSize: "13px"}}>
                  (40.9%
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                  )
                </span>
              </div>
              <div style={{fontSize: "13px"}}>03:30:00PM, Today</div>
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
          <div className="mt-3 mx-3" style={{ height: '40px' }}>
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

      <div className="col-sm-6 col-lg-3">
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
      </div>

      <div className="col-sm-6 col-lg-3">
        <Card text="black" className="mb-4" style={{backgroundColor: "#F1F1F1"}}>
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div className="fs-6 fw-semibold">
                CX8921
                <span className="ms-2 fw-normal" style={{fontSize: "13px"}}>
                  (84.7%
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                  )
                </span>
              </div>
              <div style={{fontSize: "13px"}}>09:40:00PM, Today</div>
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
          <div className="mt-3 mx-3" style={{ height: '40px' }}>
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
                  label: 'My First dataset',
                  backgroundColor: '#E4E1E0 ',
                  borderColor: 'black',
                  data: [78, 81, 80, 45, 34, 12, 40],
                  fill: true,
                }],
              }}
            />
          </div>
        </Card>
      </div>
    </div>
    

    {/* header section for model 1 */}

    <div>
      <h4>AI Model 1 Info: CathayPredictAir</h4>
      <p style={{marginTop: "-8px"}}>Recent run: For Flight CX2118 at 03:00:00AM, Today.</p>
    </div>

    <div className='row'>
      <div className='col-lg-8 col-md-8'>
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
          {/* <Card.Footer>
            <div className="row row-cols-1 row-cols-md-5 text-center">
              <div className="col mb-sm-2 mb-0">
                <div className="text-black-50">Visits</div>
                <div className="fw-semibold">29.703 Users (40%)</div>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="success"
                  now={40}
                />
              </div>
              <div className="col mb-sm-2 mb-0">
                <div className="text-black-50">Unique</div>
                <div className="fw-semibold">24.093 Users (20%)</div>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="info"
                  now={20}
                />
              </div>
              <div className="col mb-sm-2 mb-0">
                <div className="text-black-50">Page views</div>
                <div className="fw-semibold">78.706 Views (60%)</div>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="warning"
                  now={60}
                />
              </div>
              <div className="col mb-sm-2 mb-0">
                <div className="text-black-50">New Users</div>
                <div className="fw-semibold">22.123 Users (80%)</div>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="danger"
                  now={80}
                />
              </div>
              <div className="col mb-sm-2 mb-0">
                <div className="text-black-50">Bounce Rate</div>
                <div className="fw-semibold">40.15%</div>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="primary"
                  now={40}
                />
              </div>
            </div>
          </Card.Footer> */}
        </Card>
      </div>
      <div className='col-lg-4 col-md-4'>
            <div className="table-responsive">
              <table className="table border mb-0">
                <thead className="table-light fw-semibold">
                  <tr className="align-middle">
                    <th className="text-left">Flights</th>
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
      </div>
    </div>


    {/* <div className="row">
      <div className="col-sm-6 col-lg-4">
        <Card
          className="mb-4"
          style={{ '--bs-card-cap-bg': '#3b5998' } as React.CSSProperties}
        >
          <Card.Header className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon
              icon={faFacebookF}
              fixedWidth
              size="3x"
              className="my-4 text-white"
            />
          </Card.Header>
          <Card.Body>
            <div className="row text-center">
              <div className="col">
                <div className="fs-5 fw-semibold">89k</div>
                <div className="text-uppercase text-black-50 small">friends</div>
              </div>
              <div className="vr p-0" />
              <div className="col">
                <div className="fs-5 fw-semibold">459</div>
                <div className="text-uppercase text-black-50 small">feeds</div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-4">
        <Card
          className="mb-4"
          style={{ '--bs-card-cap-bg': '#00aced' } as React.CSSProperties}
        >
          <Card.Header className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon
              icon={faTwitter}
              fixedWidth
              size="3x"
              className="my-4 text-white"
            />
          </Card.Header>
          <Card.Body>
            <div className="row text-center">
              <div className="col">
                <div className="fs-5 fw-semibold">973k</div>
                <div className="text-uppercase text-black-50 small">followers</div>
              </div>
              <div className="vr p-0" />
              <div className="col">
                <div className="fs-5 fw-semibold">1.792</div>
                <div className="text-uppercase text-black-50 small">tweets</div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-4">
        <Card
          className="mb-4"
          style={{ '--bs-card-cap-bg': '#4875b4' } as React.CSSProperties}
        >
          <Card.Header className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              fixedWidth
              size="3x"
              className="my-4 text-white"
            />
          </Card.Header>
          <Card.Body>
            <div className="row text-center">
              <div className="col">
                <div className="fs-5 fw-semibold">500+</div>
                <div className="text-uppercase text-black-50 small">contacts</div>
              </div>
              <div className="vr p-0" />
              <div className="col">
                <div className="fs-5 fw-semibold">292</div>
                <div className="text-uppercase text-black-50 small">feeds</div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

    </div> */}

    <div>
      <h4>AI Model 2 Info: SmartRateAI</h4>
      <p style={{marginTop: "-8px"}}>Recent run: For Flight CX1851A at 04:30:00AM, Today.</p>
    </div>
    <div className="row">
      <div className="col-md-12">
        <Card>
          <Card.Header>
            Model Performance Summary by Flights
          </Card.Header>
          <Card.Body>
            <div className="row">
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-6">
                    <div className="border-start border-4 border-info px-3 mb-3">
                      <small className="text-black-50">
                        Customers Approved
                      </small>
                      <div className="fs-5 fw-semibold">2,121</div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="border-start border-4 border-danger px-3 mb-3">
                      <small className="text-black-50">
                        Reschedules Performed
                      </small>
                      <div className="fs-5 fw-semibold">79</div>
                    </div>
                  </div>

                </div>

                <hr className="mt-0" />

                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      CX1851 (Recent)
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="danger"
                      now={12}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="info"
                      now={88}
                    />
                  </div>
                </div>

                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      CX2118 (Today)
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="danger"
                      now={18}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="info"
                      now={84}
                    />
                  </div>
                </div>

                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      CX1194 (Today)
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="danger"
                      now={23}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="info"
                      now={77}
                    />
                  </div>
                </div>

                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      CX1442 (Yesterday)
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="danger"
                      now={9}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="info"
                      now={91}
                    />
                  </div>
                </div>

                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      CX9851 (Yesterday)
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="danger"
                      now={12}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="info"
                      now={88}
                    />
                  </div>
                </div>

                {/* <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      Saturday
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="primary"
                      now={53}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="danger"
                      now={82}
                    />
                  </div>
                </div> */}

                {/* <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      Sunday
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="primary"
                      now={9}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="danger"
                      now={69}
                    />
                  </div>
                </div> */}
              </div>

              <div className="col-sm-6">
                <div className="row">
                  <div className="col-6">
                    <div className="border-start border-4 border-success px-3 mb-3">
                      <small className="text-black-50">
                        Flight Customer List Correction
                      </small>
                      <div className="fs-5 fw-semibold" style={{color: "red"}}>3 New Corrections</div>
                    </div>
                  </div>

                  {/* <div className="col-6">
                    <div className="border-start border-4 border-success px-3 mb-3">
                      <small className="text-black-50">
                        Organic
                      </small>
                      <div className="fs-5 fw-semibold">49,123</div>
                    </div>
                  </div> */}

                </div>

                <hr className="mt-0" />

                <div className="mb-5">
                  <h6>Reason for Correction (Summarized):</h6>
                  <div className="mb-3">
                    <div className="d-flex mb-1">
                      <div>
                        Emergency
                      </div>
                      <div className="ms-auto fw-semibold">38.6%</div>
                    </div>
                    <ProgressBar
                      className="progress-thin"
                      variant="warning"
                      now={38.6}
                    />
                  </div>

                  <div className="mb-3">
                    <div className="d-flex mb-1">
                      <div>
                        Special Guest
                      </div>
                      <div className="ms-auto fw-semibold">22.5%</div>
                    </div>
                    <ProgressBar
                      className="progress-thin"
                      variant="success"
                      now={22.5}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="d-flex mb-1">
                      <div>
                        By Case Analysis
                      </div>
                      <div className="ms-auto fw-semibold">30.8%</div>
                    </div>
                    <ProgressBar
                      className="progress-thin"
                      variant="primary"
                      now={30.8}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="d-flex mb-1">
                      <div>
                        Model Error
                      </div>
                      <div className="ms-auto fw-semibold">8.1%</div>
                    </div>
                    <ProgressBar
                      className="progress-thin"
                      variant="info"
                      now={8.1}
                    />
                  </div>
                </div>



                {/* <div className="mb-3">
                  <div className="d-flex mb-1">
                    <div>
                      <FontAwesomeIcon className="me-2" icon={faFacebookF} fixedWidth />
                      Facebook
                    </div>
                    <div className="ms-auto fw-semibold me-2">51.223</div>
                    <div className="text-black-50 small">(15%)</div>
                  </div>
                  <ProgressBar
                    className="progress-thin"
                    variant="success"
                    now={15}
                  />
                </div> */}

                {/* <div className="mb-3">
                  <div className="d-flex mb-1">
                    <div>
                      <FontAwesomeIcon className="me-2" icon={faTwitter} fixedWidth />
                      Twitter
                    </div>
                    <div className="ms-auto fw-semibold me-2">37.564</div>
                    <div className="text-black-50 small">(11%)</div>
                  </div>
                  <ProgressBar
                    className="progress-thin"
                    variant="success"
                    now={11}
                  />
                </div> */}

                {/* <div className="mb-3">
                  <div className="d-flex mb-1">
                    <div>
                      <FontAwesomeIcon className="me-2" icon={faLinkedinIn} fixedWidth />
                      LinkedIn
                    </div>
                    <div className="ms-auto fw-semibold me-2">27.319</div>
                    <div className="text-black-50 small">(8%)</div>
                  </div>
                  <ProgressBar
                    className="progress-thin"
                    variant="success"
                    now={8}
                  />
                </div> */}
              </div>
            </div>

            <br />

            {/* <div className="table-responsive">
              <table className="table border mb-0">
                <thead className="table-light fw-semibold">
                  <tr className="align-middle">
                    <th className="text-center">
                      <FontAwesomeIcon icon={faUsers} fixedWidth />
                    </th>
                    <th>User</th>
                    <th>Usage</th>
                    <th className="text-center">Payment Method</th>
                    <th>Activity</th>
                    <th aria-label="Action" />
                  </tr>
                </thead>
                <tbody>
                  <tr className="align-middle">
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src="/assets/img/avatars/1.jpg"
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>Yiorgos Avraamu</div>
                      <div className="small text-black-50">
                        <span>New</span>
                        {' '}
                        | Registered: Jan 1, 2020
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">50%</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            Jun 11, 2020 - Jul 10, 2020
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="success" now={50} />
                    </td>
                    <td className="text-center">
                      <FontAwesomeIcon icon={faCcAmex} size="lg" fixedWidth />
                    </td>
                    <td>
                      <div className="small text-black-50">Last login</div>
                      <div className="fw-semibold">10 sec ago</div>
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
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src="/assets/img/avatars/2.jpg"
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-danger rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>Avram Tarasios</div>
                      <div className="small text-black-50">
                        <span>Recurring</span>
                        {' '}
                        | Registered: Jan 1, 2020
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">10%</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            Jun 11, 2020 - Jul 10, 2020
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="info" now={10} />
                    </td>
                    <td className="text-center">
                      <FontAwesomeIcon icon={faCcVisa} size="lg" fixedWidth />
                    </td>
                    <td>
                      <div className="small text-black-50">Last login</div>
                      <div className="fw-semibold">5 minutes ago</div>
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
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src="/assets/img/avatars/3.jpg"
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-warning rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>Quintin Ed</div>
                      <div className="small text-black-50">
                        <span>New</span>
                        {' '}
                        | Registered: Jan 1, 2020
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">74%</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            Jun 11, 2020 - Jul 10, 2020
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="warning" now={74} />
                    </td>
                    <td className="text-center">
                      <FontAwesomeIcon icon={faCcStripe} size="lg" fixedWidth />
                    </td>
                    <td>
                      <div className="small text-black-50">Last login</div>
                      <div className="fw-semibold">1 hour ago</div>
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
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src="/assets/img/avatars/4.jpg"
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-secondary rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>Enéas Kwadwo</div>
                      <div className="small text-black-50">
                        <span>New</span>
                        {' '}
                        | Registered: Jan 1, 2020
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">98%</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            Jun 11, 2020 - Jul 10, 2020
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="danger" now={98} />
                    </td>
                    <td className="text-center">
                      <FontAwesomeIcon icon={faCcPaypal} size="lg" fixedWidth />
                    </td>
                    <td>
                      <div className="small text-black-50">Last login</div>
                      <div className="fw-semibold">Last month</div>
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
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src="/assets/img/avatars/5.jpg"
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>Agapetus Tadeáš</div>
                      <div className="small text-black-50">
                        <span>New</span>
                        {' '}
                        | Registered: Jan 1, 2020
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">22%</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            Jun 11, 2020 - Jul 10, 2020
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="info" now={22} />
                    </td>
                    <td className="text-center">
                      <FontAwesomeIcon icon={faCcApplePay} size="lg" fixedWidth />
                    </td>
                    <td>
                      <div className="small text-black-50">Last login</div>
                      <div className="fw-semibold">Last week</div>
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
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src="/assets/img/avatars/6.jpg"
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-danger rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>Friderik Dávid</div>
                      <div className="small text-black-50">
                        <span>New</span>
                        {' '}
                        | Registered: Jan 1, 2020
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">43%</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            Jun 11, 2020 - Jul 10, 2020
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="success" now={43} />
                    </td>
                    <td className="text-center">
                      <FontAwesomeIcon icon={faCcAmex} size="lg" fixedWidth />
                    </td>
                    <td>
                      <div className="small text-black-50">Last login</div>
                      <div className="fw-semibold">Yesterday</div>
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
            </div> */}
          </Card.Body>
        </Card>
      </div>
    </div>
  </AdminLayout>
)

export default Home
