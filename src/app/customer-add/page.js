import Dashboard from "../dashboard/page";
export default function CustomerAdd() {
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
        <div class='form-area'>
          <div class='form-title'>
            <h3>Create Customer</h3>
          </div>
          <div class='form-header'>
            <div class='forms'>
              <form>
                <div class='mb-3'>
                  <label for='exampleInputEmail1' class='form-label'>
                    Email address
                  </label>
                  <input
                    type='email'
                    class='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                  />
                  <div id='emailHelp' class='form-text'>
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class='mb-3'>
                  <label for='exampleInputPassword1' class='form-label'>
                    Password
                  </label>
                  <input
                    type='password'
                    class='form-control'
                    id='exampleInputPassword1'
                  />
                </div>
                <div class='mb-3 form-check'>
                  <input
                    type='checkbox'
                    class='form-check-input'
                    id='exampleCheck1'
                  />
                  <label class='form-check-label' for='exampleCheck1'>
                    Check me out
                  </label>
                </div>
                <button type='submit' class='btn btn-primary'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* <!-- table-area  --> */}
      </div>
    </Dashboard>
  );
}
