import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <Dashboard>
      {/* <!-- dashboard-grids --> */}
      <div className='dashboard-grids'>
        <div className='row'>
          <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className='dashboard-grid bg-green'>
              <div className='icons'>
                <i className='fa fa-users' aria-hidden='true'></i>
              </div>
              <div className='grid-text'>
                <h3>55</h3>
                <h4>Total Employee</h4>
              </div>
              <a href='#'>Total Employee</a>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className='dashboard-grid bg-pase'>
              <div className='icons'>
                <i className='fa fa-user-plus' aria-hidden='true'></i>
              </div>
              <div className='grid-text'>
                <h3>44</h3>
                <h4>Today's Presents</h4>
              </div>
              <a href='#'>Today's Presents</a>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className='dashboard-grid bg-bringal'>
              <div className='icons'>
                <i className='fa fa-user-times' aria-hidden='true'></i>
              </div>
              <div className='grid-text'>
                <h3>12</h3>
                <h4>Today's Absents</h4>
              </div>
              <a href='#'>Today's Absents</a>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className='dashboard-grid bg-darkgreen'>
              <div className='icons'>
                <i className='fa fa-user' aria-hidden='true'></i>
              </div>
              <div className='grid-text'>
                <h3>23</h3>
                <h4>Today's Leave</h4>
              </div>
              <a href='#'>Today's Leave</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- dashboard-grids --> */}

      {/* <!-- current-status --> */}
      <div className='current-status'>
        <div className='title2'>
          <h3>Current leave status </h3>
        </div>
        <div className='status'>
          <ul>
            <li>
              <b>Casual leave</b>
            </li>
            <li>Allowed: 05</li>
            <li>Adjusted: 05</li>
            <li>Taken: 05</li>
            <li>Remaining: 05</li>
            <li>Excess: 05</li>
          </ul>
        </div>
      </div>
      {/* <!-- current-status --> */}

      {/* <!-- month-summary --> */}
      <div className='month-summary'>
        <div className='title2'>
          <h3>My monthy attendance summary</h3>
        </div>

        <div className='summary'>
          <table className='table month'>
            <thead>
              <tr>
                <th scope='col'>Sun</th>
                <th scope='col'>Mon</th>
                <th scope='col'>Tue</th>
                <th scope='col'>Wed</th>
                <th scope='col'>Thu</th>
                <th scope='col'>Fri</th>
                <th scope='col'>Sat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className='weeknd'>1</span>{" "}
                </td>
                <td>2</td>
                <td>
                  <span className='delay'>3</span>
                </td>
                <td>
                  <span className='delay'>4</span>
                </td>
                <td>
                  <span className='delay'>5</span>
                </td>
                <td>6</td>
                <td>
                  <span className='weeknd'>7</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className='weeknd'>8</span>
                </td>
                <td>9</td>
                <td>10</td>
                <td>
                  <span className='absents'>11</span>
                </td>
                <td>12</td>
                <td>13</td>
                <td>
                  <span className='weeknd'>14</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className='weeknd'>15</span>
                </td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>
                  <span className='weeknd'>21</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className='weeknd'>22</span>
                </td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>
                  <span className='weeknd'>28</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className='weeknd'>29</span>
                </td>
                <td>30</td>
                <td>31</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
            </tbody>
          </table>
          <div className='hinch'>
            <ul>
              <li>
                <span className='delay-color'></span> Extremely delay
              </li>
              <li>
                <span className='absents-color'></span> Absents
              </li>
              <li>
                <span className='weeknd-color'></span> Weeknd
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- month-summary --> */}
    </Dashboard>
  );
}
