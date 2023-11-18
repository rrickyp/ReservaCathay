import type { NextPage } from 'next';
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
import React, { useState } from 'react'
import { AdminLayout } from '@layout';
import { useRouter } from 'next/router';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

const dummydata = [
    ["Yiorgos Avraamu","12th November, 2023","Business Class","Rarely (12%)","Very Frequent (> than 50)","4.89"],
    ["Avram Tarasios","14th November, 2023","First Class","Rarely (7%)","Frequent (30-40)","4.94"],
    ["Quintin Ed","06th November, 2023","Economy Class","Frequent(67%)","Sometimes (10-20)","2.49"],
    ["Enéas Kwadwo","11th November, 2023","Premium Economy","Rarely(9%)","Often (20-30)","3.99"],
    ["Agapetus Tadeáš","25th October, 2023","Business Class","Sometimes(27%)","Frequent (30-40)","4.74"],
    ["Friderik Dávid","31st October, 2023", "Premium Economy", "Often (51%)","Sometimes (10-20)","3.25"]
]

const errorlogs = [
    ["59 mins ago.","System","[ERROR] - AI model run on 18/11/23 encountered an error. Details:..."],
    ["3 hours ago","System","AI model run on 17/11/23 for Flight CX111. Performance metrics: Accuracy- 0.87, RMSE- 0.08"],
    ["2 days ago.","Mark Huston","[INFO] - Edited Customer List for Flight CX288 at 05:03:00PM, 16/11/23."],
    ["2 days ago.","Nancy Wong","[INFO] - Invited you to review Flight CX312 Customer List for Customer ID 31D."],
]

const remunerationData = [
  {
    optionName: 'Performance Bonus',
    description: 'Bonus based on individual and team performance.',
    frequency: 'Quarterly',
    amount: '$1,000',
  },
  {
    optionName: 'Sales Commission',
    description: 'Commission for each sale made.',
    frequency: 'Monthly',
    amount: '$500 + 5% of sale amount',
  },
  {
    optionName: 'Annual Salary',
    description: 'Fixed salary paid annually.',
    frequency: 'Yearly',
    amount: '$50,000',
  },
  {
    optionName: 'Profit Sharing',
    description: 'Share of company profits distributed among employees.',
    frequency: 'Annually',
    amount: 'Varies based on company performance',
  },
  // Add more remuneration options as needed
];

interface Option {
  optionName: string;
  description: string;
  frequency: string;
  amount: string;
}


const Home: NextPage = () => {

  const [remunerationData, setRemunerationData] = useState<Option[]>([
    {
      optionName: 'Performance Bonus',
      description: 'Bonus based on individual and team performance.',
      frequency: 'Quarterly',
      amount: '$1,000',
    },
    {
      optionName: 'Sales Commission',
      description: 'Commission for each sale made.',
      frequency: 'Monthly',
      amount: '$500 + 5% of sale amount',
    },
    {
      optionName: 'Annual Salary',
      description: 'Fixed salary paid annually.',
      frequency: 'Yearly',
      amount: '$50,000',
    },
    {
      optionName: 'Profit Sharing',
      description: 'Share of company profits distributed among employees.',
      frequency: 'Annually',
      amount: 'Varies based on company performance',
    },
    {
      optionName: 'Profit Sharing',
      description: 'Share of company profits distributed among employees.',
      frequency: 'Annually',
      amount: 'Varies based on company performance',
    },
    {
      optionName: 'Profit Sharing',
      description: 'Share of company profits distributed among employees.',
      frequency: 'Annually',
      amount: 'Varies based on company performance',
    },
    {
      optionName: 'Profit Sharing',
      description: 'Share of company profits distributed among employees.',
      frequency: 'Annually',
      amount: 'Varies based on company performance',
    },
    // Your initial remuneration data here
  ]);

  // const handleRemoveOption = (rowIndex: number, optionIndex: number) => {
  //   const updatedData = [...remunerationData];
  //   updatedData[rowIndex].splice(optionIndex, 1);
  //   setRemunerationData(updatedData);
  // };

  const onRemoveOption = (indexToRemove) => {
    const updatedData = remunerationData.filter((_, index) => index !== indexToRemove);
    setRemunerationData(updatedData);
  };
  const [showAll, setShowAll] = useState<boolean>(false);
  const handleToggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const handleAddEmptyBox = () => {
    console.log("Empty box clicked!");
    // Add logic to add an empty box to the remunerationData if needed
  };

  return (
  <AdminLayout>
    {/* header section for model 2 */}

    <div>
      <h4>AI Model 2 Info: SmartRate.AI</h4>
      <p style={{marginTop: "-8px", color: "red"}}>Model 2 currently running for CX1851 from 11:00:00AM, Today.</p>
    </div>

    <div className="row mb-4">
        {(showAll ? remunerationData : remunerationData.slice(0, 5)).map(
          (option, index) => (
            <div className="col-md-4" key={index} style={{marginBottom: "10px", marginLeft: "-10px"}}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{option.optionName}</h5>
                  <p className="card-text">{option.description}</p>
                  <p className="card-text">Frequency: {option.frequency}</p>
                  <p className="card-text">Amount: {option.amount}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => onRemoveOption(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          )
        )}
        <div className="col-md-4" key="empty-box" style={{marginLeft: "-10px"}}>
          <div className="card" style={{height: "60%", width: "100%",paddingTop: "40px"}}>
            <div className="card-body" style={{ textAlign: "center" }}>
              <button
                className="btn"
                onClick={handleAddEmptyBox}
              >
                +
              </button>
            </div>
          </div>
          {remunerationData.length > 5 && (
            <div className="card" style={{height: "35%", color: "#0645A", width: "100%", paddingTop: "10px"}}>
              <div className="card-body" style={{ textAlign: "center" }}>
                <button
                  className="btn"
                  onClick={handleToggleShowAll}
                  style={{color: "#0645A"}}
                >
                  {showAll ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>
          )}
        </div>
    </div>
    <div className='row'>
      <div className='col-lg-8 col-md-8'>
        <Card className="mb-4">
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div>
                <h4 className="mb-0">Customer Ratings Summary (CX1851[Recent])</h4>
                <div className="small text-black-50">Flight Schedule: 20th November, 12:00:00PM</div>
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
                  labels: ['1', '2', '3', '4', '5'],
                  datasets: [{
                    label: 'Priority Rating',
                    backgroundColor: '#C0DEDB',
                    borderColor: '#00645A',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [
                      42,
                      43,
                      58,
                      139,
                      82,
                    ],
                    fill: true,
                  }, {
                    label: 'Borderline',
                    borderColor: 'blue',
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
                        text: 'Priority Ratings for Customers', // Add your X-Axis label here
                        color: '#333', // You can customize the color
                      },
                      grid: {
                        drawOnChartArea: false,
                      },
                    },
                    y: {
                      title: {
                        display: true,
                        text: 'Number of Customers with Rating X', // Add your X-Axis label here
                        color: '#333', // You can customize the color
                      },
                      beginAtZero: false,
                      max: 150,
                      ticks: {
                        maxTicksLimit: 5,
                        stepSize: Math.ceil(250 / 5),
                      },
                    },
                  },
                  elements: {
                    line: {
                      tension: 0,
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
      <div className='col-lg-4 col-md-4'>
            <div className="table-responsive">
              <table className="table border mb-0">
                <thead className="table-light fw-semibold">
                  <tr className="align-middle">
                    <th className="text-left">Error/Info Logs</th>
                  </tr>
                </thead>
                <tbody>
                    {errorlogs && errorlogs.map((data,index) => (
                        <tr className="align-middle">
                        <td>
                            <div className="clearfix">
                            <div className="float-start">
                                <div className="fw" style={{fontSize: "15px"}}>{data[2]}</div>
                            </div>
                            </div>
                        </td>
                        <td>
                            <div className="small text-black-50">{data[0]}</div>
                            <div className="small text-black-80">{data[1]}</div>
                        </td>
                        </tr>
                    ))}
                </tbody>
              </table>
            </div>
      </div>
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

               

              </div>
            </div>

            <br />
          </Card.Body>
        </Card>
      </div>
    </div>
    <div>
      
    </div>
  </AdminLayout>
)}

export default Home
