import { useEffect, useState } from "react";

const SignUp = ({ signUpSuc }) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    date: "",
    month: "",
    year: "",
    dateandyear: "",
    gen: "",
    sat: "",
  });

  const [allDataCorrect, setAllDataCorrect] = useState(false);

  const validation = (values) => {
    let error = {};
    if (!values.firstname) {
      error.firstname = "name is required";
    } else if (/\d/.test(values.firstname)) {
      error.firstname = "first name is invalid";
    }

    if (!values.lastname) {
      error.lastname = "last name is required";
    } else if (/\d/.test(values.lastname)) {
      error.lastname = "last name is invalid";
    }

    if (!values.date) {
      error.date = "date is required";
    } else if (!/\d/.test(values.date)) {
      error.date = "date is only number";
    }

    if (!values.month) {
      error.month = "month is required";
    } else if (!/\d/.test(values.month)) {
      error.month = "month is only number";
    }

    if (!values.year) {
      error.year = "year is required";
    } else if (!/\d/.test(values.year)) {
      error.year = "year is only number";
    }
    if (!values.gen) {
      error.gen = "gender is required";
    }
    if (!values.dateandyear) {
      error.dateandyear = "date and year is required";
    }
    if (!values.sat) {
      error.check = "please select one box";
    }

    return error;
  };

  const [error, setError] = useState({});

  const firstName = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && allDataCorrect) {
      signUpSuc();
    }
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    setError(validation(values));
    console.log(values);
    localStorage.setItem("date", values);
    setAllDataCorrect(true);
  };

  return (
    <div className="all-back-im">
      <form onSubmit={handelSubmit}>
        <div>
          <label>Name</label>
          <input
            placeholder="firstname"
            type="text"
            name="firstname"
            onChange={firstName}
          />
          {error.firstname && <p className="warning-span">{error.firstname}</p>}
          <lable>lastname</lable>
          <input
            placeholder="lastname"
            type="text"
            name="lastname"
            onChange={firstName}
          />
          {error.lastname && <p className="warning-span">{error.lastname}</p>}
        </div>
        <div>
          <label>date</label>
          <select onChange={firstName} name="date">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </select>
          {error.date && <p className="warning-span">{error.date}</p>}
          <label>month</label>
          <select onChange={firstName} name="month">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </select>
          {error.month && <p className="warning-span">{error.month}</p>}
          <label>year</label>
          <select onChange={firstName} name="year">
            <option>1999</option>
            <option>1998</option>
            <option>1997</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </select>
          {error.year && <p className="warning-span">{error.year}</p>}
        </div>
        <div>
          <lable>Date</lable>
          <input type="date" name="dateandyear" onChange={firstName} />
          {error.dateandyear && (
            <p className="warning-span">{error.dateandyear}</p>
          )}
        </div>
        <div className="check-box" name="gen">
          <h3>Gender</h3>
          <div className="m-f">
            <div className="male">
              <label>Male</label>
              <input
                type="radio"
                name="gen"
                value="male"
                onChange={firstName}
              />
            </div>
            <label>female</label>
            <input
              type="radio"
              name="gen"
              value="femlae"
              onChange={firstName}
            />
          </div>
        </div>
        {error.gen && <p className="warning-span">{error.gen}</p>}
        <div>
          <div className="all-check">
            <input
              type="checkbox"
              value="monday"
              name="sat"
              onChange={firstName}
            />
            <label>monday</label>
          </div>
          <div className="all-check">
            <input
              type="checkbox"
              value="tuesday"
              name="sat"
              onChange={firstName}
            />
            <label>tuesday</label>
          </div>

          <div className="all-check">
            <input
              type="checkbox"
              value="wednsday"
              name="sat"
              onChange={firstName}
            />
            <label>wednsday</label>
          </div>

          <div className="all-check">
            <input
              type="checkbox"
              value="thurday"
              name="sat"
              onChange={firstName}
            />
            <label>thurday</label>
          </div>
          <div className="all-check">
            <input
              type="checkbox"
              value="friday"
              name="sat"
              onChange={firstName}
            />
            <label>friday</label>
          </div>
          <div className="all-check">
            <input
              type="checkbox"
              value="saturday"
              name="sat"
              onChange={firstName}
            />
            <label>saturday</label>
          </div>
        </div>
        {error.check && <p className="warning-span">{error.check}</p>}

        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
