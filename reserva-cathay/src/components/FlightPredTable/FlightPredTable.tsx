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
import React, { useState } from 'react'
import { AdminLayout } from '@layout';
import { useRouter } from 'next/router';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

interface Props {
    data: string[][];
  }
  
  const DataTable: NextPage<Props> = ({ data }) => {
    return (
      <div>
        <div className="table-responsive" style={{ marginBottom: "20px" }}>
          <table className="table border mb-0">
            <thead className="table-light fw-semibold">
              <tr className="align-middle">
                <th className="text-center">No Shows</th>
                <th className="text-center">Google Trends</th>
                <th className="text-center">Third-Party Trends</th>
                <th className="text-center">Social Trends</th>
                <th className="text-center">Calculated Extra Tickets</th>
              </tr>
            </thead>
            <tbody>
              {data.map((rowData, index) => (
                <tr className="align-middle" key={index}>
                  <td className='text-center'>
                    <div>{rowData[0]}</div>

                  </td>
                  <td className='text-center'>
                    <div>{rowData[1]}</div>

                  </td>
                  <td className='text-center'>
                    <div className="clearfix">

                        <div className="fw-semibold">{rowData[2]}</div>

                    </div>
                  </td>
                  <td className="text-center">{rowData[3]}</td>
                  <td className="text-center">{rowData[4]}</td>
                  <td>{rowData[5]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
export default DataTable;