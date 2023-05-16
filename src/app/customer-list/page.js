import Dashboard from "../dashboard/page";

export default function CustomerList() {
  return (
    <Dashboard>
      <div class='contents'>
        {/* <!-- Breadcrumb --> */}
        <div class='breadcrumb-area'>
          <nav aria-label='breadcrumb'>
            <ol class='breadcrumb'>
              <li class='breadcrumb-item'>
                <a href='#'>
                  <i class='fa fa-home' aria-hidden='true'></i> Home
                </a>
              </li>
              <li class='breadcrumb-item'>
                <a href='#'>Department</a>
              </li>
              <li class='breadcrumb-item active' aria-current='page'>
                Department
              </li>
            </ol>
          </nav>
        </div>
        {/* <!-- Breadcrumb --> */}

        {/* <!-- table-area  --> */}
        <div class='table-area'>
          {/* <!-- table-title --> */}
          <div class='table-title'>
            <div class='row'>
              <div class='col-md-4'>
                <div class='depertment-name'>
                  <h4>Department</h4>
                </div>
              </div>
              <div class='col-md-8'>
                <div class='add-btn'>
                  <ul>
                    <li>
                      <button
                        type='button'
                        class='cus-btn'
                        data-bs-toggle='modal'
                        data-bs-target='#exampleModal'>
                        <i class='fa fa-plus-circle' aria-hidden='true'></i> Add
                        New Department
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- table-title --> */}
          <div class='table-header'>
            <div class='row'>
              <div class='col-sm-4'>
                <div class='selectd'>
                  <p>Show </p>
                  <select class='select2'>
                    <option selected>10</option>
                    <option value='1'>20</option>
                    <option value='2'>50</option>
                    <option value='3'>100</option>
                  </select>
                  <p> entries</p>
                </div>
              </div>
              <div class='col-md-4'>
                <div class='export'>
                  <div
                    class='btn-group'
                    role='group'
                    aria-label='Basic outlined example'>
                    <button type='button' class='btn btn-outline-primary'>
                      Copy
                    </button>
                    <button type='button' class='btn btn-outline-primary'>
                      CSV
                    </button>
                    <button type='button' class='btn btn-outline-primary'>
                      Excel
                    </button>
                    <button type='button' class='btn btn-outline-primary'>
                      PDF
                    </button>
                    <button type='button' class='btn btn-outline-primary'>
                      Print
                    </button>
                  </div>
                </div>
              </div>
              <div class='col-md-4'>
                <div class='data-search'>
                  <div class='input-group search'>
                    <input
                      type='search'
                      class='form-control'
                      placeholder='Search...'
                    />
                    <span class='input-group-text'>
                      <i class='fa fa-search' aria-hidden='true'></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='tables'>
            <table class='table table-striped table-hover'>
              <thead>
                <tr>
                  <th>SL No</th>
                  <th>Department Name </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Administration</td>
                  <td>
                    <ul class='action'>
                      <li>
                        <a href='#'>
                          <i class='fa fa-eye' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-pencil' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-times' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-trash' aria-hidden='true'></i>
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>HRM</td>
                  <td>
                    <ul class='action'>
                      <li>
                        <a href='#'>
                          <i class='fa fa-eye' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-pencil' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-times' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-trash' aria-hidden='true'></i>
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>Marketing</td>
                  <td>
                    <ul class='action'>
                      <li>
                        <a href='#'>
                          <i class='fa fa-eye' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-pencil' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-times' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-trash' aria-hidden='true'></i>
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Marketing</td>
                  <td>
                    <ul class='action'>
                      <li>
                        <a href='#'>
                          <i class='fa fa-eye' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-pencil' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-times' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-trash' aria-hidden='true'></i>
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Marketing</td>
                  <td>
                    <ul class='action'>
                      <li>
                        <a href='#'>
                          <i class='fa fa-eye' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-pencil' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-times' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-trash' aria-hidden='true'></i>
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Marketing</td>
                  <td>
                    <ul class='action'>
                      <li>
                        <a href='#'>
                          <i class='fa fa-eye' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-pencil' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-times' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-trash' aria-hidden='true'></i>
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Marketing</td>
                  <td>
                    <ul class='action'>
                      <li>
                        <a href='#'>
                          <i class='fa fa-eye' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-pencil' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-times' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-trash' aria-hidden='true'></i>
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Marketing</td>
                  <td>
                    <ul class='action'>
                      <li>
                        <a href='#'>
                          <i class='fa fa-eye' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-pencil' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-times' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-trash' aria-hidden='true'></i>
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class='table-footer'>
            <nav aria-label='...'>
              <ul class='pagination justify-content-end'>
                <li class='page-item disabled'>
                  <span class='page-link'>Previous</span>
                </li>
                <li class='page-item'>
                  <a class='page-link' href='#'>
                    1
                  </a>
                </li>
                <li class='page-item active' aria-current='page'>
                  <span class='page-link'>2</span>
                </li>
                <li class='page-item'>
                  <a class='page-link' href='#'>
                    3
                  </a>
                </li>
                <li class='page-item'>
                  <a class='page-link' href='#'>
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* <!-- table-area  --> */}
      </div>
    </Dashboard>
  );
}
