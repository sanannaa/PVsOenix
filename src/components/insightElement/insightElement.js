import React from 'react'
import './insightElement.css'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
} from 'chart.js'
import { Pie, PolarArea, Bar, Line } from 'react-chartjs-2'

ChartJS.register(
  LineElement,
  ArcElement,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Tooltip,
  Legend
)

const data = {
  labels: [
    'Hydro',
    'Natural Gas',
    'Furnace Oil',
    'Diesel',
    'Coal',
    'Renewable Energy',
    'Power Import',
  ],
  datasets: [
    {
      label: '',
      data: [825, 51290, 9461, 139, 2968, 62, 6674],
      backgroundColor: [
        '#FF7396',
        '#92B4EC',
        '#9A86A4',
        'rgba(255, 183, 43, 1)',
        '#B4FF9F',
        '#FFF7BC',
        '#65C18C',
      ],
      borderWidth: 0,
      hoverOffset: 5,
    },
  ],
}

const data1 = {
  labels: [
    'Payra-Gopalganj(N) 400kV',
    'Patuakhali-Payra 230kV',
    'Ishurdi-Rajshahi 230kV',
    'Rangpur-Kurigram 132kV',
    'Magura-Narail 132kV ',
    'LILO of Bogura-Sirajganj 132kV',
    'LILO of Rajshahi-Chapai 132kV',
    'LILO of Feni-Cumilla(N) 132kV',
    'LILO of Faridpur-Madaripur 132kV',
    'LILO of Gopalganj-Madaripur 132kV',
    'Kodda–Rajendrapur 132kV',
  ],
  datasets: [
    {
      label: '',
      data: [
        163.55, 93.0, 158.24, 40.949, 78.972, 2.616, 1.624, 3.152, 6.12, 42,
        49.4,
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
}

const data3 = {
  labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
  datasets: [
    {
      label: 'Public',
      data: [2456, 2139, 981, 3621, 2400, 1975],
      backgroundColor: 'rgba(64, 223, 239, 0.5)',
    },
    {
      label: 'Private',
      data: [1063, 150, 3109, 757, 590, 1240],
      backgroundColor: 'rgba(230, 186, 149, 0.5)',
    },
    {
      label: 'Power Import',
      data: [0, 0, 1496, 0, 0, 0],
      backgroundColor: 'rgba(180, 255, 159, 0.5)',
    },
  ],
}

const data4 = {
  labels: ['No. of Projects', 'Capacity (MW)'],
  datasets: [
    {
      label: 'Public Sector',
      data: [16, 9065],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'IPP',
      data: [27, 6229],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

const data5 = {
  labels: [
    '2009-10',
    '2010-11',
    '2011-12',
    '2012-13',
    '2013-14',
    '2014-15',
    '2015-16',
    '2016-17',
    '2017-18',
    '2018-19',
    '2019-20',
  ],
  datasets: [
    {
      label: 'Installed Capacity(MW)',
      data: [
        5823, 7823, 7264, 8716, 9151, 10416, 11534, 12365, 13555, 15953, 18961,
        20383,
      ],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Present Capacity(Derated)(MW)',
      data: [
        5271, 6639, 8100, 8537, 9821, 10939, 11170, 12771, 15410, 18438, 19892,
      ],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Maximum Forecasted Demand (MW)',
      data: [
        6454, 6765, 7518, 8349, 9268, 8920, 9600, 10400, 11200, 12100, 13300,
      ],
      borderColor: 'rgba(0, 255, 171, 1)',
      backgroundColor: 'rgba(0, 255, 171, 0.5)',
    },
    {
      label: 'Maximum Demand Served (MW)',
      data: [
        4606, 4890, 6066, 6434, 7356, 7817, 9036, 9479, 10958, 12893, 12738,
      ],
      borderColor: 'rgba(255, 179, 25, 1)',
      backgroundColor: 'rgba(255, 179, 25, 0.5)',
    },
    {
      label: 'Energy Not Served (MkWh)',
      data: [1829, 1899, 1647, 1070, 515, 177, 122, 37, 32, 53, 58],
      borderColor: 'rgba(205, 240, 234, 1)',
      backgroundColor: 'rgba(205, 240, 234, 0.5)',
    },
  ],
}

const data6 = {
  labels: [
    '2009-10',
    '2010-11',
    '2011-12',
    '2012-13',
    '2013-14',
    '2014-15',
    '2015-16',
    '2016-17',
    '2017-18',
    '2018-19',
    '2019-20',
  ],
  datasets: [
    {
      label: 'East Zone',
      data: [3883, 3962, 4805, 5010, 5320, 5902, 6699, 7024, 8034, 9012, 9005],
      borderColor: 'rgba(184, 241, 176, 1)',
      backgroundColor: 'rgba(184, 241, 176, 0.5)',
    },
    {
      label: 'West Zone',
      data: [723, 928, 1261, 1424, 2036, 1915, 2337, 2455, 2924, 3881, 3733],
      borderColor: 'rgba(255, 230, 154, 1)',
      backgroundColor: 'rgba(255, 230, 154, 0.5)',
    },
    {
      label: 'System Total',
      data: [
        4606, 4890, 6066, 6434, 7356, 7817, 9036, 9479, 10958, 12893, 12738,
      ],
      borderColor: 'rgba(0, 255, 171, 1)',
      backgroundColor: 'rgba(0, 255, 171, 0.5)',
    },
  ],
}

const data7 = {
  labels: [
    '2009-10',
    '2010-11',
    '2011-12',
    '2012-13',
    '2013-14',
    '2014-15',
    '2015-16',
    '2016-17',
    '2017-18',
    '2018-19',
    '2019-20',
  ],
  datasets: [
    {
      label: 'East Zone',
      data: [
        14735, 12845, 13316, 15078, 15726, 16950, 17542, 21343, 24231, 26755,
        26094,
      ],
      borderColor: 'rgba(184, 241, 176, 1)',
      backgroundColor: 'rgba(184, 241, 176, 0.5)',
    },
    {
      label: 'West Zone',
      data: [2329, 2680, 2758, 3929, 4943, 5214, 6179, 6594, 8276, 9963, 10980],
      borderColor: 'rgba(28, 109, 208, 1)',
      backgroundColor: 'rgba(28, 109, 208, 0.5)',
    },
    {
      label: 'System Total',
      data: [
        17064, 15525, 16074, 19008, 20669, 22163, 23721, 27938, 32507, 36718,
        37074,
      ],
      borderColor: 'rgba(163, 228, 219, 1)',
      backgroundColor: 'rgba(163, 228, 219, 0.5)',
    },
    {
      label: 'Net Generation of Public Sector',
      data: [
        16072, 14673, 15201, 17994, 19645, 21103, 22585, 26597, 31082, 35107,
        35316,
      ],
      borderColor: 'rgba(205, 242, 202, 1)',
      backgroundColor: 'rgba(205, 242, 202, 0.5)',
    },
    {
      label: 'Total Private Generation Inclu. REB (Net)',
      data: [
        13175, 16682, 19917, 20235, 22550, 24733, 29608, 30679, 31595, 35426,
        36102,
      ],
      borderColor: 'rgba(202, 184, 255, 1)',
      backgroundColor: 'rgba(202, 184, 255, 0.5)',
    },
    {
      label: 'Total Generation (Net)',
      data: [
        29247, 31355, 35118, 38229, 42195, 45836, 52193, 57276, 62677, 70533,
        71419,
      ],
      borderColor: 'rgba(232, 228, 110, 1)',
      backgroundColor: 'rgba(232, 228, 110, 0.5)',
    },
    {
      label: '% Change Over the Preceding Year',
      data: [
        10.23, 7.21, 12.0, 8.86, 10.37, 8.63, 13.87, 9.74, 9.43, 12.53, 1.26,
      ],
      borderColor: 'rgba(255, 103, 1, 1)',
      backgroundColor: 'rgba(255, 103, 1, 0.5)',
    },
    {
      label: 'Energy Transfer through East-West Interconnector',
      data: [
        3831.43, 3574.0, 4445.42, 4695.49, 3138.37, 3043.08, 2859.6, 2398.56,
        2721.0, 2179.0, 2119.86,
      ],
      borderColor: 'rgba(221, 255, 188,1)',
      backgroundColor: 'rgba(221, 255, 188,0.5)',
    },
  ],
}

const data8 = {
  labels: [
    '2009-10',
    '2010-11',
    '2011-12',
    '2012-13',
    '2013-14',
    '2014-15',
    '2015-16',
    '2016-17',
    '2017-18',
    '2018-19',
    '2019-20',
  ],
  datasets: [
    {
      label: 'Total Net Generation (GWh)',
      data: [
        29247, 31355, 35118, 38229, 42195, 45836, 52193, 57276, 62677, 70533,
        71419,
      ],
      borderColor: 'rgba(184, 241, 176, 1)',
      backgroundColor: 'rgba(184, 241, 176, 0.5)',
    },
    {
      label: 'Total Population (In million)',
      data: [148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168],
      borderColor: 'rgba(28, 109, 208, 1)',
      backgroundColor: 'rgba(28, 109, 208, 0.5)',
    },
    {
      label: 'Total Sale (MkWh)',
      data: [
        24596, 26587, 29974, 32740, 36233, 39624, 45299, 50264, 55103, 62037,
        63364,
      ],
      borderColor: 'rgba(163, 228, 219, 1)',
      backgroundColor: 'rgba(163, 228, 219, 0.5)',
    },
    {
      label: 'Per Capita Generation (kWh)',
      data: [
        197.88, 209.46, 231.65, 248.73, 270.83, 290.28, 326.41, 354.1, 383.0,
        426.05, 426.23,
      ],
      borderColor: 'rgba(205, 242, 202, 1)',
      backgroundColor: 'rgba(205, 242, 202, 0.5)',
    },
    {
      label: 'Per Capita Consumption (kWh)',
      data: [
        166.42, 177.6, 197.72, 213.01, 232.56, 250.95, 283.3, 310.75, 336.71,
        374.73, 378.16,
      ],
      borderColor: 'rgba(202, 184, 255, 1)',
      backgroundColor: 'rgba(202, 184, 255, 0.5)',
    },
  ],
}

const InsightElement = () => {
  return (
    <div className='insightsection'>
      <div>
        <p>Energy Generation</p>
        <p>
          Total net energy generation in FY 2019-20 was 71,419 GWh, which was
          about 1.26% higher than previous year’s net generation of 70,533 GWh.
          Net energy generation in the public sector was 35,316 GWh and 29,429
          GWh in the private sector (including REB). Another 6,674 GWh was
          imported from India through the interconnection in Bheramara and
          Tripura. Total net energy generated in public and private sector power
          plants by type of fuel are as follows:
        </p>
        <div className='chart'>
          <Pie
            data={data}
            options={{
              plugins: {
                legend: {
                  display: true,
                  labels: {
                    color: '#d6d5a8',
                  },
                },
              },
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>

      <div>
        <p>Transmission Lines</p>
        <p>
          During fiscal year 2019-20, very significant transmission components
          have been added to the system because of the completion of different
          project works. Ttransmission line length (ckt. km) has enlarged by
          5.15% than that of previous year. The line details are as below:
        </p>
        <div>
          <PolarArea
            data={data1}
            options={{
              scales: { r: { display: false, color: '#d6d5a8' } },
              plugins: {
                legend: {
                  display: true,
                  labels: {
                    color: '#d6d5a8',
                  },
                },
              },
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>

      <div>
        <p>Implementation Status of Power Generation Plan up to 2025</p>
        <p>
          Till now, generation from gas is much higher than compare to other
          fuel like hydro, coal. For this reason, government has taken strategic
          decision to diversify primary fuel supply for power generation. In
          line with this strategy, a sustainable long term power development
          plan has been prepared for mitigation the growing demand to reach the
          generation capacity 24000 MW by 2021. Under this plan the coal,
          imported power from neighboring countries, the limited domestic gas,
          nuclear power and LNG, renewable will be used for power generation.
          Government has also taken energy efficiency and conservation program
          for reduction of growing power demand.Revised generation expansion
          plan updated in January 2020 targeting about 21,977 MW generation
          additions from 2020 to 2025 is provided in a chart below:
        </p>
        <div className='chart3'>
          <Bar
            options={{
              plugins: {
                legend: {
                  display: true,
                  labels: {
                    color: '#d6d5a8',
                  },
                },
              },
              maintainAspectRatio: false,
            }}
            data={data3}
          />
        </div>
      </div>

      <div>
        <p>Under Construction and Tendering Process Projects</p>
        <p>
          Under this above plan, 43 projects of capacity 15,294 MW are now under
          construction stage, 12 projects of capacity 2,745 MW are now in the
          singing process (LOI and NOA are given) and 6 projects of capacity 650
          MW are now in tendering process. The under construction, singing (LOI
          and NOA are given) and tendering process projects will be implemented
          in phase during the period 2020-2027
        </p>
        <div className='chart3'>
          <Bar
            options={{
              indexAxis: 'y',
              elements: {
                bar: {
                  borderWidth: 2,
                },
              },
              maintainAspectRatio: false,
            }}
            data={data4}
          />
        </div>
      </div>

      <div>
        <p>GENERATION TABLES AND CHARTS</p>
        <p>
          Installed Capacity, Present Capacity (Derated), Maximum Forcasted
          Demand Maximum Demand served and Energy not Served
        </p>
        <div className='chart3'>
          <Line
            options={{
              plugins: {
                legend: {
                  display: true,
                  labels: {
                    color: '#d6d5a8',
                  },
                },
              },
              maintainAspectRatio: false,
            }}
            data={data5}
          />
        </div>
      </div>

      <div>
        <p>Year Wise Maximum Generation</p>
        <div className='chart3'>
          <Line
            options={{
              plugins: {
                legend: {
                  display: true,
                  labels: {
                    color: '#d6d5a8',
                  },
                },
              },
              maintainAspectRatio: false,
            }}
            data={data6}
          />
        </div>
      </div>

      <div>
        <p>Energy Generation (National)</p>
        <div className='chart4'>
          <Line
            options={{
              plugins: {
                legend: {
                  display: true,
                  labels: {
                    color: '#d6d5a8',
                  },
                },
              },
              maintainAspectRatio: false,
            }}
            data={data7}
          />
        </div>
      </div>

      <div>
        <p>Per Capita Generation and Consumption (Grid)</p>
        <div className='chart4'>
          <Line
            options={{
              plugins: {
                legend: {
                  display: true,
                  labels: {
                    color: '#d6d5a8',
                  },
                },
              },
              maintainAspectRatio: false,
            }}
            data={data8}
          />
        </div>
      </div>
    </div>
  )
}

export default InsightElement
