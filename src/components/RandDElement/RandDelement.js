import React from 'react'
import './RandDelement.css'
import { useNavigate } from 'react-router-dom'

const RandDelement = () => {
  let navigate = useNavigate()

  return (
    <section className='RandDwrapper'>
      <div>
        <p>Our solution</p>
        <p>How to make flexible electricity through our solution ?</p>
      </div>
      <div>
        <p>General Parameter Based PV Modelling </p>
        <p>Five Parameter Model:</p>
        <p>
          The five parameter are{' '}
          <i>
            R<sub>s</sub> , R<sub>sh</sub> , A , I<sub>d</sub> and I
            <sub>ph</sub>
          </i>
        </p>
        <p>
          <li>
            <i>
              I<sub>PV</sub> = I<sub>ph</sub> - I<sub>d</sub>
            </i>
          </li>
          <li>
            <i>
              I<sub>ph</sub> = iccs( <sup>g</sup> &#8260;{' '}
              <sub>
                g<sub>s</sub>
              </sub>{' '}
              )(1-&#8710;icc(T<sub>s</sub> - T ))
            </i>
          </li>

          <li>
            <i>
              I<sub>sat</sub> ={' '}
              <sup>
                (I<sub>ph</sub> -{' '}
                <sup>
                  V<sub>oc</sub>{' '}
                </sup>
                &#8260;
                <sub>
                  R<sub>hs</sub>{' '}
                </sub>
                )
              </sup>{' '}
              &#8260;{' '}
              <sub>
                {' '}
                e
                <sup>
                  <sup>
                    V<sub>oc</sub>
                  </sup>{' '}
                  &#8260;{' '}
                  <sub>
                    <sup>TAK</sup> &#8260; <sub>q</sub>
                  </sub>
                </sup>{' '}
                - 1
              </sub>
            </i>
          </li>
          <li>
            <i>
              I<sub>d</sub> = I<sub>sat</sub> ( e
              <sup>
                <sup>
                  V + IR<sub>s</sub>
                </sup>{' '}
                &#8260;{' '}
                <sub>
                  <sup>TAK</sup> &#8260; <sub>q</sub>
                </sub>
              </sup>{' '}
              - 1)
            </i>
          </li>
          <li>
            <i>
              V<sub>oc</sub> = V<sub>ocs</sub> - &#8710;voc( T<sub>s</sub> - T )
            </i>
          </li>
          <li>
            <i>
              <sup>
                I<sub>sh</sub> = (v + IR<sub>s</sub> )
              </sup>{' '}
              &#8260;{' '}
              <sub>
                R<sub>sh</sub>
              </sub>
            </i>
          </li>
          <li
            onClick={() => {
              navigate('/fivepara')
            }}
            className='latex-link'
          >
            Click here to see the latex mathematical model
          </li>
        </p>

        <p>Four Parameter Model:</p>
        <p>
          The four parameter are{' '}
          <i>
            R<sub>s</sub> , A , I<sub>d</sub> and I<sub>ph</sub>
          </i>
        </p>
        <p>
          <li>
            <i>
              I<sub>PV</sub> = I<sub>ph</sub> - I<sub>d</sub>
            </i>
          </li>
          <li>
            <i>
              I<sub>ph</sub> = iccs( <sup>g</sup> &#8260;{' '}
              <sub>
                g<sub>s</sub>
              </sub>{' '}
              )(1-&#8710;icc(T<sub>s</sub> - T ))
            </i>
          </li>
          <li>
            <i>
              I<sub>d</sub> = I<sub>sat</sub> ( e
              <sup>
                <sup>
                  V + IR<sub>s</sub>
                </sup>{' '}
                &#8260;{' '}
                <sub>
                  <sup>TAK</sup> &#8260; <sub>q</sub>
                </sub>
              </sup>{' '}
              - 1)
            </i>
          </li>
          <li>
            <i>
              I<sub>sat</sub> ={' '}
              <sup>
                I<sub>ph</sub>{' '}
              </sup>{' '}
              &#8260;{' '}
              <sub>
                {' '}
                e
                <sup>
                  <sup>
                    V<sub>oc</sub>
                  </sup>{' '}
                  &#8260;{' '}
                  <sub>
                    <sup>TAK</sup> &#8260; <sub>q</sub>
                  </sub>
                </sup>{' '}
                - 1
              </sub>
            </i>
          </li>
          <li>
            <i>
              V<sub>oc</sub> = V<sub>ocs</sub> - &#8710;voc( T<sub>s</sub> - T )
            </i>
          </li>
          <li
            onClick={() => {
              navigate('/fourpara')
            }}
            className='latex-link'
          >
            Click here to see the latex mathematical model
          </li>
        </p>

        <p>Three Parameter Model:</p>
        <p>
          The three parameter are{' '}
          <i>
            A , I<sub>d</sub> and I<sub>ph</sub>
          </i>
        </p>
        <p>
          <li>
            <i>
              I<sub>PV</sub> = I<sub>ph</sub> - I<sub>d</sub>
            </i>
          </li>
          <li>
            <i>
              I<sub>ph</sub> = iccs( <sup>g</sup> &#8260;{' '}
              <sub>
                g<sub>s</sub>
              </sub>{' '}
              )(1-&#8710;icc(T<sub>s</sub> - T ))
            </i>
          </li>
          <li>
            <i>
              I<sub>d</sub> = I<sub>sat</sub> ( e
              <sup>
                <sup>V</sup> &#8260;{' '}
                <sub>
                  <sup>TAK</sup> &#8260; <sub>q</sub>
                </sub>
              </sup>{' '}
              - 1)
            </i>
          </li>
          <li>
            <i>
              I<sub>sat</sub> ={' '}
              <sup>
                I<sub>ph</sub>{' '}
              </sup>{' '}
              &#8260;{' '}
              <sub>
                {' '}
                e
                <sup>
                  <sup>
                    V<sub>oc</sub>
                  </sup>{' '}
                  &#8260;{' '}
                  <sub>
                    <sup>TAK</sup> &#8260; <sub>q</sub>
                  </sub>
                </sup>{' '}
                - 1
              </sub>
            </i>
          </li>
          <li>
            <i>
              V<sub>oc</sub> = V<sub>ocs</sub> - &#8710;voc( T<sub>s</sub> - T )
            </i>
          </li>
          <li
            onClick={() => {
              navigate('/threepara')
            }}
            className='latex-link'
          >
            Click here to see the latex mathematical model
          </li>
        </p>
      </div>
      <div>
        <p>Equivalent PV Model</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          tempora dolorum reiciendis, at rerum eos mollitia nostrum quia aperiam
          aliquid amet dignissimos sint, iure illo corporis odio accusamus
          quisquam iusto.
        </p>
      </div>
      <div>
        <p>Our possible method of scaling down coal</p>
        <p>Coal Solar Hybrid</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          tempora dolorum reiciendis, at rerum eos mollitia nostrum quia aperiam
          aliquid amet dignissimos sint, iure illo corporis odio accusamus
          quisquam iusto.
        </p>
      </div>
    </section>
  )
}

export default RandDelement
